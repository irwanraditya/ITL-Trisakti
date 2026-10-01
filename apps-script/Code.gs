/**
 * Kuis Esai dengan Pencatatan Aktivitas
 * ------------------------------------------------------------
 * Google Apps Script yang menempel pada satu Google Sheet.
 * Halaman kuis (Index.html) mencatat:
 *   - percobaan menempel / menyeret teks (diblokir)
 *   - percobaan menyalin soal (diblokir)
 *   - berapa kali dan berapa lama mahasiswa meninggalkan halaman
 *   - perbandingan panjang jawaban dengan jumlah karakter yang benar-benar diketik
 * Semua sinyal adalah INDIKATOR untuk ditindaklanjuti dengan pertanyaan lisan,
 * bukan bukti kecurangan.
 *
 * Bisa dipakai dua cara:
 *   1) Halaman kuis di repo GitHub (quiz.html) memanggil API JSON skrip ini.
 *   2) Langsung lewat URL skrip ini: .../exec?kuis=AB-K1 (memakai Index.html).
 *
 * Lembar yang dipakai:
 *   Kuis       : kode | judul | durasi_menit | aktif | mata_kuliah
 *   Soal       : kode | no | soal
 *   Sesi       : waktu_mulai | kode | nim | nama | status
 *   Jawaban    : satu baris per soal per mahasiswa
 *   Ringkasan  : satu baris per mahasiswa
 */

// ------------------------------------------------------------------ konfigurasi
const LEMBAR = {
  kuis: 'Kuis',
  soal: 'Soal',
  sesi: 'Sesi',
  jawaban: 'Jawaban',
  ringkasan: 'Ringkasan',
};

/** Ambang penandaan. Ubah di sini bila terlalu ketat atau terlalu longgar. */
const AMBANG = {
  keluarKali: 3,        // meninggalkan halaman >= 3 kali
  keluarDetik: 30,      // total di luar halaman >= 30 detik
  rasioTeks: 2,         // panjang jawaban >= 2x karakter yang diketik
  minKarakter: 80,      // rasio hanya dinilai untuk jawaban yang cukup panjang
  kecepatanCpm: 450,    // lebih dari 450 karakter per menit waktu aktif
  toleransiMenit: 2,    // kelonggaran waktu kirim di atas durasi
};

const HEADER = {
  kuis: ['kode', 'judul', 'durasi_menit', 'aktif', 'mata_kuliah'],
  soal: ['kode', 'no', 'soal'],
  sesi: ['waktu_mulai', 'kode', 'nim', 'nama', 'status'],
  jawaban: ['waktu_kirim', 'kode', 'nim', 'nama', 'no', 'jawaban', 'karakter',
            'diketik', 'rasio', 'tempel_diblokir', 'aktif_detik',
            'kecepatan_cpm', 'tanda'],
  ringkasan: ['waktu_mulai', 'waktu_kirim', 'kode', 'nim', 'nama', 'durasi_menit',
              'kirim_otomatis', 'keluar_kali', 'keluar_detik', 'tempel_total',
              'salin_soal', 'jumlah_tanda', 'tanda'],
};

// ------------------------------------------------------------------ penyiapan

