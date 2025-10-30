# Panduan Deployment ke GitHub Pages

Website Anda sudah dikonfigurasi untuk GitHub Pages! Berikut langkah-langkah deployment:

## Metode 1: GitHub Actions (Otomatis) - DIREKOMENDASIKAN

### Langkah-langkah:

1. **Push code ke GitHub repository Anda:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages di repository:**
   - Buka repository Anda di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di bagian **Source**, pilih **GitHub Actions**
   
3. **Deploy otomatis:**
   - Setiap kali Anda push ke branch `main` atau `master`, website akan otomatis di-build dan deploy
   - Cek progress di tab **Actions** di repository GitHub Anda
   - Tunggu sampai proses selesai (biasanya 1-3 menit)

4. **Akses website Anda:**
   - URL: `https://sepatug28-hash.github.io/`
   - Tunggu 2-5 menit setelah deployment pertama

## Metode 2: Manual Deploy dengan gh-pages

### Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

### Tambahkan script di package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Deploy:
```bash
npm run deploy
```

## Konfigurasi yang Sudah Ditambahkan

✅ `vite.config.ts` - Base path sudah dikonfigurasi  
✅ `src/App.tsx` - BrowserRouter basename sudah diset  
✅ `.github/workflows/deploy.yml` - GitHub Actions workflow  
✅ `public/.nojekyll` - Mencegah Jekyll processing  

## Troubleshooting

### Halaman Masih Putih?

1. **Cek GitHub Actions:**
   - Buka tab **Actions** di repository
   - Pastikan build berhasil (hijau ✓)
   
2. **Cek GitHub Pages Settings:**
   - Settings → Pages
   - Source harus: **GitHub Actions**
   
3. **Clear Cache Browser:**
   - Tekan `Ctrl + Shift + R` (Windows/Linux)
   - Tekan `Cmd + Shift + R` (Mac)
   
4. **Cek Console Browser:**
   - Tekan F12 untuk buka Developer Tools
   - Lihat Console untuk error
   
5. **Tunggu DNS Propagation:**
   - Deployment pertama bisa memakan waktu 5-10 menit

### Error 404 saat navigasi?

Jika mendapat error 404 saat refresh halaman (selain homepage), Anda perlu menambahkan file `404.html`:

```bash
cp dist/index.html dist/404.html
```

Atau tambahkan script di package.json:
```json
{
  "scripts": {
    "build": "vite build && cp dist/index.html dist/404.html"
  }
}
```

## Deployment ke Custom Domain

Jika Anda punya domain sendiri:

1. Buat file `public/CNAME` dengan isi nama domain Anda:
   ```
   yourdomain.com
   ```

2. Update `vite.config.ts`:
   ```typescript
   base: "/"  // Sudah benar untuk custom domain
   ```

3. Konfigurasi DNS di domain provider Anda:
   - Tambahkan CNAME record: `www` → `sepatug28-hash.github.io`
   - Tambahkan A records untuk apex domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## URL Website Anda

🌐 **Production URL:** https://sepatug28-hash.github.io/

---

**Catatan:** Semua perubahan sudah disimpan. Anda tinggal push ke GitHub dan aktifkan GitHub Pages!
