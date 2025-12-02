'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'white';
  className?: string;
}

export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false);
  const logoSrc = variant === 'white' ? '/logo-white.png' : '/logo.png';

  // Fallback UI jika logo belum ada
  if (imageError) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className={`${variant === 'white' ? 'bg-white/20' : 'bg-accent'} p-2 rounded-lg`}>
          <BookOpen className={`w-6 h-6 ${variant === 'white' ? 'text-white' : 'text-white'}`} />
        </div>
        <div className="flex flex-col">
          <span className={`text-lg font-display font-bold leading-tight ${variant === 'white' ? 'text-white' : 'text-accent'}`}>
            BOGOR
          </span>
          <span className={`text-sm font-sans font-semibold leading-tight ${variant === 'white' ? 'text-white/90' : 'text-accent/90'}`}>
            Book Party
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={logoSrc}
        alt="Bogor Book Party Logo"
        fill
        className="object-contain object-left"
        onError={() => setImageError(true)}
        priority={variant === 'default'}
      />
    </div>
  );
}