/**
 * Jalankan SEKALI dari editor Apps Script (pilih fungsi "setup", klik Run).
 * Membuat kelima lembar beserta judul kolom dan contoh soal.
 */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Object.keys(LEMBAR).forEach(function (k) {
    let sh = ss.getSheetByName(LEMBAR[k]);
    if (!sh) sh = ss.insertSheet(LEMBAR[k]);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADER[k]);
      sh.getRange(1, 1, 1, HEADER[k].length).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
  });

  const kuis = ss.getSheetByName(LEMBAR.kuis);
  // migrasi: lembar Kuis lama belum punya kolom mata_kuliah
  if (String(kuis.getRange(1, 5).getValue()).trim() === '') {
    kuis.getRange(1, 5).setValue('mata_kuliah').setFontWeight('bold');
  }
  if (kuis.getLastRow() === 1) {
    // mata_kuliah harus sama dengan judul kartu di landing page (huruf besar/kecil bebas)
    kuis.getRange(2, 1, 2, 5).setValues([
      ['AB-K1', 'Kuis 1 · Analitika Bisnis', 30, false, 'Analitika Bisnis'],
      ['PPM-K1', 'Kuis 1 · Prinsip-prinsip Manajemen', 25, false, 'Prinsip-Prinsip Manajemen'],
    ]);
  }

  const soal = ss.getSheetByName(LEMBAR.soal);
  if (soal.getLastRow() === 1) {
    soal.getRange(2, 1, 6, 3).setValues([
      ['AB-K1', 1, 'Tuliskan satu slide yang pernah Anda kirim di tempat kerja, tanpa menyebut nama perusahaan: judulnya, satu angka utamanya, dan siapa penerimanya. Lalu tulis ulang judul itu menjadi action title.'],
      ['AB-K1', 2, 'Gunakan lembar data yang dibagikan di kelas hari ini. Tulis satu temuan dalam satu kalimat, lalu sebutkan satu hal yang TIDAK bisa disimpulkan dari data itu dan alasannya.'],
      ['AB-K1', 3, 'Dari temuan Anda di soal 2: keputusan apa yang Anda minta, siapa pemiliknya, dan kapan tenggatnya? Jelaskan mengapa pemilik itu yang tepat.'],
      ['PPM-K1', 1, 'Dosen membacakan satu kabar di awal kuis. Tentukan sisi PESTEL mana yang terdampak, lalu sebutkan satu keputusan Andalan Multimoda yang harus berubah karenanya.'],
      ['PPM-K1', 2, 'Tulis satu sasaran untuk organisasi yang Anda amati sejak Pertemuan 1. Lalu tulis ulang sasaran itu agar memenuhi kriteria SMART, dan tunjukkan bagian mana yang berubah.'],
      ['PPM-K1', 3, 'Dosen menulis tiga pilihan di papan beserta angkanya. Pilih satu, sebutkan kriteria yang Anda pakai, dan satu asumsi yang harus benar agar pilihan itu berhasil.'],
    ]);
  }
  const pesan = 'Siap. Ubah kolom "aktif" di lembar Kuis menjadi TRUE saat kuis dibuka.';
  Logger.log(pesan);
  // getUi() hanya tersedia bila dijalankan dari menu spreadsheet, bukan dari editor
  try { SpreadsheetApp.getUi().alert(pesan); } catch (err) { /* dijalankan dari editor */ }
}

// ------------------------------------------------------------------ halaman

