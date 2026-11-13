// Uji ujung-ke-ujung BI Lite (Playwright).
// Pakai: node bi-lite/tools/e2e.js <repo-root> [folder-screenshot]
// Menjalankan server statis sendiri di port acak, lalu menguji: contoh dashboard, kecocokan angka
// dengan data mentah, filter silang, slicer, pembuatan visual, 12 jenis visual, 5 tabel, filter halaman,
// tampilan Data, simpan otomatis, ekspor/impor JSON, CSV, tema gelap, dan tata letak 390 px.
const { chromium } = require('playwright');
const http = require('http'), fsx = require('fs'), pathx = require('path');
const ROOT = pathx.resolve(process.argv[2] || '.');
const shots = process.argv[3] || require('os').tmpdir();
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]); const f = pathx.join(ROOT, u === '/' ? 'index.html' : u);
  if (!f.startsWith(ROOT) || !fsx.existsSync(f) || fsx.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
  res.writeHead(200, { 'Content-Type': MIME[pathx.extname(f)] || 'application/octet-stream' }); fsx.createReadStream(f).pipe(res);
});
let base;
let pass = 0, fail = 0;
function ok(c, m) { if (c) { pass++; console.log('PASS', m); } else { fail++; console.log('FAIL', m); } }

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  base = 'http://127.0.0.1:' + server.address().port + '/bi-lite.html';
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, acceptDownloads: true });
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push('pageerror: ' + e.message));
  p.on('console', m => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)|ERR_TUNNEL|net::ERR/.test(m.text())) errs.push('console: ' + m.text()); });
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  await p.goto(base);
  await p.waitForSelector('.card');

  // 1. template renders
  const cards = await p.$$eval('.card', els => els.length);
  ok(cards === 9, 'template renders 9 visuals (got ' + cards + ')');
  const kpi = await p.$$eval('.card.kpi .kv', els => els.map(e => e.textContent));
  console.log('  KPI', kpi);
  ok(kpi[0] === '11.155', 'Jumlah kiriman = 11.155');
  const hints = await p.$$eval('.card .hint', els => els.map(e => e.textContent));
  ok(hints.length === 0, 'no visual shows a hint/error ' + JSON.stringify(hints));
  // ground truth sums from data
  const truth = await p.evaluate(() => {
    const T = BI_DATA.tables.Kiriman.cols; let s = 0, w = 0; T.Ongkir_Rp.v.forEach(x => s += x || 0); T.Berat_kg.v.forEach(x => w += x || 0);
    const u = new Set(T.Kode_Pelanggan.v.filter(x => x >= 0)).size; return { s, w, u };
  });
  console.log('  truth', truth);
  ok(kpi[3] === truth.u.toLocaleString('id-ID'), 'Pelanggan aktif matches distinct count');
  await p.screenshot({ path: shots + '/01-template.png' });

  // 2. monthly chart has 12 bars and sorted by time
  const bars = await p.$$eval('.card:nth-child(5) rect.mk', els => els.length);
  ok(bars === 12, 'monthly column chart has 12 bars (got ' + bars + ')');

  // 3. cross-filter: click first bar in Layanan chart
  const before = await p.$eval('.card.kpi .kv', e => e.textContent);
  const layananBar = await p.$('.card:nth-child(6) rect.mk');
  const lk = await layananBar.getAttribute('data-k');
  await layananBar.click();
  await p.waitForTimeout(150);
  const after = await p.$eval('.card.kpi .kv', e => e.textContent);
  const chip = await p.$eval('#crossbar', e => e.textContent);
  ok(after !== before && chip.includes(lk), 'cross-filter changes KPI (' + before + ' → ' + after + ') chip=' + chip.trim());
  const exp = await p.evaluate(k => { const c = BI_DATA.tables.Kiriman.cols.Layanan; const i = c.dict.indexOf(k); return c.v.filter(x => x === i).length; }, lk);
  ok(after === exp.toLocaleString('id-ID'), 'cross-filter KPI equals ground truth for ' + lk + ' (' + exp + ')');
  await p.screenshot({ path: shots + '/02-cross.png' });
  await p.click('#xcross');
  await p.waitForTimeout(100);
  ok(await p.$eval('.card.kpi .kv', e => e.textContent) === before, 'clearing cross-filter restores KPI');

  // 4. slicer: uncheck first hub
  const sl = await p.$$('.slicer input');
  const hubName = await sl[0].getAttribute('value');
  await sl[0].click();
  await p.waitForTimeout(150);
  const afterSl = await p.$eval('.card.kpi .kv', e => e.textContent);
  const expSl = await p.evaluate(k => { const c = BI_DATA.tables.Kiriman.cols.Hub_Asal; const i = c.dict.indexOf(k); return c.v.filter(x => x !== i).length; }, hubName);
  ok(afterSl === expSl.toLocaleString('id-ID'), 'slicer excludes ' + hubName + ' → ' + afterSl + ' (expected ' + expSl + ')');
  await p.click('.slicer .sa');
  await p.waitForTimeout(100);
  ok(await p.$eval('.card.kpi .kv', e => e.textContent) === before, 'slicer select-all restores');

  // 5. new page, add visual via buttons and field clicks
  await p.click('#pages .add');
  await p.click('#b-add');
  await p.waitForTimeout(100);
  ok(await p.$$eval('.card', e => e.length) === 1, 'new page with 1 visual');
  await p.click('.fld[data-f="Kiriman.Kota_Tujuan"]');
  await p.click('.fld[data-f="Kiriman.Tepat_Waktu"]');
  await p.waitForTimeout(100);
  const agg = await p.$eval('[data-agg="0"]', s => s.value);
  ok(agg === 'pct', 'Tepat_Waktu defaults to % Ya (got ' + agg + ')');
  const title = await p.$eval('.card .hd h3', e => e.textContent);
  ok(/% Ya Tepat_Waktu per Kota_Tujuan/.test(title), 'auto title: ' + title);
  const nb = await p.$$eval('.card rect.mk', e => e.length);
  ok(nb === 30, '30 cities shown (got ' + nb + ')');
  // check one city OTD vs truth
  const tipv = await p.$eval('.card rect.mk', e => [e.getAttribute('data-k'), e.getAttribute('data-tip')]);
  const otd = await p.evaluate(k => { const C = BI_DATA.tables.Kiriman.cols; const ki = C.Kota_Tujuan.dict.indexOf(k); const ya = C.Tepat_Waktu.dict.indexOf('Ya'); let n = 0, y = 0; C.Kota_Tujuan.v.forEach((x, i) => { if (x === ki && C.Tepat_Waktu.v[i] >= 0) { n++; if (C.Tepat_Waktu.v[i] === ya) y++; } }); return (y / n * 100).toLocaleString('id-ID', { maximumFractionDigits: 1, minimumFractionDigits: 1 }) + '%'; }, tipv[0]);
  ok(tipv[1].includes(otd), 'OTD for ' + tipv[0] + ' = ' + otd + ' (tip: ' + tipv[1] + ')');
  // change aggregation to Hitung
  await p.selectOption('[data-agg="0"]', 'count');
  await p.waitForTimeout(100);
  ok(/Hitung Tepat_Waktu/.test(await p.$eval('.card .hd h3', e => e.textContent)), 'aggregation change updates title');
  // switch to line type with date hierarchy
  await p.click('[data-rm="x:0"]');
  await p.click('.fld[data-f="Kiriman.Tgl_Pickup|minggu"]');
  await p.click('[data-t="line"]');
  await p.waitForTimeout(150);
  const pts = await p.$$eval('.card circle.mk', e => e.length);
  ok(pts >= 52 && pts <= 54, 'weekly line has ~53 points (got ' + pts + ')');
  // add legend
  await p.click('.fld[data-f="Kiriman.Layanan"]');
  await p.waitForTimeout(150);
  const leg = await p.$$eval('.card .legend span', e => e.length);
  ok(leg === 5, 'legend with 5 layanan (got ' + leg + ')');
  await p.screenshot({ path: shots + '/03-build.png' });

  // 6. every visual type renders without error on Kiriman
  const types = ['card', 'col', 'bar', 'stack', 'pct', 'line', 'area', 'donut', 'scatter', 'table', 'matrix', 'slicer'];
  for (const t of types) {
    await p.click('#b-add');
    await p.click('[data-t="' + t + '"]');
    if (t === 'scatter') { await p.click('.fld[data-f="Kiriman.Kota_Tujuan"]'); await p.click('.fld[data-f="Kiriman.Berat_kg"]'); await p.click('.fld[data-f="Kiriman.Ongkir_Rp"]'); }
    else if (t === 'slicer') { await p.click('.fld[data-f="Kiriman.Layanan"]'); }
    else if (t === 'card') { await p.click('.fld[data-f="Kiriman.Ongkir_Rp"]'); }
    else { await p.click('.fld[data-f="Kiriman.Hub_Asal"]'); if (['stack', 'pct', 'matrix'].includes(t)) await p.click('.fld[data-f="Kiriman.Layanan"]'); await p.click('.fld[data-f="Kiriman.Ongkir_Rp"]'); }
    await p.waitForTimeout(80);
    const last = await p.$eval('.card:last-child .bd', e => ({ hint: (e.querySelector('.hint') || {}).textContent || '', html: e.innerHTML.length }));
    ok(!last.hint && last.html > 50, 'type ' + t + ' renders ' + (last.hint || ''));
  }
  await p.screenshot({ path: shots + '/04-types.png', fullPage: true });

  // 7. other tables: Terminal BOR avg by Terminal, Armada
  await p.click('#b-add');
  await p.selectOption('#p-table', 'Terminal');
  await p.click('.fld[data-f="Terminal.Terminal"]');
  await p.click('.fld[data-f="Terminal.BOR"]');
  await p.waitForTimeout(80);
  ok(await p.$eval('[data-agg="0"]', s => s.value) === 'avg', 'BOR defaults to Rata-rata');
  await p.click('#b-add');
  await p.selectOption('#p-table', 'Armada');
  await p.click('[data-t="scatter"]');
  await p.click('.fld[data-f="Armada.Truk_ID"]');
  await p.click('.fld[data-f="Armada.Km_Tempuh"]');
  await p.click('.fld[data-f="Armada.Liter_Solar"]');
  await p.waitForTimeout(80);
  ok(await p.$$eval('.card:last-child circle.mk', e => e.length) > 30, 'Armada scatter renders trucks');

  // 8. filter pane: page filter range on Berat_kg (Kiriman)
  await p.click('#t-filter');
  await p.selectOption('[data-addf="p"]', 'Kiriman.Berat_kg');
  await p.fill('[data-rng="p:0:min"]', '100');
  await p.dispatchEvent('[data-rng="p:0:min"]', 'change');
  await p.waitForTimeout(100);
  ok((await p.$eval('#crossbar', e => e.textContent)).includes('Berat_kg'), 'page filter chip shown');

  // 9. data view
  await p.click('#v-data');
  await p.waitForTimeout(150);
  const rows = await p.$$eval('#dview tbody tr', e => e.length);
  ok(rows === 100, 'data view shows 100 rows page');
  const resi = await p.$eval('#dview tbody tr td', e => e.textContent);
  ok(resi === 'NK25-000001', 'No_Resi decoded ' + resi);
  await p.screenshot({ path: shots + '/05-data.png' });
  await p.click('#v-report');

  // 10. persistence
  const nPages = await p.$$eval('#pages .pg', e => e.length);
  await p.reload();
  await p.waitForSelector('#pages .pg');
  ok(await p.$$eval('#pages .pg', e => e.length) === nPages, 'pages persist after reload (' + nPages + ')');

  // 11. export JSON
  const [dl] = await Promise.all([p.waitForEvent('download'), p.click('#b-save')]);
  const fs = require('fs'); const path = await dl.path(); const j = JSON.parse(fs.readFileSync(path, 'utf8'));
  ok(j.app === 'bi-lite' && j.state.pages.length === nPages, 'export JSON valid');
  // import it back after loading template (fresh ctx)
  // 12. peek + CSV
  await p.click('#pages .pg >> nth=0');
  await p.click('.card:nth-child(6) [data-a="peek"]');
  ok(await p.$$eval('#peek-b tbody tr', e => e.length) === 5, 'peek shows 5 layanan rows');
  const [csv] = await Promise.all([p.waitForEvent('download'), p.click('#peek-csv')]);
  const ctext = fs.readFileSync(await csv.path(), 'utf8');
  ok(ctext.split('\n').length === 6, 'CSV 6 lines');
  await p.keyboard.press('Escape');

  // 13. dark mode
  await p.click('#b-theme');
  await p.waitForTimeout(100);
  const bg = await p.evaluate(() => getComputedStyle(document.body).backgroundColor);
  ok(bg === 'rgb(14, 20, 28)', 'dark theme bg ' + bg);
  await p.screenshot({ path: shots + '/06-dark.png' });
  await p.click('#b-theme');

  // 14. import in fresh context
  const ctx2 = await b.newContext({ viewport: { width: 1280, height: 800 } });
  const p2 = await ctx2.newPage(); await p2.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p2.on('pageerror', e => errs.push('p2 pageerror: ' + e.message));
  await p2.goto(base); await p2.waitForSelector('.card');
  await p2.setInputFiles('#f-open', path);
  await p2.waitForTimeout(200);
  ok(await p2.$$eval('#pages .pg', e => e.length) === nPages, 'import JSON restores pages in fresh browser');
  await ctx2.close();

  // 15. mobile 390
  const ctx3 = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const p3 = await ctx3.newPage(); await p3.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
  p3.on('pageerror', e => errs.push('p3 pageerror: ' + e.message));
  await p3.goto(base); await p3.waitForSelector('.card');
  const ov = await p3.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  ok(ov <= 0, 'no horizontal overflow at 390px (' + ov + ')');
  const wide = await p3.$$eval('body *', els => els.filter(e => { const r = e.getBoundingClientRect(); return r.right > window.innerWidth + 1 && getComputedStyle(e).position !== 'fixed'; }).slice(0, 5).map(e => e.tagName + '.' + e.className));
  ok(wide.length === 0, 'no element wider than viewport ' + JSON.stringify(wide));
  await p3.screenshot({ path: shots + '/07-mobile.png', fullPage: false });
  await p3.click('.card:nth-child(6)');
  await p3.screenshot({ path: shots + '/08-mobile-full.png', fullPage: true });
  await ctx3.close();

  ok(errs.length === 0, 'no page/console errors ' + JSON.stringify(errs));
  console.log('\n' + pass + ' passed, ' + fail + ' failed');
  await b.close(); server.close();
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
