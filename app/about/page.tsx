'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Users, Heart, BookOpen, Calendar } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Wijaya',
      role: 'Founder & Ketua',
      photo: '/team/sarah.jpg',
      bio: 'Pecinta buku sejak kecil, mendirikan BBP untuk membangun komunitas literasi di Bogor.',
    },
    {
      name: 'Budi Santoso',
      role: 'Koordinator Event',
      photo: '/team/budi.jpg',
      bio: 'Berpengalaman dalam event management, memastikan setiap acara berjalan lancar.',
    },
    {
      name: 'Rina Kartika',
      role: 'Social Media Manager',
      photo: '/team/rina.jpg',
      bio: 'Mengelola konten dan engagement di seluruh platform media sosial komunitas.',
    },
    {
      name: 'Dimas Prakoso',
      role: 'Content Creator',
      photo: '/team/dimas.jpg',
      bio: 'Membuat konten menarik tentang buku dan literasi untuk komunitas.',
    },
  ];

  const gallery = [
    { id: 1, title: 'Book Discussion Event', image: '/gallery/event1.jpg' },
    { id: 2, title: 'Reading Marathon', image: '/gallery/event2.jpg' },
    { id: 3, title: 'Book Swap Meet', image: '/gallery/event3.jpg' },
    { id: 4, title: 'Meet the Author', image: '/gallery/event4.jpg' },
    { id: 5, title: 'Poetry Night', image: '/gallery/event5.jpg' },
    { id: 6, title: 'Community Gathering', image: '/gallery/event6.jpg' },
  ];

  const milestones = [
    { year: '2023', event: 'Bogor Book Party didirikan' },
    { year: '2023', event: 'Event pertama dengan 15 peserta' },
    { year: '2024', event: 'Mencapai 100 member aktif' },
    { year: '2024', event: 'Kolaborasi dengan penerbit lokal' },
    { year: '2025', event: 'Launching website resmi' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background to-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-accent mb-6">
              Tentang Bogor Book Party
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Kami adalah komunitas pecinta buku yang berdedikasi untuk menumbuhkan
              budaya literasi dan kecintaan membaca di Kota Bogor. Bersama-sama,
              kami menciptakan ruang yang hangat dan inklusif untuk berbagi cerita,
              ide, dan inspirasi melalui buku.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 md:p-10 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Visi Kami</h2>
              <p className="text-lg leading-relaxed">
                Menjadi komunitas buku terbesar dan paling aktif di Bogor yang
                menginspirasi masyarakat untuk mencintai membaca dan terus belajar
                sepanjang hayat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent to-accent-light rounded-3xl p-8 md:p-10 text-white"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Menyelenggarakan event literasi berkualitas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Membangun komunitas yang inklusif dan supportive</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mendorong budaya membaca di masyarakat</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4">
              Nilai-Nilai Kami
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Passionate',
                description: 'Cinta buku dan literasi adalah yang menggerakkan kami',
              },
              {
                icon: Users,
                title: 'Inclusive',
                description: 'Terbuka untuk semua kalangan dan latar belakang',
              },
              {
                icon: BookOpen,
                title: 'Knowledge',
                description: 'Terus belajar dan berbagi pengetahuan',
              },
              {
                icon: Calendar,
                title: 'Consistent',
                description: 'Konsisten mengadakan event berkualitas',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4">
              Tim Pengurus
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Orang-orang di balik kesuksesan Bogor Book Party
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center">
                    <Users className="w-20 h-20 text-white/60" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-accent mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-700 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4">
              Perjalanan Kami
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-accent font-bold shadow-lg">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-full bg-primary/30 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4">
              Gallery Kegiatan
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Momen-momen berharga dari event komunitas kami
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {gallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative aspect-square bg-gradient-to-br from-primary-200 to-primary-400 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/40" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-semibold p-4">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
