# Struktur Database Baserow untuk Bogor Book Party

## Tabel 1: Stats (Statistik Homepage)

**Nama Tabel:** `homepage_stats`

### Field Structure:
| Field Name | Field Type | Properties |
|------------|-----------|------------|
| icon | Single line text | Required - Nama icon dari lucide-react (Users, Calendar, BookOpen, Star) |
| label | Single line text | Required - Label statistik |
| value | Single line text | Required - Nilai statistik (bisa angka atau string) |
| order | Number | Required - Urutan tampilan (1-4) |

### Contoh Data:
```json
{
  "icon": "Users",
  "label": "Active Members",
  "value": "150+",
  "order": 1
}
```

---

## Tabel 2: Upcoming Events

**Nama Tabel:** `upcoming_events`

### Field Structure:
| Field Name | Field Type | Properties |
|------------|-----------|------------|
| title | Single line text | Required - Judul event |
| date | Single line text | Required - Tanggal event (format: DD MMMM YYYY) |
| location | Single line text | Required - Lokasi event |
| description | Long text | Required - Deskripsi event |
| status | Single select | Options: upcoming, ongoing, completed - Default: upcoming |
| order | Number | Required - Urutan tampilan |

### Contoh Data:
```json
{
  "title": "Book Discussion: Sapiens",
  "date": "15 Desember 2025",
  "location": "Kopi Tuku Bogor",
  "description": "Diskusi mendalam tentang buku Sapiens karya Yuval Noah Harari",
  "status": "upcoming",
  "order": 1
}
```

---

## Tabel 3: Testimonials

**Nama Tabel:** `testimonials`

### Field Structure:
| Field Name | Field Type | Properties |
|------------|-----------|------------|
| name | Single line text | Required - Nama member |
| text | Long text | Required - Isi testimonial |
| role | Single line text | Required - Role/keterangan (misal: "Member sejak 2023") |
| rating | Number | Required - Rating 1-5, Default: 5 |
| is_active | Boolean | Required - Apakah testimonial aktif ditampilkan, Default: true |
| order | Number | Required - Urutan tampilan |

### Contoh Data:
```json
{
  "name": "Sarah Wijaya",
  "text": "Bergabung dengan Bogor Book Party adalah keputusan terbaik!",
  "role": "Member sejak 2023",
  "rating": 5,
  "is_active": true,
  "order": 1
}
```

---

## Cara Import ke Baserow

### Method 1: Manual Import via UI

1. **Login ke Baserow** (https://baserow.io atau self-hosted instance)
2. **Buat Database Baru**: "Bogor Book Party"
3. **Import setiap tabel:**
   - Klik "Create table"
   - Pilih "Import from file"
   - Upload file JSON yang sesuai:
     - `baserow-import-stats.json` → Tabel `homepage_stats`
     - `baserow-import-events.json` → Tabel `upcoming_events`
     - `baserow-import-testimonials.json` → Tabel `testimonials`
   - Baserow akan otomatis detect field types
   - Verifikasi field types sesuai struktur di atas
   - Sesuaikan jika perlu (terutama untuk Single Select dan Boolean)

### Method 2: Buat Tabel Manual lalu Import Data

1. **Buat tabel kosong** dengan nama sesuai
2. **Tambahkan fields** sesuai struktur di atas secara manual
3. **Import data** menggunakan file JSON atau copy-paste langsung

### Method 3: API Import (Advanced)

Gunakan Baserow API untuk import programmatically:

```bash
# Endpoint untuk create table dan insert rows
POST https://api.baserow.io/api/database/tables/
POST https://api.baserow.io/api/database/rows/table/{table_id}/
```

---

## Konfigurasi API untuk Next.js

Setelah import data ke Baserow, catat:
- **Database ID**
- **Table IDs** untuk masing-masing tabel
- **API Token** (buat di Baserow Settings → API Tokens)

### Environment Variables (.env.local):

```env
BASEROW_API_URL=https://api.baserow.io
BASEROW_API_TOKEN=your_api_token_here
BASEROW_DATABASE_ID=your_database_id

# Table IDs
BASEROW_STATS_TABLE_ID=stats_table_id
BASEROW_EVENTS_TABLE_ID=events_table_id
BASEROW_TESTIMONIALS_TABLE_ID=testimonials_table_id
```

---

## Next Steps

1. ✅ Import 3 file JSON ke Baserow
2. ✅ Create API service untuk fetch data dari Baserow
3. ✅ Update page.tsx untuk fetch data dari API
4. ⏳ Configure environment variables (.env.local)
5. (Optional) Create admin dashboard untuk manage data
6. (Optional) Implement caching untuk performance

## Setup Instructions

### Step 1: Import Data ke Baserow

1. Login ke [Baserow](https://baserow.io)
2. Buat database baru: "Bogor Book Party"
3. Import 3 file JSON:
   - `baserow-import-stats.json` → Create table `homepage_stats`
   - `baserow-import-events.json` → Create table `upcoming_events`
   - `baserow-import-testimonials.json` → Create table `testimonials`

### Step 2: Get API Credentials

1. Di Baserow, klik profil → Settings → API Tokens
2. Klik "Create token"
3. Beri nama (contoh: "Next.js App")
4. Copy token yang dihasilkan
5. Catat Table IDs dari URL setiap tabel (format: `/table/{table_id}`)

### Step 3: Configure Environment Variables

1. Copy `.env.example` ke `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` dan isi dengan credentials Baserow:
   ```env
   BASEROW_API_TOKEN=your_actual_api_token
   NEXT_PUBLIC_BASEROW_API_URL=https://api.baserow.io
   NEXT_PUBLIC_BASEROW_STATS_TABLE_ID=12345
   NEXT_PUBLIC_BASEROW_EVENTS_TABLE_ID=12346
   NEXT_PUBLIC_BASEROW_TESTIMONIALS_TABLE_ID=12347
   ```

### Step 4: Test the Integration

1. Start development server:
   ```bash
   npm run dev
   ```

2. Open `http://localhost:3000`
3. Data should now load from Baserow!

## Files Created

### API & Types
- ✅ `lib/baserow.ts` - Baserow API service dengan fetch functions
- ✅ `types/baserow.ts` - TypeScript types untuk data Baserow

### Components
- ✅ `components/home/HomeContent.tsx` - Client component dengan animations
- ✅ `app/page.tsx` - Server component yang fetch dari Baserow (updated)

### Configuration
- ✅ `.env.example` - Template environment variables

---

## Notes

- Field `order` digunakan untuk mengatur urutan tampilan di frontend
- Field `status` di events bisa dikembangkan untuk filter (upcoming/completed)
- Field `is_active` di testimonials bisa digunakan untuk show/hide testimonial
- Icon names harus sesuai dengan Lucide React icon names
- Date format bisa disesuaikan dengan kebutuhan (saat ini: "DD MMMM YYYY" dalam Bahasa Indonesia)
