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
│
└── apps-script/           ← disalin ke Google Apps Script, bukan dijalankan di Pages
    ├── Code.gs
    └── Index.html
```

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
| `Kuis` | `aktif` | `TRUE` = muncul di landing page dan bisa dikerjakan |
| `Kuis` | `mata_kuliah` | Harus sama dengan judul kartu, misalnya `Analitika Bisnis` |
| `Soal` | `kode`, `no`, `soal` | Satu baris per soal |
| `Ringkasan` | `tanda` | Indikator untuk pertanyaan lisan |

Landing page memperbarui daftar kuis setiap 60 detik.

### Yang dicatat halaman kuis

Keluar halaman, percobaan menempel atau menyalin soal (diblokir), perbandingan panjang
jawaban dengan teks yang diketik, kecepatan mengetik, dan keterlambatan pengiriman.
Mahasiswa diberi tahu di awal. Semua tanda adalah **indikator** untuk ditindaklanjuti
dengan pertanyaan lisan, bukan bukti kecurangan. Ambang dapat diubah di bagian `AMBANG`
pada `Code.gs`.

## 🖼️ Galeri Karya Mahasiswa

`galeri.html` menampilkan karya mahasiswa semester sebelumnya sebagai contoh bagi angkatan berikutnya. Kartu mata kuliah di landing page otomatis menampilkan tautan **Galeri karya mahasiswa** bila mata kuliah itu punya karya yang tampil.

**Aturan privasi (wajib):**

- Hanya karya yang mahasiswanya menyatakan **setuju** (opt-in). Tidak menjawab = tidak tampil.
- Tanpa nama: nama, NIM, email, dan nomor telepon ditutup. Setiap karya dirasterisasi ulang menjadi PDF gambar tanpa metadata, sehingga teks asli tidak dapat disalin kembali.
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

Setiap entri `karya` berisi `id`, `topik`, `bidang`, `halaman`, dan `pilihan` (lencana "Pilihan dosen"). Menambah atau menurunkan karya cukup dengan mengubah `galeri.json` dan berkasnya; halaman tidak perlu diubah.

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
