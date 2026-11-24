# Data List Mechine

Aplikasi web (HTML + JavaScript + Node.js) untuk mengelola daftar mesin: WSID, Nama Lokasi, Vendor, Status PM, dan Catatan.

## Menjalankan
```bash
npm install
npm start
```
Buka http://localhost:3000

## Fitur
- Save / Cancel pada form input
- Edit langsung di baris tabel, lalu Simpan
- Delete: pilih data (checkbox), lalu klik "Hapus Terpilih"
- Import dan Export file Excel (.xlsx). Kolom: WSID, Nama Lokasi, Vendor, Status PM, Catatan

## Menyimpan data ke GitHub
Data tersimpan di `data/data.json`. Upload proyek ke GitHub:
```bash
git init
git add .
git commit -m "Data List Mechine"
git branch -M main
git remote add origin https://github.com/USERNAME/data-list-mechine.git
git push -u origin main
```
Setelah data berubah, jalankan `git add data/data.json && git commit -m "update data" && git push`.

## Opsional: GitHub Pages
Folder `public/` bisa dipublikasikan lewat GitHub Pages. Tanpa server Node.js, data otomatis disimpan di browser (localStorage), jadi gunakan Export/Import Excel untuk berpindah perangkat.
