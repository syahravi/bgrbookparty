# 🎨 Logo Quick Reference

## 📍 Lokasi File Logo

```
public/
├── logo.png          # Logo untuk Header (hijau/transparan)
└── logo-white.png    # Logo untuk Footer (putih/transparan)
```

## 🎯 Spesifikasi

| File | Background | Warna Logo | Ukuran |
|------|------------|------------|--------|
| `logo.png` | Transparan/Putih | Hijau #053923 | 800-1000px × 300-400px |
| `logo-white.png` | Transparan | Putih #FFFFFF | 800-1000px × 300-400px |

## ⚡ Quick Steps

1. Export logo dalam 2 warna (hijau & putih)
2. Save sebagai PNG dengan transparency
3. Rename files:
   - `logo.png` (hijau)
   - `logo-white.png` (putih)
4. Copy ke folder `public/`
5. Refresh browser

## 🔍 Dimana Logo Muncul?

- ✅ **Header** (semua halaman) - `logo.png`
- ✅ **Footer** (semua halaman) - `logo-white.png`
- ✅ **Mobile & Desktop** - Responsive otomatis

## 🎨 Logo Component

File: [components/layout/Logo.tsx](components/layout/Logo.tsx)

**Features:**
- Auto fallback jika logo tidak ada
- Error handling built-in
- 2 variants: default & white
- Responsive & optimized

## 🚫 Fallback Mode

Jika logo belum ditambahkan, website akan menampilkan:
```
[📖 Icon] BOGOR
         Book Party
```

Website tetap bisa berjalan tanpa logo!

## ✅ Checklist

- [ ] Export logo.png (hijau, PNG, transparent)
- [ ] Export logo-white.png (putih, PNG, transparent)
- [ ] Copy ke folder `public/`
- [ ] Test di browser (refresh F5)
- [ ] Check mobile responsive
- [ ] Ready to deploy!

---

**Status saat ini:** Logo component sudah terintegrasi, tinggal tambahkan file logo!
