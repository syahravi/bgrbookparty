'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function Home() {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Calendar, label: 'Events Held', value: '24+' },
    { icon: BookOpen, label: 'Books Reviewed', value: '300+' },
    { icon: Star, label: 'Average Rating', value: '4.8' },
  ];

  const upcomingEvents = [
    {
      title: 'Book Discussion: Sapiens',
      date: '15 Desember 2025',
      location: 'Kopi Tuku Bogor',
      description: 'Diskusi mendalam tentang buku Sapiens karya Yuval Noah Harari',
    },
    {
      title: 'Poetry Reading Night',
      date: '22 Desember 2025',
      location: 'Perpustakaan Bogor',
      description: 'Malam apresiasi puisi dan sastra Indonesia',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Wijaya',
      text: 'Bergabung dengan Bogor Book Party adalah keputusan terbaik! Saya menemukan teman-teman yang sama-sama passionate tentang buku.',
      role: 'Member sejak 2023',
    },
    {
      name: 'Budi Santoso',
      text: 'Event-eventnya selalu menarik dan well-organized. Diskusinya berkualitas dan membuka wawasan baru.',
      role: 'Member sejak 2024',
    },
    {
      name: 'Rina Kartika',
      text: 'Komunitas yang hangat dan supportive. Recommended untuk semua book lovers di Bogor!',
      role: 'Member sejak 2024',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-background to-secondary py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-display font-bold text-accent mb-6 leading-tight">
                Bergabung dengan{' '}
                <span className="text-primary-700">Komunitas Pecinta Buku</span>{' '}
                di Bogor
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Tempat berkumpul, berdiskusi, dan berbagi kecintaan pada buku.
                Mari ciptakan ruang membaca yang hangat bersama!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-accent hover:bg-accent hover:text-white shadow-lg w-full sm:w-auto">
                    Daftar Sekarang
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Lihat Events
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-primary to-primary-600 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen className="w-48 h-48 text-white/20" />
                </div>
                <div className="absolute inset-0 bg-accent/10 backdrop-blur-[1px]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-accent/80 to-transparent text-white">
                  <p className="text-2xl font-display font-bold">
                    &quot;Membaca adalah jendela dunia&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Event Terdekat
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Jangan lewatkan event menarik dari komunitas kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 text-primary-700 mb-3">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-accent mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-sm text-gray-500">📍 {event.location}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/events">
              <Button variant="outline">
                Lihat Semua Events
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Kata Mereka
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Testimoni dari member Bogor Book Party
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Siap Bergabung dengan Kami?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Jadilah bagian dari komunitas book lovers terbesar di Bogor.
              Daftar sekarang dan mulai petualangan literasi Anda!
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-accent hover:text-white shadow-lg"
              >
                Daftar Member Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
