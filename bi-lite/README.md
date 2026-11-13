# BI Lite · Nusantara Kargo

Aplikasi business intelligence versi ringan ala Power BI dan Tableau yang berjalan sepenuhnya di browser. Mahasiswa bisa menyusun dashboard dari dataset fiktif **Nusantara Kargo 2025** tanpa memasang perangkat lunak dan tanpa akun.

Halaman: [`bi-lite.html`](../bi-lite.html) · Kartu hub: **BI Lite · Nusantara Kargo** (kategori Learning).

## Tujuan

- Memberi tempat latihan alur kerja BI: pilih tabel, tarik kolom ke Sumbu/Legenda/Nilai, pilih cara hitung, saring, dan susun halaman laporan.
- Memakai data yang sudah dikenal mahasiswa Analitika Bisnis (dataset Project AB 2026), sehingga fokusnya pada cara membaca data, bukan cara memasang alat.
- Bisa dipakai di laptop kampus, laptop pribadi, atau ponsel.

## Fitur

| Area | Isi |
|---|---|
| Visual (12) | Kartu KPI, Kolom, Batang, Kolom bertumpuk, Kolom 100%, Garis, Area, Donat, Sebar, Tabel, Matriks (dengan gradasi warna), Slicer |
| Cara hitung | Jumlah, Rata-rata, Median, Min, Maks, Hitung, Hitung unik, **% Ya** (untuk kolom Ya/Tidak, misalnya `Tepat_Waktu` → OTD), Jumlah baris |
| Tanggal | Hierarki otomatis: Tahun, Semester, Kuartal, Bulan, Minggu (ISO), Hari |
| Penyaringan | Filter silang (klik batang/irisan/titik/baris), slicer, filter per visual, filter per halaman (daftar nilai atau rentang angka/tanggal) |
| Format | Judul, ukuran (¼, ⅓, ½, penuh), urutan, N teratas, label data |
| Halaman | Beberapa halaman per laporan; klik dua kali nama halaman untuk mengganti nama |
| Data | Tampilan **Data**: tabel mentah per tabel, pencarian, urut kolom, 100 baris per halaman |
| Keluaran | "Lihat data" per visual + unduh CSV (pemisah `;`, aman untuk Excel Indonesia); simpan/buka dashboard sebagai `.json` |
| Lainnya | Simpan otomatis di browser, tema terang/gelap, tata letak ponsel |

## Arsitektur

```text
materi/ab/dataset-project-ab-2026.xlsx   (sumber, sudah publik di hub)
        │  python3 bi-lite/tools/build_data.py .
        ▼
bi-lite/data-nusantara-kargo.js           window.BI_DATA = {tables:{...}} format kolom
        │  <script src>
        ▼
bi-lite.html                               satu file: CSS + JS tanpa pustaka luar
   ├─ model data    : dekode kolom (cat/num/date/seq), turunan hierarki tanggal
   ├─ mesin agregasi: filter → group-by (Map) → akumulator per ukuran
   ├─ renderer      : SVG buatan sendiri per jenis visual
   └─ keadaan       : {v:1, pages:[{visuals, filters}]} → localStorage + ekspor JSON
```

**Keputusan desain**

| Keputusan | Alasan | Alternatif yang tidak dipilih |
|---|---|---|
| Tanpa pustaka grafik (SVG sendiri) | Tidak bergantung CDN, cepat dimuat, tetap jalan bila jaringan kampus membatasi CDN | Chart.js/ECharts: lebih kaya, tetapi menambah 200–900 KB dan ketergantungan versi |
| Data format kolom + kamus kategori | 11.155 baris kiriman cukup 616 KB (±140 KB terkompresi) | JSON per baris: ±3× lebih besar |
| Satu visual = satu tabel | Sederhana dan bebas ambiguitas; `Kiriman` sudah digabung dengan `Pelanggan` saat build | Model relasi penuh ala Power BI: rumit untuk versi ringan |
| Simpan di browser + berkas JSON | Tanpa server, tanpa akun, tidak ada data mahasiswa yang dikirim ke mana pun | Penyimpanan cloud: butuh backend dan pengelolaan akun |

## Data

