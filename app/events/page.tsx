'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: 'Book Discussion: Sapiens',
      description: 'Diskusi mendalam tentang buku Sapiens karya Yuval Noah Harari. Mari kita bahas bagaimana manusia berevolusi dari berburu ke era digital!',
      date: '2025-12-15',
      displayDate: '15 Desember 2025',
      time: '14:00 - 16:00 WIB',
      location: 'Kopi Tuku Bogor',
      status: 'upcoming' as const,
      maxParticipants: 20,
      currentParticipants: 12,
    },
    {
      id: 2,
      title: 'Poetry Reading Night',
      description: 'Malam apresiasi puisi dan sastra Indonesia. Bacakan puisi favoritmu atau nikmati karya dari member lainnya!',
      date: '2025-12-22',
      displayDate: '22 Desember 2025',
      time: '18:00 - 20:00 WIB',
      location: 'Perpustakaan Kota Bogor',
      status: 'upcoming' as const,
      maxParticipants: 30,
      currentParticipants: 8,
    },
    {
      id: 3,
      title: 'Book Swap Meet',
      description: 'Tukar buku bekas Anda dengan member lain! Cara seru untuk mendapat bacaan baru tanpa menguras kantong.',
      date: '2026-01-05',
      displayDate: '5 Januari 2026',
      time: '10:00 - 13:00 WIB',
      location: 'Taman Topi Square',
      status: 'upcoming' as const,
      maxParticipants: 50,
      currentParticipants: 25,
    },
    {
      id: 4,
      title: 'Meet the Author: Dee Lestari',
      description: 'Kesempatan bertemu langsung dengan Dee Lestari! Diskusi tentang proses kreatif dan karya-karyanya.',
      date: '2026-01-20',
      displayDate: '20 Januari 2026',
      time: '15:00 - 17:30 WIB',
      location: 'The Jungle Fest Bogor',
      status: 'upcoming' as const,
      maxParticipants: 100,
      currentParticipants: 67,
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      upcoming: 'bg-blue-100 text-blue-700',
      ongoing: 'bg-green-100 text-green-700',
      completed: 'bg-gray-100 text-gray-700',
    };
    const labels = {
      upcoming: 'Akan Datang',
      ongoing: 'Sedang Berlangsung',
      completed: 'Selesai',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4">
              Event Komunitas
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Jangan lewatkan event seru dari Bogor Book Party.
              <br className="hidden md:block" />
              Klik &quot;Daftar Event&quot; untuk bergabung!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-accent">
                          {event.title}
                        </h2>
                        {getStatusBadge(event.status)}
                      </div>
                      <p className="text-gray-700 mb-4">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-primary-700" />
                      <span className="text-sm">{event.displayDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-primary-700" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-primary-700" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-primary-700" />
                      <span className="text-sm">
                        {event.currentParticipants}/{event.maxParticipants} peserta
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(event.currentParticipants / event.maxParticipants) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      className="flex-1 sm:flex-none"
                      disabled={event.currentParticipants >= event.maxParticipants}
                    >
                      {event.currentParticipants >= event.maxParticipants
                        ? 'Penuh'
                        : 'Daftar Event'}
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none">
                      Lihat Detail
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {events.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="text-xl text-gray-500">
                Belum ada event tersedia saat ini
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
