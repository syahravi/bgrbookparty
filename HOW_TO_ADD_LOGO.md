# 🎨 Cara Menambahkan Logo BBP ke Website

## ✅ Yang Sudah Dilakukan

Saya sudah mengintegrasikan logo ke dalam website dengan fitur:
- ✅ Logo di Header (kiri atas)
- ✅ Logo di Footer (versi putih)
- ✅ Fallback otomatis jika logo belum ada
- ✅ Responsive untuk mobile & desktop

## 📝 Langkah-langkah Export Logo

Berdasarkan gambar logo yang Anda berikan, Anda perlu export dalam 2 versi:

### Versi 1: Logo untuk Header (logo.png)
**Background:** Transparan atau Putih
**Warna Logo:** Hijau original (#053923)

### Versi 2: Logo untuk Footer (logo-white.png)
**Background:** Transparan
**Warna Logo:** Putih (#FFFFFF)

---

## 🎨 Cara Export dengan Canva

1. **Buka logo di Canva**
2. **Untuk logo.png (hijau):**
   - Share → Download
   - File type: PNG
   - ✅ Centang "Transparent background"
   - Download
   - Rename file menjadi `logo.png`

3. **Untuk logo-white.png (putih):**
   - Duplicate design
   - Select semua elemen logo
   - Ubah warna menjadi putih (#FFFFFF)
   - Share → Download
   - File type: PNG
   - ✅ Centang "Transparent background"
   - Download
   - Rename file menjadi `logo-white.png`

---

## 🎨 Cara Export dengan Photoshop

1. **Buka logo.png di Photoshop**
2. **Untuk versi putih:**
   - Duplicate layer
   - Select All (Ctrl+A)
   - Image → Adjustments → Hue/Saturation
   - Drag Lightness ke +100
   - Atau gunakan Color Overlay layer style (putih)
3. **Export:**
   - File → Export → Export As
   - Format: PNG
   - ✅ Transparency: ON
   - Save as `logo-white.png`

---

## 🎨 Cara Export dengan GIMP (Gratis)

1. **Buka logo di GIMP**
2. **Untuk versi putih:**
   - Colors → Desaturate
   - Colors → Invert (atau manual adjustment)
   - Layer → Transparency → Add Alpha Channel
3. **Export:**
   - File → Export As
   - File type: PNG
   - ✅ Save background color: OFF
   - Export

---

## 📁 Cara Menyimpan Logo ke Project

Setelah export, simpan kedua file ke folder `public/`:

```
d:\Documents\Work\Js\next\public\
├── logo.png          ← Logo hijau untuk header
└── logo-white.png    ← Logo putih untuk footer
```

### Copy File:
1. Buka Windows Explorer
2. Navigate ke: `d:\Documents\Work\Js\next\public\`
3. Paste kedua file logo
4. Refresh browser (F5)

---

## 🧪 Testing

Setelah menyimpan logo:

1. **Stop dev server** (jika masih running):
   ```bash
   # Tekan Ctrl+C
   ```

2. **Start ulang**:
   ```bash
   npm run dev
   ```

3. **Buka browser**: http://localhost:3000

4. **Cek:**
   - ✅ Header: Logo hijau muncul di kiri atas
   - ✅ Footer: Logo putih muncul di bagian bawah
   - ✅ Mobile: Logo responsive & terlihat baik

---

## 🔄 Fallback Mode

**Jika logo belum ada**, website akan otomatis menampilkan:
- Icon buku dengan teks "BOGOR Book Party"
- Tetap terlihat profesional
- Bisa digunakan sementara sambil prepare logo

Ini sudah aktif sekarang! Jadi website tetap bisa dijalankan dulu.

---

## 📐 Spesifikasi Rekomendasi

| Property | Value |
|----------|-------|
| **Format** | PNG dengan transparency |
| **Ukuran** | 800-1000px width, 300-400px height |
| **Ratio** | 2.5:1 atau 3:1 (landscape) |
| **File Size** | < 100KB |

---

## 💡 Tips

1. **Logo terlalu besar?**
   - Website otomatis resize, tapi lebih baik optimize dulu
   - Gunakan [TinyPNG](https://tinypng.com) untuk compress

2. **Logo kurang tajam?**
   - Export dengan resolution lebih tinggi (2x atau 3x)
   - Next.js Image akan optimize otomatis

3. **Warna tidak pas?**
   - Header: Logo dengan warna asli (hijau #053923)
   - Footer: Logo putih (#FFFFFF) di background hijau

---

## 🚀 Siap Deploy!

Setelah logo ditambahkan, website siap untuk:
- ✅ Development
- ✅ Production
- ✅ Deploy ke Vercel/Netlify

Logo akan otomatis muncul di semua environment!

---

**Need help?** Logo component sudah ada fallback, jadi website tetap bisa jalan tanpa logo dulu. Tapi untuk hasil optimal, tambahkan logo sesuai panduan di atas! 🎉
