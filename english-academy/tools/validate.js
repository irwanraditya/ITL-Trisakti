// Content validator for the English Learning Academy.
// Usage (from the repo root): node english-academy/tools/validate.js . [--quiet]
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..', '..')), DIR = path.join(ROOT, 'english-academy', 'content');
const quiet = process.argv.includes('--quiet');
const ELA = { lessons: [], texts: [], simulations: [], curriculum: null, assessments: null,
  add(kind, data) { if (Array.isArray(this[kind]) && Array.isArray(data)) this[kind].push(...data); else this[kind] = data; } };
const ctx = vm.createContext({ ELA });
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.js'));
for (const f of files) {
  try { vm.runInContext(fs.readFileSync(path.join(DIR, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { console.log('LOAD ERROR', f, e.message); process.exitCode = 1; }
}
const errs = [], warns = [];
const E = (m) => errs.push(m), W = (m) => warns.push(m);
const C = ELA.curriculum; if (!C) { console.log('no curriculum'); process.exit(1); }
const META = {}; const order = [];
C.stages.forEach(s => s.modules.forEach(m => m.lessons.forEach(id => { META[id] = { st: s.id, m: m.id }; order.push(id); })));
const byId = {}; ELA.lessons.forEach(l => { if (byId[l.id]) E(`duplicate lesson ${l.id}`); byId[l.id] = l; });
const norm0 = s => String(s == null ? '' : s).toLowerCase().replace(/[‘’]/g, "'").replace(/\s+/g, ' ').replace(/\s*([,;:])\s*/g, '$1 ').trim().replace(/[.!?]+$/, '').trim();
// Same contraction handling as APP.canon in core.js.
const norm = s => norm0(s).replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not').replace(/\bcan't\b/g, 'cannot').replace(/\bcan not\b/g, 'cannot')
  .replace(/n't\b/g, ' not').replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will').replace(/\s+/g, ' ').trim();

function checkItem(it, where, opts = {}) {
  if (!Array.isArray(it)) return E(`${where}: item not array`);
  const t = it[0];
  const last = it[it.length - 1];
  if (opts.ref && !(typeof last === 'string' && META[last])) E(`${where}: missing/unknown lesson ref (${last})`);
  if (t === 'mc') {
    const [, q, o, a, e] = it;
    if (!q) E(`${where}: mc no question`);
    if (!Array.isArray(o) || o.length < 3) E(`${where}: mc needs >=3 options`);
    else { if (new Set(o.map(norm)).size !== o.length) E(`${where}: mc duplicate options ${JSON.stringify(o)}`); }
    if (!(Number.isInteger(a) && a >= 0 && o && a < o.length)) E(`${where}: mc bad answer index ${a}`);
    if (!e) W(`${where}: mc no explanation`);
  } else if (t === 'fill') {
    const [, q, a, e] = it;
    if (!q || !a) E(`${where}: fill missing q/a`);
    if (!opts.dict && q && !q.includes('___') && !/:\s*$|”$|\?$/.test(q)) W(`${where}: fill without ___: ${q}`);
    if (q && (q.match(/___/g) || []).length > 1) E(`${where}: fill has more than one blank: ${q}`);
    if (!e) W(`${where}: fill no explanation`);
  } else if (t === 'fix') {
    const [, q, a, e] = it;
    if (!q || !a) E(`${where}: fix missing`);
    else if (a.split('|').some(x => norm(x) === norm(q))) E(`${where}: fix wrong sentence equals an accepted answer: ${q}`);
    else {
      // A correction should be a small edit of the wrong sentence; a rewrite cannot be auto-graded fairly.
      const toks = s => new Set(norm(s).replace(/[^a-z0-9' ]/g, ' ').split(/\s+/).filter(Boolean));
      const best = Math.max(...a.split('|').map(x => { const A1 = toks(x), B1 = toks(q); const inter = [...A1].filter(t => B1.has(t)).length; return inter / Math.max(A1.size, B1.size); }));
      if (best < 0.5 && Math.max(norm(q).split(" ").length, norm(a.split("|")[0]).split(" ").length) >= 6) E(`${where}: fix looks open-ended (overlap ${best.toFixed(2)}): ${q} → ${a.split('|')[0]}`);
    }
    if (!e) W(`${where}: fix no explanation`);
  } else if (t === 'order') {
    const [, s, e] = it;
    if (!s || s.trim().split(/\s+/).length < 3) E(`${where}: order too short`);
    if (!e) W(`${where}: order no explanation`);
  } else if (t === 'match') {
    const [, p, e] = it;
    if (!Array.isArray(p) || p.length < 3) E(`${where}: match needs >=3 pairs`);
    else if (new Set(p.map(x => x[1])).size !== p.length) E(`${where}: match duplicate right side`);
    if (!e) W(`${where}: match no explanation`);
  } else E(`${where}: unknown item type ${t}`);
}

let counts = { lessons: 0, items: 0, examples: 0, vocab: 0, words: new Set() };
for (const id of order) {
  const l = byId[id];
  if (!l) { W(`missing lesson content: ${id}`); continue; }
  counts.lessons++;
  const w = id;
  if (l.st !== META[id].st) E(`${w}: st ${l.st} != ${META[id].st}`);
  if (l.m !== META[id].m) E(`${w}: m ${l.m} != ${META[id].m}`);
  if (!['grammar', 'vocab', 'speaking', 'skills'].includes(l.type)) E(`${w}: bad type ${l.type}`);
  if (!l.title || !l.sub) E(`${w}: title/sub`);
  if (!(l.obj || []).length || l.obj.length < 3) E(`${w}: obj <3`);
  if (!(l.exp || []).length || l.exp.length < 2) E(`${w}: exp <2`);
  (l.exp || []).forEach((e, i) => { if (!e.p) E(`${w}: exp[${i}] no p`); });
  const minVoc = l.type === 'vocab' ? 8 : 5;
  if (!(l.voc || []).length || l.voc.length < minVoc) E(`${w}: voc ${(l.voc || []).length} < ${minVoc}`);
  (l.voc || []).forEach((v, i) => { if (v.length < 6 || !v[0] || !v[3] || !v[4] || !v[5]) E(`${w}: voc[${i}] incomplete ${JSON.stringify(v).slice(0, 80)}`); counts.vocab++; counts.words.add(String(v[0]).toLowerCase()); });
  const minEx = l.type === 'grammar' ? 10 : 8;
  if (!(l.ex || []).length || l.ex.length < minEx) E(`${w}: ex ${(l.ex || []).length} < ${minEx}`);
  (l.ex || []).forEach((e, i) => { if (!e[0] || !e[1]) E(`${w}: ex[${i}] missing translation`); counts.examples++; });
  if (l.type === 'grammar' && !(l.forms && l.forms.pos && l.forms.neg && l.forms.q)) E(`${w}: grammar without forms`);
  if (l.type === 'grammar' && !(l.struct || []).length) E(`${w}: grammar without struct`);
  if (l.type === 'speaking' && !(l.dlg && l.expr)) E(`${w}: speaking lesson without dialogue/expressions`);
  if (!(l.mis || []).length || l.mis.length < 3) E(`${w}: mis <3`);
  (l.mis || []).forEach((m, i) => { if (m.length < 3 || !m[2]) E(`${w}: mis[${i}] incomplete`); });
  if ((l.prac || []).length < 6) E(`${w}: prac <6`);
  if ((l.quiz || []).length < 5) E(`${w}: quiz <5`);
  if ((l.test || []).length < 5) E(`${w}: test <5`);
  ['prac', 'quiz', 'test'].forEach(k => (l[k] || []).forEach((it, i) => { counts.items++; checkItem(it, `${w}.${k}[${i}]`); }));
  const qs = [].concat(l.quiz || [], l.test || []).map(it => norm(it[1] && typeof it[1] === 'string' ? it[1] : JSON.stringify(it[1])));
  if (new Set(qs).size !== qs.length) W(`${w}: duplicate question between quiz and test`);
  if (!l.speak || !l.speak.task) E(`${w}: speak.task`);
  if (!l.write || !l.write.task) E(`${w}: write.task`);
  if ((l.sum || []).length < 3) E(`${w}: sum <3`);
  if (l.dlg) (l.dlg.lines || []).forEach((x, i) => { if (x.length < 2 || !x[1]) E(`${w}: dlg[${i}]`); });
}
// texts
(ELA.texts || []).forEach(t => {
  if (!t.id || !t.kind || !t.st || !t.title || !(t.body || []).length) E(`text ${t.id}: incomplete`);
  (t.q || []).forEach((it, i) => checkItem(it, `text ${t.id}.q[${i}]`));
  if ((t.q || []).length < 4) E(`text ${t.id}: q <4`);
});
// assessments
const A = ELA.assessments;
if (A) {
  (A.placement && A.placement.sections || []).forEach(s => s.items.forEach((x, i) => {
    if (!META[x[0]] && !C.stages.some(st => st.id === x[0])) E(`placement ${s.id}[${i}]: bad level ${x[0]}`);
    checkItem(x[1], `placement ${s.id}[${i}]`);
  }));
  Object.keys(A.stages || {}).forEach(k => {
    const items = A.stages[k].items || [];
    if (items.length < 20) E(`stage assessment ${k}: ${items.length} items < 20`);
    items.forEach((it, i) => { checkItem(it, `stage ${k}[${i}]`, { ref: true }); const r = it[it.length - 1]; if (META[r] && META[r].st !== k) E(`stage ${k}[${i}] ref ${r} from other stage`); });
  });
  if (A.final) (A.final.items || []).forEach((it, i) => checkItem(it, `final[${i}]`, { ref: true }));
}
(ELA.simulations || []).forEach(s => {
  ['id', 'title', 'level', 'scenario', 'role', 'objective', 'task'].forEach(k => { if (!s[k]) E(`sim ${s.id}: ${k}`); });
  if ((s.vocab || []).length < 6) E(`sim ${s.id}: vocab <6`);
  if ((s.expr || []).length < 6) E(`sim ${s.id}: expr <6`);
  if ((s.convo || []).length < 8) E(`sim ${s.id}: convo <8`);
  if ((s.rubric || []).length < 4) E(`sim ${s.id}: rubric <4`);
});
console.log(`lessons ${counts.lessons}/${order.length} · items ${counts.items} · examples ${counts.examples} · vocab entries ${counts.vocab} (unique ${counts.words.size}) · texts ${(ELA.texts || []).length} · sims ${(ELA.simulations || []).length}`);
console.log(`ERRORS ${errs.length}`); errs.forEach(e => console.log('  E', e));
console.log(`WARNINGS ${warns.length}`); if (!quiet) warns.forEach(w => console.log('  W', w));
if (errs.length) process.exitCode = 1;
