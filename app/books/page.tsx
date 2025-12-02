'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink, Search } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const books = [
    {
      id: 1,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      genre: 'Non-Fiction',
      rating: 4.8,
      description: 'Sejarah singkat umat manusia dari zaman batu hingga era modern.',
      coverUrl: '/books/sapiens.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Help',
      rating: 4.9,
      description: 'Cara mudah dan terbukti untuk membentuk kebiasaan baik dan menghilangkan kebiasaan buruk.',
      coverUrl: '/books/atomic-habits.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 3,
      title: 'The Psychology of Money',
      author: 'Morgan Housel',
      genre: 'Finance',
      rating: 4.7,
      description: 'Pelajaran abadi tentang kekayaan, keserakahan, dan kebahagiaan.',
      coverUrl: '/books/psychology-money.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 4,
      title: 'Filosofi Teras',
      author: 'Henry Manampiring',
      genre: 'Philosophy',
      rating: 4.6,
      description: 'Filsafat Yunani-Romawi kuno untuk mental tangguh masa kini.',
      coverUrl: '/books/filosofi-teras.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 5,
      title: 'Laut Bercerita',
      author: 'Leila S. Chudori',
      genre: 'Fiction',
      rating: 4.8,
      description: 'Novel tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada.',
      coverUrl: '/books/laut-bercerita.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 6,
      title: 'Cantik Itu Luka',
      author: 'Eka Kurniawan',
      genre: 'Fiction',
      rating: 4.5,
      description: 'Kisah empat generasi perempuan yang terjebak dalam lingkaran kekerasan dan trauma.',
      coverUrl: '/books/cantik-itu-luka.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 7,
      title: 'Deep Work',
      author: 'Cal Newport',
      genre: 'Productivity',
      rating: 4.7,
      description: 'Rules for focused success in a distracted world.',
      coverUrl: '/books/deep-work.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
    {
      id: 8,
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      genre: 'Psychology',
      rating: 4.6,
      description: 'Dua sistem yang mendorong cara kita berpikir dan mengambil keputusan.',
      coverUrl: '/books/thinking-fast-slow.jpg',
      purchaseLink: 'https://tokopedia.com',
    },
  ];

  const genres = ['All', ...Array.from(new Set(books.map((book) => book.genre)))];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

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
              Katalog Buku Rekomendasi
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Buku-buku pilihan yang direkomendasikan oleh member Bogor Book Party
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white shadow-sm sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari judul atau penulis..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              {/* Genre Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                {genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => setSelectedGenre(genre)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                      selectedGenre === genre
                        ? 'bg-primary text-accent font-semibold shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredBooks.map((book, index) => (
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Book Cover */}
                    <div className="relative h-80 bg-gradient-to-br from-primary-200 to-primary-400 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="text-4xl font-display font-bold text-accent mb-2">
                            {book.title}
                          </div>
                          <div className="text-lg text-accent-light">
                            {book.author}
                          </div>
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-accent">
                          {book.genre}
                        </span>
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="p-5">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(book.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm font-semibold text-gray-700 ml-1">
                          {book.rating}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-accent mb-2 line-clamp-2">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {book.author}
                      </p>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {book.description}
                      </p>

                      <a
                        href={book.purchaseLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                          <span>Beli Buku</span>
                          <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-500">
                  Tidak ada buku yang sesuai dengan pencarian
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