function doGet(e) {
  const prm = (e && e.parameter) || {};
  if (prm.api === 'daftar') return json_(daftarKuis_());
  if (prm.api === 'soal') return json_(muatKuis_(prm.kuis));

  const kode = String(prm.kuis || '').trim().toUpperCase();
  const cfg = muatKuis_(kode);
  const t = HtmlService.createTemplateFromFile('Index');
  // escape "<" agar isi soal tidak bisa memutus tag <script>
  t.data = JSON.stringify(cfg).replace(/</g, '\\u003c');
  return t.evaluate()
    .setTitle(cfg ? cfg.judul : 'Kuis')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

/**
 * API untuk halaman kuis di GitHub Pages.
 * Badan permintaan berupa teks JSON: {"aksi": "mulai" | "kirim", ...}.
 * Dikirim sebagai text/plain supaya browser tidak mengirim preflight CORS.
 */
function doPost(e) {
  let p = {};
  try { p = JSON.parse((e && e.postData && e.postData.contents) || '{}'); }
  catch (err) { return json_({ ok: false, pesan: 'Permintaan tidak valid.' }); }
  if (p.aksi === 'mulai') return json_(mulai(p.kode, p.nim, p.nama));
  if (p.aksi === 'kirim') return json_(kirim(p));
  return json_({ ok: false, pesan: 'Aksi tidak dikenal.' });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Kuis yang sedang aktif, untuk ditampilkan di kartu mata kuliah. */
function daftarKuis_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rows = ss.getSheetByName(LEMBAR.kuis).getDataRange().getValues().slice(1);
  const soal = ss.getSheetByName(LEMBAR.soal).getDataRange().getValues().slice(1);
  return rows
    .filter(function (r) { return String(r[0]).trim() && aktif_(r[3]); })
    .map(function (r) {
      const kode = String(r[0]).trim().toUpperCase();
      const n = soal.filter(function (x) {
        return String(x[0]).trim().toUpperCase() === kode && String(x[2]).trim();
      }).length;
      return { kode: kode, judul: String(r[1]), durasi: Number(r[2]) || 30,
               mata_kuliah: String(r[4] || '').trim(), jumlah_soal: n };
    })
    .filter(function (k) { return k.jumlah_soal > 0; });
}

function aktif_(v) {
  return v === true || /^(true|ya|1)$/i.test(String(v).trim());
}

function muatKuis_(kode) {
  kode = String(kode || '').trim().toUpperCase();
  if (!kode) return null;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const kuis = ss.getSheetByName(LEMBAR.kuis).getDataRange().getValues().slice(1);
  const baris = kuis.filter(function (r) {
    return String(r[0]).trim().toUpperCase() === kode && aktif_(r[3]);
  })[0];
  if (!baris) return null;

  const soal = ss.getSheetByName(LEMBAR.soal).getDataRange().getValues().slice(1)
    .filter(function (r) { return String(r[0]).trim().toUpperCase() === kode && String(r[2]).trim(); })
    .sort(function (a, b) { return Number(a[1]) - Number(b[1]); })
    .map(function (r) { return { no: Number(r[1]), teks: String(r[2]) }; });

  if (!soal.length) return null;
  return { kode: kode, judul: String(baris[1]), durasi: Number(baris[2]) || 30, soal: soal };
}

// ------------------------------------------------------------------ sesi

/**
 * Dipanggil ketika mahasiswa menekan "Mulai".
 * Waktu mulai dicatat di server, jadi memuat ulang halaman tidak mengulang waktu.
 */
function mulai(kode, nim, nama) {
  kode = String(kode || '').trim().toUpperCase();
  nim = String(nim || '').trim();
  nama = String(nama || '').trim();
  if (!muatKuis_(kode)) return { ok: false, pesan: 'Kuis tidak ditemukan atau belum dibuka.' };
  if (!/^[A-Za-z0-9.\-]{3,30}$/.test(nim)) return { ok: false, pesan: 'NIM tidak valid.' };
  if (nama.length < 2) return { ok: false, pesan: 'Nama wajib diisi.' };

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LEMBAR.sesi);
    const data = sh.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][1]).toUpperCase() === kode && String(data[i][2]) === nim) {
        if (data[i][4] === 'terkirim') return { ok: false, pesan: 'Jawaban NIM ini untuk kuis ini sudah terkirim.' };
        return { ok: true, mulai: new Date(data[i][0]).getTime(), sekarang: Date.now() };
      }
    }
    const kini = new Date();
    sh.appendRow([kini, kode, nim, nama, 'berjalan']);
    return { ok: true, mulai: kini.getTime(), sekarang: kini.getTime() };
  } finally {
    lock.releaseLock();
  }
}

// ------------------------------------------------------------------ penilaian sinyal

/** Fungsi murni: menghitung tanda untuk satu jawaban. */
function tandaSoal_(q) {
  const t = [];
  const karakter = String(q.jawaban || '').length;
  const diketik = Math.max(Number(q.diketik) || 0, 0);
  const aktifMenit = Math.max(Number(q.aktifMs) || 0, 1) / 60000;
  const rasio = diketik > 0 ? karakter / diketik : (karakter > 0 ? Infinity : 0);
  const cpm = karakter / aktifMenit;

  if (Number(q.tempel) > 0) t.push('mencoba menempel (' + q.tempel + 'x)');
  if (karakter >= AMBANG.minKarakter && rasio >= AMBANG.rasioTeks) t.push('teks masuk tanpa diketik');
  if (karakter >= AMBANG.minKarakter && cpm > AMBANG.kecepatanCpm) t.push('kecepatan tidak wajar');
  return { tanda: t, karakter: karakter, diketik: diketik,
           rasio: isFinite(rasio) ? Math.round(rasio * 100) / 100 : 'tak hingga',
           cpm: Math.round(cpm), aktifDetik: Math.round((Number(q.aktifMs) || 0) / 1000) };
}

