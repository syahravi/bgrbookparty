# ⚡ Quick Start - Bogor Book Party

Panduan cepat untuk menjalankan website dalam 5 menit!

## 🏃‍♂️ Super Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.local.example .env.local

# 3. Run dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 🔑 Default Login

**Admin Panel:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Username: `admin`
- Password: `admin123`

## 📝 Important Notes

### ⚠️ Tanpa Supabase
Website akan berjalan dengan **data dummy/static**. Untuk data dynamic dari database, Anda perlu:

1. **Buat Supabase Project** (gratis): [supabase.com](https://supabase.com)
2. **Jalankan Database Schema**: Copy `lib/supabase-schema.sql` ke Supabase SQL Editor
3. **Update `.env.local`**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
   ```

### 📁 Pages Available

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Landing page |
| Events | `/events` | Jadwal event |
| Books | `/books` | Katalog buku |
| Links | `/links` | Link bio |
| About | `/about` | Tentang kami |
| Register | `/register` | Form pendaftaran |
| Admin Login | `/admin/login` | Login admin |
| Dashboard | `/admin/dashboard` | Admin panel |

## 🎨 Customize

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#A8D5BA", // Your color here
  }
}
```

### Edit Content
1. Login admin
2. Toggle "Edit Mode"
3. Edit content
4. Save

## 🚀 Deploy

### Vercel (1-Click Deploy)
```bash
# Push to GitHub
git init
git add .
git commit -m "Init"
git push

# Then: Import to Vercel
```

## 📖 Full Documentation

Lihat [SETUP_GUIDE.md](./SETUP_GUIDE.md) untuk panduan lengkap.

---

**That's it! Happy coding! 🎉**
