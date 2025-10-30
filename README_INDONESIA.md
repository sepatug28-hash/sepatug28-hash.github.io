# NordicHome - Website Furniture Scandinavian

Website e-commerce furniture dengan desain modern Scandinavian yang sudah dikonfigurasi untuk deployment ke GitHub Pages.

## ✨ Fitur Website

### Produk
- **30 produk berkualitas tinggi** dengan gambar dari Unsplash
- **6 kategori lengkap**: Living Room, Bedroom, Kitchen, Dining, Storage, Office
- **5 produk per kategori** untuk pilihan yang beragam

### Halaman
- 🏠 **Home** - Hero section, kategori, produk unggulan
- 📦 **Products** - Semua produk dengan filter kategori
- 🏷️ **Category** - Halaman khusus per kategori
- 📄 **Product Detail** - Detail produk individual
- ℹ️ **About** - Tentang toko
- 📧 **Contact** - Halaman kontak

### Teknologi
- ⚡ **Vite** - Build tool super cepat
- ⚛️ **React** - UI framework modern
- 🎨 **Tailwind CSS** - Styling utility-first
- 🎯 **shadcn/ui** - Komponen UI premium
- 🔀 **React Router** - Navigasi client-side

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub

```bash
# Tambahkan semua perubahan
git add .

# Commit
git commit -m "Add furniture products and configure GitHub Pages"

# Push ke repository
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository Anda di GitHub: `https://github.com/sepatug28-hash/sepatug28-hash.github.io`
2. Klik **Settings** (tab di kanan atas)
3. Scroll ke bawah dan klik **Pages** di menu kiri
4. Di bagian **Source**, pilih **GitHub Actions** (bukan branch)
5. Klik **Save**

### Langkah 3: Tunggu Deployment

1. Klik tab **Actions** di repository
2. Anda akan melihat workflow "Deploy to GitHub Pages" sedang berjalan
3. Tunggu sampai ada tanda centang hijau (✓) - biasanya 2-5 menit
4. Website Anda sudah online! 🎉

### Langkah 4: Akses Website

🌐 **URL Website:** https://sepatug28-hash.github.io/

**Catatan:** Deployment pertama bisa memakan waktu 5-10 menit untuk propagasi DNS.

## 🛠️ Development Lokal

### Install Dependencies
```bash
npm install
```

### Jalankan Development Server
```bash
npm run dev
```

Buka browser: `http://localhost:5000`

### Build untuk Production
```bash
npm run build
```

File hasil build ada di folder `dist/`

## 📋 Apa yang Sudah Dikonfigurasi?

✅ **vite.config.ts** - Base path untuk GitHub Pages  
✅ **src/App.tsx** - BrowserRouter basename  
✅ **.github/workflows/deploy.yml** - GitHub Actions auto-deploy  
✅ **public/.nojekyll** - Mencegah Jekyll processing  
✅ **package.json** - Build script dengan 404.html routing  

## 🔧 Troubleshooting

### Halaman Masih Putih?

**Solusi 1: Clear Cache Browser**
- Windows/Linux: Tekan `Ctrl + Shift + R`
- Mac: Tekan `Cmd + Shift + R`

**Solusi 2: Cek GitHub Actions**
1. Buka tab **Actions** di repository
2. Pastikan workflow berhasil (hijau ✓)
3. Jika merah (✗), klik untuk lihat error

**Solusi 3: Verifikasi GitHub Pages Settings**
1. Settings → Pages
2. Source harus: **GitHub Actions**
3. Build and deployment harus menunjukkan URL

**Solusi 4: Tunggu Lebih Lama**
- Deployment pertama bisa memakan waktu hingga 10 menit
- Refresh halaman setelah beberapa menit

### Error 404 saat Navigasi?

Ini sudah ditangani otomatis dengan file `404.html` yang dibuat saat build.

### Gambar Tidak Muncul?

Semua gambar menggunakan Unsplash CDN, pastikan koneksi internet stabil.

## 📦 Daftar Produk

### Living Room (5 produk)
1. Modern Sofa - $899
2. Coffee Table - $329
3. Accent Chair - $549
4. TV Stand - $429
5. Floor Lamp - $199

### Bedroom (5 produk)
6. Minimalist Bed Frame - $749
7. Wardrobe - $1,099
8. Nightstand - $249
9. Dresser with Mirror - $899
10. Bedside Table Lamp - $129

### Kitchen (5 produk)
11. Kitchen Cabinet - $899
12. Kitchen Island - $1,299
13. Bar Stools Set - $399
14. Pantry Shelf - $349
15. Kitchen Cart - $279

### Dining (5 produk)
16. Dining Table Set - $1,299
17. Dining Chairs Set of 4 - $699
18. Extendable Dining Table - $1,499
19. Sideboard Cabinet - $849
20. Dining Bench - $399

### Storage (5 produk)
21. Bookshelf - $299
22. Storage Cabinet - $549
23. Wall Shelving Unit - $379
24. Cube Storage Organizer - $229
25. Display Cabinet - $679

### Office (5 produk)
26. Office Chair - $449
27. Standing Desk - $799
28. Filing Cabinet - $329
29. Desk Organizer - $89
30. Office Bookcase - $599

## 📞 Support

Jika ada masalah atau pertanyaan, lihat file `DEPLOY_GITHUB_PAGES.md` untuk panduan lengkap deployment.

## 🎯 Next Steps

Setelah website online:
1. ✅ Test semua halaman dan navigasi
2. ✅ Cek responsive design di mobile
3. ✅ Verifikasi semua gambar muncul
4. ✅ Test filter kategori di halaman Products
5. 🎨 Customize warna atau konten sesuai kebutuhan
6. 📝 Tambah produk lebih banyak jika perlu
7. 🌐 Hubungkan custom domain (opsional)

---

**🎉 Website Anda siap online di GitHub Pages!**

Tinggal push ke GitHub dan aktifkan GitHub Pages di Settings.
