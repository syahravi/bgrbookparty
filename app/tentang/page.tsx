import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tentang Kami - Bogor Book Party | Komunitas Literasi Bogor",
    description: "Kenali lebih dalam tentang Bogor Book Party, visi, misi, dan perjalanan kami dalam membangun budaya literasi di Kota Bogor.",
};

const VisionMissionSection = () => {
    const missions = [
        {
            number: "01",
            title: "Membangun Kebiasaan Membaca",
            description: "Menciptakan ruang dan kesempatan untuk masyarakat Bogor membangun kebiasaan membaca yang konsisten.",
        },
        {
            number: "02",
            title: "Kolaborasi Inklusif",
            description: "Membangun kolaborasi dengan berbagai pihak untuk memperluas jangkauan dan dampak literasi.",
        },
        {
            number: "03",
            title: "Edukasi Literasi",
            description: "Menyelenggarakan program edukasi yang menarik dan relevan untuk berbagai kalangan usia.",
        },
        {
            number: "04",
            title: "Akses Buku Terjangkau",
            description: "Memfasilitasi akses terhadap buku-buku berkualitas bagi seluruh lapisan masyarakat.",
        },
        {
            number: "05",
            title: "Ruang Diskusi",
            description: "Menyediakan ruang diskusi yang sehat untuk bertukar pikiran dan memperluas wawasan.",
        },
        {
            number: "06",
            title: "Gerakan Berkelanjutan",
            description: "Memastikan gerakan literasi ini berkelanjutan dan menjadi bagian dari budaya masyarakat Bogor.",
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Vision */}
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
                        Visi Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
                        &ldquo;Menjadikan Bogor Sebagai Kota yang Hidup dengan{" "}
                        <span className="text-[#1B5E3F]">Budaya Literasi</span>&rdquo;
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Kami bermimpi tentang Bogor di mana setiap sudut kota menjadi ruang membaca,
                        di mana literasi bukan lagi sekadar tren, melainkan napas kehidupan sehari-hari.
                    </p>
                </div>

                {/* Mission */}
                <div>
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-[#8B6F4A]/10 text-[#8B6F4A] rounded-full text-sm font-semibold mb-6">
                            Misi Kami
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                            6 Langkah Menuju Bogor Literat
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {missions.map((mission, index) => (
                            <div
                                key={index}
                                className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 hover:border-[#1B5E3F]/30 hover:shadow-xl transition-all duration-500"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="text-4xl font-bold text-[#1B5E3F]/20 group-hover:text-[#1B5E3F]/40 transition-colors">
                                        {mission.number}
                                    </span>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{mission.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ValuesSection = () => {
    const values = [
        {
            icon: "🤝",
            title: "Inklusivitas",
            description: "Terbuka untuk semua kalangan tanpa memandang latar belakang.",
        },
        {
            icon: "💚",
            title: "Ketulusan",
            description: "Bergerak dengan hati untuk menumbuhkan cinta literasi.",
        },
        {
            icon: "🌱",
            title: "Keberlanjutan",
            description: "Komitmen untuk gerakan literasi yang berkelanjutan.",
        },
        {
            icon: "🌟",
            title: "Kreativitas",
            description: "Inovasi dalam setiap program untuk pengalaman yang menyenangkan.",
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
                        Nilai-Nilai Kami
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Prinsip yang Kami Pegang
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TargetSection = () => {
    const targets = [
        {
            category: "Geografis",
            icon: "📍",
            items: ["Kota Bogor", "Kabupaten Bogor", "Wilayah Bogor Raya"],
        },
        {
            category: "Demografis",
            icon: "👥",
            items: ["Pelajar & Mahasiswa", "Pekerja & Profesional", "Ibu Rumah Tangga", "Lansia Aktif"],
        },
        {
            category: "Psikografis",
            icon: "💭",
            items: ["Pencinta buku", "Ingin memulai kebiasaan membaca", "Mencari komunitas positif", "Tertarik dengan literasi"],
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-[#8B6F4A]/10 text-[#8B6F4A] rounded-full text-sm font-semibold mb-6">
                        Target Sasaran
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Siapa Saja yang Kami Rangkul?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        BBP terbuka untuk siapa saja yang ingin menjadi bagian dari gerakan literasi di Bogor.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {targets.map((target, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-xl flex items-center justify-center">
                                    <span className="text-2xl">{target.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{target.category}</h3>
                            </div>
                            <ul className="space-y-3">
                                {target.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <span className="w-2 h-2 bg-[#1B5E3F] rounded-full"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HistorySection = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-[#1B5E3F] to-[#0D4028] text-white relative overflow-hidden">
            <div className="absolute inset-0 pattern-overlay opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
                            Sejarah & Latar Belakang
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Perjalanan Kami Membangun Literasi
                        </h2>
                        <div className="space-y-6 text-white/85">
                            <p className="text-lg leading-relaxed">
                                Bogor Book Party lahir dari keprihatinan akan kondisi literasi di Indonesia,
                                khususnya di Kota Bogor. Berdasarkan data UNESCO, minat baca masyarakat Indonesia
                                masih sangat rendah. Hal ini mendorong sekelompok pecinta buku untuk bergerak.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Sejak tahun 2019, kami konsisten mengadakan kegiatan membaca bersama setiap Minggu
                                di ruang publik, dimulai dari Taman Sempur. Kini, gerakan ini telah berkembang
                                dengan berbagai program dan telah berkolaborasi dengan lebih dari 20 institusi.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Kami percaya bahwa perubahan dimulai dari hal kecil yang dilakukan secara konsisten.
                                Satu buku, satu orang, satu hari – itu sudah cukup untuk memulai perubahan besar.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold mb-2">2019</div>
                            <p className="text-white/70">Tahun Berdiri</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold mb-2">178+</div>
                            <p className="text-white/70">Kegiatan</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold mb-2">4.3K</div>
                            <p className="text-white/70">Followers</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                            <div className="text-4xl font-bold mb-2">20+</div>
                            <p className="text-white/70">Kolaborator</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function TentangPage() {
    return (
        <main className="pt-20">
            {/* Hero */}
            <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">
                        Tentang Kami
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
                        Mengenal{" "}
                        <span className="text-[#1B5E3F]">Bogor Book Party</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        &ldquo;Kami hadir bukan sekadar sebagai teman baca, tapi untuk merawat rasa,
                        menghidupkan literasi di Kota Bogor. Sebab, kami ingin literasi bukan tren,
                        tapi menjadi napas kehidupan.&rdquo;
                    </p>
                </div>
            </section>

            <VisionMissionSection />
            <HistorySection />
            <ValuesSection />
            <TargetSection />
        </main>
    );
}
