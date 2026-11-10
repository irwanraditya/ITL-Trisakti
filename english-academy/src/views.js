/* ===================================================================
   English Learning Academy — views and router.
   =================================================================== */
(function (A) {
  var esc = A.esc, $ = A.$, $$ = A.$$;
  var V = A.views = {};
  var view = function () { return document.getElementById('view'); };
  var CFG = A.CFG;

  var NAV = [
    ['', 'Dashboard', '&#8962;'], ['path', 'My Learning Path', '&#10140;'], ['courses', 'Courses', '&#9636;'],
    ['grammar', 'Grammar Academy', '&#182;'], ['vocab', 'Vocabulary Builder', 'Aa'], ['listening', 'Listening Lab', '&#9835;'],
    ['speaking', 'Speaking Studio', '&#9673;'], ['rw', 'Reading &amp; Writing', '&#9998;'], ['business', 'Business English', '&#9670;'],
    ['sims', 'Professional Simulations', '&#9654;'], ['assess', 'Assessments', '&#10003;'], ['progress', 'Progress &amp; Analytics', '&#9637;'],
    ['settings', 'Settings', '&#9881;']
  ];
  var TYPE = { grammar: 'Grammar', vocab: 'Vocabulary', speaking: 'Speaking', skills: 'Skills' };

  // ---------------------------------------------------------- helpers
  var lessonLink = function (id, cls) {
    var l = A.LESSONS[id]; if (!l) return '<span class="muted">' + esc(id) + ' (coming soon)</span>';
    if (!A.lessonUnlocked(id)) return '<span class="lock-ic" title="Locked">&#128274; ' + esc(l.title) + '</span>';
    return '<a class="' + (cls || 'title') + '" href="#/lesson/' + id + '">' + esc(l.title) + '</a>';
  };
  var statusTag = function (id) {
    if (!A.lessonUnlocked(id)) return '<span class="tag lock">Locked</span>';
    var r = A.S.lessons[id] || {};
    if (r.done) return '<span class="tag ok">Done ' + ((r.test || {}).best || 0) + '%</span>';
    if (r.opened) return '<span class="tag">In progress</span>';
    return '<span class="tag">Not started</span>';
  };
  var bar = function (p) { return '<div class="bar" role="img" aria-label="' + p + ' percent"><i style="width:' + Math.max(0, Math.min(100, p)) + '%"></i></div>'; };
  var head = function (title, sub, crumbs, right) {
    return (crumbs ? '<div class="crumbs">' + crumbs + '</div>' : '') +
      '<div class="pagehead"><div><h1>' + title + '</h1>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>' + (right || '') + '</div>';
  };
  var tabs = function (base, items, cur) {
    return '<nav class="tabs" role="tablist">' + items.map(function (t) {
      return '<a role="tab" href="#/' + base + (t[0] ? '/' + t[0] : '') + '" aria-selected="' + (t[0] === cur) + '">' + t[1] + '</a>';
    }).join('') + '</nav>';
  };
  var stageName = function (id) { var s = A.stageById(id); return s ? s.name : id; };
  var lockedNote = function (sid) {
    var i = A.STAGE_IDS.indexOf(sid), prev = A.STAGE_IDS[i - 1];
    return 'Unlock ' + esc(stageName(sid)) + ' by passing the <a href="#/assess/stage/' + prev + '">' + esc(stageName(prev)) +
      ' assessment</a> (pass mark ' + CFG.stagePass + '%), or take the <a href="#/assess/placement">placement test</a>.';
  };
  var chartBars = function (data, opts) {   // data: [{label, v, v2?}] -> inline SVG bar chart
    opts = opts || {}; var W = 640, H = opts.h || 180, pad = 26, n = data.length || 1;
    var max = Math.max.apply(null, data.map(function (d) { return Math.max(d.v || 0, d.v2 || 0); }).concat([opts.min || 1]));
    var bw = (W - pad * 2) / n, out = '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(opts.label || 'chart') + '">';
    out += '<line class="ax" x1="' + pad + '" x2="' + (W - pad) + '" y1="' + (H - 22) + '" y2="' + (H - 22) + '"/>';
    data.forEach(function (d, i) {
      var h1 = Math.round((H - 44) * (d.v || 0) / max), x = pad + i * bw + bw * 0.18, w = bw * (d.v2 != null ? 0.32 : 0.64);
      out += '<rect class="bv" x="' + x.toFixed(1) + '" y="' + (H - 22 - h1) + '" width="' + w.toFixed(1) + '" height="' + h1 + '" rx="3"/>';
      if (d.v2 != null) { var h2 = Math.round((H - 44) * d.v2 / max); out += '<rect class="bv2" x="' + (x + w + 2).toFixed(1) + '" y="' + (H - 22 - h2) + '" width="' + w.toFixed(1) + '" height="' + h2 + '" rx="3"/>'; }
      if (d.v) out += '<text class="val" x="' + (x + w / 2).toFixed(1) + '" y="' + (H - 26 - h1) + '" text-anchor="middle">' + d.v + (opts.unit || '') + '</text>';
      out += '<text class="lb" x="' + (pad + i * bw + bw / 2).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle">' + esc(d.label) + '</text>';
    });
    return out + '</svg>';
  };
  var recorderHTML = function (id) {
    var ok = !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
    return '<div class="recorder" data-rec="' + esc(id) + '">' + (ok
      ? '<div class="btns"><button type="button" class="btn sm" data-rec-start>&#9679; Record yourself</button><button type="button" class="btn sm" data-rec-stop disabled>Stop</button><span class="rec-status muted"></span></div><audio controls class="mt" hidden></audio>'
      : '<p class="muted">Recording is not available in this browser. Practise aloud and compare with the audio.</p>') + '</div>';
  };

  // ---------------------------------------------------------- shell
  V.shell = function () {
    var nav = NAV.map(function (n) { return '<li><a href="#/' + n[0] + '" data-nav="' + n[0] + '"><span class="ic" aria-hidden="true">' + n[2] + '</span>' + n[1] + '</a></li>'; }).join('');
    document.getElementById('app').innerHTML =
      '<aside class="side" id="side" aria-label="Main navigation"><a class="brand" href="#/"><span class="logo">E</span><span><b>English Learning Academy</b><span class="bs">A1 → PROFESSIONAL · CEFR</span></span></a>' +
      '<ul class="nav">' + nav + '</ul><div class="foot">Progress is saved in this browser only. <a href="#/settings">Back up</a> · <a href="index.html">Academic Hub</a></div></aside>' +
      '<div class="scrim" data-navclose></div>' +
      '<div class="main"><header class="topbar"><button type="button" id="menuBtn" aria-label="Open menu" aria-expanded="false">&#9776; Menu</button><b>English Learning Academy</b></header>' +
      '<main class="content" id="view" tabindex="-1"></main></div>';
    var app = document.getElementById('app');
    $('#menuBtn').addEventListener('click', function () { app.classList.toggle('navopen'); this.setAttribute('aria-expanded', app.classList.contains('navopen')); });
    app.addEventListener('click', function (e) {
      if (e.target.closest('[data-navclose]') || e.target.closest('.nav a')) { app.classList.remove('navopen'); }
      var s = e.target.closest('[data-say]'); if (s) { e.preventDefault(); A.speak(s.getAttribute('data-say')); }
    });
  };
  var setActiveNav = function (key) {
    $$('.nav a').forEach(function (a) { if (a.getAttribute('data-nav') === key) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  };
  var banners = function () {
    var h = '';
    if (!A.storageOK) h += '<div class="banner warn"><b>Progress cannot be saved in this browser</b> (private mode or storage blocked). You can still study, but progress will be lost when you close the page. Use Settings → Export to keep a copy.</div>';
    if (A.MISSING.length) h += '<div class="banner bad">Some lessons could not be loaded: ' + esc(A.MISSING.slice(0, 6).join(', ')) + (A.MISSING.length > 6 ? '…' : '') + '. Check that the english-academy/content files are present.</div>';
    return h;
  };

  // ---------------------------------------------------------- dashboard
  V.dashboard = function () {
    A.autoTasks();
    var ov = A.overall(), cur = A.currentStage(), nxt = A.nextLesson(), last = A.S.last && A.LESSONS[A.S.last] && !A.isDone(A.S.last) ? A.S.last : null;
    var vs = A.vocabStats(), due = A.dueWords().length, plan = A.planTotal(), dm = A.dayMinutes(A.today()), st = A.streak();
    var scores = A.STAGE_IDS.filter(function (s) { return A.S.stages[s]; }).map(function (s) { return s + ' ' + A.S.stages[s].best + '%'; });
    var h = banners() + head('Welcome back', 'Your English journey from A1 to professional fluency. Study a little every day: ' + plan + ' minutes is today\'s plan.');
    if (!A.S.placement && !A.ORDER.some(function (id) { return A.S.lessons[id] && A.S.lessons[id].opened; })) {
      h += '<div class="card mb" style="border-color:var(--accent)"><h3>Where should you start?</h3><p>Take the placement test (about 30 minutes) to find your level, or start from A1 if English is new to you.</p>' +
        '<p class="muted">Belum tahu level Anda? Ikuti tes penempatan, atau mulai dari A1 jika baru belajar.</p><div class="btns"><a class="btn primary" href="#/assess/placement">Take the placement test</a><a class="btn" href="#/lesson/a1-01">Start at A1</a></div></div>';
    }
    h += '<div class="grid g4">' +
      '<div class="card stat row"><div class="ring" style="--p:' + ov.pct + '"><b>' + ov.pct + '%</b></div><div><div class="k">Overall progress</div><div class="s">' + ov.lessons + ' of ' + ov.total + ' lessons · ' + ov.stagesPassed + ' stage assessments passed</div></div></div>' +
      '<div class="card stat"><div class="k">Current CEFR level</div><div class="v">' + esc(A.levelLabel()) + '</div><div class="s">' + (A.S.placement ? 'Placement: start at ' + esc(A.S.placement.start) : 'Based on passed assessments') + '</div></div>' +
      '<div class="card stat"><div class="k">Current stage</div><div class="v">' + esc(cur) + '</div><div class="s">' + A.stageProgress(cur).done + ' / ' + A.stageProgress(cur).total + ' lessons</div>' + bar(A.stageProgress(cur).pct) + '</div>' +
      '<div class="card stat"><div class="k">Today\'s target</div><div class="v">' + dm + ' / ' + plan + ' min</div>' + bar(A.pct(dm, plan)) + '<div class="s mt"><a href="#/path">Open today\'s plan</a></div></div>' +
      '<div class="card stat"><div class="k">Study streak</div><div class="v">' + st + ' day' + (st === 1 ? '' : 's') + '</div><div class="s">A day counts when at least ' + Math.round((CFG.streakShare || 0.5) * 100) + '% of the plan is done</div></div>' +
      '<div class="card stat"><div class="k">Vocabulary</div><div class="v">' + vs.known + '</div><div class="s">words learned · ' + vs.mastered + ' mastered · ' + vs.total + ' in your collection</div></div>' +
      '<div class="card stat"><div class="k">Reviews due today</div><div class="v">' + due + '</div><div class="s"><a href="#/vocab/review">' + (due ? 'Start review' : 'Learn new words') + '</a></div></div>' +
      '<div class="card stat"><div class="k">Assessment scores</div><div class="v" style="font-size:1.05rem">' + (scores.length ? esc(scores.join(' · ')) : '—') + '</div><div class="s"><a href="#/assess">All assessments</a></div></div>' +
      '</div>';
    var cont = last || nxt;
    h += '<div class="grid g2 mt">';
    h += '<div class="card"><h3>Continue learning</h3>' + (cont ? '<p><span class="tag ' + A.LESSONS[cont].type + '">' + TYPE[A.LESSONS[cont].type] + '</span> <span class="tag">' + A.META[cont].stage + '</span></p><p><b>' + esc(A.LESSONS[cont].title) + '</b><br><span class="muted">' + esc(A.LESSONS[cont].sub || '') + '</span></p><a class="btn primary" href="#/lesson/' + cont + '">' + (last ? 'Continue lesson' : 'Start lesson') + '</a>' :
      '<p>All unlocked lessons are complete.</p><a class="btn primary" href="#/assess/stage/' + cur + '">Take the ' + esc(cur) + ' assessment</a>') + '</div>';
    var rec = recommend();
    h += '<div class="card"><h3>Recommended next</h3><p>' + rec.text + '</p>' + (rec.href ? '<a class="btn" href="' + rec.href + '">' + rec.btn + '</a>' : '') + '</div>';
    h += '</div>';
    h += '<div class="grid g2 mt"><div class="card"><div class="row between"><h3>Today\'s tasks</h3><a href="#/path" class="btn sm ghost">Planner</a></div>' + tasksHTML(true) + '</div>';
    var up = A.upcomingReviews(7);
    h += '<div class="card"><h3>Upcoming vocabulary reviews</h3>' + chartBars(up.map(function (u) { return { label: A.fmtDate(u.d).slice(0, 6), v: u.n }; }), { label: 'Reviews due in the next 7 days', h: 150 }) +
      '<p class="muted">Spaced repetition schedule: ' + A.IV.join(', ') + ' days.</p></div></div>';
    view().innerHTML = h;
    bindTasks(view());
  };
  var recommend = function () {
    var cur = A.currentStage(), rd = A.readiness(cur), due = A.dueWords().length, nxt = A.nextLesson();
    if (!A.S.placement && A.overall().lessons === 0) return { text: 'Find your level first so the course starts at the right stage.', href: '#/assess/placement', btn: 'Placement test' };
    if (due >= 20) return { text: 'You have ' + due + ' words waiting. Reviewing them now protects what you have learned.', href: '#/vocab/review', btn: 'Review vocabulary' };
    if (rd.ready && !A.stagePassed(cur)) return { text: 'You are ready for the ' + esc(stageName(cur)) + ' assessment (' + rd.share + '% of lessons done, average ' + rd.avg + '%).', href: '#/assess/stage/' + cur, btn: 'Take the assessment' };
    var weak = A.ORDER.filter(function (id) { var r = A.S.lessons[id]; return r && r.done && (r.test || {}).best < 80; })[0];
    if (weak) return { text: 'Revise “' + esc(A.LESSONS[weak].title) + '”: your completion score was ' + A.S.lessons[weak].test.best + '%.', href: '#/lesson/' + weak, btn: 'Revise lesson' };
    if (nxt) return { text: 'Next in your path: “' + esc(A.LESSONS[nxt].title) + '”.', href: '#/lesson/' + nxt, btn: 'Open lesson' };
    return { text: 'Try a professional simulation to apply your English.', href: '#/sims', btn: 'Simulations' };
  };

  // ---------------------------------------------------------- daily planner
  var taskInfo = function (k) {
    var nxt = A.nextLesson(), cur = A.currentStage();
    if (k === 'vocab') { var d = A.dueWords().length, r = A.day(); return { text: 'Review ' + d + ' due word' + (d === 1 ? '' : 's') + ' and learn new words (' + (r.newWords || 0) + ' / ' + A.S.settings.vocabTarget + ' today)', href: d ? '#/vocab/review' : '#/vocab/daily' }; }
    if (k === 'grammar') return nxt ? { text: 'Lesson: ' + A.LESSONS[nxt].title, href: '#/lesson/' + nxt } : { text: 'Revise a completed lesson', href: '#/grammar' };
    if (k === 'listening') { var t = nextText('listening', cur); return t ? { text: 'Listen: ' + t.title, href: '#/listening/' + t.id } : { text: 'Replay a dialogue from your lessons', href: '#/listening' }; }
    if (k === 'speaking') return nxt ? { text: 'Speaking task from “' + A.LESSONS[nxt].title + '”', href: '#/lesson/' + nxt + '/speak' } : { text: 'Shadowing practice', href: '#/speaking' };
    if (k === 'rw') { var rt = nextText('reading', cur); return rt ? { text: 'Read: ' + rt.title, href: '#/rw/' + rt.id } : { text: 'Writing task from your current lesson', href: nxt ? '#/lesson/' + nxt + '/write' : '#/rw/writing' }; }
  };
  var nextText = function (kind, stage) {
    var list = A.TEXTS.filter(function (t) { return t.kind === kind && A.isUnlocked(t.st); });
    var atLevel = list.filter(function (t) { return t.st === stage && !A.S.texts[t.id]; });
    return atLevel[0] || list.filter(function (t) { return !A.S.texts[t.id]; })[0] || null;
  };
  var tasksHTML = function (compact) {
    var r = A.day(), p = A.S.settings.plan;
    return '<div class="tasks">' + A.TASKS.map(function (t) {
      var info = taskInfo(t.k), done = !!r.done[t.k];
      return '<div class="task' + (done ? ' done' : '') + '"><input type="checkbox" data-task="' + t.k + '"' + (done ? ' checked' : '') + ' aria-label="Mark ' + t.name + ' done">' +
        '<div><div class="tt"><b>' + t.name + '</b>' + (compact ? '' : ' <span class="muted">· ' + t.nameId + '</span>') + '</div><div class="muted" style="font-size:.88rem"><a href="' + info.href + '">' + esc(info.text) + '</a></div></div>' +
        '<span class="mins">' + (+p[t.k] || 0) + ' min</span></div>';
    }).join('') + '</div>';
  };
  var bindTasks = function (root) {
    root.addEventListener('change', function (e) {
      var c = e.target.closest('[data-task]'); if (!c) return;
      A.day().done[c.getAttribute('data-task')] = c.checked; A.save();
      c.closest('.task').classList.toggle('done', c.checked);
    });
  };

  // ---------------------------------------------------------- learning path
  var calMonth = null;
  V.path = function (tab) {
    tab = tab || '';
    A.autoTasks();
    var h = head('My Learning Path', 'Your daily plan, the 24-week roadmap, your study calendar and weekly summary.') +
      tabs('path', [['', 'Today'], ['roadmap', '24-week roadmap'], ['calendar', 'Calendar'], ['week', 'Weekly summary']], tab);
    if (tab === '') {
      var p = A.S.settings.plan;
      h += '<div class="grid g2"><div class="card"><h3>Today · ' + A.fmtDate(A.today()) + '</h3><p class="muted">Default plan: 60 minutes. Change it in <a href="#/settings">Settings</a>.</p>' + tasksHTML(false) +
        '<p class="mt"><b>' + A.dayMinutes(A.today()) + ' of ' + A.planTotal() + ' minutes</b> completed.</p>' + bar(A.pct(A.dayMinutes(A.today()), A.planTotal())) + '</div>' +
        '<div class="card"><h3>Today\'s objectives</h3><ul class="summary">' + objectivesToday().map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul>' +
        '<h4 class="mt">Plan breakdown</h4><ul class="list">' + A.TASKS.map(function (t) { return '<li class="lrow"><span>' + t.name + '</span><span class="mono">' + (+p[t.k] || 0) + ' min</span></li>'; }).join('') + '</ul></div></div>';
    } else if (tab === 'roadmap') {
      var rm = A.CUR.roadmap || [], curW = null;
      rm.forEach(function (w) { if (curW === null && !w.lessons.every(A.isDone)) curW = w.w; });
      var remaining = A.ORDER.filter(function (id) { return !A.isDone(id) && !A.stagePassed(A.META[id].stage); }).length;
      var pace = paceLessonsPerWeek();
      h += '<div class="banner info"><b>A realistic note.</b> The roadmap shows the recommended order and pace for 60 minutes a day. Reaching each CEFR level usually takes longer: ' +
        'A2 ' + esc(A.CUR.glh.A2) + ', B1 ' + esc(A.CUR.glh.B1) + ', B2 ' + esc(A.CUR.glh.B2) + ', C1 ' + esc(A.CUR.glh.C1) + ' (cumulative). ' + esc(A.CUR.glh.note) +
        ' If an assessment shows gaps, add a revision week before moving on.</div>';
      h += '<div class="grid g3 mb"><div class="card stat"><div class="k">Lessons remaining</div><div class="v">' + remaining + '</div></div>' +
        '<div class="card stat"><div class="k">Your recent pace</div><div class="v">' + (pace ? pace.toFixed(1) : '—') + '</div><div class="s">lessons per week (last 14 days)</div></div>' +
        '<div class="card stat"><div class="k">Projected finish</div><div class="v" style="font-size:1.2rem">' + (pace ? A.fmtDate(A.addDays(A.today(), Math.ceil(remaining / pace * 7))) : 'Study a few days first') + '</div><div class="s">at your current pace</div></div></div>';
      h += '<div class="card">' + rm.map(function (w) {
        var done = w.lessons.every(A.isDone);
        return '<div class="week' + (w.w === curW ? ' cur' : '') + '"><span class="wn">Week ' + w.w + '</span><div><b>' + esc(w.focus) + '</b><div class="muted" style="font-size:.86rem">' +
          w.lessons.map(function (id) { return (A.isDone(id) ? '&#10003; ' : '') + lessonLink(id, ''); }).join(' · ') +
          (w.assess ? ' · <a href="#/assess/stage/' + w.assess + '">' + esc(stageName(w.assess)) + ' assessment</a>' : '') + '</div></div>' +
          '<span class="tag ' + (done ? 'ok' : '') + '">' + (done ? 'Done' : w.w === curW ? 'Current' : 'Upcoming') + '</span></div>';
      }).join('') + '</div>';
    } else if (tab === 'calendar') {
      if (!calMonth) { var n = A.now(); calMonth = [n.getFullYear(), n.getMonth()]; }
      h += '<div class="card"><div class="row between mb"><button class="btn sm" data-cal="-1" aria-label="Previous month">&larr;</button><h3 style="margin:0">' +
        ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][calMonth[1]] + ' ' + calMonth[0] +
        '</h3><button class="btn sm" data-cal="1" aria-label="Next month">&rarr;</button></div>' + calendarHTML(calMonth[0], calMonth[1]) +
        '<p class="muted mt">Darker = more of the daily plan completed. Red = a missed day since you started.</p></div>';
      var miss = A.missedDays(14);
      h += '<div class="card mt"><h3>Missed days (last 14 days)</h3>' + (miss.length ? '<p>' + miss.map(A.fmtDate).join(' · ') + '</p><p class="muted">Missing a day is normal. Start again with vocabulary reviews: they take only 10–15 minutes.</p>' : '<p>No missed days. Well done.</p>') + '</div>';
    } else if (tab === 'week') {
      var ws = A.weekSummary();
      h += '<div class="grid g4 mb"><div class="card stat"><div class="k">Study time</div><div class="v">' + ws.mins + ' min</div><div class="s">last 7 days</div></div>' +
        '<div class="card stat"><div class="k">Active days</div><div class="v">' + ws.active + ' / 7</div></div>' +
        '<div class="card stat"><div class="k">Lessons completed</div><div class="v">' + ws.lessons + '</div></div>' +
        '<div class="card stat"><div class="k">Words reviewed</div><div class="v">' + ws.reviews + '</div><div class="s">' + ws.newWords + ' new words added</div></div></div>';
      h += '<div class="card"><h3>Minutes per day</h3>' + chartBars(ws.days.map(function (d) { return { label: A.fmtDate(d.d).slice(0, 6), v: d.mins }; }), { label: 'Minutes studied per day', unit: '' }) + '</div>';
    }
    view().innerHTML = h;
    bindTasks(view());
    view().addEventListener('click', function (e) {
      var c = e.target.closest('[data-cal]'); if (!c) return;
      var m = calMonth[1] + +c.getAttribute('data-cal'), y = calMonth[0];
      if (m < 0) { m = 11; y--; } if (m > 11) { m = 0; y++; }
      calMonth = [y, m]; A.route();
    });
  };
  var objectivesToday = function () {
    var out = [], nxt = A.nextLesson(), due = A.dueWords().length;
    out.push(due ? 'Review ' + due + ' vocabulary word' + (due === 1 ? '' : 's') + ' with spaced repetition.' : 'Add ' + A.S.settings.vocabTarget + ' new words to your collection.');
    if (nxt) (A.LESSONS[nxt].obj || []).slice(0, 2).forEach(function (o) { out.push(esc(o)); });
    out.push('Speak aloud for at least ' + (A.S.settings.plan.speaking || 15) + ' minutes: shadow the examples and record yourself.');
    return out;
  };
  var paceLessonsPerWeek = function () {
    var n = 0; for (var i = 0; i < 14; i++) { var r = A.S.daily[A.addDays(A.today(), -i)]; if (r) n += r.lessons || 0; }
    return n ? n / 2 : 0;
  };
  var calendarHTML = function (y, m) {
    var first = new Date(y, m, 1), start = (first.getDay() + 6) % 7, days = new Date(y, m + 1, 0).getDate(), t = A.today();
    var h = '<div class="cal">' + ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(function (d) { return '<div class="h">' + d + '</div>'; }).join('');
    for (var i = 0; i < start; i++) h += '<div class="d out"></div>';
    for (var d = 1; d <= days; d++) {
      var s = A.ymd(new Date(y, m, d)), sh = A.dayShare(s), cls = sh >= 1 ? 'l3' : sh >= 0.5 ? 'l2' : sh > 0 ? 'l1' : '';
      if (!cls && s < t && s >= A.S.created) cls = 'miss';
      h += '<div class="d ' + cls + (s === t ? ' today' : '') + '" title="' + A.fmtDate(s) + ': ' + Math.round(sh * 100) + '% of plan">' + d + '</div>';
    }
    return h + '</div>';
  };

  // ---------------------------------------------------------- courses and stages
  V.courses = function () {
    var h = head('Courses', 'Six stages following the CEFR: A1 → A2 → B1 → B2 → C1 → Professional English. Each stage ends with an assessment that unlocks the next one.');
    h += '<div class="grid g3">' + A.STAGES.map(function (s) {
      var un = A.isUnlocked(s.id), pr = A.stageProgress(s.id), by = A.stagePassedBy(s.id);
      return '<a class="card link stagecard' + (un ? '' : ' locked') + '" href="#/stage/' + s.id + '"><div class="row between"><span class="lvl">' + esc(s.short) + '</span>' +
        (by ? '<span class="tag ok">Passed' + (by === 'placement' ? ' (placement)' : '') + '</span>' : un ? '<span class="tag">Open</span>' : '<span class="tag lock">&#128274; Locked</span>') + '</div>' +
        '<h3 class="mt">' + esc(s.name) + '</h3><p class="muted">' + esc(s.desc) + '</p><div class="row between" style="font-size:.85rem"><span>' + pr.done + ' / ' + pr.total + ' lessons</span><span>' + s.modules.length + ' modules</span></div>' + bar(pr.pct) + '</a>';
    }).join('') + '</div>';
    view().innerHTML = h;
  };
  V.stage = function (sid) {
    var s = A.stageById(sid); if (!s) return V.notFound();
    var un = A.isUnlocked(sid), rd = A.readiness(sid), rec = A.S.stages[sid];
    var h = head(esc(s.name), esc(s.desc) + (A.S.settings.showId ? '<br><span class="muted">' + esc(s.descId) + '</span>' : ''), '<a href="#/courses">Courses</a> / ' + esc(s.short));
    if (!un) h += '<div class="banner warn">&#128274; ' + lockedNote(sid) + '</div>';
    h += '<div class="grid g2 mb"><div class="card"><h3>By the end of this stage you can</h3><ul>' + s.cando.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="card"><h3>Stage assessment</h3><p>Pass mark ' + CFG.stagePass + '%. ' + (rec ? 'Best score: <b>' + rec.best + '%</b> · attempts: ' + rec.attempts.length + '.' : 'Not taken yet.') + '</p>' +
      '<p><b>Readiness:</b> ' + rd.share + '% of lessons done, average completion score ' + rd.avg + '% · ' + (rd.ready ? '<span class="tag ok">Ready</span>' : '<span class="tag">Keep practising</span>') + '</p>' +
      (un ? '<a class="btn primary" href="#/assess/stage/' + sid + '">' + (rec ? 'Retake' : 'Take') + ' the ' + esc(s.short) + ' assessment</a>' : '') + '</div></div>';
    s.modules.forEach(function (m, mi) {
      h += '<div class="card mb"><h3>Module ' + (mi + 1) + ' · ' + esc(m.title) + '</h3><ul class="list">' + m.lessons.map(function (id) {
        var l = A.LESSONS[id];
        return '<li class="lrow"><div class="t">' + lessonLink(id) + (l ? '<br><span class="muted" style="font-size:.86rem">' + esc(l.sub || '') + '</span>' : '') + '</div>' +
          (l ? '<span class="tag ' + l.type + '">' + TYPE[l.type] + '</span>' : '') + statusTag(id) + '</li>';
      }).join('') + '</ul></div>';
    });
    view().innerHTML = h;
  };

  // ---------------------------------------------------------- lesson
  V.lesson = function (id, section) {
    var l = A.LESSONS[id], m = A.META[id];
    if (!l || !m) return V.notFound();
    var s = A.stageById(m.stage);
    if (!A.lessonUnlocked(id)) {
      view().innerHTML = head(esc(l.title), esc(l.sub || ''), '<a href="#/courses">Courses</a> / <a href="#/stage/' + m.stage + '">' + m.stage + '</a>') +
        '<div class="banner warn">&#128274; This lesson is part of ' + esc(s.name) + ', which is locked. ' + lockedNote(m.stage) + '</div>';
      return;
    }
    var r = A.L(id); if (!r.opened) { r.opened = A.today(); } A.S.last = id; A.save();
    var idx = A.ORDER.indexOf(id), prev = A.ORDER[idx - 1], next = A.ORDER[idx + 1];
    var showId = A.S.settings.showId;
    var secs = [['obj', 'Objectives'], ['exp', 'Explanation'], ['voc', 'Vocabulary'], ['ex', 'Examples'], ['mis', 'Common mistakes'], ['prac', 'Practice'], ['quiz', 'Quiz'],
      ['speak', 'Speaking'], ['write', 'Writing'], ['sum', 'Summary'], ['test', 'Completion assessment']];
    var h = '<div class="crumbs"><a href="#/courses">Courses</a> / <a href="#/stage/' + m.stage + '">' + esc(s.short) + '</a> / ' + esc(m.moduleTitle) + '</div>';
    h += '<div class="lessonhead"><div class="row wrap" style="gap:.4em"><span class="tag ' + l.type + '">' + TYPE[l.type] + '</span><span class="tag">' + esc(m.stage) + '</span>' + statusTag(id) + '</div>' +
      '<h1>' + esc(l.title) + '</h1><p class="sub">' + esc(l.sub || '') + '</p><nav class="jump" aria-label="Lesson sections">' +
      secs.map(function (x, i) { return '<a href="#/lesson/' + id + '/' + x[0] + '">' + (i + 1) + '. ' + x[1] + '</a>'; }).join('') + '</nav></div>';
    if (r.done) h += '<div class="done-banner">&#10003; Lesson complete · completion score ' + (r.test || {}).best + '%' + (next && A.LESSONS[next] ? ' · <a href="#/lesson/' + next + '">Next lesson</a>' : '') + '</div>';
    var sec = function (key, n, title, body) { return '<section class="sec" id="s-' + key + '"><h2><span class="n">' + n + '</span>' + title + '</h2>' + body + '</section>'; };
    // 1 objectives
    h += sec('obj', 1, 'Learning objectives', '<ul>' + (l.obj || []).map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul>');
    // 2 explanation
    var ex2 = (l.exp || []).map(function (e) {
      return (e.h ? '<h3>' + esc(e.h) + '</h3>' : '') + '<p>' + esc(e.p) + '</p>' + (e.id ? '<div class="idnote"><b>Bahasa Indonesia:</b> ' + esc(e.id) + '</div>' : '');
    }).join('');
    if (l.struct) ex2 += '<h3>Sentence patterns</h3>' + l.struct.map(function (x) { return '<div class="struct">' + esc(x) + '</div>'; }).join('');
    if (l.forms) ex2 += '<h3>Positive, negative and question forms</h3><div class="forms">' + [['pos', 'Positive (+)'], ['neg', 'Negative (−)'], ['q', 'Question (?)']].map(function (f) {
      return '<div class="f"><h4>' + f[1] + '</h4>' + (l.forms[f[0]] || []).map(function (x) { return '<p>' + esc(x) + ' ' + A.sayBtn(x) + '</p>'; }).join('') + '</div>';
    }).join('') + '</div>';
    if (l.exc && l.exc.length) ex2 += '<h3>Exceptions and special cases</h3><ul>' + l.exc.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
    h += sec('exp', 2, 'Explanation', ex2);
    // 3 vocabulary
    var vb = '<div class="voc">' + (l.voc || []).map(function (v) {
      var vid = String(v[0]).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return '<div class="vcard"><div class="row between"><span><span class="w">' + esc(v[0]) + '</span> <span class="p">' + esc(v[1] || '') + ' · ' + esc(v[2] || '') + '</span></span>' + A.sayBtn(v[0]) + '</div>' +
        '<div class="d"><b>' + esc(v[3]) + '</b> — ' + esc(v[4]) + '</div><div class="e">' + esc(v[5]) + '</div>' + (v[6] ? '<div class="x">' + esc(v[6]) + '</div>' : '') +
        '<div class="btns mt"><button type="button" class="btn sm" data-addword="' + vid + '">' + (A.inDeck(vid) ? '&#10003; In my collection' : '+ Add to my vocabulary') + '</button></div></div>';
    }).join('') + '</div><div class="btns mt"><button type="button" class="btn" data-addall>Add all words to my vocabulary</button></div>';
    h += sec('voc', 3, 'Vocabulary', vb);
    // 4 examples
    h += sec('ex', 4, 'Examples', '<ol class="exlist">' + (l.ex || []).map(function (e) {
      return '<li><span><span class="en">' + esc(e[0]) + '</span><span class="tr">' + esc(e[1] || '') + '</span></span>' + A.sayBtn(e[0]) + '</li>';
    }).join('') + '</ol>');
    // 5 mistakes
    h += sec('mis', 5, 'Common mistakes for Indonesian learners', (l.mis || []).map(function (x) {
      return '<div class="mistake"><span>&#10007; <span class="wr">' + esc(x[0]) + '</span></span><span>&#10003; <span class="rt">' + esc(x[1]) + '</span></span><span class="why">' + esc(x[2]) + '</span></div>';
    }).join(''));
    // 6 practice, 7 quiz
    h += sec('prac', 6, 'Practice exercises', '<p class="muted">Check each answer as you go. You can try as many times as you like.</p><div id="prac-host"></div>');
    h += sec('quiz', 7, 'Quiz', '<p class="muted">Answer all questions, then submit to see your score and explanations.' + ((r.quiz || {}).best != null ? ' Best: ' + r.quiz.best + '%.' : '') + '</p><div id="quiz-host"></div>');
    // 8 speaking
    var sp = l.speak || {}, spb = '';
    if (l.dlg) spb += '<h3>' + esc(l.dlg.title || 'Model dialogue') + '</h3><div class="btns mb"><button type="button" class="btn sm" data-playdlg>&#9654; Play the whole dialogue</button></div><div class="dlg">' + l.dlg.lines.map(function (x) {
      return '<div class="ln"><span class="who">' + esc(x[0]) + '</span><span>' + esc(x[1]) + (x[2] ? '<span class="tr">' + esc(x[2]) + '</span>' : '') + '</span>' + A.sayBtn(x[1]) + '</div>';
    }).join('') + '</div>';
    if (l.expr) spb += '<h3 class="mt">Useful expressions</h3><div class="expr">' + l.expr.map(function (x) { return '<div>' + esc(x[0]) + ' ' + A.sayBtn(x[0]) + '<small class="muted">' + esc(x[1] || '') + '</small></div>'; }).join('') + '</div>';
    spb += '<h3 class="mt">Your speaking assignment</h3><div class="assign"><p>' + esc(sp.task || '') + '</p>' + (sp.role ? '<p><b>Role-play:</b> ' + esc(sp.role) + '</p>' : '') + '</div>';
    if (sp.pron && sp.pron.length) spb += '<h3 class="mt">Pronunciation practice</h3><ul class="list">' + sp.pron.map(function (p) { var t = Array.isArray(p) ? p[0] : p, n = Array.isArray(p) ? p[1] : ''; return '<li class="lrow"><span class="t"><b>' + esc(t) + '</b>' + (n ? '<br><span class="muted">' + esc(n) + '</span>' : '') + '</span>' + A.sayBtn(t) + '</li>'; }).join('') + '</ul>';
    spb += '<div class="mt">' + recorderHTML(id) + '</div><label class="row mt"><input type="checkbox" data-speakdone' + (r.speak ? ' checked' : '') + '> I completed the speaking assignment aloud</label>';
    h += sec('speak', 8, 'Speaking', spb);
    // 9 writing
    var wr = l.write || {}, draft = A.S.writing[id] || '';
    h += sec('write', 9, 'Writing', '<div class="assign"><p>' + esc(wr.task || '') + '</p></div>' +
      (wr.check ? '<h4 class="mt">Checklist</h4><ul class="check">' + wr.check.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' : '') +
      '<div class="field mt"><label for="wr-' + id + '">Your text <span class="muted" id="wc">(' + wordCount(draft) + ' words)</span></label><textarea id="wr-' + id + '" data-write>' + esc(draft) + '</textarea></div>' +
      (wr.model ? '<details><summary>Show a model answer</summary><div class="transcript"><p>' + esc(wr.model).replace(/\n/g, '<br>') + '</p></div></details>' : '') +
      '<label class="row mt"><input type="checkbox" data-writedone' + (r.write ? ' checked' : '') + '> I finished and checked my writing</label>');
    // 10 summary
    h += sec('sum', 10, 'Lesson summary', '<ul class="summary">' + (l.sum || []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>');
    // 11 completion assessment
    h += sec('test', 11, 'Completion assessment', '<p>Score at least <b>' + CFG.lessonPass + '%</b> to complete the lesson. ' + ((r.test || {}).best != null ? 'Best so far: <b>' + r.test.best + '%</b>.' : '') + '</p><div id="test-host"></div>');
    h += '<div class="btns mt2">' + (prev && A.LESSONS[prev] && A.lessonUnlocked(prev) ? '<a class="btn" href="#/lesson/' + prev + '">&larr; Previous lesson</a>' : '') +
      '<a class="btn" href="#/stage/' + m.stage + '">Stage overview</a>' + (next && A.LESSONS[next] && A.lessonUnlocked(next) ? '<a class="btn primary" href="#/lesson/' + next + '">Next lesson &rarr;</a>' : '') + '</div>';
    document.documentElement.classList.toggle('hide-id', !showId);
    view().innerHTML = h;
    // practice
    A.runItems($('#prac-host'), l.prac || [], { mode: 'practice', onCheck: function (i, ok) {
      var p = r.prac || (r.prac = { seen: {}, ok: {} }); p.seen[i] = 1; if (ok) p.ok[i] = 1; A.save();
    } });
    A.runItems($('#quiz-host'), l.quiz || [], { mode: 'graded', onResult: function (res) {
      var q = r.quiz || (r.quiz = {}); q.last = res.score; q.best = Math.max(q.best || 0, res.score); A.save();
    } });
    A.runItems($('#test-host'), l.test || [], { mode: 'graded', passMark: CFG.lessonPass, onResult: function (res, box) {
      var t = r.test || (r.test = { attempts: 0 }); t.attempts++; t.last = res.score; t.best = Math.max(t.best || 0, res.score);
      A.day().tests = (A.day().tests || 0) + 1;
      if (res.pass && !r.done) { r.done = true; r.doneDate = A.today(); A.bump('lessons'); A.logHistory('lesson', id, res.score); }
      A.save();
      if (res.pass) box.insertAdjacentHTML('beforeend', '<div class="done-banner">&#10003; Lesson complete.' + (next && A.LESSONS[next] && A.lessonUnlocked(next) ? ' <a class="btn sm primary" href="#/lesson/' + next + '">Next lesson</a>' : ' <a class="btn sm primary" href="#/assess/stage/' + m.stage + '">Stage assessment</a>') + '</div>');
    } });
    // bindings
    var v = view();
    v.addEventListener('click', function (e) {
      var a = e.target.closest('[data-addword]');
      if (a) { var w = a.getAttribute('data-addword'); if (A.addWord(w)) { a.innerHTML = '&#10003; In my collection'; A.toast('Added to your vocabulary'); } else if (A.inDeck(w)) A.toast('Already in your collection'); return; }
      if (e.target.closest('[data-addall]')) {
        var n = 0; (l.voc || []).forEach(function (vv) { var vid = String(vv[0]).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); if (A.addWord(vid)) n++; });
        $$('[data-addword]', v).forEach(function (b) { b.innerHTML = '&#10003; In my collection'; });
        A.toast(n ? n + ' words added' : 'All words are already in your collection'); return;
      }
      if (e.target.closest('[data-playdlg]')) {
        var lines = l.dlg.lines.map(function (x) { return x[1]; }), k = 0;
        var nextLine = function () { if (k < lines.length) A.speak(lines[k++], nextLine); }; nextLine();
      }
    });
    v.addEventListener('change', function (e) {
      if (e.target.matches('[data-speakdone]')) { r.speak = e.target.checked; if (r.speak) A.day().speaking = true; A.save(); A.autoTasks(); }
      if (e.target.matches('[data-writedone]')) { r.write = e.target.checked; if (r.write) A.day().writing = true; A.save(); A.autoTasks(); }
    });
    var wt = null;
    v.addEventListener('input', function (e) {
      if (!e.target.matches('[data-write]')) return;
      $('#wc').textContent = '(' + wordCount(e.target.value) + ' words)';
      clearTimeout(wt); wt = setTimeout(function () { A.S.writing[id] = e.target.value; A.save(); }, 400);
    });
    bindRecorder(v);
    if (section) { var el = document.getElementById('s-' + section); if (el) setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 30); }
  };
  var wordCount = A.wordCount = function (t) { return (String(t).trim().match(/\S+/g) || []).length; };
  var bindRecorder = function (root) {
    root.addEventListener('click', function (e) {
      var start = e.target.closest('[data-rec-start]'), stop = e.target.closest('[data-rec-stop]');
      if (!start && !stop) return;
      var box = e.target.closest('.recorder'), st = box.querySelector('.rec-status');
      if (start) {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
          var chunks = [], mr = new MediaRecorder(stream); box._mr = mr;
          mr.ondataavailable = function (ev) { if (ev.data.size) chunks.push(ev.data); };
          mr.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            var au = box.querySelector('audio'); au.src = URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/webm' })); au.hidden = false;
            st.textContent = 'Listen to yourself and compare with the model audio.';
            A.day().speaking = true; A.save();
          };
          mr.start(); start.disabled = true; box.querySelector('[data-rec-stop]').disabled = false; st.innerHTML = '<span class="rec"></span>Recording…';
        }).catch(function () { st.textContent = 'Microphone permission was not given.'; });
      } else if (box._mr) { box._mr.stop(); stop.disabled = true; box.querySelector('[data-rec-start]').disabled = false; }
    });
  };

  // ---------------------------------------------------------- grammar academy
  V.grammar = function () {
    var h = head('Grammar Academy', 'Every grammar lesson from A1 to C1 with rules, forms, exceptions, at least ten examples and exercises with explanations.');
    h += '<div class="field"><label for="gq">Search grammar topics</label><input type="search" id="gq" placeholder="e.g. present perfect, passive, articles"></div><div id="glist"></div>';
    view().innerHTML = h;
    var draw = function (q) {
      q = A.norm(q || '');
      $('#glist').innerHTML = A.STAGES.map(function (s) {
        var ls = A.stageLessons(s.id).filter(function (id) { var l = A.LESSONS[id]; return l && l.type === 'grammar' && (!q || A.norm(l.title + ' ' + (l.sub || '') + ' ' + (l.struct || []).join(' ')).indexOf(q) >= 0); });
        if (!ls.length) return '';
        return '<div class="card mb"><h3>' + esc(s.name) + (A.isUnlocked(s.id) ? '' : ' <span class="tag lock">&#128274; Locked</span>') + '</h3><ul class="list">' + ls.map(function (id) {
          var l = A.LESSONS[id];
          return '<li class="lrow"><div class="t">' + lessonLink(id) + '<div class="struct" style="margin-top:.35em">' + esc((l.struct || [])[0] || l.sub || '') + '</div></div>' + statusTag(id) + '</li>';
        }).join('') + '</ul></div>';
      }).join('') || '<div class="empty">No grammar lesson matches your search.</div>';
    };
    draw('');
    $('#gq').addEventListener('input', function () { draw(this.value); });
  };

  // ---------------------------------------------------------- vocabulary builder
  var vstate = { q: '', lvl: '', cat: '', mine: false, limit: 40, flash: { set: 'mine', i: 0, flip: false, list: null } };
  V.vocab = function (tab) {
    tab = tab || '';
    var vs = A.vocabStats(), r = A.day();
    var h = head('Vocabulary Builder', A.VOCAB.length + ' words and expressions from every lesson, with pronunciation, Indonesian meaning, examples and spaced repetition (' + A.IV.join(', ') + ' days).') +
      tabs('vocab', [['', 'Word database'], ['review', 'Review (' + A.dueWords().length + ')'], ['flash', 'Flashcards'], ['quiz', 'Quizzes'], ['daily', 'Daily target']], tab);
    h += '<div class="grid g4 mb"><div class="card stat"><div class="k">In my collection</div><div class="v">' + vs.total + '</div></div><div class="card stat"><div class="k">Learning</div><div class="v">' + (vs.fresh + vs.learning) + '</div></div>' +
      '<div class="card stat"><div class="k">Learned</div><div class="v">' + vs.learned + '</div></div><div class="card stat"><div class="k">Mastered (30-day)</div><div class="v">' + vs.mastered + '</div></div></div>';
    view().innerHTML = h + '<div id="vbody"></div>';
    var body = $('#vbody');
    if (tab === '') vocabDB(body);
    else if (tab === 'review') vocabReview(body);
    else if (tab === 'flash') vocabFlash(body);
    else if (tab === 'quiz') vocabQuiz(body);
    else if (tab === 'daily') vocabDaily(body, r);
  };
  var vocabDB = function (body) {
    var cats = []; A.VOCAB.forEach(function (v) { if (cats.indexOf(v.cat) < 0) cats.push(v.cat); });
    body.innerHTML = '<div class="grid g4"><div class="field"><label for="vq">Search</label><input type="search" id="vq" value="' + esc(vstate.q) + '" placeholder="English or Indonesian"></div>' +
      '<div class="field"><label for="vl">Level</label><select id="vl"><option value="">All levels</option>' + A.STAGE_IDS.map(function (s) { return '<option' + (vstate.lvl === s ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="vc">Category</label><select id="vc"><option value="">All categories</option>' + cats.map(function (c) { return '<option' + (vstate.cat === c ? ' selected' : '') + '>' + esc(c) + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label>&nbsp;</label><label class="row"><input type="checkbox" id="vm"' + (vstate.mine ? ' checked' : '') + '> My collection only</label></div></div><div id="vres"></div>';
    var draw = function () {
      var q = A.norm(vstate.q);
      var list = A.VOCAB.filter(function (v) {
        return (!vstate.lvl || v.level === vstate.lvl) && (!vstate.cat || v.cat === vstate.cat) && (!vstate.mine || A.inDeck(v.id)) &&
          (!q || A.norm(v.w + ' ' + v.idm + ' ' + v.def).indexOf(q) >= 0);
      });
      var shown = list.slice(0, vstate.limit);
      if (!$('#vres')) return;   // the learner navigated away before the debounced search ran
      $('#vres').innerHTML = '<p class="muted">' + list.length + ' result' + (list.length === 1 ? '' : 's') + '</p><div class="tblwrap"><table class="t vtable"><thead><tr><th>Word</th><th>Meaning</th><th>Level</th><th></th></tr></thead><tbody>' +
        shown.map(function (v) {
          var st = A.S.vocab[v.id];
          return '<tr><td><span class="w">' + esc(v.w) + '</span> ' + A.sayBtn(v.w) + '<br><span class="mono muted" style="font-size:.78rem">' + esc(v.pron) + ' · ' + esc(v.pos) + '</span></td>' +
            '<td><b>' + esc(v.idm) + '</b><br><span class="muted" style="font-size:.88rem">' + esc(v.def) + '</span><details><summary style="font-size:.82rem">Example and usage</summary><p style="font-size:.88rem"><i>' + esc(v.ex) + '</i></p>' +
            (v.extra ? '<p style="font-size:.82rem" class="muted">' + esc(v.extra) + '</p>' : '') + '<p style="font-size:.8rem" class="muted">Context: ' + esc(v.cat) + ' · <a href="#/lesson/' + v.lesson + '">lesson</a></p></details></td>' +
            '<td><span class="tag">' + v.level + '</span>' + (st ? '<br><span class="muted" style="font-size:.75rem">box ' + st.box + ' · due ' + A.fmtDate(st.due) + '</span>' : '') + '</td>' +
            '<td><button type="button" class="btn sm" data-toggleword="' + v.id + '">' + (st ? 'Remove' : '+ Add') + '</button></td></tr>';
        }).join('') + '</tbody></table></div>' + (list.length > shown.length ? '<div class="btns mt"><button type="button" class="btn" data-more>Show more</button></div>' : '');
    };
    draw();
    var t = null;
    $('#vq').addEventListener('input', function () { var val = this.value; clearTimeout(t); t = setTimeout(function () { vstate.q = val; vstate.limit = 40; draw(); }, 150); });
    $('#vl').addEventListener('change', function () { vstate.lvl = this.value; vstate.limit = 40; draw(); });
    $('#vc').addEventListener('change', function () { vstate.cat = this.value; vstate.limit = 40; draw(); });
    $('#vm').addEventListener('change', function () { vstate.mine = this.checked; vstate.limit = 40; draw(); });
    body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-toggleword]');
      if (b) { var id = b.getAttribute('data-toggleword'); if (A.inDeck(id)) A.removeWord(id); else A.addWord(id); draw(); return; }
      if (e.target.closest('[data-more]')) { vstate.limit += 40; draw(); }
    });
  };
  var vocabReview = function (body) {
    var due = A.dueWords(), i = 0, ok = 0;
    if (!due.length) {
      var nextDue = Object.keys(A.S.vocab).map(function (id) { return A.S.vocab[id].due; }).sort()[0];
      body.innerHTML = '<div class="empty"><p><b>No reviews due right now.</b></p><p>' + (nextDue ? 'Next review: ' + A.fmtDate(nextDue) + '.' : 'Your collection is empty.') + '</p><a class="btn primary" href="#/vocab/daily">Learn new words</a></div>';
      return;
    }
    due = A.shuffle(due);
    var draw = function (flip) {
      if (i >= due.length) {
        body.innerHTML = '<div class="empty"><p><b>Review finished.</b> ' + ok + ' of ' + due.length + ' remembered.</p><p class="muted">Words you remembered move to a longer interval; forgotten words come back tomorrow.</p><a class="btn" href="#/vocab">Back to the database</a></div>';
        A.autoTasks(); return;
      }
      var v = A.VOCAB_BY_ID[due[i]], s = A.S.vocab[due[i]];
      body.innerHTML = '<p class="muted">Card ' + (i + 1) + ' of ' + due.length + ' · current interval box ' + s.box + '</p><div class="flash"><div class="face"><div class="w">' + esc(v.w) + '</div><div class="p">' + esc(v.pron) + ' · ' + esc(v.pos) + '</div>' + A.sayBtn(v.w) +
        (flip ? '<div class="mt"><b>' + esc(v.idm) + '</b></div><div class="muted">' + esc(v.def) + '</div><div class="mt"><i>' + esc(v.ex) + '</i></div>' : '<p class="muted mt">Say the meaning in Indonesian and use the word in a sentence, then reveal.</p>') + '</div></div>' +
        '<div class="btns mt" style="justify-content:center">' + (flip ? '<button type="button" class="btn danger" data-r="0">I didn\'t know it</button><button type="button" class="btn primary" data-r="1">I knew it</button>' : '<button type="button" class="btn primary" data-flip>Show answer</button>') + '</div>';
    };
    draw(false);
    body.addEventListener('click', function (e) {
      if (e.target.closest('[data-flip]')) return draw(true);
      var r = e.target.closest('[data-r]'); if (!r) return;
      var good = r.getAttribute('data-r') === '1'; if (good) ok++;
      A.reviewWord(due[i], good); i++; draw(false);
    });
  };
  var flashSet = function (set) {
    if (set === 'mine') return Object.keys(A.S.vocab).filter(function (id) { return A.VOCAB_BY_ID[id]; }).map(function (id) { return A.VOCAB_BY_ID[id]; });
    return A.VOCAB.filter(function (v) { return v.level === set; });
  };
  var vocabFlash = function (body) {
    var f = vstate.flash;
    var draw = function () {
      var list = f.list || (f.list = flashSet(f.set));
      var opts = '<option value="mine"' + (f.set === 'mine' ? ' selected' : '') + '>My collection</option>' + A.STAGE_IDS.map(function (s) { return '<option value="' + s + '"' + (f.set === s ? ' selected' : '') + '>All ' + s + ' words</option>'; }).join('');
      var hd = '<div class="row wrap mb"><div class="field" style="margin:0"><label for="fs">Card set</label><select id="fs">' + opts + '</select></div><button type="button" class="btn" data-shuffle>Shuffle</button></div>';
      if (!list.length) { body.innerHTML = hd + '<div class="empty">This set is empty. Add words from the database or a lesson.</div>'; bindSel(); return; }
      f.i = Math.max(0, Math.min(f.i, list.length - 1));
      var v = list[f.i];
      body.innerHTML = hd + '<p class="muted">Card ' + (f.i + 1) + ' of ' + list.length + ' · flashcards do not change your review schedule.</p><div class="flash"><div class="face" data-flipcard role="button" tabindex="0" aria-label="Flip card">' +
        (f.flip ? '<div><b>' + esc(v.idm) + '</b></div><div class="muted">' + esc(v.def) + '</div><div class="mt"><i>' + esc(v.ex) + '</i></div>' : '<div class="w">' + esc(v.w) + '</div><div class="p">' + esc(v.pron) + '</div>') +
        '</div></div><div class="btns mt" style="justify-content:center"><button type="button" class="btn" data-fp="-1">&larr; Previous</button>' + A.sayBtn(v.w) + '<button type="button" class="btn primary" data-flipcard>Flip</button><button type="button" class="btn" data-fp="1">Next &rarr;</button></div>';
      bindSel();
    };
    var bindSel = function () { var s = $('#fs'); if (s) s.onchange = function () { f.set = this.value; f.list = null; f.i = 0; f.flip = false; draw(); }; };
    draw();
    body.addEventListener('click', function (e) {
      if (e.target.closest('[data-flipcard]')) { f.flip = !f.flip; draw(); return; }
      var p = e.target.closest('[data-fp]'); if (p) { f.i += +p.getAttribute('data-fp'); f.flip = false; draw(); return; }
      if (e.target.closest('[data-shuffle]')) { f.list = A.shuffle(flashSet(f.set)); f.i = 0; f.flip = false; draw(); }
    });
    body.addEventListener('keydown', function (e) { if (e.target.closest('[data-flipcard]') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); f.flip = !f.flip; draw(); } });
  };
  var MODES = [['recog', 'Word recognition', 'See the English word and choose its English meaning.'], ['en-id', 'English → Indonesian', 'Choose the Indonesian meaning.'],
    ['id-en', 'Indonesian → English recall', 'Type the English word for the Indonesian meaning.'], ['complete', 'Sentence completion', 'Type the missing word in the example sentence.'],
    ['context', 'Contextual usage', 'Choose the word that fits the sentence.']];
  A.buildVocabQuiz = function (mode, pool, n) {
    var items = [], src = A.shuffle(pool);
    var blanked = function (v) {
      var re = new RegExp('\\b' + v.w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
      return re.test(v.ex) ? v.ex.replace(re, '_____') : null;
    };
    var distract = function (v, field) {
      var others = A.shuffle(A.VOCAB.filter(function (x) { return x.id !== v.id && x[field] && x[field] !== v[field]; })).slice(0, 3).map(function (x) { return x[field]; });
      return [v[field]].concat(others);
    };
    src.forEach(function (v) {
      if (items.length >= n) return;
      if (mode === 'recog') items.push(['mc', v.w + ' — what does it mean?', distract(v, 'def'), 0, v.w + ': ' + v.def + ' (' + v.idm + ')']);
      else if (mode === 'en-id') items.push(['mc', 'Indonesian meaning of “' + v.w + '”', distract(v, 'idm'), 0, v.w + ' = ' + v.idm]);
      else if (mode === 'id-en') items.push(['fill', 'English for: “' + v.idm + '”', v.w, v.w + ': ' + v.def]);
      else if (mode === 'complete') { var b = blanked(v); if (b) items.push(['fill', b, v.w, 'Full sentence: ' + v.ex]); }
      else if (mode === 'context') { var c = blanked(v); if (c) items.push(['mc', c, distract(v, 'w'), 0, 'Full sentence: ' + v.ex]); }
    });
    return items;
  };
  var vocabQuiz = function (body) {
    var pool = function (src) { return src === 'mine' ? flashSet('mine') : A.VOCAB.filter(function (v) { return v.level === src; }); };
    body.innerHTML = '<div class="grid g3"><div class="field"><label for="qm">Quiz type</label><select id="qm">' + MODES.map(function (m) { return '<option value="' + m[0] + '">' + m[1] + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label for="qs">Words from</label><select id="qs"><option value="mine">My collection</option>' + A.STAGE_IDS.map(function (s) { return '<option value="' + s + '">' + s + ' words</option>'; }).join('') + '</select></div>' +
      '<div class="field"><label>&nbsp;</label><button type="button" class="btn primary" data-startq>Start a 10-question quiz</button></div></div><p class="muted" id="qmdesc">' + MODES[0][2] + '</p><div id="qhost"></div>';
    $('#qm').addEventListener('change', function () { var m = MODES.filter(function (x) { return x[0] === this.value; }, this)[0]; $('#qmdesc').textContent = m[2]; });
    body.addEventListener('click', function (e) {
      if (!e.target.closest('[data-startq]')) return;
      var mode = $('#qm').value, p = pool($('#qs').value);
      var items = A.buildVocabQuiz(mode, p, 10);
      var host = document.createElement('div'); var old = $('#qhost'); old.parentNode.replaceChild(host, old); host.id = 'qhost';
      if (items.length < 4) { host.innerHTML = '<div class="empty">Not enough words for this quiz type. Add more words to your collection or choose a level.</div>'; return; }
      A.runItems(host, items, { mode: 'graded', onResult: function (res) { A.logHistory('vocab-quiz', mode, res.score); A.save(); } });
    });
  };
  var vocabDaily = function (body, r) {
    var target = +A.S.settings.vocabTarget || 10, got = r.newWords || 0, sug = A.suggestNewWords(Math.max(target - got, 0) || 5);
    body.innerHTML = '<div class="card mb"><div class="row between wrap"><div><h3>Daily vocabulary target</h3><p>' + got + ' of ' + target + ' new words added today.</p></div><div style="min-width:200px">' + bar(A.pct(got, target)) + '</div></div>' +
      '<p class="muted">New words enter spaced repetition: you will see them again after 1, 3, 7, 14 and 30 days.</p></div>' +
      (sug.length ? '<div class="voc">' + sug.map(function (v) {
        return '<div class="vcard"><div class="row between"><span><span class="w">' + esc(v.w) + '</span> <span class="p">' + esc(v.pron) + '</span></span>' + A.sayBtn(v.w) + '</div><div class="d"><b>' + esc(v.idm) + '</b> — ' + esc(v.def) + '</div><div class="e">' + esc(v.ex) + '</div>' +
          '<div class="btns mt"><button type="button" class="btn sm" data-learn="' + v.id + '">+ Add to my vocabulary</button><span class="tag">' + v.level + '</span></div></div>';
      }).join('') + '</div><div class="btns mt"><button type="button" class="btn primary" data-learnall>Add all ' + sug.length + '</button></div>' : '<div class="empty">You have added every word from your unlocked stages. Unlock the next stage to get more.</div>');
    body.addEventListener('click', function (e) {
      var b = e.target.closest('[data-learn]');
      if (b) { A.addWord(b.getAttribute('data-learn')); b.textContent = '✓ Added'; b.disabled = true; A.autoTasks(); return; }
      if (e.target.closest('[data-learnall]')) { sug.forEach(function (v) { A.addWord(v.id); }); A.autoTasks(); A.route(); }
    });
  };

  // ---------------------------------------------------------- listening, reading and writing
  var textList = function (kind, base) {
    return A.STAGES.map(function (s) {
      var ts = A.TEXTS.filter(function (t) { return t.kind === kind && t.st === s.id; });
      if (!ts.length) return '';
      var un = A.isUnlocked(s.id);
      return '<div class="card mb"><h3>' + esc(s.name) + (un ? '' : ' <span class="tag lock">&#128274; Locked</span>') + '</h3><ul class="list">' + ts.map(function (t) {
        var r = A.S.texts[t.id];
        return '<li class="lrow"><div class="t">' + (un ? '<a class="title" href="#/' + base + '/' + t.id + '">' + esc(t.title) + '</a>' : '<span class="lock-ic">&#128274; ' + esc(t.title) + '</span>') +
          '<br><span class="muted" style="font-size:.86rem">' + esc(t.context || '') + '</span></div>' + (r ? '<span class="tag ok">Best ' + r.best + '%</span>' : '<span class="tag">New</span>') + '</li>';
      }).join('') + '</ul></div>';
    }).join('');
  };
  var textBody = function (t) {
    return (t.body || []).map(function (p) {
      return Array.isArray(p) ? '<p><b>' + esc(p[0]) + ':</b> ' + esc(p[1]) + ' ' + A.sayBtn(p[1]) + '</p>' : '<p>' + esc(p) + ' ' + A.sayBtn(p) + '</p>';
    }).join('');
  };
  var textPlain = function (t) { return (t.body || []).map(function (p) { return Array.isArray(p) ? p[1] : p; }); };
  V.listening = function (tid) {
    if (!tid) {
      view().innerHTML = head('Listening Lab', 'Listen to dialogues and announcements read by your browser\'s speech engine, answer questions and take dictation. A transcript is always available.') +
        (A.tts ? '' : '<div class="banner warn">Your browser does not provide speech audio. Use the transcripts as a reading alternative.</div>') + textList('listening', 'listening');
      return;
    }
    var t = A.TEXTS.filter(function (x) { return x.id === tid && x.kind === 'listening'; })[0];
    if (!t) return V.notFound();
    if (!A.isUnlocked(t.st)) { view().innerHTML = head(esc(t.title), '', '<a href="#/listening">Listening Lab</a>') + '<div class="banner warn">&#128274; ' + lockedNote(t.st) + '</div>'; return; }
    var lines = textPlain(t);
    var h = head(esc(t.title), esc(t.context || ''), '<a href="#/listening">Listening Lab</a> / ' + t.st);
    h += '<div class="card mb"><h3>1. Listen</h3><p class="muted">Listen once for the general idea, then again for details. ' + (A.tts ? '' : 'Audio is not available: open the transcript instead.') + '</p>' +
      '<div class="btns"><button type="button" class="btn primary" data-play' + (A.tts ? '' : ' disabled') + '>&#9654; Play</button><button type="button" class="btn" data-stop' + (A.tts ? '' : ' disabled') + '>Stop</button>' +
      '<label class="row" style="gap:.4em">Speed <select id="spd"><option value="0.75">0.75×</option><option value="0.9" selected>0.9×</option><option value="1">1×</option></select></label>' +
      '<button type="button" class="btn ghost" data-trans aria-expanded="false">Show transcript</button></div><div class="transcript" id="trans" hidden>' + textBody(t) + '</div></div>';
    h += '<div class="card mb"><h3>2. Answer the questions</h3><div id="lq"></div></div>';
    if (t.dict && t.dict.length) h += '<div class="card mb"><h3>3. Dictation</h3><p class="muted">Play each sentence and type exactly what you hear. Punctuation at the end does not matter.</p><div class="btns mb">' +
      t.dict.map(function (d, k) { return '<button type="button" class="btn sm" data-say="' + esc(d) + '">&#9654; Sentence ' + (k + 1) + '</button>'; }).join('') + '</div><div id="ld"></div></div>';
    view().innerHTML = h;
    var played = false;
    view().addEventListener('click', function (e) {
      if (e.target.closest('[data-play]')) {
        var k = 0, old = A.S.settings.ttsRate; A.S.settings.ttsRate = +$('#spd').value;
        var nx = function () { if (k < lines.length) A.speak(lines[k++], nx); else A.S.settings.ttsRate = old; }; nx(); played = true; return;
      }
      if (e.target.closest('[data-stop]')) { if (A.tts) window.speechSynthesis.cancel(); return; }
      var tr = e.target.closest('[data-trans]');
      if (tr) { var box = $('#trans'); box.hidden = !box.hidden; tr.textContent = box.hidden ? 'Show transcript' : 'Hide transcript'; tr.setAttribute('aria-expanded', !box.hidden); }
    });
    var save = function (res) {
      var r = A.S.texts[t.id] || (A.S.texts[t.id] = { best: 0 }); r.best = Math.max(r.best, res.score); r.last = A.today();
      A.day().listening = true; A.logHistory('listening', t.id, res.score); A.save(); A.autoTasks();
    };
    A.runItems($('#lq'), t.q || [], { mode: 'graded', onResult: save });
    if (t.dict && t.dict.length) A.runItems($('#ld'), t.dict.map(function (d, k) { return ['fill', 'Sentence ' + (k + 1) + ':', d, d]; }), { mode: 'graded', onResult: function () { A.day().listening = true; A.save(); } });
  };
  V.rw = function (tid) {
    if (tid === 'writing' || !tid) {
      var tab = tid === 'writing' ? 'writing' : '';
      var h = head('Reading &amp; Writing', 'Graded reading texts with comprehension questions, and every writing assignment from your lessons in one place.') + tabs('rw', [['', 'Reading'], ['writing', 'Writing tasks']], tab);
      if (tab === '') h += textList('reading', 'rw');
      else {
        h += A.STAGES.map(function (s) {
          var ls = A.stageLessons(s.id).filter(function (id) { return A.LESSONS[id] && A.LESSONS[id].write; });
          if (!ls.length) return '';
          return '<div class="card mb"><h3>' + esc(s.name) + '</h3><ul class="list">' + ls.map(function (id) {
            var l = A.LESSONS[id], r = A.S.lessons[id] || {}, d = A.S.writing[id];
            return '<li class="lrow"><div class="t">' + (A.lessonUnlocked(id) ? '<a class="title" href="#/lesson/' + id + '/write">' + esc(l.title) + '</a>' : '<span class="lock-ic">&#128274; ' + esc(l.title) + '</span>') +
              '<br><span class="muted" style="font-size:.86rem">' + esc(l.write.task) + '</span></div>' + (r.write ? '<span class="tag ok">Done</span>' : d ? '<span class="tag">Draft · ' + wordCount(d) + ' words</span>' : '<span class="tag">Not started</span>') + '</li>';
          }).join('') + '</ul></div>';
        }).join('');
      }
      view().innerHTML = h; return;
    }
    var t = A.TEXTS.filter(function (x) { return x.id === tid && x.kind === 'reading'; })[0];
    if (!t) return V.notFound();
    if (!A.isUnlocked(t.st)) { view().innerHTML = head(esc(t.title), '', '<a href="#/rw">Reading</a>') + '<div class="banner warn">&#128274; ' + lockedNote(t.st) + '</div>'; return; }
    var h2 = head(esc(t.title), esc(t.context || ''), '<a href="#/rw">Reading &amp; Writing</a> / ' + t.st);
    h2 += '<div class="card mb"><h3>Read</h3><div class="transcript" style="background:none;padding:0">' + textBody(t) + '</div>' +
      (t.gloss && t.gloss.length ? '<h4 class="mt">Glossary</h4><div class="expr">' + t.gloss.map(function (g) { return '<div><b>' + esc(g[0]) + '</b><small class="muted">' + esc(g[1]) + '</small></div>'; }).join('') + '</div>' : '') + '</div>';
    h2 += '<div class="card mb"><h3>Questions</h3><div id="rq"></div></div>';
    if (t.write) h2 += '<div class="card mb"><h3>Writing follow-up</h3><div class="assign"><p>' + esc(t.write) + '</p></div><div class="field mt"><label for="rw-t">Your text</label><textarea id="rw-t">' + esc(A.S.writing['text:' + t.id] || '') + '</textarea></div></div>';
    view().innerHTML = h2;
    A.runItems($('#rq'), t.q || [], { mode: 'graded', onResult: function (res) {
      var r = A.S.texts[t.id] || (A.S.texts[t.id] = { best: 0 }); r.best = Math.max(r.best, res.score); r.last = A.today();
      A.day().reading = true; A.logHistory('reading', t.id, res.score); A.save(); A.autoTasks();
    } });
    var ta = $('#rw-t'); if (ta) ta.addEventListener('input', function () { A.S.writing['text:' + t.id] = ta.value; if (wordCount(ta.value) >= 30) A.day().writing = true; A.save(); });
  };

  // ---------------------------------------------------------- speaking studio
  var shadowIdx = 0;
  V.speaking = function () {
    var cur = A.currentStage(), pool = [];
    A.stageLessons(cur).forEach(function (id) { var l = A.LESSONS[id]; if (l && l.ex) l.ex.forEach(function (e) { pool.push({ en: e[0], id: e[1], lesson: id }); }); });
    var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    var h = head('Speaking Studio', 'Shadow model sentences, record yourself, practise pronunciation and complete the speaking assignments from your lessons.');
    var s = pool.length ? pool[shadowIdx % pool.length] : null;
    h += '<div class="card mb"><h3>Shadowing practice · ' + esc(cur) + '</h3>' + (s ? '<p class="muted">1. Listen. 2. Repeat at the same speed and rhythm. 3. Record and compare.</p><p style="font-size:1.25rem"><b>' + esc(s.en) + '</b></p><p class="muted">' + esc(s.id) + '</p>' +
      '<div class="btns"><button type="button" class="btn primary" data-say="' + esc(s.en) + '">&#9654; Listen</button>' + (SR ? '<button type="button" class="btn" data-sr>&#127908; Check my pronunciation</button>' : '') + '<button type="button" class="btn" data-shnext>Next sentence &rarr;</button></div>' +
      '<div id="srres" class="mt" aria-live="polite"></div><div class="mt">' + recorderHTML('shadow') + '</div>' + (SR ? '' : '<p class="muted mt">Automatic pronunciation checking needs a browser with speech recognition (for example Chrome). Recording and playback still work.</p>') : '<div class="empty">Open a lesson first.</div>') + '</div>';
    var tasks = [];
    A.ORDER.forEach(function (id) { if (A.lessonUnlocked(id) && A.LESSONS[id] && A.LESSONS[id].speak) tasks.push(id); });
    h += '<div class="card mb"><h3>Speaking assignments from your lessons</h3><ul class="list">' + tasks.slice(0, 60).map(function (id) {
      var l = A.LESSONS[id];
      return '<li class="lrow"><div class="t"><a class="title" href="#/lesson/' + id + '/speak">' + esc(l.title) + '</a><br><span class="muted" style="font-size:.86rem">' + esc(l.speak.task) + '</span></div>' + ((A.S.lessons[id] || {}).speak ? '<span class="tag ok">Done</span>' : '<span class="tag">' + A.META[id].stage + '</span>') + '</li>';
    }).join('') + '</ul></div>';
    var prons = [];
    tasks.forEach(function (id) { ((A.LESSONS[id].speak || {}).pron || []).forEach(function (p) { prons.push(p); }); });
    if (prons.length) h += '<div class="card mb"><h3>Pronunciation drills</h3><ul class="list">' + prons.slice(0, 40).map(function (p) { var t = Array.isArray(p) ? p[0] : p, n = Array.isArray(p) ? p[1] : ''; return '<li class="lrow"><span class="t"><b>' + esc(t) + '</b>' + (n ? '<br><span class="muted">' + esc(n) + '</span>' : '') + '</span>' + A.sayBtn(t) + '</li>'; }).join('') + '</ul></div>';
    h += '<div class="card"><h3>Apply it</h3><p>Practise full conversations in the professional simulations.</p><a class="btn" href="#/sims">Open simulations</a></div>';
    view().innerHTML = h;
    bindRecorder(view());
    view().addEventListener('click', function (e) {
      if (e.target.closest('[data-shnext]')) { shadowIdx++; A.route(); return; }
      if (e.target.closest('[data-sr]') && s) {
        var rec = new SR(); rec.lang = 'en-US'; rec.interimResults = false; rec.maxAlternatives = 1;
        $('#srres').textContent = 'Listening… say the sentence now.';
        rec.onresult = function (ev) {
          var said = ev.results[0][0].transcript, sim = similarity(said, s.en);
          $('#srres').innerHTML = '<div class="fb ' + (sim >= 0.8 ? 'ok' : 'no') + '"><b>Recognised: “' + esc(said) + '”</b>Word match: ' + Math.round(sim * 100) + '%. ' + (sim >= 0.8 ? 'Clear and understandable.' : 'Listen again and focus on the words that were not recognised.') + '</div>';
          A.day().speaking = true; A.save(); A.autoTasks();
        };
        rec.onerror = function () { $('#srres').textContent = 'Speech recognition could not hear you. Check microphone permission and try again.'; };
        try { rec.start(); } catch (x) { $('#srres').textContent = 'Speech recognition is busy. Try again.'; }
      }
    });
  };
  var similarity = A.similarity = function (a, b) {
    var wa = A.norm(a).replace(/[^a-z0-9' ]/g, '').split(' '), wb = A.norm(b).replace(/[^a-z0-9' ]/g, '').split(' ');
    var hit = 0, pool = wb.slice(); wa.forEach(function (w) { var k = pool.indexOf(w); if (k >= 0) { hit++; pool.splice(k, 1); } });
    return wb.length ? hit / Math.max(wb.length, wa.length) : 0;
  };

  // ---------------------------------------------------------- business english
  V.business = function () {
    var pro = A.stageById('PRO'), un = A.isUnlocked('PRO');
    var h = head('Business English', 'Professional English for business communication, product management, data and technology, leadership and career development.');
    if (!un) h += '<div class="banner warn">&#128274; Professional lessons open after the C1 assessment (or a placement result at that level). The phrase bank below is available now.</div>';
    h += '<div class="grid g2 mb">' + (pro ? pro.modules.map(function (m) {
      var d = m.lessons.filter(A.isDone).length;
      return '<div class="card"><h3>' + esc(m.title) + '</h3><p class="muted">' + d + ' / ' + m.lessons.length + ' lessons</p>' + bar(A.pct(d, m.lessons.length)) + '<ul class="list mt">' + m.lessons.map(function (id) {
        return '<li class="lrow"><div class="t">' + lessonLink(id) + '</div>' + statusTag(id) + '</li>';
      }).join('') + '</ul></div>';
    }).join('') : '') + '</div>';
    var phrases = [];
    if (pro) A.stageLessons('PRO').forEach(function (id) { var l = A.LESSONS[id]; if (l && l.expr) l.expr.forEach(function (x) { phrases.push({ p: x[0], u: x[1], l: id }); }); });
    h += '<div class="card"><h3>Business phrase bank (' + phrases.length + ')</h3><div class="field"><label for="pq">Search phrases</label><input type="search" id="pq" placeholder="e.g. deadline, agree, update"></div><div id="pres"></div></div>';
    view().innerHTML = h;
    var draw = function (q) {
      q = A.norm(q || '');
      var list = phrases.filter(function (x) { return !q || A.norm(x.p + ' ' + x.u).indexOf(q) >= 0; });
      $('#pres').innerHTML = list.length ? '<div class="expr">' + list.slice(0, 80).map(function (x) { return '<div>' + esc(x.p) + ' ' + A.sayBtn(x.p) + '<small class="muted">' + esc(x.u) + ' · ' + esc(A.LESSONS[x.l].title) + '</small></div>'; }).join('') + '</div>' : '<div class="empty">No phrase found.</div>';
    };
    draw(''); $('#pq').addEventListener('input', function () { draw(this.value); });
  };

  // ---------------------------------------------------------- simulations
  V.sims = function (sid) {
    if (!sid) {
      var h = head('Professional Simulations', 'Ten realistic workplace scenarios. Read the brief, study the language, listen to the sample, then complete your own version and assess it with the rubric.');
      h += '<div class="grid g2">' + A.SIMS.map(function (s, i) {
        var r = A.S.sims[s.id];
        return '<a class="card link" href="#/sim/' + s.id + '"><div class="row between"><span class="tag">Simulation ' + (i + 1) + ' · ' + esc(s.level) + '</span>' + (r && r.done ? '<span class="tag ok">Done ' + r.score + '%</span>' : '') + '</div><h3 class="mt">' + esc(s.title) + '</h3><p class="muted">' + esc(s.scenario.slice(0, 150)) + (s.scenario.length > 150 ? '…' : '') + '</p></a>';
      }).join('') + '</div>';
      view().innerHTML = h; return;
    }
    var s = A.SIMS.filter(function (x) { return x.id === sid; })[0]; if (!s) return V.notFound();
    var r = A.S.sims[s.id] || {};
    var h2 = head(esc(s.title), 'Recommended level: ' + esc(s.level), '<a href="#/sims">Professional Simulations</a>');
    h2 += '<div class="sec"><h2><span class="n">1</span>Scenario</h2><p>' + esc(s.scenario) + '</p><div class="sim-meta"><div class="assign"><b>Your role</b><p>' + esc(s.role) + '</p></div><div class="assign"><b>Your objective</b><p>' + esc(s.objective) + '</p></div></div></div>';
    h2 += '<div class="sec"><h2><span class="n">2</span>Useful vocabulary</h2><div class="expr">' + s.vocab.map(function (v) { return '<div><b>' + esc(v[0]) + '</b> ' + A.sayBtn(v[0]) + '<small class="muted">' + esc(v[1]) + '</small></div>'; }).join('') + '</div></div>';
    h2 += '<div class="sec"><h2><span class="n">3</span>Recommended expressions</h2><div class="expr">' + s.expr.map(function (x) { return '<div>' + esc(x[0]) + ' ' + A.sayBtn(x[0]) + '<small class="muted">' + esc(x[1]) + '</small></div>'; }).join('') + '</div></div>';
    h2 += '<div class="sec"><h2><span class="n">4</span>Sample conversation</h2><div class="btns mb"><button type="button" class="btn sm" data-playconvo>&#9654; Play the conversation</button></div><div class="dlg">' + s.convo.map(function (x) {
      return '<div class="ln"><span class="who">' + esc(x[0]) + '</span><span>' + esc(x[1]) + '</span>' + A.sayBtn(x[1]) + '</div>';
    }).join('') + '</div></div>';
    h2 += '<div class="sec"><h2><span class="n">5</span>Your assignment</h2><div class="assign"><p>' + esc(s.task) + '</p></div><div class="field mt"><label for="simt">Your script or notes <span class="muted" id="simwc">(' + wordCount(r.text || '') + ' words)</span></label><textarea id="simt">' + esc(r.text || '') + '</textarea></div>' +
      recorderHTML('sim-' + s.id) + '</div>';
    h2 += '<div class="sec"><h2><span class="n">6</span>Assessment rubric</h2><p class="muted">Rate your performance honestly from 1 (not yet) to 4 (excellent). Ask a colleague or your lecturer to rate you too if possible.</p>' + s.rubric.map(function (c, k) {
      var val = (r.rub || [])[k] || '';
      return '<div class="rub"><div><b>' + esc(c[0]) + '</b><br><span class="muted" style="font-size:.86rem">4 = ' + esc(c[1]) + ' · 1 = ' + esc(c[2]) + '</span></div><select data-rub="' + k + '" aria-label="Score for ' + esc(c[0]) + '"><option value="">–</option>' +
        [1, 2, 3, 4].map(function (n) { return '<option' + (+val === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') + '</select></div>';
    }).join('') + '<div class="btns mt"><button type="button" class="btn primary" data-simsave>Save self-assessment</button><span id="simscore" class="muted">' + (r.done ? 'Saved score: ' + r.score + '%' : '') + '</span></div></div>';
    view().innerHTML = h2;
    bindRecorder(view());
    $('#simt').addEventListener('input', function () { var v = this.value; $('#simwc').textContent = '(' + wordCount(v) + ' words)'; var rr = A.S.sims[s.id] || (A.S.sims[s.id] = {}); rr.text = v; A.save(); });
    view().addEventListener('click', function (e) {
      if (e.target.closest('[data-playconvo]')) { var k = 0, ls = s.convo.map(function (x) { return x[1]; }); var nx = function () { if (k < ls.length) A.speak(ls[k++], nx); }; nx(); return; }
      if (e.target.closest('[data-simsave]')) {
        var vals = $$('[data-rub]').map(function (x) { return +x.value || 0; });
        if (vals.some(function (v) { return !v; })) { A.toast('Rate every criterion first'); return; }
        var rr = A.S.sims[s.id] || (A.S.sims[s.id] = {});
        rr.rub = vals; rr.score = Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / (vals.length * 4) * 100); rr.done = true; rr.date = A.today();
        A.day().speaking = true; A.logHistory('simulation', s.id, rr.score); A.save(); A.autoTasks();
        $('#simscore').textContent = 'Saved score: ' + rr.score + '%'; A.toast('Self-assessment saved');
      }
    });
  };

  // ---------------------------------------------------------- assessments
  V.assess = function (kind, sid) {
    if (kind === 'placement') return placement();
    if (kind === 'stage') return stageAssessment(sid);
    if (kind === 'final') return finalAssessment();
    var P = A.S.placement, F = A.S.final;
    var h = head('Assessments', 'Placement test, six stage assessments and the final professional assessment. You can revise and retake any assessment.');
    h += '<div class="grid g2 mb"><div class="card"><h3>Placement test</h3><p>Grammar, vocabulary, reading, listening, writing and a speaking self-assessment. About 30 minutes.</p>' +
      (P ? '<p>Taken ' + A.fmtDate(P.date) + ' · start at <b>' + esc(P.start) + '</b></p>' : '') + '<a class="btn primary" href="#/assess/placement">' + (P ? 'Retake' : 'Start') + ' placement test</a></div>' +
      '<div class="card"><h3>Final assessment</h3><p>Business writing, professional conversation, meeting simulation, presentation, business vocabulary and grammar accuracy.</p>' +
      (F ? '<p>Best score <b>' + F.best + '%</b> · ' + (F.passed ? '<span class="tag ok">Passed</span>' : '<span class="tag">Not passed yet</span>') + '</p>' : '') +
      (A.isUnlocked('PRO') ? '<a class="btn" href="#/assess/final">' + (F ? 'Retake' : 'Start') + ' final assessment</a>' : '<p class="muted">&#128274; Opens with the Professional stage.</p>') + '</div></div>';
    h += '<div class="card"><h3>Stage assessments</h3><p class="muted">Pass mark ' + CFG.stagePass + '%. Passing unlocks the next stage.</p><div class="tblwrap"><table class="t"><thead><tr><th>Stage</th><th>Status</th><th>Readiness</th><th>Best</th><th>Attempts</th><th></th></tr></thead><tbody>' +
      A.STAGE_IDS.map(function (s) {
        var r = A.S.stages[s], un = A.isUnlocked(s), rd = A.readiness(s), by = A.stagePassedBy(s);
        return '<tr><td><b>' + esc(stageName(s)) + '</b></td><td>' + (by ? '<span class="tag ok">Passed' + (by === 'placement' ? ' (placement)' : '') + '</span>' : un ? '<span class="tag">Open</span>' : '<span class="tag lock">&#128274; Locked</span>') + '</td>' +
          '<td>' + (un ? rd.share + '% lessons · avg ' + rd.avg + '%' + (rd.ready ? ' <span class="tag ok">Ready</span>' : '') : '—') + '</td><td>' + (r ? r.best + '%' : '—') + '</td><td>' + (r ? r.attempts.length : 0) + '</td>' +
          '<td>' + (un ? '<a class="btn sm" href="#/assess/stage/' + s + '">' + (r ? 'Retake' : 'Start') + '</a>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
    view().innerHTML = h;
  };
  var revisionHTML = function (wrong) {
    var ls = []; wrong.forEach(function (w) { var ref = A.itemRef(w.item); if (ref && ls.indexOf(ref) < 0) ls.push(ref); });
    if (!wrong.length) return '<p>All answers correct.</p>';
    return '<div class="card mt"><h3>Incorrect answer analysis</h3><p>' + wrong.length + ' question' + (wrong.length === 1 ? '' : 's') + ' to review. Read the explanation under each question above.</p>' +
      (ls.length ? '<h4>Suggested revision lessons</h4><ul>' + ls.map(function (id) { return '<li>' + lessonLink(id) + ' <span class="muted">(' + A.META[id].stage + ')</span></li>'; }).join('') + '</ul>' : '') + '</div>';
  };
  var stageAssessment = function (sid) {
    var s = A.stageById(sid), data = (A.ASSESS.stages || {})[sid];
    if (!s || !data) return V.notFound();
    var h = head(esc(data.title || s.name + ' assessment'), esc(data.intro || ''), '<a href="#/assess">Assessments</a> / ' + esc(s.short));
    if (!A.isUnlocked(sid)) { view().innerHTML = h + '<div class="banner warn">&#128274; ' + lockedNote(sid) + '</div>'; return; }
    var rd = A.readiness(sid), r = A.S.stages[sid];
    h += '<div class="banner ' + (rd.ready ? 'info' : 'warn') + '"><b>Readiness:</b> ' + rd.share + '% of ' + esc(s.short) + ' lessons done, average completion score ' + rd.avg + '%. ' +
      (rd.ready ? 'You are ready.' : 'You can take the assessment now, but finishing more lessons first will help.') + ' Pass mark ' + CFG.stagePass + '%' + (r ? ' · best so far ' + r.best + '%' : '') + '.</div><div id="ahost"></div>';
    view().innerHTML = h;
    A.runItems($('#ahost'), data.items, { mode: 'graded', passMark: CFG.stagePass, after: function (res) { return revisionHTML(res.wrong); }, onResult: function (res, box) {
      var rr = A.S.stages[sid] || (A.S.stages[sid] = { best: 0, passed: false, attempts: [] });
      rr.attempts.push({ d: A.today(), score: res.score }); rr.best = Math.max(rr.best, res.score); if (res.pass) rr.passed = true;
      A.day().tests = (A.day().tests || 0) + 1; A.logHistory('stage', sid, res.score); A.save();
      var i = A.STAGE_IDS.indexOf(sid), nx = A.STAGE_IDS[i + 1];
      if (res.pass) box.insertAdjacentHTML('afterbegin', '<div class="done-banner">&#10003; ' + esc(s.name) + ' passed.' + (nx ? ' ' + esc(stageName(nx)) + ' is now unlocked. <a class="btn sm primary" href="#/stage/' + nx + '">Go to ' + nx + '</a>' : ' <a class="btn sm primary" href="#/assess/final">Final assessment</a>') + '</div>');
    } });
  };
  var placement = function () {
    var P = A.ASSESS.placement; if (!P) return V.notFound();
    var h = head('Placement test', esc(P.intro || ''), '<a href="#/assess">Assessments</a> / Placement');
    var all = [];
    P.sections.forEach(function (sec) { sec.items.forEach(function (x) { all.push({ lv: x[0], it: x[1], sec: sec.id }); }); });
    h += P.sections.map(function (sec) {
      var top = '';
      if (sec.passage) top += '<div class="transcript">' + sec.passage.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>';
      if (sec.audio) top += '<div class="btns"><button type="button" class="btn primary" data-say="' + esc(sec.audio.join(' ')) + '"' + (A.tts ? '' : ' disabled') + '>&#9654; Play audio</button><button type="button" class="btn ghost" data-ptrans="' + sec.id + '">' + (A.tts ? 'Can\'t play it? Show transcript' : 'Show transcript (audio unavailable)') + '</button></div><div class="transcript" id="pt-' + sec.id + '" hidden>' + sec.audio.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</div>';
      return '<div class="sec"><h2>' + esc(sec.title) + '</h2><p class="muted">' + esc(sec.intro || '') + '</p>' + top + '<div class="mt" data-psec="' + sec.id + '"></div></div>';
    }).join('');
    h += '<div class="sec"><h2>Writing</h2><div class="assign"><p>' + esc(P.writing.prompt) + '</p></div><div class="field mt"><label for="pw">Your text <span class="muted" id="pwc">(0 words)</span></label><textarea id="pw"></textarea></div>' +
      '<div class="field"><label for="pwl">Which description best matches your text? (self-assessment)</label><select id="pwl"><option value="">Choose…</option>' + P.writing.levels.map(function (x) { return '<option value="' + x[0] + '">' + esc(x[1]) + '</option>'; }).join('') + '</select></div></div>';
    h += '<div class="sec"><h2>Speaking self-assessment</h2><p class="muted">Tick every statement that is true for you today.</p>' + P.speaking.map(function (x, k) {
      return '<label class="row" style="align-items:flex-start;margin:.35em 0"><input type="checkbox" data-can="' + x[0] + '" id="can' + k + '"><span>' + esc(x[1]) + '</span></label>';
    }).join('') + '</div><div class="btns"><button type="button" class="btn primary" data-place>Finish and see my level</button></div><div id="pres" class="mt"></div>';
    view().innerHTML = h;
    // render each section's items in a single combined grading host per section (no per-section submit)
    var hosts = {};
    P.sections.forEach(function (sec) {
      var host = $('[data-psec="' + sec.id + '"]'); hosts[sec.id] = host;
      var its = sec.items.map(function (x) { return x[1]; });
      host.innerHTML = '';
      A.runItems(host, its, { mode: 'graded' });
      var sb = host.querySelector('[data-submit]'); if (sb) sb.parentNode.remove();   // one submit for the whole test
    });
    $('#pw').addEventListener('input', function () { $('#pwc').textContent = '(' + wordCount(this.value) + ' words)'; });
    view().addEventListener('click', function (e) {
      var tr = e.target.closest('[data-ptrans]'); if (tr) { var b = $('#pt-' + tr.getAttribute('data-ptrans')); b.hidden = !b.hidden; return; }
      if (!e.target.closest('[data-place]')) return;
      var per = {}; A.STAGE_IDS.forEach(function (s) { per[s] = { c: 0, n: 0 }; });
      var wrongAll = [];
      P.sections.forEach(function (sec) {
        var host = hosts[sec.id];
        $$('.item', host).forEach(function (el, k) {
          var x = sec.items[k], it = x[1];
          var resp = (function () {
            if (it[0] === 'mc') { var c = el.querySelector('input:checked'); return c ? +c.value : null; }
            if (it[0] === 'fill' || it[0] === 'fix') return el.querySelector('.ans').value;
            if (it[0] === 'order') return $$('.built .tok', el).map(function (b) { return b.getAttribute('data-t'); }).join(' ');
            if (it[0] === 'match') return $$('select', el).map(function (s) { return s.value; });
          })();
          var ok = A.gradeItem(it, resp); per[x[0]].n++; if (ok) per[x[0]].c++; else wrongAll.push(x);
          el.querySelector('.fbx').innerHTML = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? 'Correct.' : 'Not quite.') + '</b>' + (ok ? '' : 'Answer: <strong>' + esc(A.answerText(it)) + '</strong><br>') + esc(A.explanation(it)) + '</div>';
          $$('input,select,button.tok', el).forEach(function (q) { q.disabled = true; });
        });
      });
      var th = CFG.placementLevelThreshold || 60, highest = -1;
      for (var i = 0; i < A.STAGE_IDS.length; i++) { var s = A.STAGE_IDS[i], p = per[s]; if (!p.n) continue; if (A.pct(p.c, p.n) >= th) highest = i; else break; }
      var start = A.STAGE_IDS[Math.min(highest + 1, A.STAGE_IDS.length - 1)];
      var can = {}; $$('[data-can]').forEach(function (c) { if (c.checked) can[c.getAttribute('data-can')] = (can[c.getAttribute('data-can')] || 0) + 1; });
      var spk = null; A.STAGE_IDS.forEach(function (s) { if (can[s]) spk = s; });
      var wl = $('#pwl').value || null, words = wordCount($('#pw').value);
      A.S.placement = { date: A.today(), per: per, start: start, writing: wl, writingWords: words, speaking: spk };
      A.logHistory('placement', start, null); A.save();
      var objTotal = 0, objC = 0; A.STAGE_IDS.forEach(function (s) { objTotal += per[s].n; objC += per[s].c; });
      $('#pres').innerHTML = '<div class="scorebox pass"><span class="big">Start at ' + esc(start) + '</span><span>' + objC + ' of ' + objTotal + ' objective questions correct. ' +
        (highest >= 0 ? 'Stages up to ' + esc(A.STAGE_IDS[highest]) + ' are marked as passed by placement.' : 'Begin with the first stage.') + '</span></div>' +
        '<div class="card"><h3>Results by level</h3><table class="t"><thead><tr><th>Level</th><th>Correct</th><th>Score</th></tr></thead><tbody>' + A.STAGE_IDS.filter(function (s) { return per[s].n; }).map(function (s) {
          return '<tr><td>' + s + '</td><td>' + per[s].c + ' / ' + per[s].n + '</td><td>' + A.pct(per[s].c, per[s].n) + '%</td></tr>';
        }).join('') + '</tbody></table><p class="mt">Writing (self-assessed): <b>' + esc(wl || 'not rated') + '</b> · ' + words + ' words. Speaking (self-assessed): <b>' + esc(spk || 'below A1') + '</b>.</p>' +
        ((wl && A.STAGE_IDS.indexOf(wl) < highest) || (spk && A.STAGE_IDS.indexOf(spk) < highest) ? '<p class="banner warn">Your productive skills (speaking or writing) look lower than your reading and grammar. Spend extra time in the Speaking Studio and on writing tasks.</p>' : '') +
        '<div class="btns mt"><a class="btn primary" href="#/stage/' + start + '">Go to ' + esc(start) + '</a><a class="btn" href="#/">Dashboard</a></div></div>';
      e.target.closest('[data-place]').remove();
      $('#pres').scrollIntoView({ behavior: 'smooth' });
    });
  };
  var finalAssessment = function () {
    var F = A.ASSESS.final; if (!F) return V.notFound();
    var h = head(esc(F.title), esc(F.intro), '<a href="#/assess">Assessments</a> / Final');
    if (!A.isUnlocked('PRO')) { view().innerHTML = h + '<div class="banner warn">&#128274; ' + lockedNote('PRO') + '</div>'; return; }
    h += '<div class="sec"><h2>Part 1 · Business vocabulary and grammar accuracy (auto-scored)</h2><div id="fa"></div></div>';
    h += F.tasks.map(function (t, k) {
      return '<div class="sec"><h2>Part ' + (k + 2) + ' · ' + esc(t.title) + '</h2><div class="assign"><p>' + esc(t.prompt) + '</p></div><div class="field mt"><label for="ft' + k + '">Your response, script or notes</label><textarea id="ft' + k + '">' + esc(((A.S.final || {}).texts || [])[k] || '') + '</textarea></div>' +
        t.rubric.map(function (c, j) { return '<div class="rub"><div><b>' + esc(c[0]) + '</b><br><span class="muted" style="font-size:.86rem">4 = ' + esc(c[1]) + ' · 1 = ' + esc(c[2]) + '</span></div><select data-fr="' + k + '-' + j + '" aria-label="' + esc(c[0]) + '"><option value="">–</option><option>1</option><option>2</option><option>3</option><option>4</option></select></div>'; }).join('') + '</div>';
    }).join('');
    h += '<div class="btns"><button type="button" class="btn primary" data-final>Calculate final result</button></div><div id="fres" class="mt"></div>';
    view().innerHTML = h;
    var auto = null;
    A.runItems($('#fa'), F.items, { mode: 'graded', after: function (res) { return revisionHTML(res.wrong); }, onResult: function (res) { auto = res.score; } });
    view().addEventListener('click', function (e) {
      if (!e.target.closest('[data-final]')) return;
      if (auto === null) { A.toast('Submit Part 1 first'); return; }
      var vals = $$('[data-fr]').map(function (s) { return +s.value || 0; });
      if (vals.some(function (v) { return !v; })) { A.toast('Rate every rubric criterion'); return; }
      var rub = Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / (vals.length * 4) * 100);
      var score = Math.round(auto * 0.5 + rub * 0.5), pass = score >= CFG.finalPass;
      var prev = A.S.final || { best: 0, attempts: [] };
      A.S.final = { best: Math.max(prev.best || 0, score), passed: !!(prev.passed || pass), attempts: (prev.attempts || []).concat([{ d: A.today(), score: score, auto: auto, rubric: rub }]),
        texts: F.tasks.map(function (_, k) { return $('#ft' + k).value; }) };
      A.logHistory('final', 'final', score); A.save();
      $('#fres').innerHTML = '<div class="scorebox ' + (pass ? 'pass' : 'fail') + '"><span class="big">' + score + '%</span><span>Auto-scored part ' + auto + '% (50%) + rubric self-assessment ' + rub + '% (50%). Pass mark ' + CFG.finalPass + '%.<br>' +
        (pass ? 'Well done: you have completed the Professional English path.' : 'Not passed yet. Revise the suggested lessons and repeat the performance tasks.') + '</span></div><p class="muted">Rubric scores are self-assessed. For a reliable result, ask a lecturer or colleague to score the four performance tasks with the same rubric.</p>';
    });
  };

  // ---------------------------------------------------------- progress and analytics
  V.progress = function () {
    var ov = A.overall(), vs = A.vocabStats();
    var h = head('Progress &amp; Analytics', 'How your learning is going across stages, skills, vocabulary and assessments.');
    h += '<div class="grid g4 mb"><div class="card stat"><div class="k">Overall</div><div class="v">' + ov.pct + '%</div><div class="s">' + ov.lessons + ' / ' + ov.total + ' lessons</div></div>' +
      '<div class="card stat"><div class="k">Level</div><div class="v">' + esc(A.levelLabel()) + '</div></div><div class="card stat"><div class="k">Streak</div><div class="v">' + A.streak() + ' days</div></div>' +
      '<div class="card stat"><div class="k">Words learned</div><div class="v">' + vs.known + '</div><div class="s">' + vs.mastered + ' mastered</div></div></div>';
    h += '<div class="grid g2"><div class="card"><h3>Lessons completed by stage</h3>' + chartBars(A.STAGE_IDS.map(function (s) { return { label: s, v: A.stageProgress(s).pct }; }), { label: 'Percent of lessons completed per stage', unit: '%', min: 100 }) + '</div>';
    var days = []; for (var i = 13; i >= 0; i--) { var d = A.addDays(A.today(), -i); days.push({ label: d.slice(8), v: A.dayMinutes(d) }); }
    h += '<div class="card"><h3>Study minutes · last 14 days</h3>' + chartBars(days, { label: 'Study minutes per day' }) + '</div></div>';
    var avgs = A.STAGE_IDS.map(function (s) {
      var sc = A.stageLessons(s).map(function (id) { return ((A.S.lessons[id] || {}).test || {}).best; }).filter(function (x) { return x != null; });
      return { label: s, v: sc.length ? Math.round(sc.reduce(function (a, b) { return a + b; }, 0) / sc.length) : 0 };
    });
    h += '<div class="grid g2 mt"><div class="card"><h3>Average completion score by stage</h3>' + chartBars(avgs, { label: 'Average completion score', unit: '%', min: 100 }) + '</div>' +
      '<div class="card"><h3>Vocabulary</h3>' + chartBars([{ label: 'New', v: vs.fresh }, { label: 'Learning', v: vs.learning }, { label: 'Learned', v: vs.learned }, { label: 'Mastered', v: vs.mastered }], { label: 'Vocabulary by review stage' }) + '</div></div>';
    var skill = {}; A.ORDER.forEach(function (id) { var l = A.LESSONS[id], r = A.S.lessons[id]; if (!l || !r || !r.test) return; var k = TYPE[l.type]; (skill[k] = skill[k] || []).push(r.test.best); });
    h += '<div class="card mt"><h3>Skill accuracy (completion scores by lesson type)</h3>' + (Object.keys(skill).length ? '<table class="t"><tbody>' + Object.keys(skill).map(function (k) {
      var a = Math.round(skill[k].reduce(function (x, y) { return x + y; }, 0) / skill[k].length); return '<tr><td>' + k + '</td><td style="width:60%">' + bar(a) + '</td><td>' + a + '%</td></tr>';
    }).join('') + '</tbody></table>' : '<p class="muted">Complete a lesson to see your skill profile.</p>') + '</div>';
    var hist = A.S.history.filter(function (x) { return x.kind === 'stage' || x.kind === 'placement' || x.kind === 'final'; }).slice(-20).reverse();
    h += '<div class="card mt"><h3>Assessment history</h3>' + (hist.length ? '<table class="t"><thead><tr><th>Date</th><th>Assessment</th><th>Result</th></tr></thead><tbody>' + hist.map(function (x) {
      return '<tr><td>' + A.fmtDate(x.d) + '</td><td>' + (x.kind === 'stage' ? esc(stageName(x.ref)) : x.kind === 'placement' ? 'Placement test' : 'Final assessment') + '</td><td>' + (x.kind === 'placement' ? 'Start at ' + esc(x.ref) : x.score + '%') + '</td></tr>';
    }).join('') + '</tbody></table>' : '<p class="muted">No assessments taken yet.</p>') + '</div>';
    var weak = A.ORDER.filter(function (id) { var r = A.S.lessons[id]; return r && r.test && r.test.best < 80; }).slice(0, 8);
    h += '<div class="card mt"><h3>Lessons to revise</h3>' + (weak.length ? '<ul>' + weak.map(function (id) { return '<li>' + lessonLink(id) + ' · best ' + A.S.lessons[id].test.best + '%</li>'; }).join('') + '</ul>' : '<p class="muted">Nothing below 80% yet.</p>') + '</div>';
    view().innerHTML = h;
  };

  // ---------------------------------------------------------- settings
  V.settings = function () {
    var st = A.S.settings, p = st.plan;
    var h = head('Settings', 'Appearance, study plan, audio, language support, backup and reset.');
    h += '<div class="grid g2"><div class="card"><h3>Appearance</h3><div class="field"><label for="th">Theme</label><select id="th"><option value="system">Follow my device</option><option value="light">Light</option><option value="dark">Dark</option></select></div>' +
      '<h3 class="mt">Language support</h3><label class="row"><input type="checkbox" id="sid"' + (st.showId ? ' checked' : '') + '> Show Indonesian explanations and translations</label><p class="muted" style="font-size:.88rem">Tip: switch this off at B2 and above to train thinking in English.</p></div>' +
      '<div class="card"><h3>Daily study plan (minutes)</h3>' + A.TASKS.map(function (t) {
        return '<div class="field"><label for="pl-' + t.k + '">' + t.name + '</label><input type="number" min="0" max="180" step="5" id="pl-' + t.k + '" data-plan="' + t.k + '" value="' + (+p[t.k] || 0) + '"></div>';
      }).join('') + '<p><b>Total: <span id="pltot">' + A.planTotal() + '</span> minutes per day</b></p><div class="field"><label for="vt">New words per day</label><input type="number" min="1" max="50" id="vt" value="' + st.vocabTarget + '"></div>' +
      '<button type="button" class="btn sm" data-resetplan>Restore the 60-minute default</button></div></div>';
    h += '<div class="grid g2 mt"><div class="card"><h3>Audio</h3>' + (A.tts ? '<div class="field"><label for="vo">English voice</label><select id="vo"><option value="">Automatic</option></select></div>' +
      '<div class="field"><label for="rt">Speed <span id="rtv">' + st.ttsRate + '×</span></label><input type="range" id="rt" min="0.6" max="1.2" step="0.05" value="' + st.ttsRate + '"></div><button type="button" class="btn sm" data-say="Hello! This is how English sounds with this voice.">&#9654; Test voice</button>'
      : '<p class="muted">This browser does not provide speech audio. Transcripts are available everywhere instead.</p>') + '</div>' +
      '<div class="card"><h3>Backup</h3><p>Your progress is stored only in this browser on this device. It does not sync to other devices. Export a backup file to keep it safe or to move it to another browser.</p>' +
      '<div class="btns"><button type="button" class="btn primary" data-export>Export progress (JSON)</button><label class="btn" for="imp">Import backup</label><input type="file" id="imp" accept="application/json,.json" class="sr"></div>' +
      '<p class="muted mt">Storage status: ' + (A.storageOK ? 'saving normally' : '<b>not available</b> (private browsing or blocked storage)') + '.</p></div></div>';
    h += '<div class="grid g2 mt"><div class="card"><h3>Assessment rules</h3><ul><li>Lesson completion: ' + CFG.lessonPass + '% on the completion assessment</li><li>Stage assessment: ' + CFG.stagePass + '% unlocks the next stage</li>' +
      '<li>Placement: a level counts as passed at ' + CFG.placementLevelThreshold + '% or more</li><li>Final assessment: ' + CFG.finalPass + '% (50% auto-scored, 50% rubric)</li><li>Spaced repetition: ' + A.IV.join(', ') + ' days</li></ul><p class="muted">Retakes are always allowed.</p></div>' +
      '<div class="card" style="border-color:var(--red)"><h3>Reset progress</h3><p>Delete all lessons, scores, vocabulary, plans and settings saved in this browser. This cannot be undone; export a backup first.</p><button type="button" class="btn danger" data-reset>Reset all progress…</button></div></div>';
    h += '<p class="muted mt">English Learning Academy · curriculum version ' + esc(A.CUR.version || '') + ' · ' + A.ORDER.length + ' lessons in ' + A.STAGES.length + ' stages.</p>';
    view().innerHTML = h;
    $('#th').value = st.theme;
    $('#th').addEventListener('change', function () { st.theme = this.value; A.save(); A.applyTheme(); });
    $('#sid').addEventListener('change', function () { st.showId = this.checked; A.save(); document.documentElement.classList.toggle('hide-id', !st.showId); });
    $$('[data-plan]').forEach(function (inp) { inp.addEventListener('change', function () { p[inp.getAttribute('data-plan')] = Math.max(0, Math.min(180, +inp.value || 0)); A.save(); $('#pltot').textContent = A.planTotal(); }); });
    $('#vt').addEventListener('change', function () { st.vocabTarget = Math.max(1, Math.min(50, +this.value || 10)); A.save(); });
    if (A.tts) {
      var fill = function () { var sel = $('#vo'); if (!sel) return; sel.innerHTML = '<option value="">Automatic</option>' + A.voices().map(function (v) { return '<option' + (v.name === st.voice ? ' selected' : '') + '>' + esc(v.name) + '</option>'; }).join(''); };
      fill(); window.speechSynthesis.onvoiceschanged = fill;
      $('#vo').addEventListener('change', function () { st.voice = this.value; A.save(); });
      $('#rt').addEventListener('input', function () { st.ttsRate = +this.value; $('#rtv').textContent = this.value + '×'; A.save(); });
    }
    view().addEventListener('click', function (e) {
      if (e.target.closest('[data-resetplan]')) { st.plan = Object.assign({}, CFG.dailyPlan); A.save(); A.route(); return; }
      if (e.target.closest('[data-export]')) {
        var blob = new Blob([A.exportJSON()], { type: 'application/json' }), a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'english-academy-progress-' + A.today() + '.json'; document.body.appendChild(a); a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000); A.toast('Backup downloaded'); return;
      }
      if (e.target.closest('[data-reset]')) {
        A.modal('<h3>Reset all progress?</h3><p>This deletes everything saved in this browser. Type <b>RESET</b> to confirm.</p><div class="field"><input type="text" id="rsin" autocomplete="off" aria-label="Type RESET"></div><div class="btns"><button type="button" class="btn danger" id="rsgo">Reset</button><button type="button" class="btn" data-close>Cancel</button></div>', function (bg, close) {
          bg.querySelector('#rsgo').addEventListener('click', function () {
            if (bg.querySelector('#rsin').value.trim().toUpperCase() !== 'RESET') { A.toast('Type RESET to confirm'); return; }
            A.resetAll(); close(); A.applyTheme(); A.toast('Progress reset'); location.hash = '#/';
          });
        });
      }
    });
    $('#imp').addEventListener('change', function () {
      var f = this.files && this.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { A.importJSON(String(rd.result)); A.applyTheme(); A.toast('Backup imported'); A.route(); }
        catch (err) { A.modal('<h3>Import failed</h3><p>' + esc(err.message) + '</p><div class="btns"><button type="button" class="btn" data-close>Close</button></div>'); }
      };
      rd.readAsText(f);
    });
  };

  V.notFound = function () { view().innerHTML = head('Page not found', 'This page does not exist.') + '<a class="btn primary" href="#/">Go to the dashboard</a>'; };

  // ---------------------------------------------------------- theme and router
  A.applyTheme = function () {
    var t = A.S.settings.theme, dark = t === 'dark' || (t === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.documentElement.classList.toggle('hide-id', !A.S.settings.showId);
  };
  A.route = function () {
    var raw = (location.hash || '#/').replace(/^#\/?/, ''), parts = raw.split('/').map(function (x) { try { return decodeURIComponent(x); } catch (e) { return x; } });
    var key = parts[0] || '', navKey = key;
    var old = view(), fresh = old.cloneNode(false); old.parentNode.replaceChild(fresh, old);   // drop listeners from the previous view
    try {
      switch (key) {
        case '': V.dashboard(); break;
        case 'path': V.path(parts[1]); break;
        case 'courses': V.courses(); break;
        case 'stage': V.stage(parts[1]); navKey = 'courses'; break;
        case 'lesson': V.lesson(parts[1], parts[2]); navKey = A.LESSONS[parts[1]] && A.LESSONS[parts[1]].type === 'grammar' ? 'grammar' : (A.META[parts[1]] && A.META[parts[1]].stage === 'PRO' ? 'business' : 'courses'); break;
        case 'grammar': V.grammar(); break;
        case 'vocab': V.vocab(parts[1]); break;
        case 'listening': V.listening(parts[1]); break;
        case 'speaking': V.speaking(); break;
        case 'rw': V.rw(parts[1]); break;
        case 'business': V.business(); break;
        case 'sims': V.sims(); break;
        case 'sim': V.sims(parts[1]); navKey = 'sims'; break;
        case 'assess': V.assess(parts[1], parts[2]); break;
        case 'progress': V.progress(); break;
        case 'settings': V.settings(); break;
        default: V.notFound();
      }
    } catch (e) {
      A.log(e);
      view().innerHTML = '<div class="banner bad"><b>Something went wrong while opening this page.</b> ' + esc(e.message) + '</div><a class="btn" href="#/">Dashboard</a>';
    }
    setActiveNav(navKey);
    if (!(key === 'lesson' && parts[2])) window.scrollTo(0, 0);
    if (A.tts) try { window.speechSynthesis.cancel(); } catch (e) {}
    document.title = ($('#view h1') ? $('#view h1').textContent + ' · ' : '') + 'English Learning Academy';
  };
  A.start = function () {
    A.load(); A.applyTheme(); V.shell();
    if (window.matchMedia) try { window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', A.applyTheme); } catch (e) {}
    window.addEventListener('hashchange', A.route);
    A.route();
  };
})(APP);
