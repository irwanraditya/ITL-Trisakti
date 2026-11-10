// End-to-end tests for the English Learning Academy.
// Usage (from the repo root): node english-academy/tools/e2e.js .
// Requires Playwright with Chromium (npm i -D playwright && npx playwright install chromium).
// Serves the repo over HTTP (like GitHub Pages) and drives Chromium with Playwright.
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');

const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..', '..'));
const SHOTS = path.join(os.tmpdir(), 'ela-shots'); fs.mkdirSync(SHOTS, { recursive: true });
const PORT = 8765, BASE = `http://127.0.0.1:${PORT}/english-learning-academy.html`;
const results = []; let failures = 0;
const ok = (name, cond, info = '') => { results.push([cond ? 'PASS' : 'FAIL', name, info]); if (!cond) failures++; };

// In-page helper: answer every item in a quiz host, correctly or deliberately wrong.
const FILL = `window.__fill = function (host, items, correct) {
  var els = host.querySelectorAll('.item');
  els.forEach(function (el, i) {
    var it = items[+el.getAttribute('data-i')];
    if (it[0] === 'mc') {
      var k = correct ? it[3] : (it[3] + 1) % it[2].length;
      el.querySelector('input[value="' + k + '"]').click();
    } else if (it[0] === 'fill' || it[0] === 'fix') {
      el.querySelector('.ans').value = correct ? String(it[2]).split('|')[0] : 'zzz wrong';
    } else if (it[0] === 'order') {
      var toks = String(it[1]).trim().split(/\\s+/);
      if (!correct) toks = toks.slice().reverse();
      toks.forEach(function (t) {
        var b = Array.prototype.filter.call(el.querySelectorAll('.tokens .tok'), function (x) { return !x.disabled && x.getAttribute('data-t') === t; })[0];
        if (b) b.click();
      });
    } else if (it[0] === 'match') {
      el.querySelectorAll('select').forEach(function (s, k) { s.value = correct ? it[1][k][1] : ''; });
    }
  });
  var sb = host.querySelector('[data-submit]'); if (sb) sb.click();
  var big = host.querySelector('.scorebox .big'); return big ? big.textContent : null;
};`;