/** Fungsi murni: menghitung tanda tingkat halaman. */
function tandaHalaman_(p, durasiMenitIzin, durasiMenitNyata) {
  const t = [];
  if (Number(p.keluar) >= AMBANG.keluarKali) t.push('keluar halaman ' + p.keluar + 'x');
  if (Number(p.keluarMs) / 1000 >= AMBANG.keluarDetik) t.push('di luar halaman ' + Math.round(p.keluarMs / 1000) + ' detik');
  if (Number(p.salin) > 0) t.push('mencoba menyalin soal (' + p.salin + 'x)');
  if (durasiMenitNyata > durasiMenitIzin + AMBANG.toleransiMenit) t.push('melewati batas waktu');
  return t;
}

// ------------------------------------------------------------------ pengiriman

function kirim(p) {
  const kode = String(p && p.kode || '').trim().toUpperCase();
  const nim = String(p && p.nim || '').trim();
  const cfg = muatKuis_(kode);
  if (!cfg) return { ok: false, pesan: 'Kuis sudah ditutup. Hubungi dosen.' };
  if (!Array.isArray(p.jawaban)) return { ok: false, pesan: 'Data jawaban tidak lengkap.' };

  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sesi = ss.getSheetByName(LEMBAR.sesi);
    const data = sesi.getDataRange().getValues();
    let baris = -1, waktuMulai = null, nama = String(p.nama || '').trim();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][1]).toUpperCase() === kode && String(data[i][2]) === nim) {
        baris = i + 1; waktuMulai = new Date(data[i][0]); nama = String(data[i][3]);
        if (data[i][4] === 'terkirim') return { ok: false, pesan: 'Jawaban sudah terkirim sebelumnya.' };
      }
    }
    if (baris < 0) return { ok: false, pesan: 'Sesi tidak ditemukan. Mulai ulang dari tautan kuis.' };

    const kini = new Date();
    const durasiNyata = (kini - waktuMulai) / 60000;
    const semuaTanda = tandaHalaman_(p, cfg.durasi, durasiNyata);

    const rows = cfg.soal.map(function (s) {
      const q = p.jawaban.filter(function (x) { return Number(x.no) === s.no; })[0] || {};
      const h = tandaSoal_(q);
      h.tanda.forEach(function (x) { semuaTanda.push('soal ' + s.no + ': ' + x); });
      return [kini, kode, nim, nama, s.no, String(q.jawaban || '').slice(0, 45000),
              h.karakter, h.diketik, h.rasio, Number(q.tempel) || 0,
              h.aktifDetik, h.cpm, h.tanda.join('; ')];
    });

    const jw = ss.getSheetByName(LEMBAR.jawaban);
    jw.getRange(jw.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);

    const tempelTotal = p.jawaban.reduce(function (a, q) { return a + (Number(q.tempel) || 0); }, 0);
    ss.getSheetByName(LEMBAR.ringkasan).appendRow([
      waktuMulai, kini, kode, nim, nama, Math.round(durasiNyata * 10) / 10,
      p.otomatis === true, Number(p.keluar) || 0, Math.round((Number(p.keluarMs) || 0) / 1000),
      tempelTotal, Number(p.salin) || 0, semuaTanda.length, semuaTanda.join('; '),
    ]);

    sesi.getRange(baris, 5).setValue('terkirim');
    return { ok: true };
  } finally {
    lock.releaseLock();
  }
}
