# 🚀 Setup Guide - Bogor Book Party

Panduan lengkap untuk setup website Bogor Book Party dari awal hingga production.

## 📋 Prerequisites

- Node.js 18+ terinstall
- NPM atau Yarn terinstall
- Akun Supabase (gratis di [supabase.com](https://supabase.com))
- Git terinstall (opsional)

## 🔧 Step-by-Step Setup

### 1. Clone & Install Dependencies

```bash
# Clone repository
git clone <repository-url>
cd next

# Install dependencies
npm install
```

### 2. Setup Supabase

#### 2.1 Buat Project Supabase
1. Login ke [Supabase Dashboard](https://supabase.com/dashboard)
2. Klik "New Project"
3. Isi detail project:
   - Name: `bogor-book-party`
   - Database Password: (simpan password ini!)
   - Region: Southeast Asia (Singapore)
4. Klik "Create new project"
5. Tunggu 2-3 menit sampai project siap

#### 2.2 Jalankan Database Schema
1. Buka project Supabase Anda
2. Klik "SQL Editor" di sidebar
3. Klik "New Query"
4. Copy semua isi dari file `lib/supabase-schema.sql`
5. Paste di SQL Editor
6. Klik "Run" atau tekan Ctrl+Enter
7. Pastikan muncul "Success. No rows returned"

#### 2.3 Dapatkan API Keys
1. Di Supabase Dashboard, klik "Settings" (icon gear)
2. Klik "API" di sidebar
3. Copy dua values ini:
   - **Project URL** (URL)
   - **anon public** key (API Key)

### 3. Setup Environment Variables

```bash
# Copy example env file
cp .env.local.example .env.local
```

Edit file `.env.local` dan isi dengan credentials Supabase:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Run Development Server

```bash
npm run dev
```

Buka browser dan akses:
- Website: [http://localhost:3000](http://localhost:3000)
- Admin: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

**Default Admin Login:**
- Username: `admin`
- Password: `admin123`

### 5. Verify Setup

Cek apakah semua halaman bisa diakses:
- ✅ Home: [/](http://localhost:3000/)
- ✅ Events: [/events](http://localhost:3000/events)
- ✅ Books: [/books](http://localhost:3000/books)
- ✅ Links: [/links](http://localhost:3000/links)
- ✅ About: [/about](http://localhost:3000/about)
- ✅ Register: [/register](http://localhost:3000/register)
- ✅ Admin Login: [/admin/login](http://localhost:3000/admin/login)
- ✅ Admin Dashboard: [/admin/dashboard](http://localhost:3000/admin/dashboard)

## 📊 Supabase Database Verification

### Cek Tables
Di Supabase Dashboard:
1. Klik "Table Editor"
2. Pastikan ada 6 tables:
   - `site_content`
   - `events`
   - `books`
   - `social_links`
   - `members`
   - `admins`

### Cek Sample Data
1. Klik table `social_links`
2. Seharusnya ada 4 rows (Instagram, WhatsApp, TikTok, Goodreads)

## 🎨 Customization

### Update Content

#### 1. Hero Section (Landing Page)
Edit di Admin Dashboard:
- Login ke `/admin/login`
- Klik "Hero Section"
- Toggle "Edit Mode"
- Edit tagline dan description
- Klik "Save Changes"

#### 2. Social Links
Edit di Admin Dashboard → Social Links:
- Tambah link baru dengan "Add Link"
- Edit URL social media yang ada
- Hapus link yang tidak perlu

#### 3. Colors & Fonts
Edit file `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "#A8D5BA", // Ganti dengan warna Anda
    // ...
  }
}
```

### Add Your Own Events

Via Admin Dashboard:
1. Login ke admin
2. Klik "Events"
3. Toggle "Edit Mode"
4. Klik "Add Event"
5. Isi form dan save

Via Supabase (Manual):
1. Buka Supabase Dashboard
2. Klik "Table Editor" → `events`
3. Klik "Insert" → "Insert row"
4. Isi semua field:
   - title: "Judul Event"
   - description: "Deskripsi event"
   - date: "2025-12-25"
   - time: "14:00 - 16:00 WIB"
   - location: "Lokasi"
   - status: "upcoming"
5. Klik "Save"

## 🚀 Deployment ke Production

### Deploy ke Vercel (Recommended)

#### 1. Push Code ke GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. Deploy di Vercel
1. Login ke [Vercel](https://vercel.com)
2. Klik "Add New..." → "Project"
3. Import repository GitHub Anda
4. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. **PENTING:** Add Environment Variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-key>
   ```
6. Klik "Deploy"
7. Tunggu 2-3 menit
8. Website Anda live! 🎉

### Custom Domain (Optional)
1. Di Vercel Dashboard, buka project Anda
2. Klik "Settings" → "Domains"
3. Add domain Anda (contoh: bogorbookparty.com)
4. Follow instruksi untuk update DNS

## 🔐 Security Checklist untuk Production

- [ ] Ganti default admin password
- [ ] Enable RLS (Row Level Security) di Supabase
- [ ] Setup email auth di Supabase (optional)
- [ ] Add CAPTCHA di form registration
- [ ] Enable HTTPS only
- [ ] Setup error monitoring (Sentry)
- [ ] Backup database secara regular

## 🐛 Troubleshooting

### Error: "Could not connect to Supabase"
**Fix:**
1. Cek `.env.local` sudah correct
2. Pastikan Supabase project sudah selesai setup
3. Restart dev server: `npm run dev`

### Error: "Table does not exist"
**Fix:**
1. Jalankan ulang `lib/supabase-schema.sql` di SQL Editor
2. Pastikan tidak ada error saat run script

### Build Error
**Fix:**
```bash
# Clear cache dan rebuild
rm -rf .next
npm run build
```

### Admin Login Tidak Bisa
**Fix:**
1. Cek browser console untuk error
2. Clear browser cache dan cookies
3. Cek localStorage di DevTools

## 📞 Support

Jika ada masalah:
1. Cek [Next.js Documentation](https://nextjs.org/docs)
2. Cek [Supabase Documentation](https://supabase.com/docs)
3. Open issue di GitHub repository

---

**Selamat! Website Bogor Book Party siap digunakan! 🎉📚**