| Tabel | Baris | Isi |
|---|---|---|
| Kiriman | 11.155 | Satu baris per resi 2025: tanggal pickup/terima, hub asal, layanan, kota tujuan, pelanggan, jenis barang, berat, SLA, lama kirim, tepat waktu, ongkir, catatan kurir, plus `Segmen_Pelanggan`, `Jenis_Tarif`, `Diskon_Pelanggan` dari Pelanggan |
| Pelanggan | 120 | Profil pelanggan |
| Armada | 432 | Truk per bulan: rit, km, solar, biaya, hari tidak operasi |
| Gudang | 60 | Gudang per bulan: kiriman keluar, lama di gudang, klaim |
| Terminal | 96 | Terminal peti kemas per bulan 2022–2025: kunjungan kapal, TEU, pendapatan, BOR, waiting time |

Arti setiap kolom diambil dari sheet **Kamus Data** dan tampil saat kursor diarahkan ke nama kolom.

**Asumsi build:** `SLA_hari` dan `Tahun_Pembuatan` diperlakukan sebagai kategori; `No_Resi` berurutan sehingga dibangkitkan di browser (`NK25-000001` …). Kolom yang namanya mengandung hari, rata, BOR, diskon, harga, per, waiting, atau tahun memakai Rata-rata sebagai cara hitung bawaan; kolom angka lain memakai Jumlah.

## Privasi dan materi AB

- Seluruh data **fiktif** dan sudah publik di hub (`materi/ab/dataset-project-ab-2026.xlsx`). Tidak ada data mahasiswa.
- Contoh dashboard sengaja netral (volume, ongkir, berat, pelanggan, layanan, jenis barang, kota). Contoh itu **tidak** menghitung atau menyinggung temuan yang dinilai di Project AB. Pertahankan aturan ini saat mengubah contoh atau teks bantuan (lihat aturan privasi nomor 8 di dokumentasi proyek).
- Tidak ada yang dikirim ke server. Simpanan otomatis hanya di browser pengguna (kunci `bi-lite-v1`).

## Pemakaian

1. Buka `bi-lite.html` dari hub. Contoh dashboard dimuat saat pertama kali dibuka.
2. **+ Visual** → pilih jenis di tab **Visual** → klik atau seret kolom dari daftar **Data**.
3. Klik elemen grafik untuk filter silang; hapus lewat chip × di atas kanvas.
4. **Simpan berkas** untuk mengumpulkan atau memindahkan dashboard; **Buka berkas** untuk memuatnya lagi.

Untuk dosen: berkas `.json` kiriman mahasiswa bisa dibuka lewat **Buka berkas** untuk melihat dashboard yang sama persis.

## Perawatan

```bash
# setelah dataset Excel berubah
python3 bi-lite/tools/build_data.py .        # butuh openpyxl

# uji ujung-ke-ujung (butuh Playwright + Chromium); harus 0 failed
node bi-lite/tools/e2e.js . [folder-screenshot]
```

Bila format keadaan dashboard berubah tidak kompatibel, naikkan `v` di `blank()`/`valid()` dan kunci `KEY` agar simpanan lama tidak dimuat dengan keliru.

## Batasan

- Satu visual hanya memakai satu tabel; belum ada relasi lintas tabel di luar gabungan Kiriman–Pelanggan.
- Belum ada kolom/ukuran hitungan buatan pengguna (DAX/calculated field).
- Tata letak kanvas berbasis grid ukuran tetap, bukan geser-bebas.
- Kategori yang ditampilkan dibatasi agar tetap terbaca: legenda 12 nilai, donat 8 irisan + "Lainnya", matriks 24 kolom, tabel 1.000 baris, slicer 400 nilai.
- Simpanan otomatis hilang bila data situs browser dibersihkan; pakai **Simpan berkas** untuk cadangan.

## Pengembangan lanjutan

| Ide | Manfaat | Kompleksitas |
|---|---|---|
| Ukuran hitungan sederhana (misal `Ongkir_Rp / Berat_kg`) | Latihan rasio seperti pendapatan per kg | Sedang |
| Unggah CSV/Excel sendiri | Dipakai untuk dataset lain di mata kuliah lain | Sedang |
| Ekspor PNG per visual | Memudahkan menempel grafik ke laporan | Rendah |
| Garis rata-rata/target pada grafik | Latihan membaca kinerja terhadap target | Rendah |
| Drill-down hierarki tanggal (Tahun → Bulan) | Lebih dekat dengan perilaku Power BI | Sedang |
