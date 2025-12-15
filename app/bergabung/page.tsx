import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Bergabung - Bogor Book Party | Jadi Bagian dari Komunitas Literasi Bogor",
    description: "Bergabunglah dengan Bogor Book Party! Nikmati kegiatan membaca bersama setiap Minggu di Taman Sempur.",
};

export default function BergabungPage() {
    const benefits = [
        { icon: "📚", title: "Teman Baca", desc: "Bertemu dengan sesama pecinta buku yang memiliki passion sama" },
        { icon: "💡", title: "Wawasan Baru", desc: "Mendapat rekomendasi dan perspektif baru dari berbagai genre buku" },
        { icon: "🤝", title: "Networking", desc: "Membangun jaringan dengan komunitas literasi dan profesional" },
        { icon: "🎉", title: "Kegiatan Seru", desc: "Mengikuti berbagai kegiatan menarik: booktalk, berkelana, dan lainnya" },
        { icon: "🌱", title: "Growth Mindset", desc: "Mengembangkan kebiasaan membaca yang konsisten" },
        { icon: "❤️", title: "Kontribusi Sosial", desc: "Berkontribusi dalam gerakan literasi untuk masyarakat Bogor" },
    ];

    const steps = [
        { step: "1", title: "Siapkan Buku", desc: "Pilih buku yang ingin kamu baca. Genre apapun dipersilakan!" },
        { step: "2", title: "Datang ke Lokasi", desc: "Hadir di Taman Sempur setiap Minggu pukul 08:00 WIB" },
        { step: "3", title: "Ikuti Kegiatan", desc: "Silent reading, sharing session, dan surprise activity menunggumu" },
        { step: "4", title: "Join Grup WA", desc: "Bergabung di grup WhatsApp untuk info kegiatan terbaru" },
    ];

    return (
        <main className="pt-20">
            <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">Bergabung</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Jadilah Bagian dari <span className="text-[#1B5E3F]">Gerakan Literasi</span></h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">Tidak perlu syarat khusus. Cukup bawa buku, semangat, dan hati yang terbuka untuk bertemu teman-teman baru!</p>
                    <a href="https://wa.me/6281326360219?text=Halo%20Bogor%20Book%20Party!%20Saya%20ingin%20bergabung%20dengan%20komunitas." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#1B5E3F] text-white font-bold rounded-full hover:scale-105 transition-all inline-flex items-center gap-2 shadow-xl">
                        Hubungi Kami untuk Bergabung
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </a>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Manfaat Bergabung</h2>
                    <p className="text-lg text-gray-600 text-center mb-12">Inilah yang akan kamu dapatkan sebagai bagian dari BBP</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((item, idx) => (
                            <div key={idx} className="bg-gray-50 hover:bg-[#1B5E3F]/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="w-14 h-14 bg-[#1B5E3F]/10 rounded-xl flex items-center justify-center mb-4">
                                    <span className="text-2xl">{item.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Cara Bergabung</h2>
                    <p className="text-lg text-gray-600 text-center mb-12">Langkah mudah untuk menjadi bagian dari komunitas</p>
                    <div className="space-y-6">
                        {steps.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-6 bg-white p-6 rounded-2xl shadow-md">
                                <div className="w-12 h-12 bg-[#1B5E3F] text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">{item.step}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] rounded-3xl p-8 md:p-12 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Siap Bergabung?</h2>
                        <p className="text-xl text-white/85 mb-8">Datang langsung ke kegiatan kami atau hubungi via WhatsApp untuk informasi lebih lanjut.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://wa.me/6281326360219" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#1B5E3F] font-bold rounded-full hover:scale-105 transition-all flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                Chat WhatsApp
                            </a>
                            <Link href="/jadwal" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1B5E3F] transition-all">Lihat Jadwal</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