(async () => {
  const srv = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '127.0.0.1'], { cwd: ROOT, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 900));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, acceptDownloads: true });
  const page = await ctx.newPage();
  await page.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
  const errors = [];
  page.on('pageerror', e => errors.push('PAGE ' + e.message + ' @ ' + page.url().split('#')[1] + ' :: ' + String(e.stack).split('\n').slice(1, 3).join(' ')));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_FAILED|fonts|net::/.test(m.text())) errors.push('CONSOLE ' + m.text()); });
  page.on('dialog', d => { errors.push('DIALOG ' + d.message()); d.dismiss(); });
  await page.addInitScript(FILL);
  const go = async (hash) => { await page.goto(BASE + hash); await page.waitForTimeout(60); };
  const h1 = () => page.evaluate(() => (document.querySelector('#view h1') || {}).textContent || '');

  try {
    // ---------------------------------------------------------------- 1. fresh start and locking
    await go('#/');
    await page.evaluate(() => localStorage.clear()); await page.reload(); await page.waitForTimeout(100);
    const counts = await page.evaluate(() => ({ lessons: APP.ORDER.length, loaded: Object.keys(APP.LESSONS).length, texts: APP.TEXTS.length, sims: APP.SIMS.length, vocab: APP.VOCAB.length, stages: APP.STAGES.length }));
    ok('content: 99 lessons in curriculum and all loaded', counts.lessons === 99 && counts.loaded === 99, JSON.stringify(counts));
    ok('content: 30 texts, 10 simulations, 6 stages', counts.texts === 30 && counts.sims === 10 && counts.stages === 6);
    ok('dashboard renders', (await h1()).length > 0, await h1());
    await go('#/lesson/a1-01'); ok('A1 lesson open on a fresh start', (await page.$('#test-host')) !== null);
    await go('#/lesson/a2-01'); ok('A2 lesson locked on a fresh start', /lock/i.test(await page.evaluate(() => document.querySelector('#view').textContent)));
    await go('#/assess/stage/B1'); ok('B1 assessment locked on a fresh start', (await page.$('#ahost')) === null);

    // ---------------------------------------------------------------- 2. stage assessment unlocks the next stage
    await go('#/assess/stage/A1');
    let sc = await page.evaluate(() => window.__fill(document.querySelector('#ahost'), ELA.assessments.stages.A1.items, false));
    ok('A1 assessment with wrong answers fails', sc && parseInt(sc) < 70, sc);
    const rev = await page.evaluate(() => document.querySelectorAll('#ahost .result a[href^="#/lesson/"]').length);
    ok('failed assessment suggests revision lessons', rev >= 5, rev + ' lesson links');
    ok('A2 still locked after failing A1', await page.evaluate(() => !APP.isUnlocked('A2')));
    await page.click('#ahost [data-retake]');   // retake from the result box, as a learner would
    sc = await page.evaluate(() => window.__fill(document.querySelector('#ahost'), ELA.assessments.stages.A1.items, true));
    ok('A1 assessment with correct answers scores 100%', sc === '100%', sc);
    ok('passing A1 unlocks A2', await page.evaluate(() => APP.isUnlocked('A2') && !APP.isUnlocked('B1')));

    // ---------------------------------------------------------------- 3. placement test
    await go('#/assess/placement');
    await page.evaluate(() => {
      ELA.assessments.placement.sections.forEach(function (sec) {
        var host = document.querySelector('[data-psec="' + sec.id + '"]');
        var items = sec.items.map(function (x) { return x[1]; });
        // reuse the helper without submitting (placement has one global submit)
        host.querySelectorAll('.item').forEach(function (el) { var it = items[+el.getAttribute('data-i')]; el.querySelector('input[value="' + it[3] + '"]').click(); });
      });
      document.querySelector('#pw').value = 'Test text for placement writing.';
      document.querySelector('#pwl').value = 'B2';
      document.querySelector('[data-can]').click();
      document.querySelector('[data-place]').click();
    });
    const start = await page.evaluate(() => APP.S.placement && APP.S.placement.start);
    ok('placement with all correct answers starts at PRO', start === 'PRO', start);
    ok('placement unlocks every stage', await page.evaluate(() => APP.STAGE_IDS.every(APP.isUnlocked)));

    // ---------------------------------------------------------------- 4. every lesson: render, 11 sections, quiz and test graded with the answer key
    const ids = await page.evaluate(() => APP.ORDER.slice());
    let rendered = 0, testFull = 0, quizFull = 0, practiceOK = 0; const badLessons = [];
    for (const id of ids) {
      await go('#/lesson/' + id);
      const info = await page.evaluate((id) => {
        var l = APP.LESSONS[id];
        var secs = document.querySelectorAll('#view .sec').length;
        var titleOk = (document.querySelector('#view h1') || {}).textContent.indexOf(l.title) >= 0;
        var q = window.__fill(document.querySelector('#quiz-host'), l.quiz, true);
        var t = window.__fill(document.querySelector('#test-host'), l.test, true);
        var p = document.querySelectorAll('#prac-host .item').length === l.prac.length;
        return { secs: secs, titleOk: titleOk, q: q, t: t, p: p, done: !!(APP.S.lessons[id] && APP.S.lessons[id].done) };
      }, id);
      if (info.titleOk && info.secs >= 11) rendered++; else badLessons.push(id + ' secs=' + info.secs);
      if (info.t === '100%' && info.done) testFull++; else badLessons.push(id + ' test=' + info.t);
      if (info.q === '100%') quizFull++; else badLessons.push(id + ' quiz=' + info.q);
      if (info.p) practiceOK++;
    }
    ok('all 99 lessons render with 11+ sections', rendered === 99, rendered + '/99');
    ok('all 99 completion tests score 100% with the answer key and mark the lesson done', testFull === 99, testFull + '/99');
    ok('all 99 lesson quizzes score 100% with the answer key', quizFull === 99, quizFull + '/99');
    ok('all practice sets render every item', practiceOK === 99, practiceOK + '/99');
    if (badLessons.length) results.push(['INFO', 'lesson issues', badLessons.slice(0, 12).join('; ')]);

    // alternative answers and contractions are accepted; wrong answers rejected
    const alt = await page.evaluate(() => {
      var it1 = ['fill', 'They ___ (not / work) at night.', "don't work|do not work", ''];
      var it2 = ['fix', 'She doesn’t speaks Chinese.', "She doesn't speak Chinese.", ''];
      return [APP.gradeItem(it1, 'do not work'), APP.gradeItem(it1, "Don't work"), APP.gradeItem(it2, 'She does not speak Chinese.'), APP.gradeItem(it2, 'She doesn’t speak Chinese'), APP.gradeItem(it2, 'She doesnt speak Chinese.'), APP.gradeItem(['order', 'I like tea.', ''], 'tea like I')];
    });
    ok('grader accepts alternatives, contractions and curly apostrophes', alt[0] && alt[1] && alt[2] && alt[3], JSON.stringify(alt));
    ok('grader rejects wrong answers', !alt[4] && !alt[5]);
    await go('#/lesson/a1-04');
    const wrong = await page.evaluate(() => window.__fill(document.querySelector('#test-host'), APP.LESSONS['a1-04'].test, false));
    ok('wrong answers on a lesson test score below the pass mark', parseInt(wrong) < 70, wrong);

    // ---------------------------------------------------------------- 5. all stage assessments and the final
    for (const s of ['A2', 'B1', 'B2', 'C1', 'PRO']) {
      await go('#/assess/stage/' + s);
      const r = await page.evaluate((s) => window.__fill(document.querySelector('#ahost'), ELA.assessments.stages[s].items, true), s);
      ok(`${s} assessment scores 100% with the answer key`, r === '100%', r);
    }
    await go('#/assess/final');
    const fin = await page.evaluate(() => {
      window.__fill(document.querySelector('#fa'), ELA.assessments.final.items, true);
      document.querySelectorAll('[data-fr]').forEach(function (s) { s.value = '4'; });
      document.querySelector('[data-final]').click();
      return { big: (document.querySelector('#fres .big') || {}).textContent, st: APP.S.final };
    });
    ok('final assessment: 100% auto + rubric 4/4 = 100% and passed', fin.big === '100%' && fin.st && fin.st.passed, fin.big);

    // ---------------------------------------------------------------- 6. listening and reading texts
    const texts = await page.evaluate(() => APP.TEXTS.map(function (t) { return [t.id, t.kind]; }));
    let tOK = 0, dictOK = 0, nList = 0;
    for (const [tid, kind] of texts) {
      await go((kind === 'listening' ? '#/listening/' : '#/rw/') + tid);
      const r = await page.evaluate((a) => {
        var t = APP.TEXTS.filter(function (x) { return x.id === a[0]; })[0];
        var q = window.__fill(document.querySelector(a[1] === 'listening' ? '#lq' : '#rq'), t.q, true);
        var d = null;
        if (t.dict) d = window.__fill(document.querySelector('#ld'), t.dict.map(function (s, k) { return ['fill', 'Sentence ' + (k + 1) + ':', s, s]; }), true);
        return { q: q, d: d, trans: !!document.querySelector('#trans') };
      }, [tid, kind]);
      if (r.q === '100%') tOK++;
      if (kind === 'listening') { nList++; if (r.d === '100%' && r.trans) dictOK++; }
    }
    ok('all 30 texts: comprehension questions score 100% with the key', tOK === texts.length, tOK + '/' + texts.length);
    ok('all listening texts have a transcript and a dictation that grades correctly', dictOK === nList, dictOK + '/' + nList);

    // ---------------------------------------------------------------- 7. simulations
    const sims = await page.evaluate(() => APP.SIMS.map(function (s) { return s.id; }));
    let simOK = 0;
    for (const sid of sims) {
      await go('#/sim/' + sid);
      const r = await page.evaluate((sid) => {
        document.querySelectorAll('[data-rub]').forEach(function (s, k) { s.value = String(k % 2 ? 3 : 4); });
        document.querySelector('[data-simsave]').click();
        return { secs: document.querySelectorAll('#view .sec').length, s: APP.S.sims[sid] };
      }, sid);
      if (r.secs >= 6 && r.s && r.s.done && r.s.score > 0) simOK++;
    }
    ok('all 10 simulations render 6 sections and save a rubric score', simOK === 10, simOK + '/10');

    // ---------------------------------------------------------------- 8. vocabulary and spaced repetition (fake clock)
    const srs = await page.evaluate(() => {
      var id = APP.VOCAB[0].id, out = {};
      APP._fakeNow = '2026-11-10T09:00:00';
      APP.removeWord(id); APP.addWord(id);
      out.addedDue = APP.S.vocab[id].due;
      APP.reviewWord(id, true); out.d1 = APP.S.vocab[id].due;     // box 1 → +1 day
      APP.reviewWord(id, true); out.d2 = APP.S.vocab[id].due;     // box 2 → +3 days
      APP.reviewWord(id, true); out.d3 = APP.S.vocab[id].due;     // box 3 → +7 days
      APP.reviewWord(id, false); out.dw = APP.S.vocab[id].due; out.boxw = APP.S.vocab[id].box;
      APP._fakeNow = '2026-11-12T09:00:00'; out.dueLater = APP.dueWords().indexOf(id) >= 0;
      APP._fakeNow = null;
      return out;
    });
    ok('SRS intervals 1 → 3 → 7 days and reset on a wrong answer', srs.addedDue === '2026-11-10' && srs.d1 === '2026-11-11' && srs.d2 === '2026-11-13' && srs.d3 === '2026-11-17' && srs.dw === '2026-11-11' && srs.boxw === 1 && srs.dueLater, JSON.stringify(srs));
    for (const r of ['#/vocab', '#/vocab/review', '#/vocab/flash', '#/vocab/quiz', '#/vocab/daily']) { await go(r); }
    const vsearch = await page.evaluate(() => { location.hash = '#/vocab'; return new Promise(function (res) { setTimeout(function () { var i = document.querySelector('#view input[type="search"]'); if (!i) return res(-1); i.value = 'deadline'; i.dispatchEvent(new Event('input', { bubbles: true })); setTimeout(function () { var t = (document.querySelector('#vres') || {}).textContent || ''; res(/deadline/i.test(t) && !/^0 results/.test(t) ? 1 : 0); }, 450); }, 150); }); });
    ok('vocabulary database search finds a word', vsearch === 1);

    // ---------------------------------------------------------------- 9. every route renders
    const routes = ['#/', '#/path', '#/path/roadmap', '#/path/calendar', '#/path/week', '#/courses', ...['A1', 'A2', 'B1', 'B2', 'C1', 'PRO'].map(s => '#/stage/' + s), '#/grammar', '#/listening', '#/speaking', '#/rw', '#/rw/writing', '#/business', '#/sims', '#/assess', '#/progress', '#/settings', '#/does-not-exist'];
    let routeOK = 0; const emptyRoutes = [];
    for (const r of routes) { await go(r); const t = await h1(); if (t) routeOK++; else emptyRoutes.push(r); }
    ok('all main routes render a heading', routeOK === routes.length, routeOK + '/' + routes.length + ' ' + emptyRoutes.join(','));

    // ---------------------------------------------------------------- 10. persistence, export, import, reset
    const before = await page.evaluate(() => Object.keys(APP.S.lessons).filter(function (k) { return APP.S.lessons[k].done; }).length);
    await page.reload(); await page.waitForTimeout(150);
    const after = await page.evaluate(() => Object.keys(APP.S.lessons).filter(function (k) { return APP.S.lessons[k].done; }).length);
    ok('progress persists after reload', before === 99 && after === 99, before + ' → ' + after);
    await go('#/settings');
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('[data-export]')]);
    const tmp = path.join(os.tmpdir(), 'ela-backup.json'); await dl.saveAs(tmp);
    const backup = JSON.parse(fs.readFileSync(tmp, 'utf8'));
    ok('export downloads a JSON backup with progress', backup && backup.app === 'english-learning-academy' && backup.state && Object.keys(backup.state.lessons).length >= 99, dl.suggestedFilename());
    await page.click('[data-reset]');
    await page.fill('#rsin', 'RESET'); await page.click('#rsgo'); await page.waitForTimeout(150);
    const afterReset = await page.evaluate(() => ({ done: Object.keys(APP.S.lessons).length, placement: APP.S.placement, a2: APP.isUnlocked('A2') }));
    ok('reset with confirmation clears progress and locks stages again', afterReset.done === 0 && !afterReset.placement && !afterReset.a2, JSON.stringify(afterReset));
    await go('#/settings');
    await page.setInputFiles('#imp', tmp); await page.waitForTimeout(300);
    const restored = await page.evaluate(() => Object.keys(APP.S.lessons).filter(function (k) { return APP.S.lessons[k].done; }).length);
    ok('import restores the backup', restored === 99, String(restored));
    const badImport = await page.evaluate(() => { try { APP.importJSON('{"not":"valid"}'); return 'accepted'; } catch (e) { return 'rejected'; } });
    ok('import rejects an invalid file', badImport === 'rejected');

    // ---------------------------------------------------------------- 11. dark mode
    await page.selectOption('#th', 'dark'); await page.waitForTimeout(80);
    const dark = await page.evaluate(() => ({ attr: document.documentElement.getAttribute('data-theme'), bg: getComputedStyle(document.body).backgroundColor }));
    ok('dark theme applies', dark.attr === 'dark' && dark.bg !== 'rgb(255, 255, 255)', JSON.stringify(dark));
    for (const r of ['#/', '#/lesson/b2-05', '#/assess']) { await go(r); await page.screenshot({ path: path.join(SHOTS, 'dark' + r.replace(/[#/]+/g, '_') + '.png') }); }
    await page.selectOption && (await go('#/settings'), await page.selectOption('#th', 'light'));

    // ---------------------------------------------------------------- 12. phone width (390 px)
    const phone = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
    await phone.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
    phone.on('pageerror', e => errors.push('PHONE ' + e.message));
    let overflow = [];
    for (const r of ['#/', '#/path', '#/courses', '#/lesson/a1-04', '#/lesson/pro-c7', '#/vocab', '#/listening/l-b1-1', '#/sim/sim-07', '#/assess', '#/progress', '#/settings']) {
      await phone.goto(BASE + r); await phone.waitForTimeout(80);
      const w = await phone.evaluate(() => document.documentElement.scrollWidth);
      if (w > 391) overflow.push(r + '=' + w);
    }
    await phone.goto(BASE + '#/lesson/a1-04'); await phone.screenshot({ path: path.join(SHOTS, 'phone_lesson.png') });
    ok('no horizontal overflow at 390 px on 11 key pages', overflow.length === 0, overflow.join(', '));

    // ---------------------------------------------------------------- 13. hub index still works
    const hub = await browser.newPage();
    hub.on('pageerror', e => errors.push('HUB ' + e.message));
    await hub.route(/fonts\.(googleapis|gstatic)/, r => r.abort());
    await hub.goto(`http://127.0.0.1:${PORT}/index.html`); await hub.waitForTimeout(800);
    const hubInfo = await hub.evaluate(() => ({ text: document.body.innerText, links: Array.prototype.map.call(document.querySelectorAll('a[href]'), function (a) { return a.getAttribute('href'); }) }));
    ok('hub index lists the English Learning Academy', /English Learning Academy/.test(hubInfo.text) && hubInfo.links.some(h => /english-learning-academy\.html/.test(h)));

    ok('zero console/page errors during the whole run', errors.length === 0, errors.slice(0, 6).join(' | '));
  } catch (e) {
    ok('test run completed without exceptions', false, e.stack);
  } finally {
    await browser.close(); srv.kill();
    results.forEach(r => console.log(r[0].padEnd(5), r[1], r[2] ? '— ' + r[2] : ''));
    console.log(`\n${results.filter(r => r[0] === 'PASS').length} passed, ${failures} failed`);
    process.exitCode = failures ? 1 : 0;
  }
})();
