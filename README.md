# 🎓 ITL Trisakti — Academic Digital Hub

A lightweight academic landing page for **Institut Transportasi dan Logistik Trisakti (ITL Trisakti)**.

The repository provides a centralized gateway to:

- Academic HTML course decks
- Teaching & learning resources
- The official ITL Trisakti Academic Portal
- Automatically generated resource listings

## 🌐 Academic Portal

The official academic information system is available at:

**https://academic.itltrisakti.ac.id/**

The landing page intentionally opens the Academic Portal in a new tab instead of embedding it in an iframe. This preserves the portal's authentication/session behavior and avoids login/session issues caused by embedded third-party pages.

## 📚 Current Resources

| Resource | Type | Category |
| --- | --- | --- |
| Analitika Bisnis | Course Deck | Teaching |
| Pengantar Manajemen | Course Deck | Teaching |
| Prinsip-Prinsip Manajemen | Course Deck | Teaching |
| Presentation Skills | Course Deck | Teaching |
| Agile untuk Manajemen Proyek | Topic Deck | Teaching |
| Memahami Metode Development melalui Analogi Transportasi | Topic Deck | Teaching |
| English Learning Academy | Learning Platform | Learning |
| BI Lite · Nusantara Kargo | BI Practice App | Learning |

## 🚀 GitHub Pages

To publish the hub:

1. Open the repository **Settings**.
2. Select **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main`.
5. Select folder `/ (root)`.
6. Save.

The landing page will then be available through the repository's GitHub Pages URL.

## 🔄 Automatic Resource Discovery

You do **not** need to manually edit the landing page every time a new HTML resource is added.

The GitHub Actions workflow (not yet committed to this repository):

```text
.github/workflows/generate-academic-hub.yml
```

automatically scans the repository for `.html` files and generates:

```text
projects.json
```

The landing page reads `projects.json` and creates the resource cards dynamically.

### Adding a new resource

Simply add a new `.html` file to the `main` branch.

For example:

```text
Statistika Bisnis.html
```

Push the change:

```bash
git add .
git commit -m "Add Statistika Bisnis course deck"
git push origin main
```

GitHub Actions will regenerate `projects.json`.

If you add this workflow, exclude `quiz.html` and `apps-script/` from the scan so they do not appear as course cards.

## 🏷️ Optional HTML Metadata

For better cards, an HTML resource can include these metadata tags:

```html
<meta name="academic-category" content="Teaching">
<meta name="academic-type" content="Course Deck">
<meta name="academic-description" content="Deck pembelajaran satu semester untuk mata kuliah tertentu.">
<meta name="academic-icon" content="∑">
```

If the metadata is not present, the workflow automatically falls back to:

- Category: `Academic`
- Type: `HTML Resource`
- Description: generated from the HTML `<title>`
- Icon: `▤`

## 📁 Repository Structure

```text
ITL-Trisakti/
├── index.html
├── projects.json
├── README.md
│
├── quiz.html              ← halaman kuis
├── quiz-config.js         ← URL Web App Apps Script
│
├── Analitika Bisnis.html
├── Pengantar Manajemen.html
├── Prinsip-Prinsip Manajemen.html
├── Presentation Skills.html
├── Agile untuk Manajemen Proyek.html   ← deck topik ID/EN dengan simulasi gedung interaktif
├── Memahami Metode Development melalui Analogi Transportasi.html   ← deck topik ID/EN; mode kelas ?kelas=ppm|ab|semua
│
├── english-learning-academy.html   ← platform belajar bahasa Inggris A1 → Professional (dibangun dari english-academy/src)
├── english-academy/
│   ├── content/            ← kurikulum, 99 pelajaran, teks, asesmen, simulasi (data)
│   ├── src/                ← sumber app shell + build.py
│   ├── tools/              ← validate.js dan e2e.js
│   └── README.md           ← dokumentasi teknis lengkap
│
├── bi-lite.html            ← BI ringan ala Power BI/Tableau dengan data Nusantara Kargo
├── bi-lite/
│   ├── data-nusantara-kargo.js   ← data kolom hasil build (jangan diedit manual)
│   ├── tools/              ← build_data.py dan e2e.js
│   └── README.md           ← dokumentasi teknis
│
└── apps-script/           ← disalin ke Google Apps Script, bukan dijalankan di Pages
    ├── Code.gs
    └── Index.html
