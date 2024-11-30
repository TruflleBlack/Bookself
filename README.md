# Bookshelf App

Aplikasi **Bookshelf App** adalah aplikasi untuk mengelola koleksi buku, di mana pengguna dapat menambahkan, mencari, memindahkan antar rak, dan menghapus buku yang telah disimpan. Data buku disimpan secara permanen menggunakan `localStorage`, yang memungkinkan aplikasi tetap menyimpan data meskipun halaman web ditutup atau di-refresh.

## Fitur

- **Tambah Buku**: Pengguna dapat menambahkan buku baru dengan detail seperti judul, penulis, tahun rilis, dan status selesai dibaca.
- **Pencarian Buku**: Pengguna dapat mencari buku berdasarkan judul.
- **Rak Buku**: Buku akan dikelompokkan dalam dua rak:
  - **Belum Selesai Dibaca**: Buku dengan status `isComplete: false`
  - **Selesai Dibaca**: Buku dengan status `isComplete: true`
- **Pindah Buku Antar Rak**: Pengguna dapat memindahkan buku antar rak dengan mengubah status buku.
- **Hapus Buku**: Buku dapat dihapus dari rak dan `localStorage`.

## Teknologi

- **HTML**: Struktur aplikasi
- **CSS**: Styling aplikasi agar tampil menarik
- **JavaScript**: Fungsionalitas interaktif dan penyimpanan data di `localStorage`

## Penggunaan

1. **Menambah Buku**:
   - Isi form untuk menambahkan buku baru dengan judul, penulis, tahun rilis, dan status selesai dibaca.
   - Klik tombol **Tambahkan Buku** untuk menambahkan buku ke rak.

2. **Mencari Buku**:
   - Gunakan form pencarian untuk mencari buku berdasarkan judul.

3. **Memindahkan Buku Antar Rak**:
   - Klik tombol **Selesai dibaca** atau **Belum selesai dibaca** pada buku untuk memindahkannya antara rak "Belum Selesai Dibaca" dan "Selesai Dibaca".

4. **Menghapus Buku**:
   - Klik tombol **Hapus Buku** pada buku yang ingin dihapus dari rak dan `localStorage`.

5. **Data Persisten**:
   - Semua data buku disimpan di `localStorage`, sehingga perubahan tetap ada meskipun halaman di-refresh atau ditutup.

## Struktur Direktori

/Bookshelf-App
├── index.html        # Halaman utama aplikasi
├── style.css         # Styling aplikasi
├── main.js           # Logika aplikasi dan penyimpanan data
└── README.md         # Dokumentasi proyek

## Instalasi

Untuk menjalankan aplikasi ini, cukup buka file `index.html` di browser Anda:

1. Clone repository atau download file.
2. Buka file `index.html` di browser.

Tidak perlu instalasi tambahan, karena aplikasi ini hanya menggunakan HTML, CSS, dan JavaScript yang berjalan di browser.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, Anda dapat:
1. Fork repository ini.
2. Buat branch baru untuk perubahan Anda.
3. Buat pull request dengan penjelasan mengenai perubahan yang dilakukan.

## Lisensi

Proyek ini bersifat open-source dan dapat digunakan sesuai dengan kebutuhan Anda. Tidak ada lisensi khusus yang diberikan pada proyek ini.
