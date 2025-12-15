import Link from "next/link";

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float delay-200"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float delay-400"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-float delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 animate-fade-in-down">
          <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">Komunitas Literasi Terbesar di Bogor</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
          <span className="block">Bogor Book Party</span>
          <span className="block mt-2 text-white/90 font-light text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-playfair)] italic">
            Merawat Rasa, Menghidupkan Literasi
          </span>
        </h1>

        {/* Tagline */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed mb-12 animate-fade-in-up delay-200">
          &ldquo;Kami hadir bukan sekadar sebagai teman baca, tapi untuk merawat rasa,
          menghidupkan literasi di Kota Bogor. Sebab, kami ingin literasi bukan tren,
          tapi menjadi napas kehidupan.&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <Link
            href="/bergabung"
            className="px-8 py-4 bg-white text-[#1B5E3F] font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Bergabung Sekarang</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/jadwal"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B5E3F] transition-all duration-300 hover:scale-105"
          >
            Lihat Jadwal Kegiatan
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 animate-fade-in-up delay-400">
          {[
            { number: "4.329K", label: "Followers" },
            { number: "178+", label: "Kegiatan" },
            { number: "106", label: "Anggota Aktif" },
            { number: "20+", label: "Kolaborator" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

// About Preview Section
const AboutPreview = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1B5E3F]/20 to-[#2E7D5A]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">📖</div>
                  <p className="text-[#1B5E3F] font-medium">Komunitas Literasi Bogor</p>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#1B5E3F]">Sejak 2019</p>
                  <p className="text-gray-600 text-sm">Aktif di Bogor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Menjadikan Bogor Sebagai Kota yang Hidup dengan{" "}
              <span className="text-[#1B5E3F]">Budaya Literasi</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bogor Book Party adalah komunitas literasi yang bergerak untuk menciptakan
              ruang membaca yang hangat dan inklusif. Kami percaya bahwa membaca adalah
              jembatan menuju perubahan, dan bersama kita bisa mewujudkan Bogor yang lebih literat.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              {[
                "Silent reading bersama setiap minggu di ruang publik",
                "Diskusi buku interaktif dengan berbagai komunitas",
                "Kolaborasi dengan 20+ institusi pendidikan dan budaya",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1B5E3F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B5E3F] text-white font-semibold rounded-full hover:bg-[#0D4028] transition-all duration-300 hover:scale-105"
            >
              Selengkapnya Tentang Kami
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section
const ProgramsSection = () => {
  const programs = [
    {
      icon: "📖",
      title: "Bogor Book Party Weekly",
      schedule: "Setiap Minggu",
      location: "Taman Heulang & tempat publik",
      description: "Silent reading bersama diikuti dengan sharing session dan surprise activity yang seru.",
      color: "from-[#1B5E3F] to-[#2E7D5A]",
    },
    {
      icon: "🎤",
      title: "Booktalk Party",
      schedule: "Minimal 2 bulan sekali",
      location: "Berbagai venue",
      description: "Diskusi mendalam dengan menghadirkan 1-3 penulis untuk berbagi pengalaman dan karya mereka.",
      color: "from-[#8B6F4A] to-[#A68B5B]",
    },
    {
      icon: "🏫",
      title: "BBP Goes to School/Kampus",
      schedule: "Program berkala",
      location: "Institusi pendidikan",
      description: "Program kunjungan ke sekolah dan kampus untuk menumbuhkan minat baca generasi muda.",
      color: "from-[#2E7D5A] to-[#3D9970]",
    },
    {
      icon: "📚",
      title: "Perpustakaan Bareng (PUSRENG)",
      schedule: "Setiap Rabu",
      location: "Perpustakaan",
      description: "Kegiatan membaca bersama di perpustakaan untuk mengoptimalkan fasilitas literasi yang ada.",
      color: "from-[#0D4028] to-[#1B5E3F]",
    },
    {
      icon: "🏕️",
      title: "BBP Berkelana",
      schedule: "Setiap 3 bulan sekali",
      location: "Alam terbuka",
      description: "Literasi di alam terbuka, menggabungkan keindahan alam dengan kegiatan membaca.",
      color: "from-[#5A8B6F] to-[#7DAE8B]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
            Program Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lima Program Unggulan
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Berbagai kegiatan literasi yang kami selenggarakan untuk membangun
            ekosistem membaca yang sehat di Bogor.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{program.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>

              {/* Schedule & Location */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.schedule}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {program.location}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/program"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1B5E3F] to-[#2E7D5A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Lihat Semua Program
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Weekly Schedule Section
const ScheduleSection = () => {
  const schedule = [
    {
      day: "Minggu",
      time: "10:00 - 14:10",
      event: "Bogor Book Party Weekly",
      location: "Taman Heulang, Bogor",
      description: "Meet Mates, Reading Chill, Sharing Session, Break Ishoma, Surprise Activity, Closing",
      isHighlight: true,
    },
    {
      day: "Rabu",
      time: "14:00 - 17:00",
      event: "PUSRENG",
      location: "Perpustakaan Kota Bogor",
      description: "Membaca bersama di perpustakaan",
      isHighlight: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
              Jadwal Rutin
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kegiatan{" "}
              <span className="text-[#1B5E3F]">Mingguan</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Bergabunglah dengan kegiatan rutin kami setiap minggu. Tidak perlu mendaftar,
              cukup datang dan bawa buku favoritmu!
            </p>

            {/* Schedule Cards */}
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${item.isHighlight
                    ? "border-[#1B5E3F] bg-[#1B5E3F]/5"
                    : "border-gray-200 hover:border-[#1B5E3F]/30"
                    }`}
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.isHighlight
                          ? "bg-[#1B5E3F] text-white"
                          : "bg-gray-200 text-gray-700"
                          }`}>
                          {item.day}
                        </span>
                        <span className="text-gray-600">{item.time}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.event}</h3>
                      <p className="text-gray-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {item.location}
                      </p>
                    </div>
                    {item.isHighlight && (
                      <span className="flex items-center gap-1 text-[#1B5E3F] text-sm font-medium">
                        <span className="w-2 h-2 bg-[#1B5E3F] rounded-full animate-pulse"></span>
                        Kegiatan Utama
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 mt-3 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <Link
              href="/jadwal"
              className="inline-flex items-center gap-2 mt-8 text-[#1B5E3F] font-semibold hover:gap-4 transition-all duration-300"
            >
              Lihat jadwal lengkap
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-3xl p-8 md:p-12 text-white">
              <div className="text-center">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="text-2xl font-bold mb-4">Gabung Minggu Ini!</h3>
                <p className="text-white/80 mb-6">
                  Kami menunggu kehadiranmu setiap Minggu pagi di Taman Heulang.
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <p className="text-sm text-white/70 mb-2">Kegiatan Berikutnya</p>
                  <p className="text-3xl font-bold mb-1">Minggu</p>
                  <p className="text-lg">10:00 WIB</p>
                  <p className="text-white/80 mt-2">📍 Taman Heulang</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8B6F4A]/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1B5E3F]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quote Section
const QuoteSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Quote Mark */}
          <div className="text-8xl text-[#1B5E3F]/20 font-serif absolute -top-8 left-1/2 -translate-x-1/2">
            &ldquo;
          </div>

          {/* Quote Text */}
          <blockquote className="relative z-10 pt-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 leading-relaxed font-[family-name:var(--font-playfair)] italic mb-8">
              Literasi bukan sekadar membaca, tapi tentang memahami, merasakan, dan
              menerapkan dalam kehidupan. Bersama Bogor Book Party, kita bangun generasi
              yang tidak hanya pintar, tapi juga bijak.
            </p>
            <footer className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-full flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <div>
                <cite className="not-italic font-bold text-gray-900 text-lg">Siti Fatimah</cite>
                <p className="text-gray-600">Penanggung Jawab Bogor Book Party</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1B5E3F] via-[#2E7D5A] to-[#1B5E3F] relative overflow-hidden">
      {/* Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-30"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Siap Bergabung dengan Komunitas Kami?
        </h2>
        <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
          Mari bersama-sama menjadi bagian dari gerakan literasi di Bogor.
          Tidak perlu pengalaman khusus, cukup bawa buku dan semangatmu!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/bergabung"
            className="px-8 py-4 bg-white text-[#1B5E3F] font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Bergabung Sekarang</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="https://instagram.com/bgrbookparty"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B5E3F] transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ProgramsSection />
      <ScheduleSection />
      <QuoteSection />
      <CTASection />
    </main>
  );
}