```

## 🇬🇧 English Learning Academy

`english-learning-academy.html` is a self-paced English platform from **A1 Beginner** to **C1** and **Professional English** (CEFR), built for Indonesian learners: 99 lessons with Indonesian explanations, a vocabulary builder with spaced repetition (1–3–7–14–30 days), a daily study planner, listening (browser speech + transcripts), speaking practice, a placement test, six stage assessments, a final assessment and ten professional simulations. Progress is saved in the learner's browser, with JSON export/import.

Content lives in `english-academy/content/` as data files. To change content, edit the file, run the validator, and push:

```bash
node english-academy/tools/validate.js .     # must report ERRORS 0
python3 english-academy/src/build.py .       # only if src/ changed or a content file was added
node english-academy/tools/e2e.js .          # optional full browser test (Playwright)
```

See [`english-academy/README.md`](english-academy/README.md) for the architecture, content schema, configuration, testing and limitations.

## 📊 BI Lite · Nusantara Kargo

`bi-lite.html` is a lightweight, browser-only BI practice app modelled on Power BI and Tableau. Students pick a table, drag fields to Axis, Legend and Values, choose an aggregation (including **% Ya** for OTD), cross-filter by clicking, add slicers and page filters, and arrange multi-page reports. It ships twelve visual types, automatic date hierarchies, a raw Data view, CSV download per visual, light/dark themes and a phone layout. Dashboards autosave in the browser and can be exported/imported as `.json` (e.g. for submission).

Data is the fictitious **Nusantara Kargo 2025** dataset already published at `materi/ab/dataset-project-ab-2026.xlsx` (5 tables, 11,155 shipments). No libraries, no server, no student data.

```bash
python3 bi-lite/tools/build_data.py .   # rebuild data after the Excel changes (needs openpyxl)
node bi-lite/tools/e2e.js .             # browser test (Playwright); must report 0 failed
```

See [`bi-lite/README.md`](bi-lite/README.md) for architecture, design decisions, limitations and ideas.

## 📝 Kuis Esai per Mata Kuliah

Setiap kartu mata kuliah di landing page dapat menampilkan **kuis yang sedang aktif**.
Soal dan jawaban disimpan di Google Sheet milik dosen melalui Google Apps Script;
halaman kuisnya sendiri (`quiz.html`) berjalan di GitHub Pages.

```text
Google Sheet (soal, sesi, jawaban)
        ↑↓  Apps Script Web App (apps-script/Code.gs)
GitHub Pages: index.html → kartu "Kuis aktif" → quiz.html?kuis=KODE
```

### Pemasangan (sekali)

1. Buat Google Sheet baru → **Extensions → Apps Script**.
2. Tempel isi `apps-script/Code.gs` ke `Code.gs`. Tambahkan berkas HTML bernama `Index`
   dan tempel isi `apps-script/Index.html`.
3. Jalankan fungsi `setup` sekali (Run) dan beri izin.
4. **Deploy → New deployment → Web app**, *Execute as: Me*, *Who has access: **Anyone***.
5. Salin URL Web App (berakhiran `/exec`) ke `quiz-config.js`:

   ```js
   window.QUIZ_API = 'https://script.google.com/macros/s/XXXX/exec';
   ```

6. Commit `quiz-config.js`.

> Akses harus **Anyone**. Pilihan *Anyone with Google account* membuat browser
> dialihkan ke halaman login sehingga landing page tidak bisa membaca daftar kuis.

### Membuka dan menutup kuis

Semua diatur dari Google Sheet, tanpa mengubah repositori:

| Lembar | Kolom | Fungsi |
| --- | --- | --- |
| `Kuis` | `kode`, `judul`, `durasi_menit` | Identitas kuis |
| `Kuis` | `aktif` | Kotak centang. Dicentang (`TRUE`) = muncul di landing page dan bisa dikerjakan; tidak dicentang = soal tidak bisa dibuka siapa pun |
| `Kuis` | `mata_kuliah` | Harus sama dengan judul kartu, misalnya `Analitika Bisnis` |
| `Soal` | `kode`, `no`, `soal` | Satu baris per soal |
| `Sesi` | `status` | Log mulai per mahasiswa: `berjalan` atau `terkirim` |
| `Jawaban` | per soal | Jawaban dan log ketikan per soal per mahasiswa |
| `Ringkasan` | `tanda` | Log per mahasiswa per kuis; indikator untuk pertanyaan lisan |
| `Panduan` | — | Catatan langkah membuka, menutup, dan merekap kuis (tidak dibaca sistem) |

Landing page memperbarui daftar kuis setiap 60 detik.

#### Format teks di sel `soal`

| Isi sel | Tampil di halaman kuis |
| --- | --- |
| Baris biasa | Teks soal (baris baru ikut tampil) |
| Baris berturut-turut berisi ` \| ` (spasi, garis tegak, spasi) | Tabel; baris pertama menjadi judul kolom. Kolom yang isinya angka rata kanan |
| Baris berawalan `## ` | Judul kecil tebal, misalnya judul tabel atau gambar |
| Satu baris `<svg …>…</svg>` | Gambar. Ditampilkan sebagai gambar terpisah (`<img>`), sehingga isi SVG tidak bisa menjalankan skrip |
| Teks **sebelum** baris `[SOAL]` | Kartu bacaan (cerita kasus, tabel, gambar) di atas kartu soal itu, tanpa kotak jawaban. Tombol **↑ Kasus** di bilah bawah kembali ke kartu ini |

