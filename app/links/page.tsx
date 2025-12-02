'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Music, Book, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function LinksPage() {
  const links = [
    {
      platform: 'Instagram',
      url: 'https://instagram.com/bgrbookparty',
      icon: Instagram,
      color: 'from-purple-500 to-pink-500',
      description: 'Follow kami untuk update terbaru!',
    },
    {
      platform: 'WhatsApp Group',
      url: 'https://wa.me/6285183370979',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      description: 'Join grup WhatsApp komunitas',
    },
    {
      platform: 'TikTok',
      url: 'https://tiktok.com/@bgrbookparty',
      icon: Music,
      color: 'from-black to-gray-700',
      description: 'Konten seru tentang buku',
    },
    {
      platform: 'Goodreads',
      url: 'https://goodreads.com/bgrbookparty',
      icon: Book,
      color: 'from-amber-600 to-orange-600',
      description: 'Lihat reading list kami',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-background to-secondary min-h-screen">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-600 rounded-full animate-pulse" />
              <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                <Book className="w-16 h-16 text-primary-700" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-accent mb-3">
              Bogor Book Party
            </h1>
            <p className="text-lg text-gray-700 max-w-md mx-auto">
              Komunitas pecinta buku di Bogor 📚✨
              <br />
              Bergabunglah dengan kami!
            </p>
          </motion.div>

          {/* Links */}
          <div className="space-y-4">
            {links.map((link, index) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center shadow-md`}>
                        <link.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-accent mb-1">
                          {link.platform}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Ingin tahu lebih banyak tentang kami?
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-primary text-accent font-semibold rounded-full hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg"
            >
              Kunjungi Website Kami
            </a>
          </motion.div> */}
        </div>
      </section>

      <Footer />
    </div>
  );
}
