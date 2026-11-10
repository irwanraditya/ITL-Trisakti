/* ===================================================================
   English Learning Academy — core: utilities, content index, storage,
   progress and unlock rules, spaced repetition, daily planner, TTS,
   and the quiz engine. Views live in views.js. No backend; progress is
   stored in this browser only (localStorage).
   =================================================================== */
'use strict';
var APP = window.APP = {};
(function (A) {
  // ---------------------------------------------------------- utilities
  var esc = A.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  A.$ = function (s, r) { return (r || document).querySelector(s); };
  A.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var ymd = A.ymd = function (d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); };
  var parseYmd = A.parseYmd = function (s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); };
  A.now = function () { return A._fakeNow ? new Date(A._fakeNow) : new Date(); };   // _fakeNow is used by tests only
  var today = A.today = function () { return ymd(A.now()); };
  var addDays = A.addDays = function (s, n) { var d = parseYmd(s); d.setDate(d.getDate() + n); return ymd(d); };
  A.daysBetween = function (a, b) { return Math.round((parseYmd(b) - parseYmd(a)) / 86400000); };
  A.fmtDate = function (s) {
    var d = parseYmd(s); var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return d.getDate() + ' ' + m[d.getMonth()] + ' ' + d.getFullYear();
  };
  A.shuffle = function (arr, seed) {
    var a = arr.slice(), s = seed || Math.floor(Math.random() * 1e9);
    var rnd = function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; };
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  };
  A.pct = function (a, b) { return b ? Math.round(a * 100 / b) : 0; };
  A.log = function () { if (window.console) console.warn.apply(console, ['[ELA]'].concat([].slice.call(arguments))); };

  // ---------------------------------------------------------- content index
  var E = window.ELA || {};
  var CUR = A.CUR = E.curriculum || { stages: [], config: {}, roadmap: [] };
  var CFG = A.CFG = CUR.config || {};
  A.STAGES = CUR.stages || [];
  A.STAGE_IDS = A.STAGES.map(function (s) { return s.id; });
  A.LESSONS = {};
  (E.lessons || []).forEach(function (l) { A.LESSONS[l.id] = l; });
  A.ORDER = [];            // all lesson ids in curriculum order
  A.META = {};             // id -> {stage, module, moduleTitle, index}
  A.MISSING = [];
  A.STAGES.forEach(function (st) {
    st.modules.forEach(function (m) {
      m.lessons.forEach(function (id) {
        A.META[id] = { stage: st.id, module: m.id, moduleTitle: m.title, index: A.ORDER.length };
        A.ORDER.push(id);
        if (!A.LESSONS[id]) A.MISSING.push(id);
      });
    });
  });
  A.stageById = function (id) { for (var i = 0; i < A.STAGES.length; i++) if (A.STAGES[i].id === id) return A.STAGES[i]; return null; };
  A.stageLessons = function (id) { var s = A.stageById(id), out = []; if (s) s.modules.forEach(function (m) { out = out.concat(m.lessons); }); return out; };
  A.TEXTS = E.texts || [];
  A.SIMS = E.simulations || [];
  A.ASSESS = E.assessments || { placement: null, stages: {}, final: null };

  // Vocabulary database = every lesson vocabulary entry (deduplicated by headword).
  A.VOCAB = []; A.VOCAB_BY_ID = {};
  A.ORDER.forEach(function (lid) {
    var l = A.LESSONS[lid]; if (!l || !l.voc) return;
    l.voc.forEach(function (v) {
      var id = String(v[0]).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (!id || A.VOCAB_BY_ID[id]) return;
      var rec = { id: id, w: v[0], pron: v[1] || '', pos: v[2] || '', idm: v[3] || '', def: v[4] || '', ex: v[5] || '', extra: v[6] || '',
        level: A.META[lid].stage, lesson: lid, cat: A.META[lid].moduleTitle };
      A.VOCAB.push(rec); A.VOCAB_BY_ID[id] = rec;
    });
  });

  // ---------------------------------------------------------- storage
  var KEY = 'ela-v1';
  A.storageOK = true;
  var defaults = function () {
    return {
      v: 1, created: today(), settings: { theme: 'system', plan: Object.assign({}, CFG.dailyPlan || {}), vocabTarget: CFG.vocabTarget || 10,
        ttsRate: 0.9, voice: '', showId: true },
      lessons: {}, stages: {}, placement: null, final: null, vocab: {}, daily: {}, sims: {}, texts: {}, writing: {}, speaking: {},
      history: [], last: null
    };
  };
  var merge = function (base, inc) {
    if (!inc || typeof inc !== 'object') return base;
    Object.keys(base).forEach(function (k) {
      if (!(k in inc)) return;
      if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]) && inc[k] && typeof inc[k] === 'object' && !Array.isArray(inc[k])) {
        base[k] = k === 'settings' ? merge(base[k], inc[k]) : inc[k];
      } else if (inc[k] !== undefined) base[k] = inc[k];
    });
    return base;
  };
  A.validateState = function (o) {
    return !!(o && typeof o === 'object' && o.v === 1 && typeof o.lessons === 'object' && typeof o.vocab === 'object');
  };
  A.load = function () {
    var raw = null;
    try { raw = window.localStorage.getItem(KEY); } catch (e) { A.storageOK = false; }
    var st = defaults();
    if (raw) {
      try { var o = JSON.parse(raw); if (A.validateState(o)) st = merge(st, o); else A.log('stored state ignored: unexpected format'); }
      catch (e) { A.log('stored state unreadable', e); }
    }
    A.S = st;
    return st;
  };
  A.save = function () {
    try { window.localStorage.setItem(KEY, JSON.stringify(A.S)); A.storageOK = true; }
    catch (e) { A.storageOK = false; A.log('save failed', e); }
  };
  A.resetAll = function () { A.S = defaults(); A.save(); };
  A.exportJSON = function () {
    return JSON.stringify({ app: 'english-learning-academy', exported: new Date().toISOString(), state: A.S }, null, 2);
  };
  A.importJSON = function (text) {
    var o = JSON.parse(text);
    var st = o && o.state ? o.state : o;
    if (!A.validateState(st)) throw new Error('This file is not an English Learning Academy backup.');
    A.S = merge(defaults(), st); A.save(); return true;
  };

  // ---------------------------------------------------------- activity log (study minutes)
  A.day = function (d) {
    d = d || today();
    var r = A.S.daily[d];
    if (!r) r = A.S.daily[d] = { done: {}, mins: 0, lessons: 0, reviews: 0, newWords: 0, tests: 0 };
    return r;
  };
  A.bump = function (field, n) { var r = A.day(); r[field] = (r[field] || 0) + (n || 1); A.save(); };
  A.logHistory = function (kind, ref, score) {
    A.S.history.push({ d: today(), t: Date.now(), kind: kind, ref: ref, score: score });
    if (A.S.history.length > 600) A.S.history = A.S.history.slice(-600);
  };

  // ---------------------------------------------------------- progress and unlocking
  A.L = function (id) { return A.S.lessons[id] || (A.S.lessons[id] = {}); };
  A.isDone = function (id) { return !!(A.S.lessons[id] && A.S.lessons[id].done); };
  var stageIdx = function (id) { return A.STAGE_IDS.indexOf(id); };
  A.placementIndex = function () {   // index of the stage the placement test starts the learner at
    if (!A.S.placement || !A.S.placement.start) return 0;
    return Math.max(0, stageIdx(A.S.placement.start));
  };
  A.stagePassed = function (id) {
    var r = A.S.stages[id];
    if (r && r.passed) return true;
    return stageIdx(id) < A.placementIndex();     // covered by the placement test
  };
  A.stagePassedBy = function (id) {
    var r = A.S.stages[id];
    if (r && r.passed) return 'assessment';
    return stageIdx(id) < A.placementIndex() ? 'placement' : null;
  };
  A.isUnlocked = function (id) {
    var i = stageIdx(id);
    if (i <= 0) return true;
    return A.stagePassed(A.STAGE_IDS[i - 1]) || i <= A.placementIndex();
  };
  A.lessonUnlocked = function (lid) { var m = A.META[lid]; return !!m && A.isUnlocked(m.stage); };
  A.currentStage = function () {
    for (var i = 0; i < A.STAGE_IDS.length; i++) {
      var id = A.STAGE_IDS[i];
      if (A.isUnlocked(id) && !A.stagePassed(id)) return id;
    }
    return A.STAGE_IDS[A.STAGE_IDS.length - 1];
  };
  A.currentLevel = function () {   // highest CEFR level demonstrated
    var lvl = null;
    A.STAGE_IDS.forEach(function (id) { if (A.stagePassed(id)) lvl = id; });
    return lvl;
  };
  A.stageProgress = function (id) {
    var ls = A.stageLessons(id), d = ls.filter(A.isDone).length;
    return { done: d, total: ls.length, pct: A.pct(d, ls.length) };
  };
  A.overall = function () {
    var d = A.ORDER.filter(A.isDone).length;
    var passed = A.STAGE_IDS.filter(function (s) { return A.S.stages[s] && A.S.stages[s].passed; }).length;
    var units = A.ORDER.length + A.STAGE_IDS.length;   // lessons + stage assessments
    return { lessons: d, total: A.ORDER.length, stagesPassed: passed, pct: A.pct(d + passed, units) };
  };
  A.nextLesson = function () {
    for (var i = 0; i < A.ORDER.length; i++) {
      var id = A.ORDER[i];
      if (A.lessonUnlocked(id) && !A.isDone(id) && !A.stagePassed(A.META[id].stage)) return id;
    }
    for (i = 0; i < A.ORDER.length; i++) if (A.lessonUnlocked(A.ORDER[i]) && !A.isDone(A.ORDER[i])) return A.ORDER[i];
    return null;
  };
  A.readiness = function (sid) {
    var ls = A.stageLessons(sid), done = ls.filter(A.isDone);
    var scores = done.map(function (id) { return (A.S.lessons[id].test || {}).best || 0; });
    var avg = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0;
    var share = ls.length ? done.length / ls.length : 0;
    var ready = share >= (CFG.readyLessonShare || 0.8) && avg >= (CFG.readyAvgScore || 75);
    return { share: Math.round(share * 100), avg: avg, ready: ready };
  };
  A.levelLabel = function () {
    var l = A.currentLevel();
    if (!l) return A.S.placement ? 'Pre-A1' : 'Not yet assessed';
    return l === 'PRO' ? 'Professional (C1+)' : l;
  };

  // ---------------------------------------------------------- spaced repetition (1, 3, 7, 14, 30 days)
  var IV = A.IV = CFG.srsIntervals || [1, 3, 7, 14, 30];
  A.inDeck = function (id) { return !!A.S.vocab[id]; };
  A.addWord = function (id) {
    if (!A.VOCAB_BY_ID[id] || A.S.vocab[id]) return false;
    A.S.vocab[id] = { box: 0, due: today(), added: today(), ok: 0, bad: 0, last: null };
    A.bump('newWords'); A.save(); return true;
  };
  A.removeWord = function (id) { delete A.S.vocab[id]; A.save(); };
  A.reviewWord = function (id, correct) {
    var v = A.S.vocab[id]; if (!v) return;
    if (correct) { v.box = Math.min((v.box || 0) + 1, IV.length); v.ok++; }
    else { v.box = 1; v.bad++; }
    v.due = addDays(today(), IV[v.box - 1]);
    v.last = today();
    A.bump('reviews'); A.save();
  };
  A.dueWords = function (d) {
    d = d || today();
    return Object.keys(A.S.vocab).filter(function (id) { return A.VOCAB_BY_ID[id] && A.S.vocab[id].due <= d; });
  };
  A.vocabStats = function () {
    var s = { total: 0, fresh: 0, learning: 0, learned: 0, mastered: 0 };
    Object.keys(A.S.vocab).forEach(function (id) {
      if (!A.VOCAB_BY_ID[id]) return;
      var b = A.S.vocab[id].box || 0; s.total++;
      if (b === 0) s.fresh++; else if (b === 1) s.learning++; else if (b < IV.length) s.learned++; else s.mastered++;
    });
    s.known = s.learned + s.mastered;
    return s;
  };
  A.upcomingReviews = function (days) {
    var out = [];
    for (var i = 1; i <= days; i++) {
      var d = addDays(today(), i);
      out.push({ d: d, n: Object.keys(A.S.vocab).filter(function (id) { return A.S.vocab[id].due === d; }).length });
    }
    return out;
  };
  A.suggestNewWords = function (n) {   // next words from the learner's current and earlier stages
    var cs = stageIdx(A.currentStage());
    return A.VOCAB.filter(function (v) { return stageIdx(v.level) <= cs && !A.S.vocab[v.id]; }).slice(0, n);
  };

  // ---------------------------------------------------------- daily planner
  A.TASKS = [
    { k: 'vocab', name: 'Vocabulary', nameId: 'Kosakata' },
    { k: 'grammar', name: 'Grammar', nameId: 'Tata bahasa' },
    { k: 'listening', name: 'Listening', nameId: 'Menyimak' },
    { k: 'speaking', name: 'Speaking', nameId: 'Berbicara' },
    { k: 'rw', name: 'Reading or writing', nameId: 'Membaca atau menulis' }
  ];
  A.planTotal = function () { var p = A.S.settings.plan, t = 0; A.TASKS.forEach(function (x) { t += +p[x.k] || 0; }); return t; };
  A.dayShare = function (d) {
    var r = A.S.daily[d]; if (!r) return 0;
    var p = A.S.settings.plan, tot = A.planTotal(), got = 0;
    A.TASKS.forEach(function (x) { if (r.done && r.done[x.k]) got += +p[x.k] || 0; });
    return tot ? got / tot : 0;
  };
  A.dayMinutes = function (d) {
    var r = A.S.daily[d]; if (!r) return 0;
    var p = A.S.settings.plan, got = 0;
    A.TASKS.forEach(function (x) { if (r.done && r.done[x.k]) got += +p[x.k] || 0; });
    return Math.max(got, Math.round(r.mins || 0));
  };
  A.isActive = function (d) { return A.dayShare(d) >= (CFG.streakShare || 0.5); };
  A.streak = function () {
    var d = today(), n = 0;
    if (!A.isActive(d)) d = addDays(d, -1);
    while (A.isActive(d)) { n++; d = addDays(d, -1); }
    return n;
  };
  A.missedDays = function (span) {
    var out = [], start = A.S.created;
    for (var i = 1; i <= span; i++) {
      var d = addDays(today(), -i);
      if (d < start) break;
      if (A.dayShare(d) === 0 && !(A.S.daily[d] && A.S.daily[d].mins >= 5)) out.push(d);
    }
    return out;
  };
  A.weekSummary = function () {
    var s = { mins: 0, active: 0, lessons: 0, reviews: 0, newWords: 0, tests: 0, days: [] };
    for (var i = 6; i >= 0; i--) {
      var d = addDays(today(), -i), r = A.S.daily[d] || {};
      var m = A.dayMinutes(d);
      s.days.push({ d: d, mins: m, share: A.dayShare(d) });
      s.mins += m; if (A.isActive(d)) s.active++;
      s.lessons += r.lessons || 0; s.reviews += r.reviews || 0; s.newWords += r.newWords || 0; s.tests += r.tests || 0;
    }
    return s;
  };
  // Automatic completion where progress can be measured; learners can still tick tasks by hand.
  A.autoTasks = function () {
    var r = A.day(), changed = false;
    var set = function (k) { if (!r.done[k]) { r.done[k] = true; changed = true; } };
    if (A.dueWords().length === 0 && (r.newWords || 0) >= (+A.S.settings.vocabTarget || 10)) set('vocab');
    if ((r.lessons || 0) > 0) set('grammar');
    if (r.listening) set('listening');
    if (r.speaking) set('speaking');
    if (r.reading || r.writing) set('rw');
    if (changed) A.save();
  };

  // ---------------------------------------------------------- active study time (counts while the tab is visible and in use)
  A.lastInput = Date.now();
  ['click', 'keydown', 'scroll', 'touchstart'].forEach(function (ev) {
    window.addEventListener(ev, function () { A.lastInput = Date.now(); }, { passive: true, capture: true });
  });
  setInterval(function () {
    if (!A.S || document.hidden) return;
    if (Date.now() - A.lastInput > 120000) return;
    var r = A.day(); r.mins = Math.round(((r.mins || 0) + 0.5) * 10) / 10; A.save();
  }, 30000);

  // ---------------------------------------------------------- text to speech
  A.tts = 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
  A.voices = function () {
    if (!A.tts) return [];
    return window.speechSynthesis.getVoices().filter(function (v) { return /^en(-|_|$)/i.test(v.lang); });
  };
  A.speak = function (text, onend) {
    if (!A.tts) { A.toast('Audio is not available in this browser. Read the text instead.'); return; }
    try {
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(String(text));
      u.lang = 'en-US'; u.rate = +A.S.settings.ttsRate || 0.9;
      var want = A.S.settings.voice, vs = A.voices();
      var v = vs.filter(function (x) { return x.name === want; })[0] || vs.filter(function (x) { return /en-US/i.test(x.lang); })[0] || vs[0];
      if (v) { u.voice = v; u.lang = v.lang; }
      if (onend) u.onend = onend;
      window.speechSynthesis.speak(u);
    } catch (e) { A.log('tts', e); }
  };
  A.sayBtn = function (text, label) {
    return '<button type="button" class="say" data-say="' + esc(text) + '" aria-label="' + esc(label || ('Listen: ' + text)) + '"' +
      (A.tts ? '' : ' disabled title="Audio not available in this browser"') + '>&#9654;</button>';
  };

  // ---------------------------------------------------------- toast and modal
  A.toast = function (msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 2600);
  };
  A.modal = function (html, bind) {
    var bg = document.createElement('div'); bg.className = 'modal-bg';
    bg.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + html + '</div>';
    document.body.appendChild(bg);
    var close = function () { if (bg.parentNode) bg.parentNode.removeChild(bg); };
    bg.addEventListener('click', function (e) { if (e.target === bg || e.target.hasAttribute('data-close')) close(); });
    if (bind) bind(bg, close);
    var f = bg.querySelector('input,button'); if (f) f.focus();
    return close;
  };

  // ---------------------------------------------------------- quiz engine
  var norm = A.norm = function (s) {
    return String(s == null ? '' : s).toLowerCase()
      .replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"').replace(/[–—]/g, '-')
      .replace(/\s+/g, ' ').replace(/\s*([,;:])\s*/g, '$1 ').trim().replace(/[.!?]+$/, '').trim();
  };
  /* Typed answers: contractions and their full forms are treated as equal
     (doesn't = does not, I'm = I am, won't = will not, can't = cannot).
     's and 'd are left alone because they are ambiguous (is/has, would/had). */
  var canon = A.canon = function (s) {
    return norm(s)
      .replace(/\bwon't\b/g, 'will not').replace(/\bshan't\b/g, 'shall not')
      .replace(/\bcan't\b/g, 'cannot').replace(/\bcan not\b/g, 'cannot')
      .replace(/n't\b/g, ' not')
      .replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
      .replace(/\s+/g, ' ').trim();
  };
  var accepted = function (a) { return String(a).split('|').map(function (x) { return x.trim(); }).filter(Boolean); };
  var KIND = { mc: 'Multiple choice', fill: 'Fill in the blank', fix: 'Sentence correction', order: 'Sentence construction', match: 'Matching' };
  A.answerText = function (it) {
    switch (it[0]) {
      case 'mc': return it[2][it[3]];
      case 'fill': case 'fix': return accepted(it[2]).join('  /  ');
      case 'order': return it[1];
      case 'match': return it[1].map(function (p) { return p[0] + ' → ' + p[1]; }).join('; ');
    }
    return '';
  };
  A.explanation = function (it) {
    switch (it[0]) { case 'mc': return it[4] || ''; case 'fill': case 'fix': return it[3] || ''; case 'order': case 'match': return it[2] || ''; }
    return '';
  };
  A.itemRef = function (it) {   // optional lesson reference used for revision suggestions
    var last = it[it.length - 1];
    return (typeof last === 'string' && A.META[last]) ? last : null;
  };
  var tokenize = function (s) { return String(s).trim().split(/\s+/); };

  // render one item; returns html. Each item has data-i index.
  var renderItem = function (it, i, seed) {
    var h = '<div class="item" data-i="' + i + '"><div class="kind">' + esc(KIND[it[0]] || '') + '</div>';
    var q = function (txt) { return '<div class="q"><span class="qn">' + (i + 1) + '.</span><span>' + esc(txt) + '</span></div>'; };
    if (it[0] === 'mc') {
      var order = A.shuffle(it[2].map(function (_, k) { return k; }), seed + i * 7);
      h += q(it[1]) + '<div class="opts" role="radiogroup">' + order.map(function (k) {
        return '<label class="opt" data-k="' + k + '"><input type="radio" name="q' + seed + '_' + i + '" value="' + k + '"><span>' + esc(it[2][k]) + '</span></label>';
      }).join('') + '</div>';
    } else if (it[0] === 'fill') {
      h += q(it[1]) + '<input type="text" class="ans" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer">';
    } else if (it[0] === 'fix') {
      h += q('Correct this sentence: ' + it[1]) + '<input type="text" class="ans" autocomplete="off" spellcheck="false" aria-label="Corrected sentence">';
    } else if (it[0] === 'order') {
      var toks = tokenize(it[1]), sh = A.shuffle(toks, seed + i * 13), tries = 0;
      while (sh.join(' ') === toks.join(' ') && toks.length > 1 && tries++ < 5) sh = A.shuffle(toks, seed + i * 13 + tries);
      h += q('Put the words in the correct order.') + '<div class="built" aria-label="Your sentence"></div><div class="tokens">' +
        sh.map(function (t, k) { return '<button type="button" class="tok" data-t="' + esc(t) + '" data-k="' + k + '">' + esc(t) + '</button>'; }).join('') +
        '</div><div class="btns mt"><button type="button" class="btn sm" data-act="undo">Undo</button><button type="button" class="btn sm" data-act="clear">Clear</button></div>';
    } else if (it[0] === 'match') {
      var rights = A.shuffle(it[1].map(function (p) { return p[1]; }), seed + i * 17);
      h += q('Match each item on the left with the right meaning.') + it[1].map(function (p, k) {
        return '<div class="matchrow"><span>' + esc(p[0]) + '</span><select data-k="' + k + '" aria-label="Match for ' + esc(p[0]) + '"><option value="">— choose —</option>' +
          rights.map(function (r) { return '<option>' + esc(r) + '</option>'; }).join('') + '</select></div>';
      }).join('');
    }
    return h + '<div class="fbx" aria-live="polite"></div></div>';
  };
  var readItem = function (el, it) {
    if (it[0] === 'mc') { var c = el.querySelector('input:checked'); return c ? +c.value : null; }
    if (it[0] === 'fill' || it[0] === 'fix') { return el.querySelector('.ans').value; }
    if (it[0] === 'order') { return A.$$('.built .tok', el).map(function (b) { return b.getAttribute('data-t'); }).join(' '); }
    if (it[0] === 'match') { return A.$$('select', el).map(function (s) { return s.value; }); }
  };
  var gradeItem = A.gradeItem = function (it, resp) {
    if (resp == null) return false;
    switch (it[0]) {
      case 'mc': return resp === it[3];
      case 'fill': case 'fix':
        var r = canon(resp); return !!r && accepted(it[2]).some(function (a) { return canon(a) === r; });
      case 'order': return norm(resp) === norm(it[1]) && resp.trim() !== '';
      case 'match': return it[1].every(function (p, k) { return resp[k] === p[1]; });
    }
    return false;
  };
  var showFeedback = function (el, it, ok, resp) {
    var exp = A.explanation(it);
    el.querySelector('.fbx').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correct.' : 'Not quite.') + '</b>' +
      (ok ? '' : 'Correct answer: <strong>' + esc(A.answerText(it)) + '</strong><br>') + esc(exp) + '</div>';
    if (it[0] === 'mc') A.$$('.opt', el).forEach(function (o) {
      var k = +o.getAttribute('data-k'); o.classList.toggle('right', k === it[3]); o.classList.toggle('wrong', k === resp && !ok);
    });
  };
  var bindItem = function (el, it) {
    if (it[0] !== 'order') return;
    var built = el.querySelector('.built'), hist = [];
    el.addEventListener('click', function (e) {
      var t = e.target.closest('button'); if (!t || !el.contains(t)) return;
      if (t.classList.contains('tok') && t.parentNode.classList.contains('tokens')) {
        if (t.disabled) return;
        var c = document.createElement('button'); c.type = 'button'; c.className = 'tok'; c.textContent = t.textContent;
        c.setAttribute('data-t', t.getAttribute('data-t')); c.setAttribute('data-src', t.getAttribute('data-k'));
        built.appendChild(c); t.disabled = true; hist.push(c);
      } else if (t.classList.contains('tok') && t.parentNode === built) {
        var src = el.querySelector('.tokens .tok[data-k="' + t.getAttribute('data-src') + '"]'); if (src) src.disabled = false;
        built.removeChild(t); hist = hist.filter(function (x) { return x !== t; });
      } else if (t.getAttribute('data-act') === 'undo') {
        var last = hist.pop(); if (last) { var s2 = el.querySelector('.tokens .tok[data-k="' + last.getAttribute('data-src') + '"]'); if (s2) s2.disabled = false; built.removeChild(last); }
      } else if (t.getAttribute('data-act') === 'clear') {
        hist = []; built.innerHTML = ''; A.$$('.tokens .tok', el).forEach(function (b) { b.disabled = false; });
      }
    });
  };

  /* A.runItems(host, items, opts)
     opts.mode: 'practice' (check each item, unlimited tries) | 'graded' (submit all, score)
     opts.onResult(result) for graded: {score, correct, total, wrong:[{i,item}], answers}
     opts.passMark (graded): shows pass/fail styling */
  A.runItems = function (host, items, opts) {
    opts = opts || {};
    var seed = Math.floor(Math.random() * 1e6);
    var render = function () {
      seed = Math.floor(Math.random() * 1e6);
      host.innerHTML = '<div class="items">' + items.map(function (it, i) {
        var h = renderItem(it, i, seed);
        if (opts.mode === 'practice') h = h.replace(/<div class="fbx"/, '<div class="btns mt"><button type="button" class="btn sm" data-check="' + i + '">Check</button></div><div class="fbx"');
        return h;
      }).join('') + '</div>' + (opts.mode === 'graded' ? '<div class="btns mt"><button type="button" class="btn primary" data-submit>Submit answers</button></div><div class="result"></div>' : '');
      A.$$('.item', host).forEach(function (el) { bindItem(el, items[+el.getAttribute('data-i')]); });
    };
    render();
    host.addEventListener('click', function (e) {
      var c = e.target.closest('[data-check]');
      if (c) {
        var i = +c.getAttribute('data-check'), el = host.querySelector('.item[data-i="' + i + '"]'), it = items[i], resp = readItem(el, it);
        var ok = gradeItem(it, resp); showFeedback(el, it, ok, resp);
        if (opts.onCheck) opts.onCheck(i, ok);
        return;
      }
      if (e.target.closest('[data-submit]')) {
        var correct = 0, wrong = [], answers = [];
        A.$$('.item', host).forEach(function (el) {
          var i = +el.getAttribute('data-i'), it = items[i], resp = readItem(el, it), ok = gradeItem(it, resp);
          answers.push(resp); if (ok) correct++; else wrong.push({ i: i, item: it });
          showFeedback(el, it, ok, resp);
          A.$$('input,select,button.tok', el).forEach(function (x) { x.disabled = true; });
        });
        var score = A.pct(correct, items.length), pass = opts.passMark != null ? score >= opts.passMark : null;
        e.target.closest('[data-submit]').remove();
        var res = { score: score, correct: correct, total: items.length, wrong: wrong, answers: answers, pass: pass };
        var box = host.querySelector('.result');
        box.innerHTML = '<div class="scorebox ' + (pass === null ? '' : pass ? 'pass' : 'fail') + '"><span class="big">' + score + '%</span><span>' + correct + ' of ' + items.length + ' correct' +
          (pass === null ? '' : pass ? ' · Passed (pass mark ' + opts.passMark + '%)' : ' · Not passed yet (pass mark ' + opts.passMark + '%). Review the explanations and try again.') +
          '</span><button type="button" class="btn sm" data-retake>Retake</button></div>' + (opts.after ? opts.after(res) : '');
        if (opts.onResult) opts.onResult(res, box);
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      if (e.target.closest('[data-retake]')) { render(); host.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    return { rerender: render };
  };
})(APP);
