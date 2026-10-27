# Arabic Mate, versi revisi kosakata dan percakapan

Media belajar bahasa Arab fusha tingkat pemula tanpa backend atau database. Tampilan memakai palet pastel. Materi ditampilkan dalam enam tema.

## Perubahan utama

- **72 kosakata**, masing-masing **12 kata per tema**. Setiap kosakata memiliki ilustrasi SVG yang disimpan **secara lokal**, kata Arab berharakat, transliterasi, arti bahasa Indonesia, audio pelafalan (jika suara Arab tersedia), dan tombol penanda progres.
- **36 giliran percakapan**, masing-masing **6 giliran per tema**. Siswa merespons dengan **ketikan bahasa Arab**, **rekaman suara**, atau keduanya. Tidak lagi wajib memilih salah satu opsi balasan. Terdapat dua contoh balasan untuk setiap giliran, yang bisa dibuka jika memerlukan bantuan.
- **Dikte Arab** (opsional) untuk mengubah ucapan menjadi ketikan pada browser yang mendukung `SpeechRecognition`.
- Rekaman suara bisa didengarkan sebelum dikirim, dihapus, serta diputar kembali di riwayat percakapan **selama halaman aktif**. Rekaman tidak diunggah ke server, tidak termasuk berkas ekspor progres, dan hilang ketika halaman ditutup atau di-refresh. Dikte dapat menggunakan layanan penyedia browser.
- Flashcard menggunakan ilustrasi yang sama. Kuis bertambah menjadi 12 soal per tema, menyesuaikan seluruh kosakata.
- Penyimpanan progres lama (`arabicmate:v1`) dan berkas ekspor JSON versi 1 tetap didukung. Kata awal mempertahankan indeks sebelumnya.

## Cara menjalankan

Diperlukan Node.js minimal versi 20, tanpa instalasi dependensi tambahan.

```sh
npm run dev
```

Buka **http://localhost:3000**. Untuk verifikasi dan build:

```sh
npm test
npm run build
```

Build menyiapkan `dist/` sebagai situs statis dan memperbarui **`ArabicMate-Preview.html`** sebagai pratinjau satu berkas dengan gambar tersemat. Pratinjau ini bisa dibuka secara langsung untuk melihat desain, tetapi **uji rekaman suara sebaiknya memakai `localhost` atau situs HTTPS** agar browser dapat mengizinkan mikrofon.

## Mengunggah ke GitHub dan Vercel

Unggah isi folder proyek (termasuk `package.json`, `index.html`, `src/`, `scripts/`, dan `vercel.json`) ke root repositori. Di Vercel pilih Framework Preset **Other**, Build Command `npm run build`, Output Directory **`dist`**. Tidak diperlukan environment variable. Jika folder proyek berada di subfolder repositori, set Root Directory ke subfolder tersebut.

## Batasan dan privasi

- Percakapan adalah **latihan terbuka berbasis skenario**, bukan AI interaktif. Ketikan dan rekaman siswa **tidak diperiksa otomatis**. Setelah siswa mengirim balasan, skenario berpindah ke giliran berikutnya. Guru perlu menilai pelafalan serta ketepatan jawaban bila digunakan sebagai tugas penilaian.
- Rekaman memerlukan izin mikrofon. API perekaman tidak tersedia pada semua browser atau akses non-HTTPS. Fitur dikte lebih terbatas lagi karena dukungan browser dan bahasa Arab berbeda menurut perangkat. Keduanya opsional: ketikan tetap tersedia.
- Progres kata, status penyelesaian dialog, dan hasil kuis disimpan lokal pada browser. Tidak ada akun, sinkronisasi, atau penyimpanan audio permanen.
- Ilustrasi menggunakan file SVG lokal yang berisi pictogram emoji sesuai kata. Tampilan ikon emoji bisa sedikit berbeda antar sistem operasi. Gambar tidak mengambil aset eksternal.
- Contoh kalimat ditujukan bagi pembelajar pemula dan sebaiknya diperiksa ulang oleh pengajar bahasa Arab sebelum pemakaian sebagai materi resmi; beberapa sapaan menggunakan bentuk maskulin tunggal.

## Struktur

- `src/data.js`: kosakata, rujukan ilustrasi, dialog, dan generator kuis.
- `src/images/vocabulary/`: 72 ilustrasi kosakata dalam SVG.
- `src/images/scenes/`: 6 ilustrasi latar percakapan (pasar, bandara, warung, taman, rumah, kelas). Dibuat ulang lewat `node scripts/make-scenes.mjs`.
- `src/app.js`: tampilan, interaksi latihan teks dan suara, progres, dan router.
- `src/style.css`: desain responsif.
- `scripts/build-preview.mjs`: membuat pratinjau HTML mandiri dengan gambar yang disematkan.
- `tests/content.test.js`: validasi materi, gambar, dan soal.