Cerita kasus dan gambar ikut tersembunyi selama kuis belum dicentang `aktif`, karena seluruhnya
disimpan di Sheet dan baru dikirim API saat kuis dibuka. Jangan simpan isi ujian di repositori ini.

> **Menutup kuis:** hapus centang `aktif` hanya setelah semua mahasiswa terkirim. Kuis yang sudah ditutup menolak kiriman,
> termasuk kiriman otomatis di akhir waktu. Pastikan tidak ada status `berjalan` di lembar `Sesi` untuk kode kuis itu,
> atau tunggu durasi + 2 menit sejak mahasiswa terakhir menekan Mulai.

### Yang dicatat halaman kuis

Keluar halaman, percobaan menempel atau menyalin soal (diblokir), perbandingan panjang
jawaban dengan teks yang diketik, kecepatan mengetik, dan keterlambatan pengiriman.
Mahasiswa diberi tahu di awal. Semua tanda adalah **indikator** untuk ditindaklanjuti
dengan pertanyaan lisan, bukan bukti kecurangan. Ambang dapat diubah di bagian `AMBANG`
pada `Code.gs`.

## 📎 Materi & Tugas per Mata Kuliah

Kartu mata kuliah menampilkan blok **Materi & tugas** dari kunci `materi` di `projects.json`. Setiap entri berisi `judul`, `keterangan`, `jenis` (`Slide`, `PDF`, `Excel`, atau `ZIP`), `file` (jalur di repo), dan `unduh` (opsional: nama file saat diunduh). Slide dan PDF dibuka di tab baru; Excel dan ZIP langsung diunduh.

| Mata kuliah | Materi | File |
|---|---|---|
| Analitika Bisnis | Slide tatap muka 10 Oktober 2026 | `materi/ab/tatap-muka-10-okt-2026.html` |
| Analitika Bisnis | Dataset project Nusantara Kargo 2025 (fiktif) | `materi/ab/dataset-project-ab-2026.xlsx` |
| Analitika Bisnis | Tutorial mengerjakan project dengan bantuan AI (17 Oktober 2026) | `materi/ab/tutorial-ai-copilot-17-okt-2026.html` |
| Analitika Bisnis | Template markdown project (ZIP, 5 file) | `materi/ab/template-markdown-project-ab.zip` |
| Analitika Bisnis | Pembahasan UTS: Kasus Misteri OTD (nama mahasiswa ditulis inisial) | `materi/ab/pembahasan-uts-ab-2026.html` |
| Prinsip-Prinsip Manajemen | Tugas Kelompok Organizing & Actuating | `materi/ppm/tugas-kelompok-organizing-actuating.pdf` |
| Prinsip-Prinsip Manajemen | Pembahasan progres minggu 1 (17 Oktober 2026) | `materi/ppm/progres-minggu-1-17-okt-2026.html` |
| Prinsip-Prinsip Manajemen | Pembahasan progres minggu 2 (data chat 17–24 Oktober 2026) | `materi/ppm/progres-minggu-2-24-okt-2026.html` |
| Prinsip-Prinsip Manajemen | Pembahasan progres minggu 3 (data chat 24 Oktober – 13 November 2026) | `materi/ppm/progres-minggu-3-13-nov-2026.html` |

