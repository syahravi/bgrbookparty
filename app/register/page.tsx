'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import toast from 'react-hot-toast';
import { UserPlus, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const memberSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter').max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  whatsapp: z
    .string()
    .min(10, 'Nomor WhatsApp minimal 10 digit')
    .max(15, 'Nomor WhatsApp maksimal 15 digit')
    .regex(/^[0-9]+$/, 'Nomor WhatsApp hanya boleh berisi angka'),
  reason: z
    .string()
    .min(20, 'Alasan minimal 20 karakter')
    .max(500, 'Alasan maksimal 500 karakter'),
  favoriteGenre: z.string().min(1, 'Pilih genre favorit'),
});

type MemberFormData = z.infer<typeof memberSchema>;

export default function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<MemberFormData>({
    resolver: zodResolver(memberSchema),
  });

  const genres = [
    'Fiksi',
    'Non-Fiksi',
    'Self-Help',
    'Philosophy',
    'Psychology',
    'Fiction',
    'Romance',
    'Thriller',
    'Fantasy',
    'Science Fiction',
    'Biography',
    'History',
    'Business',
    'Lainnya',
  ];

  const onSubmit = async (data: MemberFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log('Form data:', data);

    toast.success('Pendaftaran berhasil! Kami akan menghubungi Anda segera.');
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary-50 via-background to-secondary min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white rounded-3xl p-12 shadow-xl">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-12 h-12 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-4">
                  Pendaftaran Berhasil!
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Terima kasih telah mendaftar sebagai member Bogor Book Party.
                  Kami akan menghubungi Anda melalui WhatsApp dalam 1-2 hari kerja.
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full md:w-auto"
                  >
                    Daftar Member Lain
                  </Button>
                  <br />
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = '/')}
                    className="w-full md:w-auto"
                  >
                    Kembali ke Home
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

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
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-accent mb-4">
              Daftar Member
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas pecinta buku terbesar di Bogor.
              <br className="hidden md:block" />
              Isi formulir di bawah untuk memulai!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <Input
                    label="Nama Lengkap"
                    placeholder="Masukkan nama lengkap"
                    error={errors.name?.message}
                    {...register('name')}
                  />
                </div>

                {/* Email */}
                <div>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="nama@email.com"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <Input
                    label="Nomor WhatsApp"
                    placeholder="628123456789"
                    error={errors.whatsapp?.message}
                    {...register('whatsapp')}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Format: 628xxxxxxxxxx (tanpa +, tanpa spasi)
                  </p>
                </div>

                {/* Favorite Genre */}
                <div>
                  <label className="block text-sm font-medium text-accent mb-2">
                    Genre Buku Favorit
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border-2 border-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    {...register('favoriteGenre')}
                  >
                    <option value="">Pilih genre favorit</option>
                    {genres.map((genre) => (
                      <option key={genre} value={genre}>
                        {genre}
                      </option>
                    ))}
                  </select>
                  {errors.favoriteGenre && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.favoriteGenre.message}
                    </p>
                  )}
                </div>

                {/* Reason */}
                <div>
                  <Textarea
                    label="Alasan Bergabung"
                    placeholder="Ceritakan mengapa Anda ingin bergabung dengan Bogor Book Party..."
                    error={errors.reason?.message}
                    {...register('reason')}
                    rows={5}
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Minimal 20 karakter
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
                </Button>
              </form>

              {/* Info */}
              <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Catatan:</strong> Setelah mendaftar, tim kami akan
                  menghubungi Anda melalui WhatsApp untuk konfirmasi dan informasi
                  lebih lanjut tentang komunitas.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
