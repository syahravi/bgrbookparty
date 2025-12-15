import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Program - Bogor Book Party | Kegiatan Literasi di Bogor",
    description: "Temukan berbagai program literasi Bogor Book Party: BBP Weekly, Booktalk Party, PUSRENG, BBP Goes to School, dan BBP Berkelana.",
};

const programs = [
    {
        id: "bbp-weekly",
        icon: "📖",
        title: "Bogor Book Party Weekly",
        subtitle: "Kegiatan Utama",
        schedule: "Setiap Minggu",
        time: "08:00 - 11:00 WIB",
        location: "Taman Sempur & tempat publik lainnya",
        description: "BBP Weekly adalah kegiatan inti dari Bogor Book Party. Setiap Minggu pagi, kami berkumpul di ruang publik untuk membaca bersama (silent reading) selama 30-45 menit, dilanjutkan dengan sharing session di mana peserta berbagi tentang buku yang sedang dibaca, dan diakhiri dengan surprise activity yang seru dan interaktif.",
        activities: [
            "Silent reading selama 30-45 menit",
            "Sharing session tentang buku",
            "Surprise activity (games, quiz, dll)",
            "Networking dengan sesama pecinta buku",
        ],
        color: "from-[#1B5E3F] to-[#2E7D5A]",
        bgColor: "bg-[#1B5E3F]/5",
    },
    {
        id: "booktalk",
        icon: "🎤",
        title: "Booktalk Party",
        subtitle: "Program Bulanan",
        schedule: "Minimal 2 bulan sekali",
        time: "Menyesuaikan",
        location: "Berbagai venue di Bogor",
        description: "Booktalk Party adalah forum diskusi yang menghadirkan 1-3 penulis untuk berbagi pengalaman, proses kreatif, dan wawasan seputar dunia kepenulisan. Peserta dapat berinteraksi langsung dengan penulis, mengajukan pertanyaan, dan mendapatkan insight berharga.",
        activities: [
            "Sesi presentasi dari penulis",
            "Diskusi interaktif",
            "Tanya jawab dengan penulis",
            "Book signing session",
        ],
        color: "from-[#8B6F4A] to-[#A68B5B]",
        bgColor: "bg-[#8B6F4A]/5",
    },
    {
        id: "goes-to-school",
        icon: "🏫",
        title: "BBP Goes to School/Kampus",
        subtitle: "Program Kunjungan",
        schedule: "Program berkala",
        time: "Menyesuaikan jadwal institusi",
        location: "Sekolah & Universitas",
        description: "Program kunjungan ke institusi pendidikan untuk mengenalkan kegiatan literasi dan menumbuhkan minat baca di kalangan pelajar dan mahasiswa. Kami percaya bahwa generasi muda adalah kunci keberlanjutan budaya literasi.",
        activities: [
            "Workshop literasi",
            "Mini silent reading",
            "Games edukatif seputar buku",
            "Donasi buku",
        ],
        color: "from-[#2E7D5A] to-[#3D9970]",
        bgColor: "bg-[#2E7D5A]/5",
    },
    {
        id: "pusreng",
        icon: "📚",
        title: "Perpustakaan Bareng (PUSRENG)",
        subtitle: "Program Mingguan",
        schedule: "Setiap Rabu",
        time: "14:00 - 17:00 WIB",
        location: "Perpustakaan Kota Bogor",
        description: "PUSRENG adalah kegiatan membaca bersama di perpustakaan. Program ini bertujuan untuk mengoptimalkan fasilitas perpustakaan yang ada dan mendekatkan masyarakat dengan koleksi buku yang tersedia secara gratis.",
        activities: [
            "Eksplorasi koleksi perpustakaan",
            "Membaca bersama dalam suasana tenang",
            "Diskusi ringan tentang bacaan",
            "Rekomendasi buku antar peserta",
        ],
        color: "from-[#0D4028] to-[#1B5E3F]",
        bgColor: "bg-[#0D4028]/5",
    },
    {
        id: "berkelana",
        icon: "🏕️",
        title: "BBP Berkelana",
        subtitle: "Program Kuartalan",
        schedule: "Setiap 3 bulan sekali",
        time: "Full day / overnight",
        location: "Alam terbuka (gunung, pantai, hutan)",
        description: "BBP Berkelana menggabungkan keindahan alam dengan kegiatan literasi. Peserta diajak untuk membaca di tengah alam, merasakan koneksi antara buku dan lingkungan, serta membangun kebersamaan melalui kemping literasi.",
        activities: [
            "Sunrise/sunset reading",
            "Sharing circle di alam terbuka",
            "Nature journaling",
            "Bonding session antar anggota",
        ],
        color: "from-[#5A8B6F] to-[#7DAE8B]",
        bgColor: "bg-[#5A8B6F]/5",
    },
];

export default function ProgramPage() {
    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
                        Program Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        Lima Program{" "}
                        <span className="text-[#1B5E3F]">Unggulan</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Berbagai kegiatan literasi yang kami selenggarakan untuk membangun
                        ekosistem membaca yang sehat dan menyenangkan di Bogor.
                    </p>
                </div>
            </section>

            {/* Programs List */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {programs.map((program, index) => (
                            <div
                                key={program.id}
                                id={program.id}
                                className={`scroll-mt-32 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                            >
                                <div className={`${program.bgColor} rounded-3xl p-8 md:p-12 lg:p-16`}>
                                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                                        {/* Content */}
                                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center`}>
                                                    <span className="text-3xl">{program.icon}</span>
                                                </div>
                                                <div>
                                                    <span className="text-sm text-gray-500 font-medium">{program.subtitle}</span>
                                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{program.title}</h2>
                                                </div>
                                            </div>

                                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                                {program.description}
                                            </p>

                                            {/* Schedule Info */}
                                            <div className="flex flex-wrap gap-4 mb-8">
                                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                                    <svg className="w-5 h-5 text-[#1B5E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-gray-700 font-medium">{program.schedule}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                                    <svg className="w-5 h-5 text-[#1B5E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-gray-700 font-medium">{program.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                                                    <svg className="w-5 h-5 text-[#1B5E3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-gray-700 font-medium">{program.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Activities Card */}
                                        <div className={`bg-white rounded-2xl p-8 shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                                <span className="w-8 h-8 bg-[#1B5E3F]/10 rounded-lg flex items-center justify-center text-[#1B5E3F]">
                                                    ✓
                                                </span>
                                                Yang Akan Kamu Dapatkan
                                            </h3>
                                            <ul className="space-y-4">
                                                {program.activities.map((activity, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <div className="w-6 h-6 bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span className="text-gray-700">{activity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-[#1B5E3F] via-[#2E7D5A] to-[#1B5E3F]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Tertarik Mengikuti Program Kami?
                    </h2>
                    <p className="text-xl text-white/85 mb-10">
                        Bergabunglah dengan kegiatan kami. Tidak perlu daftar terlebih dahulu
                        untuk program mingguan, cukup datang dan bawa bukumu!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/jadwal"
                            className="px-8 py-4 bg-white text-[#1B5E3F] font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        >
                            Lihat Jadwal Kegiatan
                        </Link>
                        <Link
                            href="/kontak"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B5E3F] transition-all duration-300"
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
