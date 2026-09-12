/* =====================================================================
   app.js — state, rendering, navigasi, interaksi
   Tidak ada dependensi eksternal. Semua state di memori.
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------ state -- */
  var S = { i: 0, lang: 'id', theme: 'light', mode: 'learn', pf: {}, sel: 0, dens: 'live' };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var t = function (k) { return UI[S.lang][k]; };
  var L = function (o) { return (o && typeof o === 'object' && (o.id || o.en)) ? (o[S.lang] || o.id) : o; };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  function save() {
    try {
      localStorage.setItem('fmcg', JSON.stringify({ lang: S.lang, theme: S.theme, i: S.i, pf: S.pf }));
    } catch (e) {}
  }
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem('fmcg') || '{}');
      if (d.lang) S.lang = d.lang;
      if (d.theme) S.theme = d.theme;
      if (typeof d.i === 'number') S.i = d.i;
      if (d.pf) S.pf = d.pf;
    } catch (e) {}
    try {
      var q = new URLSearchParams(location.search);
      if (q.get('lang')) S.lang = q.get('lang') === 'en' ? 'en' : 'id';
      if (q.get('theme')) S.theme = q.get('theme') === 'dark' ? 'dark' : 'light';
    } catch (e) {}
    var h = parseInt(String(location.hash || '').replace('#s', ''), 10);
    if (!isNaN(h) && h >= 1 && h <= SECTIONS.length) S.i = h - 1;
  }

  /* ------------------------------------------------- blok: pembangun --- */
  var B = {};

  B.pills = function (b) {
    return '<div class="pills">' + b.items.map(function (x) {
      return '<span class="pill">' + esc(L(x)) + '</span>';
    }).join('') + '</div>';
  };
  B.note = function (b) { return '<p class="note">' + esc(L(b.text)) + '</p>'; };
  B.band = function (b) { return '<div class="band">' + esc(L(b.text)) + '</div>'; };
  B.quote = function (b) { return '<blockquote class="quote">' + esc(L(b.text)) + '</blockquote>'; };

  B.cards = function (b) {
    return '<div class="grid g' + (b.cols || 3) + '">' + b.items.map(function (c) {
      return '<div class="card"' + (c.go ? ' data-go="' + c.go + '" role="button" tabindex="0" style="cursor:pointer"' : '') + '>' +
        (c.n ? '<span class="n">' + esc(L(c.n)) + '</span>' : '') +
        '<h3>' + esc(L(c.h)) + '</h3><p>' + esc(L(c.p)) + '</p>' +
        (c.tags ? '<div class="tags">' + c.tags.map(function (g) { return '<span class="tag">' + esc(g) + '</span>'; }).join('') + '</div>' : '') +
        '</div>';
    }).join('') + '</div>';
  };

  B.ba = function (b) {
    function col(d, cls) {
      return '<div class="col ' + cls + '"><div class="lab">' + esc(L(d.label)) + '</div>' +
        '<div class="bd"><p class="hd">' + esc(L(d.head)) + '</p>' +
        '<p class="bdy">' + esc(L(d.body)) + '</p>' +
        '<p class="vd">' + esc(L(d.verdict)) + '</p></div></div>';
    }
    return '<div class="ba">' + col(b.before, 'bad') + col(b.after, 'good') + '</div>' +
      '<div class="learnOnly"><button class="btn ghost sm" data-act="why" style="margin-top:.8rem">' +
      t('showWhy') + '</button><div class="whyBox" hidden>' + esc(L(b.why)) + '</div></div>';
  };

  B.vs = function (b) {
    function col(d) {
      return '<div class="col ' + (d.tone || 'neutral') + '"><div class="lab">' + esc(L(d.label)) + '</div><ul>' +
        d.items.map(function (x) { return '<li>' + esc(L(x)) + '</li>'; }).join('') + '</ul></div>';
    }
    return '<div class="vs">' + col(b.left) + col(b.right) + '</div>';
  };

  B.orders = function (b) {
    function side(d, first) {
      return '<div><p class="flowlab">' + esc(L(d.label)) + '</p><div class="flow">' +
        d.items.map(function (x, i) {
          var c = 'node' + (first && i === 0 ? ' first' : '') + (/\?$/.test(L(x)) ? ' qm' : '');
          return '<span class="' + c + '">' + esc(L(x)) + '</span>';
        }).join('') + '</div><p class="vd" style="font-size:.82rem;font-style:italic;margin-top:.6rem;color:var(--ink-2)">' +
        esc(L(d.verdict)) + '</p></div>';
    }
    return '<div class="orders">' + side(b.left, false) + side(b.right, true) + '</div>';
  };

  B.stats = function (b) {
    return '<div class="stats">' + b.items.map(function (x) {
      return '<div class="stat"><div class="big">' + esc(x.big) + '</div>' +
        '<div class="cap">' + esc(L(x.cap)) + '</div>' +
        (x.sub ? '<div class="sub">' + esc(L(x.sub)) + '</div>' : '') +
        (x.ex ? '<div class="ex">' + esc(L(x.ex)) + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  };

  B.split2 = function (b) {
    return '<div class="split2">' + b.items.map(function (x) {
      return '<div class="p' + (x.accent ? ' acc' : '') + '"><div class="big">' + esc(x.big) + '</div>' +
        '<p style="font-weight:600;margin:.3rem 0">' + esc(L(x.head)) + '</p>' +
        '<p style="font-size:.88rem">' + esc(L(x.body)) + '</p></div>';
    }).join('') + '</div>';
  };

  B.governing = function (b) {
    return '<div class="card" style="background:var(--navy);color:#fff;border-color:transparent">' +
      '<span class="n" style="color:var(--orange)">' + esc(L(b.label)) + '</span>' +
      '<p style="font-size:1.05rem;font-weight:600">' + esc(L(b.text)) + '</p></div>' +
      '<div style="height:1rem"></div>';
  };
  B.test = function (b) {
    return '<div class="card" style="border-left:4px solid var(--orange);margin-top:1rem">' +
      '<p>' + esc(L(b.text)) + '</p></div>';
  };

  B.siapRows = function () {
    var lab = DATA.siapLabels[S.lang], ex = DATA.siapExample[S.lang], k = ['S', 'I', 'A', 'P'];
    return '<div class="siap">' + lab.map(function (r, i) {
      return '<div class="srow' + (i === 3 ? ' push' : '') + '"><span class="k">' + r[0] + '</span>' +
        '<span class="t">' + esc(r[1]) + '<small>' + esc(r[2]) + '</small></span>' +
        '<span class="v">' + esc(ex[k[i]]) + '</span></div>';
    }).join('') + '</div>';
  };

  B.siapBuilder = function () {
    var lab = DATA.siapLabels[S.lang];
    return '<div class="builder learnOnly" data-w="siap"><h4>SIAP Builder</h4>' +
      '<p class="hint">' + (S.lang === 'id'
        ? 'Tulis empat kalimat Anda sendiri. Aplikasi memeriksa apakah Push Anda menyebut tindakan dan tenggat.'
        : 'Write your own four sentences. The app checks whether your Push names an action and a deadline.') + '</p>' +
      lab.map(function (r, i) {
        return '<div class="field"><label>' + r[0] + ' · ' + esc(r[1]) + ' — ' + esc(r[2]) + '</label>' +
          '<textarea data-s="' + i + '" rows="2"></textarea></div>';
      }).join('') +
      '<div class="brow"><button class="btn" data-act="siapGo">' + t('generate') + '</button>' +
      '<button class="btn ghost" data-act="siapEx">' + t('example') + '</button>' +
      '<button class="btn ghost" data-act="siapClr">' + t('reset') + '</button></div>' +
      '<div class="out" hidden></div></div>';
  };

  B.anatomy = function () {
    var p = DATA.titleParts[S.lang];
    return '<div class="anat"><span class="p1">' + esc(p[0][1]) + '</span> ' +
      '<span class="p2">' + esc(p[1][1]) + '</span> ' +
      '<span class="p3">' + esc(p[2][1]) + '</span> ' +
      '<span class="p4">' + esc(p[3][1]) + '</span></div>' +
      '<div class="anatKey">' + p.map(function (x, i) {
        return '<div class="k"><span class="kn">' + (i + 1) + ' · ' + esc(x[0]) + '</span>' +
          '<b>' + esc(x[1]) + '</b><p>' + esc(x[2]) + '</p></div>';
      }).join('') + '</div>';
  };

  B.titleBuilder = function () {
    var p = DATA.titleParts[S.lang];
    return '<div class="builder learnOnly" data-w="title"><h4>' +
      (S.lang === 'id' ? 'Penyusun Action Title' : 'Action Title Builder') + '</h4>' +
      '<p class="hint">' + (S.lang === 'id'
        ? 'Isi empat bagian. Aplikasi merangkainya dan menandai bagian yang masih kosong.'
        : 'Fill the four parts. The app assembles them and flags what is still missing.') + '</p>' +
      p.map(function (x, i) {
        return '<div class="field"><label>' + (i + 1) + ' · ' + esc(x[0]) + '</label>' +
          '<input data-tp="' + i + '" placeholder="' + esc(x[1]) + '"></div>';
      }).join('') +
      '<div class="brow"><button class="btn" data-act="titleGo">' + t('generate') + '</button>' +
      '<button class="btn ghost" data-act="titleEx">' + t('example') + '</button></div>' +
      '<div class="out" hidden></div></div>';
  };

  B.ladder = function (b) {
    var h = S.lang === 'id'
      ? ['Fungsi', 'Observation — yang data tunjukkan', 'Finding — artinya', 'Decision — yang harus terjadi']
      : ['Function', 'Observation — what the data shows', 'Finding — what it means', 'Decision — what should happen'];
    return '<div class="ladder"><table><thead><tr>' + h.map(function (x) { return '<th>' + esc(x) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + b.items.map(function (r) {
        return '<tr><td><span class="fn">' + esc(r.fn) + '</span></td><td>' + esc(L(r.o)) +
          '</td><td>' + esc(L(r.f)) + '</td><td class="dec">' + esc(L(r.d)) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  };

  B.storylines = function (b) {
    return '<div class="grid g3">' + b.items.map(function (s) {
      return '<div class="story"><div class="h"><b>' + esc(L(s.h)) + '</b><i>' + esc(L(s.q)) + '</i></div>' +
        '<ol>' + s.steps.map(function (x) { return '<li>' + esc(L(x)) + '</li>'; }).join('') + '</ol>' +
        '<div class="use">' + esc(L(s.use)) + '</div></div>';
    }).join('') + '</div>';
  };

  B.pairs = function (b) {
    return '<div class="grid g2">' + b.items.map(function (x, i) {
      return '<div class="card"><span class="n">' + esc(x.fn) + '</span>' +
        '<p style="color:var(--red);font-style:italic;margin-bottom:.5rem">' + esc(L(x.b)) + '</p>' +
        '<p style="font-weight:600;color:var(--ink)">' + esc(L(x.a)) + '</p>' +
        '<div class="learnOnly"><button class="btn ghost sm" data-act="why" style="margin-top:.6rem">' +
        t('showWhy') + '</button><div class="whyBox" hidden>' + esc(L(x.why)) + '</div></div></div>';
    }).join('') + '</div>';
  };

  B.zones = function () {
    var z = DATA.zones[S.lang];
    return '<div class="zonesWrap"><div class="zoneSlide">' +
      '<div class="z zt" data-z="0">' + esc(z[0][0]) + ' — ' + (S.lang === 'id' ? 'temuan, dalam kalimat utuh' : 'the finding, in a full sentence') + '</div>' +
      '<div class="zrow"><div class="z" data-z="1" style="min-height:96px">' + esc(z[1][0]) + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:.6rem">' +
      '<div class="z" data-z="2" style="flex:1">' + esc(z[2][0]) + '</div>' +
      '<div class="z" data-z="3" style="flex:1">' + esc(z[3][0]) + '</div></div></div>' +
      '<div class="z" data-z="4" style="font-size:.7rem">' + esc(z[4][0]) + '</div></div>' +
      '<div class="zoneList">' + z.map(function (x, i) {
        return '<div class="zi" data-z="' + i + '"><b>' + (i + 1) + ' · ' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></div>';
      }).join('') + '</div></div>';
  };

  B.sixSecond = function () {
    var d = DATA.sixSecond;
    return '<div class="ss learnOnly" data-w="six"><h4>' +
      (S.lang === 'id' ? 'Uji 6 Detik — coba sendiri' : 'The Six-Second Test — try it') + '</h4>' +
      '<p class="hint">' + (S.lang === 'id'
        ? 'Slide muncul enam detik, lalu menghilang. Jawab tiga pertanyaan dari ingatan.'
        : 'The slide shows for six seconds, then disappears. Answer three questions from memory.') + '</p>' +
      '<div class="brow"><button class="btn" data-act="sixStart">' + t('show') + '</button></div>' +
      '<div class="timer" hidden>6</div>' +
      '<div class="ssSlide" hidden>' +
      '<p class="ssTitle">' + esc(L(d.slide.title)) + '</p>' +
      '<div class="zrow" style="display:grid;grid-template-columns:1.5fr 1fr;gap:1rem">' +
      '<div><div class="bars">' + d.slide.bars.map(function (b) {
        return '<div class="b' + (b[1] === 83 ? ' hi' : '') + '"><em>' + b[1] + '%</em>' +
          '<i style="height:' + b[1] + '%"></i><span>' + esc(b[0]) + '</span></div>';
      }).join('') + '</div></div>' +
      '<div class="ssAside"><div class="calloutBox"><b>' + d.slide.callout + '</b>' +
      esc(L(d.slide.calloutCap)) + '</div>' +
      '<div class="askBox">' + esc(L(d.slide.ask)) + '</div></div></div>' +
      '<p class="note" style="margin-top:.6rem">' + esc(L(d.slide.src)) + '</p></div>' +
      '<div class="qBlock" hidden></div></div>';
  };

  B.oneDataset = function () {
    var lab = S.lang === 'id'
      ? ['“Modern Trade adalah selisihnya”', '“Hanya Modern Trade yang turun”', '“Sebabnya 11 hari tanpa stok”']
      : ['“Modern Trade is the gap”', '“Modern Trade is the only one falling”', '“The cause is 11 days of no stock”'];
    var cap = S.lang === 'id'
      ? ['Bar, terurut, satu warna', 'Line, enam bulan, satu disorot', 'Column, hari kosong per SKU']
      : ['Bar, sorted, one colour', 'Line, six months, one highlighted', 'Column, days out of stock by SKU'];
    var bars = [['E-Commerce', 100, 14], ['General Trade', 100, 14], ['Modern Trade', 700, 100]];
    var line = [62, 64, 62, 58, 52, 48];
    var sku = [['SKU A', 11], ['SKU B', 9], ['SKU C', 8], ['Others', 1]];
    return '<div class="three-charts">' +
      '<div class="cc"><h4>' + esc(lab[0]) + '</h4>' + bars.map(function (b) {
        return '<div class="hbar"><span>' + esc(b[0]) + '</span><i style="width:' + b[2] + '%"></i><b>' + b[1] + '</b></div>';
      }).join('') + '<p class="cap">' + esc(cap[0]) + '</p></div>' +
      '<div class="cc"><h4>' + esc(lab[1]) + '</h4><div class="spark">' + line.map(function (v, i) {
        return '<i class="' + (i > 2 ? 'hi' : '') + '" style="height:' + v + '%"></i>';
      }).join('') + '</div><p class="cap">' + esc(cap[1]) + '</p></div>' +
      '<div class="cc"><h4>' + esc(lab[2]) + '</h4><div class="spark">' + sku.map(function (s) {
        return '<i class="' + (s[1] > 5 ? 'hi' : '') + '" style="height:' + (s[1] * 9) + '%"></i>';
      }).join('') + '</div><p class="cap">' + esc(cap[2]) + '</p></div></div>';
  };

  B.chartSelector = function () {
    var rows = DATA.chartPicker[S.lang];
    return '<div class="selWrap" data-w="sel"><div class="selList">' + rows.map(function (r, i) {
      return '<button data-sel="' + i + '" aria-pressed="' + (i === S.sel) + '">' + esc(r[0]) + '</button>';
    }).join('') + '</div><div class="selOut"></div></div>';
  };

  B.chartCrimes = function () {
    var c = DATA.crimes[S.lang];
    var art = ['<div class="miniTrunc"><i style="height:90%"></i><i style="height:55%"></i></div>',
      '<div class="mini3d"><i style="height:60%"></i><i style="height:85%"></i><i style="height:45%"></i></div>',
      '<div class="miniPie"></div>',
      '<div class="miniDual"><i></i><i></i></div>'];
    return '<div class="crimes">' + c.map(function (x, i) {
      return '<div class="crime" data-crime="' + i + '" role="button" tabindex="0">' +
        '<div class="ch">' + (i + 1) + ' · ' + esc(x[0]) + '</div>' +
        '<div class="cb">' + art[i] + '<p style="font-size:.78rem;color:var(--ink-2);margin-top:.6rem">' +
        esc(x[1]) + '</p></div>' +
        '<div class="fix"><b>' + (S.lang === 'id' ? 'Yang harus dilakukan' : 'What to do instead') + '</b><br>' +
        esc(x[2]) + '</div></div>';
    }).join('') + '</div>';
  };

  B.colourDemo = function () {
    var v = [1420, 1180, 960, 710, 550, 440, 340];
    var names = ['Dist A', 'Dist B', 'Dist C', 'Dist D', 'Dist E', 'Dist F', 'Dist G'];
    var rain = ['#B4402F', '#E08424', '#0E7C6B', '#2456C7', '#6B3FA0', '#8E2F5B', '#0E7C6B'];
    function set(colored) {
      return '<div class="cbars">' + v.map(function (x, i) {
        var col = colored ? rain[i] : (i < 2 ? 'var(--blue)' : '#C6D3DC');
        return '<div class="b"><em>' + x.toLocaleString('en-US') + '</em>' +
          '<i style="height:' + Math.round(x / 1420 * 100) + '%;background:' + col + '"></i>' +
          '<span>' + names[i] + '</span></div>';
      }).join('') + '</div>';
    }
    return '<div class="colDemo"><div class="p bad"><h4>' +
      (S.lang === 'id' ? 'Semua diwarnai = tidak ada yang disorot' : 'Everything coloured = nothing highlighted') +
      '</h4>' + set(true) + '</div><div class="p good"><h4>' +
      (S.lang === 'id' ? 'Abu-abukan semua, warnai kalimatnya' : 'Grey everything, colour the sentence') +
      '</h4>' + set(false) + '<p style="font-size:.78rem;font-style:italic;color:var(--teal);margin-top:.5rem">' +
      (S.lang === 'id' ? '“Dua distributor membawa 42% volume.” Grafiknya kini ikut mengatakannya.'
        : '“Two distributors carry 42% of volume.” The chart now says it too.') + '</p></div></div>';
  };

  B.numbers = function (b) {
    return '<div class="numTable">' + b.items.map(function (x) {
      return '<div class="numRow"><div class="w">' + esc(x.w) + '</div>' +
        '<div class="arrow">&rarr;</div>' +
        '<div class="r"><b>' + esc(x.r) + '</b><span>' + esc(L(x.n)) + '</span></div></div>';
    }).join('') + '</div>';
  };

  B.densityChecker = function () {
    var q = S.lang === 'id'
      ? ['Apakah Anda ada di ruangan saat deck ini dibaca?', 'Akan dibaca di ponsel tanpa Anda?',
         'Seluruh argumen harus muat satu halaman?', 'Akan dipakai ulang sebagai handout berbulan-bulan?']
      : ['Are you in the room when it is read?', 'Will it be read on a phone without you?',
         'Must the whole argument fit one page?', 'Will it be reused as a handout for months?'];
    return '<div class="builder" data-w="dens"><h4>' +
      (S.lang === 'id' ? 'Pemeriksa Kepadatan' : 'Density Checker') + '</h4>' +
      '<p class="hint">' + (S.lang === 'id' ? 'Pilih jenis deck, atau jawab empat pertanyaan di bawah.'
        : 'Pick a deck type, or answer the four questions below.') + '</p>' +
      '<div class="densTabs">' + ['live', 'report', 'onepager', 'training'].map(function (k) {
        return '<button data-dens="' + k + '" aria-pressed="' + (S.dens === k) + '">' +
          esc(DATA.density[S.lang][k][0]) + '</button>';
      }).join('') + '</div><div class="densBody"></div>' +
      '<div class="learnOnly" style="margin-top:1rem"><p class="hint">' +
      (S.lang === 'id' ? 'Tidak yakin? Jawab ini:' : 'Not sure? Answer these:') + '</p>' +
      q.map(function (x, i) {
        return '<label style="display:flex;gap:.5rem;align-items:center;font-size:.86rem;margin-bottom:.4rem">' +
          '<input type="checkbox" data-dq="' + i + '" style="width:18px;height:18px">' + esc(x) + '</label>';
      }).join('') + '<div class="out" hidden></div></div></div>';
  };

  B.denseDemo = function () {
    var flat = S.lang === 'id'
      ? 'Juli tutup di Rp 11,1 bio terhadap target Rp 12,0 bio yaitu 92,5% dari target dengan selisih Rp 0,9 bio, dari jumlah itu General Trade menyumbang Rp 6,2 bio pada 98% targetnya dan naik 1% dibanding bulan lalu, Modern Trade menyumbang Rp 3,4 bio pada 83% target dan turun 6% dibanding bulan lalu, dan E-Commerce menyumbang Rp 1,5 bio pada 94% target dan naik 9%, dengan sebab berupa tiga SKU sepuluh besar yang kosong selama 11 hari hanya di Modern Trade, sementara laju penjualan pada SKU tersebut tetap datar sehingga permintaan bukan pemicunya; pilihan yang tersedia adalah alokasi darurat yang memulihkan sekitar Rp 0,4 bio, atau menunggu siklus pengisian Q4 yang berarti selisihnya bertahan sampai kuartal berikutnya.'
      : 'July closed at Rp 11,1 bio against a target of Rp 12,0 bio which is 92,5% of target and a gap of Rp 0,9 bio, of which General Trade contributed Rp 6,2 bio at 98% of its target and up 1% on last month, Modern Trade contributed Rp 3,4 bio at 83% of target and down 6% on last month, and E-Commerce contributed Rp 1,5 bio at 94% of target and up 9% on last month, with the cause being three top-ten SKUs out of stock for 11 days in Modern Trade only, while rate of sale on those SKUs held flat, so demand is not the driver; the available options are an emergency allocation which recovers roughly Rp 0,4 bio, or waiting for the Q4 replenishment cycle, in which case the gap persists into the quarter.';
    var rows = [['General Trade', 'Rp 6,2 bio', '98%', '+1%', 0], ['Modern Trade', 'Rp 3,4 bio', '83%', '−6%', 1],
                ['E-Commerce', 'Rp 1,5 bio', '94%', '+9%', 0]];
    return '<div class="denseDemo">' +
      '<div class="card"><span class="n" style="color:var(--red)">' +
      (S.lang === 'id' ? 'Padat dan datar · 6 detik → 0 fakta' : 'Dense and flat · 6 sec → 0 facts') + '</span>' +
      '<p class="denseFlat">' + esc(flat) + '</p></div>' +
      '<div class="card"><span class="n">' +
      (S.lang === 'id' ? 'Padat dan berjenjang · 6 detik → 3 fakta' : 'Dense and structured · 6 sec → 3 facts') + '</span>' +
      '<div class="tier"><span class="no">1</span><div class="tierBox">' +
      (S.lang === 'id' ? 'Juli di 92,5% — kurang Rp 0,9 bio, dan 78% ada di satu kanal'
        : 'July at 92,5% — Rp 0,9 bio short, and 78% of it sits in one channel') + '</div></div>' +
      '<div class="tier"><span class="no">2</span><div style="flex:1">' + rows.map(function (r) {
        return '<div class="rowline' + (r[4] ? ' hi' : '') + '"><span>' + esc(r[0]) + '</span><span>' +
          esc(r[1]) + '</span><span>' + esc(r[2]) + ' ' + esc(r[3]) + '</span></div>';
      }).join('') + '</div></div>' +
      '<div class="tier"><span class="no">3</span><div style="flex:1"><div class="rowline" style="background:var(--orange);color:#20130a;font-weight:600">' +
      (S.lang === 'id' ? 'Sebab: 3 SKU sepuluh besar kosong 11 hari, hanya Modern Trade'
        : 'Cause: three top-10 SKUs out of stock, 11 days, Modern Trade only') + '</div>' +
      '<div class="askBox" style="margin-top:.4rem">' +
      (S.lang === 'id' ? 'PERMINTAAN: setujui alokasi darurat hari Jumat' : 'ASK: approve the emergency allocation by Friday') +
      '</div></div></div></div></div>';
  };

  B.beats = function (b) {
    return '<div class="beats">' + b.items.map(function (x) {
      return '<div class="beat"><div class="bn">' + x.n + '</div><h4>' + esc(x.h) + '</h4>' +
        '<p>' + esc(L(x.p)) + '</p><div class="says">' + esc(L(x.s)) + '</div></div>';
    }).join('') + '</div>';
  };

  B.hardQ = function () {
    return '<div class="builder learnOnly" data-w="hq"><h4>' +
      (S.lang === 'id' ? 'Latihan pertanyaan sulit' : 'Hard question trainer') + '</h4>' +
      '<p class="hint">' + (S.lang === 'id'
        ? 'Empat pertanyaan yang pasti Anda terima. Pilih jawaban yang menjaga ruangan tetap di tangan Anda.'
        : 'Four questions you will get. Choose the answer that keeps the room with you.') + '</p>' +
      '<div class="hqBody"></div></div>';
  };

  B.aiFlow = function (b) {
    var rl = S.lang === 'id' ? { lead: 'AI memimpin', assist: 'AI membantu', you: 'Anda saja' }
                             : { lead: 'AI leads', assist: 'AI assists', you: 'You only' };
    return '<div class="aiFlow">' + b.items.map(function (x) {
      return '<div class="aiStep ' + x.role + '"><span class="r">' + esc(rl[x.role]) + '</span>' +
        '<h4>' + x.n + ' · ' + esc(L(x.h)) + '</h4><p>' + esc(L(x.p)) + '</p></div>';
    }).join('') + '</div>';
  };

  B.prompt = function () {
    var weak = S.lang === 'id' ? '“buat presentasi penjualan saya lebih bagus”' : '“make my sales presentation better”';
    var weakOut = S.lang === 'id'
      ? '“Sales Performance Improves” — judul yang cocok untuk deck mana pun, di perusahaan mana pun, di bulan mana pun.'
      : '“Sales Performance Improves” — a title that would sit happily on any deck, in any company, in any month.';
    var strong = 'ROLE   ' + (S.lang === 'id' ? 'Anda analis retail ops menulis untuk direktur MT.' : 'You are a retail ops analyst writing for an MT director.') +
      '\nINPUT  ' + (S.lang === 'id' ? 'Sell-out Desember, 3 akun: target, aktual, headcount [tempel tabel].' : 'December sell-out, 3 accounts: target, actual, headcount [paste table].') +
      '\nJOB    ' + (S.lang === 'id' ? 'Tulis 3 action title. Masing-masing kalimat utuh, memuat angkanya, berakhir pada hal yang harus diputuskan direktur.' : 'Write 3 action titles. Each one a full sentence, contains the number, ends in something the director must decide.') +
      '\nFORMAT ' + (S.lang === 'id' ? 'Maksimal 20 kata. Bahasa lugas. Tanpa bullet, tanpa kata sifat.' : 'Max 20 words each. Plain English. No bullets, no adjectives.');
    var strongOut = S.lang === 'id'
      ? '“Guardian menghasilkan 1,9× AEON per BA — target Q1 harus dihitung ulang sebelum dikunci.”'
      : '“Guardian delivers 1,9× AEON per BA — Q1 targets must be rebased before lock.”';
    return '<div class="promptBox">' +
      '<div class="card"><span class="n" style="color:var(--red)">' + t('weak') + '</span>' +
      '<pre>' + esc(weak) + '</pre><p style="font-size:.82rem;color:var(--ink-2);margin-top:.5rem">' + esc(weakOut) + '</p></div>' +
      '<div class="card"><span class="n">' + t('strong') + '</span><pre>' + esc(strong) + '</pre>' +
      '<p style="font-size:.82rem;font-weight:600;margin-top:.5rem">' + esc(strongOut) + '</p></div></div>';
  };

  B.preflight = function () {
    var it = DATA.preflight[S.lang];
    return '<div class="builder" data-w="pf"><div class="pf">' + it.map(function (x, i) {
      return '<div class="pfItem' + (S.pf[i] ? ' on' : '') + '" data-pf="' + i + '" role="checkbox" ' +
        'aria-checked="' + (!!S.pf[i]) + '" tabindex="0"><i></i><span>' + esc(x[0]) +
        '<em>' + esc(x[1]) + '</em></span></div>';
    }).join('') + '</div><div class="pfScore"></div>' +
    '<div class="brow"><button class="btn ghost" data-act="pfClr">' + t('reset') + '</button></div></div>';
  };

  B.planBuilder = function () {
    var f = S.lang === 'id'
      ? [['topic', 'Topik rapat'], ['num', 'Satu angka yang menentukan'], ['story', 'Pola alur cerita'],
         ['ask', 'Permintaan Anda'], ['owner', 'Pemilik dan tanggal']]
      : [['topic', 'Meeting topic'], ['num', 'The one number that decides'], ['story', 'Storyline pattern'],
         ['ask', 'Your ask'], ['owner', 'Owner and date']];
    var opts = S.lang === 'id' ? ['Performance Review', 'Proposal', 'Problem Solving'] : ['Performance Review', 'Proposal', 'Problem Solving'];
    return '<div class="builder" data-w="plan">' + f.map(function (x) {
      if (x[0] === 'story') {
        return '<div class="field"><label>' + esc(x[1]) + '</label><select data-pl="story">' +
          opts.map(function (o) { return '<option>' + esc(o) + '</option>'; }).join('') + '</select></div>';
      }
      return '<div class="field"><label>' + esc(x[1]) + '</label><input data-pl="' + x[0] + '"></div>';
    }).join('') +
    '<div class="brow"><button class="btn" data-act="planGo">' + t('generate') + '</button>' +
    '<button class="btn ghost" data-act="planCopy">' + (S.lang === 'id' ? 'Salin' : 'Copy') + '</button></div>' +
    '<div class="out" hidden></div></div>';
  };

  B.phrasebank = function () {
    return '<h3 style="margin-bottom:.7rem">' + (S.lang === 'id' ? 'Bank kalimat' : 'Phrase bank') + '</h3>' +
      '<div class="pbGrid">' + DATA.phrases[S.lang].map(function (g) {
        return '<div class="pb"><div class="h">' + esc(g[0]) + '</div>' +
          g[1].map(function (p) { return '<button data-copy="' + esc(p) + '">' + esc(p) + '</button>'; }).join('') +
          '</div>';
      }).join('') + '</div>';
  };

  B.runningCase = function () {
    var c = DATA.runningCase;
    return '<h3 style="margin:1.6rem 0 .7rem">' + esc(L(c.head)) + '</h3>' +
      '<div class="grid g2"><div class="card"><table class="caseTable">' +
      c.rows.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join('') +
      '</table></div><div class="card"><table class="caseTable">' +
      '<tr><td><b>Channel</b></td><td><b>Tgt</b></td><td><b>Act</b></td><td><b>Ach</b></td></tr>' +
      c.channels.map(function (r) {
        return '<tr class="' + (r[0] === 'Modern Trade' ? 'hi' : '') + '"><td>' + esc(r[0]) + '</td><td>' +
          esc(r[1]) + '</td><td>' + esc(r[2]) + '</td><td>' + esc(r[3]) + ' ' + esc(r[4]) + '</td></tr>';
      }).join('') + '</table></div></div>' +
      '<p class="note">' + esc(L(c.extra)) + '</p>';
  };

  B.sources = function () {
    return '<h3 style="margin:1.6rem 0 .7rem">' + (S.lang === 'id' ? 'Sumber yang dirujuk' : 'Sources referenced') + '</h3>' +
      '<div class="card"><ul style="list-style:none;font-size:.86rem;color:var(--ink-2)">' +
      DATA.sources.map(function (s) { return '<li style="padding:.3rem 0;border-bottom:1px solid var(--line)">' + esc(s) + '</li>'; }).join('') +
      '</ul><p class="note" style="margin-top:.8rem">' + esc(t('srcNote')) + '</p></div>';
  };

  B.given = function (b) {
    return '<div class="card" style="border-left:4px solid var(--purple)"><span class="n" style="color:var(--purple)">' +
      (S.lang === 'id' ? 'Yang Anda terima' : 'You are given') + '</span><p style="font-size:1rem">' +
      esc(L(b.text)) + '</p></div>';
  };

  B.exercise = function () {
    return '<div class="builder learnOnly" data-w="w1">' +
      '<div class="field"><label>' + (S.lang === 'id' ? 'Tulis judul temuan Anda' : 'Write your headline') + '</label>' +
      '<textarea data-w1 rows="2"></textarea></div>' +
      '<div class="brow"><button class="btn" data-act="w1Go">' + t('checkAnswer') + '</button></div>' +
      '<div class="out" hidden></div></div>';
  };

  B.gbb = function (b) {
    return '<div class="learnOnly" style="margin-top:1.2rem">' + b.items.map(function (x) {
      var col = x.tone === 'g3' ? 'var(--teal)' : (x.tone === 'g2' ? 'var(--orange)' : 'var(--ink-3)');
      return '<div class="card" style="margin-bottom:.7rem;border-left:4px solid ' + col + '">' +
        '<span class="n" style="color:' + col + '">' + esc(L(x.tag)) + '</span>' +
        '<p style="font-weight:600;margin-bottom:.4rem">' + esc(L(x.text)) + '</p>' +
        '<p style="font-size:.84rem;color:var(--ink-2)">' + esc(L(x.note)) + '</p></div>';
    }).join('') + '</div>';
  };

  /* ----------------------------------------------------------- render -- */
  function renderSection(sec, idx) {
    var html = '<section class="sec" id="s' + (idx + 1) + '" data-sec="' + sec.id + '">' +
      '<p class="kicker">' + esc(L(sec.kicker)) + '</p>' +
      '<h1 class="t">' + esc(L(sec.title)) + '</h1>' +
      (sec.lead ? '<p class="lead">' + esc(L(sec.lead)) + '</p>' : '');
    sec.blocks.forEach(function (b) {
      var fn = B[b.t];
      if (fn) html += fn(b);
    });
    return html + '</section>';
  }

  function renderAll() {
    $('#main').innerHTML = SECTIONS.map(renderSection).join('');
    buildTOC();
    show(S.i, true);
    labels();
  }

  function labels() {
    $('#search').placeholder = t('search');
    $('#bprev').textContent = '◀ ' + t('prev');
    $('#bnext').textContent = t('next') + ' ▶';
    $('#btoc').textContent = t('toc');
    $('#bmode').textContent = S.mode === 'learn' ? t('modeLearn') : t('modePresent');
    $('#bmode').setAttribute('aria-pressed', S.mode === 'present');
    $('#bid').setAttribute('aria-pressed', S.lang === 'id');
    $('#ben').setAttribute('aria-pressed', S.lang === 'en');
    $('#blight').setAttribute('aria-pressed', S.theme === 'light');
    $('#bdark').setAttribute('aria-pressed', S.theme === 'dark');
    $('#tocTitle').textContent = t('toc');
    $('#kb').textContent = t('keyboard');
  }

  function buildTOC() {
    $('#tocList').innerHTML = SECTIONS.map(function (s, i) {
      return '<button class="item" data-goto="' + i + '"><span class="no">' +
        String(i + 1).padStart(2, '0') + '</span>' + esc(L(s.title)) + '</button>';
    }).join('');
  }

  function show(i, silent) {
    S.i = Math.max(0, Math.min(SECTIONS.length - 1, i));
    $$('.sec').forEach(function (el, k) { el.classList.toggle('on', k === S.i); });
    $$('#tocList .item').forEach(function (b, k) {
      b.setAttribute('aria-current', k === S.i ? 'true' : 'false');
    });
    $('#bar').style.width = ((S.i + 1) / SECTIONS.length * 100) + '%';
    $('#meta').textContent = t('section') + ' ' + (S.i + 1) + ' / ' + SECTIONS.length;
    $('#bprev').disabled = S.i === 0;
    $('#bnext').disabled = S.i === SECTIONS.length - 1;
    try { history.replaceState(null, '', '#s' + (S.i + 1)); } catch (e) {}
    window.scrollTo({ top: 0, behavior: silent ? 'auto' : 'smooth' });
    initWidgets();
    save();
  }

  /* -------------------------------------------------------- interaksi -- */
  function initWidgets() {
    var sec = $$('.sec')[S.i];
    if (!sec) return;
    var sel = $('[data-w="sel"]', sec); if (sel) paintSel(sel);
    var d = $('[data-w="dens"]', sec); if (d) paintDens(d);
    var hq = $('[data-w="hq"]', sec); if (hq) paintHQ(hq);
    var pf = $('[data-w="pf"]', sec); if (pf) paintPF(pf);
  }

  function paintSel(root) {
    var r = DATA.chartPicker[S.lang][S.sel];
    $('.selOut', root).innerHTML =
      '<div class="card use"><span class="n">' + (S.lang === 'id' ? 'Pakai ini' : 'Use this') + '</span><p style="font-size:1rem;font-weight:600;color:var(--ink)">' + esc(r[1]) + '</p></div>' +
      '<div class="card never"><span class="n" style="color:var(--red)">' + (S.lang === 'id' ? 'Jangan' : 'Never') + '</span><p style="font-size:.95rem;color:var(--red)">' + esc(r[2]) + '</p></div>';
    $$('[data-sel]', root).forEach(function (b) {
      b.setAttribute('aria-pressed', +b.dataset.sel === S.sel);
    });
  }

  function paintDens(root) {
    var d = DATA.density[S.lang][S.dens];
    var lvl = { live: 1, report: 2, training: 3, onepager: 4 }[S.dens];
    $('.densBody', root).innerHTML =
      '<div class="densGauge"><div class="lvl">' + esc(d[1]) + '</div>' +
      '<div class="dots">' + [1, 2, 3, 4].map(function (n) {
        return '<i class="' + (n <= lvl ? 'on' : '') + '"></i>';
      }).join('') + '</div><b>' + esc(d[0]) + '</b><p style="font-size:.84rem;color:var(--ink-2);margin-top:.4rem">' +
      esc(d[2]) + '</p></div>' +
      '<div class="card"><span class="n">' + (S.lang === 'id' ? 'Aturannya' : 'Rules') + '</span><ul style="list-style:none">' +
      d[3].map(function (x) {
        return '<li style="font-size:.88rem;padding:.3rem 0 .3rem 1.2rem;position:relative;color:var(--ink-2)">' +
          '<span style="position:absolute;left:0;color:var(--teal)">✓</span>' + esc(x) + '</li>';
      }).join('') + '</ul></div>';
    $$('[data-dens]', root).forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.dens === S.dens);
    });
  }

  function paintHQ(root) {
    var qs = DATA.hardQ[S.lang];
    $('.hqBody', root).innerHTML = qs.map(function (q, i) {
      return '<div class="card" style="margin-bottom:.8rem" data-hq="' + i + '">' +
        '<p style="font-weight:600;margin-bottom:.6rem">' + esc(q.q) + '</p>' +
        q.a.map(function (a, j) {
          return '<button class="opt" data-hqa="' + i + '-' + j + '">' + esc(a) + '</button>';
        }).join('') + '<div class="whyBox" hidden></div></div>';
    }).join('');
  }

  function paintPF(root) {
    var it = DATA.preflight[S.lang];
    var n = it.filter(function (_, i) { return S.pf[i]; }).length;
    var pct = Math.round(n / it.length * 100);
    $('.pfScore', root).innerHTML = '<div class="pct">' + pct + '%</div>' +
      '<div style="flex:1"><div class="meter"><i style="width:' + pct + '%"></i></div>' +
      '<b>' + (pct === 100 ? t('ready') : t('keepGoing')) + '</b> · ' + n + '/' + it.length + ' ' + t('pctReady') + '</div>';
  }

  /* ------------------------------------------------------------ events - */
  document.addEventListener('click', function (e) {
    var el;

    if ((el = e.target.closest('[data-goto]'))) { show(+el.dataset.goto); closeDrawer(); return; }
    if ((el = e.target.closest('[data-go]'))) {
      var idx = SECTIONS.findIndex(function (s) { return s.id === el.dataset.go; });
      if (idx > -1) { show(idx); return; }
    }
    if ((el = e.target.closest('[data-act="why"]'))) {
      var box = el.nextElementSibling;
      box.hidden = !box.hidden;
      el.textContent = box.hidden ? t('showWhy') : t('hideWhy');
      return;
    }
    if ((el = e.target.closest('[data-z]'))) {
      var z = el.dataset.z, root = el.closest('.zonesWrap');
      $$('[data-z]', root).forEach(function (x) { x.classList.toggle('sel', x.dataset.z === z); });
      return;
    }
    if ((el = e.target.closest('[data-crime]'))) { el.classList.toggle('open'); return; }
    if ((el = e.target.closest('[data-sel]'))) { S.sel = +el.dataset.sel; paintSel(el.closest('[data-w="sel"]')); return; }
    if ((el = e.target.closest('[data-dens]'))) { S.dens = el.dataset.dens; paintDens(el.closest('[data-w="dens"]')); return; }
    if ((el = e.target.closest('[data-pf]'))) {
      var i = +el.dataset.pf; S.pf[i] = !S.pf[i];
      el.classList.toggle('on', !!S.pf[i]); el.setAttribute('aria-checked', !!S.pf[i]);
      paintPF(el.closest('[data-w="pf"]')); save(); return;
    }
    if ((el = e.target.closest('[data-act="pfClr"]'))) {
      S.pf = {}; var r = el.closest('[data-w="pf"]');
      $$('[data-pf]', r).forEach(function (x) { x.classList.remove('on'); x.setAttribute('aria-checked', 'false'); });
      paintPF(r); save(); return;
    }
    if ((el = e.target.closest('[data-hqa]'))) {
      var p = el.dataset.hqa.split('-'), qi = +p[0], ai = +p[1];
      var q = DATA.hardQ[S.lang][qi], card = el.closest('[data-hq]');
      $$('.opt', card).forEach(function (o, j) {
        o.classList.toggle('ok', j === q.c);
        o.classList.toggle('no', j === ai && ai !== q.c);
      });
      var w = $('.whyBox', card);
      w.hidden = false;
      w.innerHTML = '<b>' + (ai === q.c ? t('correct') : t('notQuite')) + '.</b> ' + esc(q.why);
      return;
    }
    if ((el = e.target.closest('[data-copy]'))) {
      try { navigator.clipboard.writeText(el.dataset.copy); } catch (x) {}
      var old = el.style.background; el.style.background = 'rgba(14,124,107,.2)';
      setTimeout(function () { el.style.background = old; }, 400);
      return;
    }

    /* builders */
    if ((el = e.target.closest('[data-act="siapGo"],[data-act="siapEx"],[data-act="siapClr"]'))) {
      var root2 = el.closest('[data-w="siap"]'), ta = $$('textarea[data-s]', root2), out = $('.out', root2);
      var a = el.dataset.act;
      if (a === 'siapEx') {
        var ex = DATA.siapExample[S.lang], keys = ['S', 'I', 'A', 'P'];
        ta.forEach(function (x, i) { x.value = ex[keys[i]]; });
      }
      if (a === 'siapClr') { ta.forEach(function (x) { x.value = ''; }); out.hidden = true; return; }
      var v = ta.map(function (x) { return x.value.trim(); });
      var miss = v.map(function (x, i) { return x ? null : ['S', 'I', 'A', 'P'][i]; }).filter(Boolean);
      var push = v[3].toLowerCase();
      var hasDate = /(senin|selasa|rabu|kamis|jumat|sabtu|minggu|monday|tuesday|wednesday|thursday|friday|besok|tomorrow|q[1-4]|\d{1,2}\s|tanggal|by |sebelum|before)/.test(push);
      var hasVerb = push.split(/\s+/).length > 2;
      out.hidden = false;
      out.innerHTML = miss.length
        ? '<span class="chip no">' + (S.lang === 'id' ? 'Belum lengkap' : 'Incomplete') + '</span> ' +
          (S.lang === 'id' ? 'Kalimat yang masih kosong: ' : 'Still empty: ') + miss.join(', ')
        : '<b>' + (S.lang === 'id' ? 'Spine Anda' : 'Your spine') + '</b>\n\nS · ' + v[0] + '\nI · ' + v[1] +
          '\nA · ' + v[2] + '\nP · ' + v[3] + '\n\n' +
          '<span class="chip ' + (hasVerb ? 'ok' : 'no') + '">' + (S.lang === 'id' ? 'Push menyebut tindakan' : 'Push names an action') + '</span> ' +
          '<span class="chip ' + (hasDate ? 'ok' : 'no') + '">' + (S.lang === 'id' ? 'Push menyebut tenggat' : 'Push names a deadline') + '</span>' +
          (hasDate ? '' : '\n\n' + (S.lang === 'id'
            ? 'Tambahkan tanggal pada Push. Permintaan tanpa tanggal adalah topik, dan topik tidak pernah diputuskan.'
            : 'Add a date to the Push. An ask without a date is a topic, and topics do not get decided.'));
      return;
    }

    if ((el = e.target.closest('[data-act="titleGo"],[data-act="titleEx"]'))) {
      var r3 = el.closest('[data-w="title"]'), ins = $$('input[data-tp]', r3), o3 = $('.out', r3);
      var parts = DATA.titleParts[S.lang];
      if (el.dataset.act === 'titleEx') ins.forEach(function (x, i) { x.value = parts[i][1]; });
      var vals = ins.map(function (x) { return x.value.trim(); });
      var gaps = vals.map(function (x, i) { return x ? null : parts[i][0]; }).filter(Boolean);
      var title = vals.filter(Boolean).join(' ');
      var words = title ? title.split(/\s+/).length : 0;
      o3.hidden = false;
      o3.innerHTML = '<b>' + (S.lang === 'id' ? 'Judul Anda' : 'Your title') + '</b>\n' + (title || '—') + '\n\n' +
        '<span class="chip ' + (gaps.length ? 'no' : 'ok') + '">' + (4 - gaps.length) + '/4 ' +
        (S.lang === 'id' ? 'bagian' : 'parts') + '</span> ' +
        '<span class="chip ' + (words && words <= 20 ? 'ok' : 'no') + '">' + words + ' ' +
        (S.lang === 'id' ? 'kata' : 'words') + '</span>' +
        (gaps.length ? '\n\n' + (S.lang === 'id' ? 'Masih kurang: ' : 'Still missing: ') + gaps.join(', ') +
          (gaps.indexOf(parts[3][0]) > -1 ? '\n' + (S.lang === 'id'
            ? 'Bagian keempat adalah yang paling sering hilang — dan yang mengubah fakta menjadi keputusan.'
            : 'The fourth part is the one most often missing — and the one that turns a fact into a decision.') : '')
          : '');
      return;
    }

    if ((el = e.target.closest('[data-act="w1Go"]'))) {
      var r4 = el.closest('[data-w="w1"]'), v4 = $('textarea[data-w1]', r4).value.trim(), o4 = $('.out', r4);
      var w = v4 ? v4.split(/\s+/).length : 0;
      var hasNum = /\d/.test(v4);
      var hasVerb2 = w >= 5;
      var hasAsk = /(perlu|butuh|setujui|approve|need|sign|by |sebelum|before|rencana|plan)/i.test(v4);
      o4.hidden = false;
      o4.innerHTML = '<span class="chip ' + (w && w <= 16 ? 'ok' : 'no') + '">' + w + '/16 ' +
        (S.lang === 'id' ? 'kata' : 'words') + '</span> ' +
        '<span class="chip ' + (hasNum ? 'ok' : 'no') + '">' + (S.lang === 'id' ? 'ada angka' : 'has a number') + '</span> ' +
        '<span class="chip ' + (hasVerb2 ? 'ok' : 'no') + '">' + (S.lang === 'id' ? 'kalimat utuh' : 'full sentence') + '</span> ' +
        '<span class="chip ' + (hasAsk ? 'ok' : 'no') + '">' + (S.lang === 'id' ? 'ada permintaan' : 'has an ask') + '</span>\n\n' +
        (S.lang === 'id' ? 'Bandingkan dengan tiga jawaban di bawah — baik, lebih baik, terbaik.'
          : 'Compare with the three answers below — good, better, best.');
      return;
    }

    if ((el = e.target.closest('[data-act="planGo"],[data-act="planCopy"]'))) {
      var r5 = el.closest('[data-w="plan"]'), o5 = $('.out', r5), g = {};
      $$('[data-pl]', r5).forEach(function (x) { g[x.dataset.pl] = x.value.trim(); });
      var txt = (S.lang === 'id'
        ? '1 · Buka dengan angka\n   “' + (g.num || '—') + '”\n\n2 · Pola alur cerita\n   ' + (g.story || '—') +
          '\n\n3 · Judul temuan\n   ' + (g.topic || '—') + ' — ' + (g.num || '—') +
          '\n\n4 · Tutup dengan permintaan\n   ' + (g.ask || '—') + '\n   Pemilik dan tanggal: ' + (g.owner || '—') +
          '\n\n5 · Sebelum kirim\n   Tiga angka dikuasai · tiga pertanyaan sulit dijawab · 60 detik dilatih keras'
        : '1 · Open on the number\n   “' + (g.num || '—') + '”\n\n2 · Storyline pattern\n   ' + (g.story || '—') +
          '\n\n3 · Action title\n   ' + (g.topic || '—') + ' — ' + (g.num || '—') +
          '\n\n4 · Close on the ask\n   ' + (g.ask || '—') + '\n   Owner and date: ' + (g.owner || '—') +
          '\n\n5 · Before you send\n   Three numbers cold · three hard questions answered · 60 seconds out loud');
      o5.hidden = false;
      o5.textContent = txt;
      if (el.dataset.act === 'planCopy') { try { navigator.clipboard.writeText(txt); } catch (x) {} }
      return;
    }

    if ((el = e.target.closest('[data-act="sixStart"]'))) {
      var r6 = el.closest('[data-w="six"]'), slide = $('.ssSlide', r6), tm = $('.timer', r6), qb = $('.qBlock', r6);
      qb.hidden = true; qb.innerHTML = '';
      slide.hidden = false; tm.hidden = false;
      var n = 6; tm.textContent = n;
      var iv = setInterval(function () {
        n--; tm.textContent = n;
        if (n <= 0) {
          clearInterval(iv); slide.hidden = true; tm.hidden = true;
          var qs = DATA.sixSecond.questions[S.lang];
          qb.hidden = false;
          qb.innerHTML = qs.map(function (q, i) {
            return '<div class="card" style="margin-bottom:.6rem" data-sq="' + i + '">' +
              '<p style="font-weight:600;margin-bottom:.5rem">' + esc(q[0]) + '</p>' +
              q[1].map(function (a, j) { return '<button class="opt" data-sqa="' + i + '-' + j + '">' + esc(a) + '</button>'; }).join('') +
              '</div>';
          }).join('');
        }
      }, 1000);
      return;
    }
    if ((el = e.target.closest('[data-sqa]'))) {
      var pp = el.dataset.sqa.split('-'), q2 = DATA.sixSecond.questions[S.lang][+pp[0]], c2 = el.closest('[data-sq]');
      $$('.opt', c2).forEach(function (o, j) {
        o.classList.toggle('ok', j === q2[2]);
        o.classList.toggle('no', j === +pp[1] && +pp[1] !== q2[2]);
      });
      return;
    }

    /* topbar */
    if (e.target.closest('#bid')) { setLang('id'); return; }
    if (e.target.closest('#ben')) { setLang('en'); return; }
    if (e.target.closest('#blight')) { setTheme('light'); return; }
    if (e.target.closest('#bdark')) { setTheme('dark'); return; }
    if (e.target.closest('#bmode')) { setMode(S.mode === 'learn' ? 'present' : 'learn'); return; }
    if (e.target.closest('#btoc')) { openDrawer(); return; }
    if (e.target.closest('#bprev')) { show(S.i - 1); return; }
    if (e.target.closest('#bnext')) { show(S.i + 1); return; }
    if (e.target.closest('#bfull')) { toggleFull(); return; }
    if (e.target.id === 'drawer') { closeDrawer(); return; }
    if (!e.target.closest('#searchWrap')) { $('#results').classList.remove('on'); }
  });

  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || tag === 'select') {
      if (e.key === 'Escape') e.target.blur();
      return;
    }
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(S.i + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(S.i - 1); }
    else if (e.key === 'Home') show(0);
    else if (e.key === 'End') show(SECTIONS.length - 1);
    else if (e.key === '/') { e.preventDefault(); $('#search').focus(); }
    else if (e.key === 'f' || e.key === 'F') toggleFull();
    else if (e.key === 'Escape') { closeDrawer(); if (S.mode === 'present') setMode('learn'); }
  });

  /* search */
  var IDX = null;
  function buildIndex() {
    IDX = [];
    SECTIONS.forEach(function (s, i) {
      var bits = [L(s.title), L(s.kicker), s.lead ? L(s.lead) : ''];
      (s.blocks || []).forEach(function (b) {
        ['text', 'label'].forEach(function (k) { if (b[k]) bits.push(L(b[k])); });
        if (b.items) b.items.forEach(function (x) {
          ['h', 'p', 'cap', 'head', 'body', 'a', 'b', 'q'].forEach(function (k) {
            if (x && x[k]) bits.push(typeof x[k] === 'string' ? x[k] : L(x[k]));
          });
        });
      });
      IDX.push({ i: i, title: L(s.title), kicker: L(s.kicker), hay: bits.join(' ').toLowerCase() });
    });
  }
  $('#search').addEventListener('input', function () {
    var q = this.value.trim().toLowerCase(), box = $('#results');
    if (!IDX) buildIndex();
    if (q.length < 2) { box.classList.remove('on'); return; }
    var hits = IDX.filter(function (r) { return r.hay.indexOf(q) > -1; }).slice(0, 12);
    box.innerHTML = hits.length
      ? hits.map(function (r) {
          return '<button data-goto="' + r.i + '"><span class="rk">' + esc(r.kicker) + '</span>' +
            '<span class="rt">' + esc(r.title) + '</span></button>';
        }).join('')
      : '<div style="padding:.8rem;font-size:.85rem;color:var(--ink-3)">' + t('searchEmpty') + '</div>';
    box.classList.add('on');
  });

  /* toggles */
  function setLang(l) {
    S.lang = l; IDX = null;
    document.documentElement.setAttribute('lang', l);
    renderAll(); save();
  }
  function setTheme(v) {
    S.theme = v; document.documentElement.setAttribute('data-theme', v); labels(); save();
  }
  function setMode(m) {
    S.mode = m; document.documentElement.setAttribute('data-mode', m); labels();
    $('#modeHint').textContent = m === 'learn' ? t('modeLearnHint') : t('modePresentHint');
  }
  function toggleFull() {
    try {
      var el = document.documentElement;
      var req = el.requestFullscreen || el.webkitRequestFullscreen;
      var ex = document.exitFullscreen || document.webkitExitFullscreen;
      if (document.fullscreenElement || document.webkitFullscreenElement) { if (ex) ex.call(document); }
      else if (req) req.call(el);
    } catch (e) {}
  }
  function openDrawer() { $('#drawer').classList.add('on'); }
  function closeDrawer() { $('#drawer').classList.remove('on'); }

  /* ------------------------------------------------------------- init -- */
  load();
  document.documentElement.setAttribute('data-theme', S.theme);
  document.documentElement.setAttribute('data-mode', S.mode);
  document.documentElement.setAttribute('lang', S.lang);
  renderAll();
  $('#modeHint').textContent = t('modeLearnHint');
})();
