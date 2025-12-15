import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontak - Bogor Book Party | Hubungi Kami",
    description: "Hubungi Bogor Book Party via WhatsApp, Email, atau Instagram. Kami siap membantu!",
};

export default function KontakPage() {
    const contacts = [
        {
            icon: "📱",
            title: "Minbuk BBP",
            value: "+62 851-1104-0891",
            link: "https://wa.me/6285111040891",
            type: "WhatsApp",
        },
        {
            icon: "📧",
            title: "Email",
            value: "bogorbookparty@gmail.com",
            link: "mailto:bogorbookparty@gmail.com",
            type: "Email",
        },
        {
            icon: "📸",
            title: "Instagram",
            value: "@bgrbookparty",
            link: "https://instagram.com/bgrbookparty",
            type: "Instagram",
        },
    ];

    const locations = [
        { name: "Taman Heulang", address: "Jl. Heulang, RT.06/RW.04, Tanah Sareal, Kec. Tanah Sereal, Kota Bogor", event: "BBP Weekly (Minggu)" },
        { name: "Perpustakaan Kota Bogor", address: "Jl. Merdeka No.120, Cibogor, Kec. Bogor Tengah", event: "PUSRENG (Rabu)" },
    ];

    return (
        <main className="pt-20">
            <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">Kontak</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Hubungi <span className="text-[#1B5E3F]">Kami</span></h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Kami senang mendengar dari kamu! Jangan ragu untuk menghubungi kami.</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contacts.map((contact, idx) => (
                            <a key={idx} href={contact.link} target="_blank" rel="noopener noreferrer" className="bg-gray-50 hover:bg-[#1B5E3F] group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className="w-16 h-16 bg-[#1B5E3F]/10 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                                    <span className="text-3xl">{contact.icon}</span>
                                </div>
                                <span className="text-xs text-gray-500 group-hover:text-white/70 font-medium">{contact.type}</span>
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-white mt-1">{contact.title}</h3>
                                <p className="text-[#1B5E3F] group-hover:text-white/90 font-medium">{contact.value}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lokasi Kegiatan</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {locations.map((loc, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#1B5E3F] rounded-xl flex items-center justify-center text-white text-xl">📍</div>
                                    <div>
                                        <span className="text-sm text-[#1B5E3F] font-medium">{loc.event}</span>
                                        <h3 className="text-xl font-bold text-gray-900">{loc.name}</h3>
                                        <p className="text-gray-600 mt-1">{loc.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-[#1B5E3F] to-[#2E7D5A]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Langsung Hubungi via WhatsApp</h2>
                    <p className="text-xl text-white/85 mb-8">Respons cepat untuk pertanyaan seputar kegiatan BBP.</p>
                    <a href="https://wa.me/6285111040891?text=Halo%20Bogor%20Book%20Party!%20Saya%20ingin%20bertanya%20tentang%20kegiatan%20BBP." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:scale-105 transition-all inline-flex items-center gap-2 shadow-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                        Chat WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
}
