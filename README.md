# 📚 Bogor Book Party Website

Website komunitas pecinta buku di Bogor yang dibangun dengan Next.js 16, TypeScript, Tailwind CSS, dan Supabase.

## 🎨 Features

### Halaman Visitor (Public)
- ✅ **Landing Page** - Hero section dengan statistik dan preview event
- ✅ **Link Bio** - Custom Linktree untuk social media
- ✅ **Jadwal Event** - Daftar event dengan filter dan status
- ✅ **Katalog Buku** - Grid buku rekomendasi dengan search & filter
- ✅ **Form Pendaftaran Member** - Form dengan validasi lengkap
- ✅ **About Us** - Sejarah, visi misi, tim, dan gallery

### Sistem Admin
- ✅ **Login Admin** - Authentication system
- ✅ **Dashboard Admin** - Edit mode toggle untuk live editing
- ✅ **CRUD Management**:
  - Hero Section
  - About Section
  - Events
  - Books Catalog
  - Social Links
  - Member List

### Design & UX
- 🎨 Tema warna pastel hijau (#A8D5BA, #D4EBE0, #053923)
- ⚡ Animasi smooth dengan Framer Motion
- 📱 Responsive design (mobile-first)
- 🎯 Custom scrollbar dan smooth scroll
- ✨ Toast notifications

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL)
- **Form Validation**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 📦 Installation

1. **Clone repository**
```bash
git clone <repository-url>
cd next
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.local.example .env.local
```

Edit `.env.local` dan isi dengan credentials Supabase Anda:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. **Setup Supabase Database**

Buka Supabase Dashboard → SQL Editor, lalu jalankan script di `lib/supabase-schema.sql`

5. **Run development server**
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

## 🗄 Database Schema

### Tables
- `site_content` - Konten statis (hero, about, stats)
- `events` - Jadwal event komunitas
- `books` - Katalog buku rekomendasi
- `social_links` - Link bio untuk social media
- `members` - Data pendaftar member
- `admins` - User admin

Lihat detail schema di `lib/supabase-schema.sql`

## 🔐 Admin Access

**Default Credentials:**
- Username: `admin`
- Password: `admin123`

**Admin URL:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

⚠️ **PENTING**: Ganti password default di production!

## 📁 Project Structure

```
next/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── events/                  # Events page
│   ├── books/                   # Books catalog
│   ├── links/                   # Link bio
│   ├── register/                # Member registration
│   ├── about/                   # About us
│   └── admin/
│       ├── login/              # Admin login
│       └── dashboard/          # Admin dashboard
├── components/
│   ├── layout/                 # Header, Footer
│   └── ui/                     # Button, Input, Textarea
├── lib/
│   ├── supabase.ts            # Supabase client
│   ├── database.types.ts      # TypeScript types
│   ├── auth.ts                # Auth utilities
│   └── utils.ts               # Helper functions
└── public/                     # Static assets
```

## 🎯 Key Features Explained

### 1. Color System
Tema pastel hijau yang cozy dan modern:
- Primary: `#A8D5BA` (hijau pastel)
- Secondary: `#D4EBE0` (hijau sangat muda)
- Accent: `#053923` (hijau tua)
- Background: `#F5FBF8` (putih kehijauan)

### 2. Typography
- Body: Inter (clean, modern)
- Display/Heading: Playfair Display (elegant, serif)

### 3. Admin Dashboard
- **Edit Mode Toggle**: Aktifkan untuk mengedit konten
- **Live Preview**: Lihat perubahan real-time
- **CRUD Operations**: Tambah, edit, hapus data
- **Toast Notifications**: Feedback untuk setiap aksi

### 4. Form Validation
Menggunakan Zod schema untuk validasi:
- Nama: min 3 karakter
- Email: format valid
- WhatsApp: 10-15 digit angka
- Alasan: min 20 karakter

### 5. Responsive Design
Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push code ke GitHub
2. Import project di Vercel
3. Set environment variables
4. Deploy!

### Manual Build
```bash
npm run build
npm run start
```

## 🔧 Development

### Run dev server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Run linter
```bash
npm run lint
```

## 📝 TODO / Future Enhancements

- [ ] Integrasi Supabase real-time untuk live data
- [ ] Image upload untuk book covers dan gallery
- [ ] Email notifications untuk member baru
- [ ] Export member data ke CSV/Excel
- [ ] Analytics dashboard untuk admin
- [ ] Multi-language support (ID/EN)
- [ ] Dark mode toggle
- [ ] PWA support
- [ ] Event registration system
- [ ] Payment integration untuk paid events

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:
1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Credits

Dibuat dengan ❤️ untuk Bogor Book Party

---

**Happy Reading! 📖**