Kunci jawaban dataset project **tidak** diunggah ke repo; disimpan dosen di PC.

Slide pembahasan progres kelompok hanya memakai nomor kelompok dan nama peran (tanpa nama, NIM, atau nomor telepon) dan diberi `noindex`. Ekspor chat WhatsApp kelompok **tidak** diunggah ke repo.

## 🖼️ Galeri Karya Mahasiswa

`galeri.html` menampilkan karya mahasiswa sebagai contoh bagi mahasiswa lain dan angkatan berikutnya. Kartu mata kuliah di landing page otomatis menampilkan tautan **Galeri karya mahasiswa** bila mata kuliah itu punya karya yang tampil.

| Mata kuliah | Karya yang tampil |
|---|---|
| Analitika Bisnis (S2) | Tugas 1 (SI ADI DEMEN BABI) dan Tugas 2 (Data Storytelling) |
| Prinsip-Prinsip Manajemen (S1) | Tugas 1 (Career Planning 5–10 Tahun) |

**Aturan privasi (wajib):**

- Semua mata kuliah: nama, NIM, email, dan nomor telepon mahasiswa ditutup.
- Analitika Bisnis: **nama perusahaan** juga ditutup (nama badan usaha, logo, merek pada nama kapal, watermark foto), karena kasus diangkat dari tempat kerja mahasiswa. Nama instansi pemerintah dan sumber data tetap terlihat.
- Prinsip-Prinsip Manajemen: nama perusahaan pada lowongan LinkedIn **tetap terlihat** karena lowongan bersifat publik (keputusan dosen).
- Setiap karya dirasterisasi ulang menjadi PDF gambar tanpa metadata, sehingga teks asli tidak dapat disalin kembali.
- Berkas pemetaan ID karya ↔ nama/NIM **tidak pernah** masuk repo; disimpan dosen di PC.
- Halaman diberi `noindex, nofollow`. Mahasiswa dapat meminta karyanya diturunkan kapan saja.

**Struktur:**

```text
galeri.html                 halaman galeri (?mk=<nama mata kuliah>)
galeri/galeri.json          daftar karya yang tampil, per mata kuliah dan tugas
galeri/<folder>/<id>.pdf    PDF standar A4
galeri/<folder>/<id>-p<n>.jpg   gambar halaman untuk penampil web
galeri/<folder>/<id>-thumb.jpg  thumbnail kartu (720×540)
```

Setiap mata kuliah di `galeri.json` dapat memuat `privasi` (catatan di bawah pengantar), `catatan_penampil` (teks kecil di penampil halaman), dan `panduan` (tiga kotak cara membaca galeri). Setiap entri `karya` berisi `id`, `topik`, `bidang`, `halaman`, dan `pilihan` (lencana "Pilihan dosen"). Menambah atau menurunkan karya cukup dengan mengubah `galeri.json` dan berkasnya; halaman tidak perlu diubah.

## 🛠️ Local Development

No build system or framework is required.

You can open `index.html` through a local static server.

For example, with VS Code Live Server or Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## 🔐 Authentication Note

The official Academic Portal is treated as an external application.

It is **not embedded inside the landing page** because authentication/session handling can be restricted when an application is loaded inside an iframe.

The hub therefore provides a dedicated **Open Academic Portal** button.

## ✨ Design Goals

The hub is intentionally designed to be:

- Professional and institution-oriented
- Lightweight
- Responsive on desktop and mobile
- Easy to maintain
- Searchable
- GitHub Pages compatible
- Automatically expandable as new HTML resources are added

---

**Institut Transportasi dan Logistik Trisakti**  
Academic Digital Hub
