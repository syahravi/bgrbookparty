import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jadwal Kegiatan - Bogor Book Party | Literasi Bogor",
    description: "Jadwal kegiatan mingguan Bogor Book Party. Silent reading setiap Minggu di Taman Heulang.",
};

export default function JadwalPage() {
    const weeklySchedule = [
        {
            id: 1,
            day: "Minggu",
            time: "10:00 - 14:10 WIB",
            event: "Bogor Book Party Weekly",
            location: "Taman Heulang, Bogor",
            isHighlight: true,
            activities: [
                { time: "10:00 - 10:15", activity: "Meet Mates" },
                { time: "10:15 - 10:45", activity: "Reading Chill" },
                { time: "10:45 - 12:15", activity: "Sharing Session" },
                { time: "12:15 - 12:45", activity: "Break Ishoma" },
                { time: "12:45 - 14:00", activity: "Surprise Activity" },
                { time: "14:00 - 14:10", activity: "Closing & Foto Bersama" },
            ],
        },
        {
            id: 2,
            day: "Rabu",
            time: "14:00 - 17:00 WIB",
            event: "PUSRENG",
            location: "Perpustakaan Kota Bogor",
            isHighlight: false,
            activities: [
                { time: "14:00 - 14:15", activity: "Berkumpul & Check-in" },
                { time: "14:15 - 16:00", activity: "Membaca Bersama" },
                { time: "16:00 - 16:45", activity: "Diskusi Ringan" },
                { time: "16:45 - 17:00", activity: "Closing" },
            ],
        },
    ];

    return (
        <main className="pt-20">
            <section className="py-24 bg-gradient-to-b from-[#F5F0E8] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="inline-block px-4 py-2 bg-[#1B5E3F]/10 text-[#1B5E3F] rounded-full text-sm font-semibold mb-6">Jadwal Kegiatan</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">Kapan & Di Mana <span className="text-[#1B5E3F]">Kami Bertemu?</span></h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Tidak perlu daftar, cukup datang dan bawa buku favoritmu!</p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Kegiatan Rutin Mingguan</h2>
                    <div className="grid lg:grid-cols-2 gap-8">
                        {weeklySchedule.map((schedule) => (
                            <div key={schedule.id} className={`rounded-3xl p-8 ${schedule.isHighlight ? "bg-gradient-to-br from-[#1B5E3F] to-[#2E7D5A] text-white" : "bg-gray-50 border border-gray-200"}`}>
                                <div className="mb-6">
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${schedule.isHighlight ? "bg-white/20" : "bg-[#1B5E3F]/10 text-[#1B5E3F]"}`}>Setiap {schedule.day}</span>
                                    <h3 className={`text-2xl font-bold ${schedule.isHighlight ? "" : "text-gray-900"}`}>{schedule.event}</h3>
                                </div>
                                <div className={`space-y-3 mb-6 ${schedule.isHighlight ? "text-white/85" : "text-gray-600"}`}>
                                    <p className="flex items-center gap-2">🕗 {schedule.time}</p>
                                    <p className="flex items-center gap-2">📍 {schedule.location}</p>
                                </div>
                                <div className={`rounded-2xl p-6 ${schedule.isHighlight ? "bg-white/10" : "bg-white"}`}>
                                    <h4 className={`text-sm font-semibold mb-4 ${schedule.isHighlight ? "text-white/80" : "text-gray-500"}`}>RUNDOWN</h4>
                                    <div className="space-y-3">
                                        {schedule.activities.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <span className={`text-sm font-mono ${schedule.isHighlight ? "text-white/60" : "text-gray-500"}`}>{item.time}</span>
                                                <span className={`w-2 h-2 rounded-full ${schedule.isHighlight ? "bg-green-300" : "bg-[#1B5E3F]"}`}></span>
                                                <span>{item.activity}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-[#1B5E3F] to-[#2E7D5A]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ada Pertanyaan?</h2>
                    <p className="text-xl text-white/85 mb-8">Hubungi kami untuk informasi lebih lanjut.</p>
                    <Link href="/kontak" className="px-8 py-4 bg-white text-[#1B5E3F] font-bold rounded-full hover:scale-105 transition-all inline-block">Hubungi Kami</Link>
                </div>
            </section>
        </main>
    );
}
