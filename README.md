# Arabic Mate

Website pembelajaran bahasa Arab fusha tingkat pemula, tanpa database atau API berbayar. Palet: #FFBE91, #FFDDB0, #FFFCE1, #CFEBFF.

## Menjalankan

Gunakan Node.js 20 atau lebih baru. Tidak ada dependensi eksternal.

```sh
npm run dev
```

Buka http://localhost:3000. Untuk verifikasi dan build:

```sh
npm test
npm run build
```

`dist/` adalah hasil website statis. `npm run dev` adalah server pengembangan, bukan server produksi.

## GitHub dan Vercel

1. Ekstrak ZIP. Unggah **isi folder arabicmate** (termasuk package.json, index.html, src, scripts, dan vercel.json) ke root repositori GitHub baru. Jangan unggah ZIP sebagai satu-satunya file repositori.
2. Pada Vercel, impor repositori tersebut.
3. Framework Preset: Other. Build Command: `npm run build`. Output Directory: `dist`. Install Command dapat dikosongkan. Tidak ada environment variable yang diperlukan.
4. Deploy. Perubahan kode pada branch produksi yang terhubung dapat memicu deployment berikutnya.

Jika folder arabicmate dimasukkan sebagai subfolder repositori, pilih folder itu sebagai Root Directory pada Vercel.

## Fitur

- Enam tema, 36 kosakata berharakat dan transliterasi.
- Pencarian dan filter tema berdasarkan progres.
- Tandai kata yang sudah dipelajari; flashcard dua sisi.
- Enam simulasi dialog, masing-masing tiga giliran, dengan dua pilihan balasan.
- Enam kuis, masing-masing enam soal, dengan skor dan pembahasan.
- Dashboard dan riwayat kuis lokal; ekspor/impor JSON yang divalidasi; reset dengan konfirmasi.
- Audio Web Speech API hanya bila perangkat menyediakan suara bahasa Arab.
- Tata letak responsif, RTL pada teks Arab, focus keyboard, reduced motion.

## Batasan yang disengaja

Ini aplikasi statis interaktif, **belum full stack**: tidak ada backend produksi, akun, database, atau AI. Dialog tidak menilai input bebas. Kedua pilihan balasan merupakan latihan valid; respons berikutnya tetap mengikuti skenario. Kuis saat ini menguji arti kosakata, belum pemahaman dialog. Ilustrasi menggunakan emoji perangkat dan elemen CSS, bukan animasi karakter khusus. Progres dapat hilang jika data browser dihapus; gunakan ekspor cadangan. Nilai bukan untuk ujian resmi. Materi awal perlu ditinjau pengajar Arab sebelum penggunaan formal; beberapa dialog menggunakan sapaan maskulin tunggal.

## Struktur dan pengembangan

- `src/data.js`: sumber materi bertema dan generator soal dengan ID tetap.
- `src/app.js`: router hash, interaksi, penilaian, penyimpanan lokal dan transfer progres.
- `src/style.css`: token warna dan tampilan responsif.
- `scripts/`: server pengembangan dan build statis.
- `tests/`: validasi konsistensi materi dan soal.

Untuk pengembangan full stack, pisahkan penyimpanan dari UI menjadi adapter, lalu hubungkan autentikasi dan penyimpanan progres per pengguna; aktifkan pembatasan akses data pada server. Tambahkan endpoint server untuk AI dengan kunci API rahasia, pembatasan penggunaan, dan validasi input. Jangan meletakkan API key pada JavaScript browser. Versi ini sengaja tidak menyertakan endpoint atau login semu.

## Verifikasi

Tes konten dan pemeriksaan sintaks JavaScript dapat dijalankan lokal. Pemeriksaan ini tidak menggantikan pengujian browser, perangkat seluler, ketersediaan audio, serta review linguistik oleh pengajar.
