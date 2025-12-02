import Link from 'next/link';
import { Book, Instagram, MessageCircle, Music } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary p-2 rounded-full">
                <Book className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xl font-display font-bold">
                Bogor Book Party
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Komunitas pecinta buku di Bogor. Bergabunglah untuk berbagi kecintaan pada literasi!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/books" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Katalog Buku
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Komunitas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/register" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Daftar Member
                </Link>
              </li>
              <li>
                <Link href="/links" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Link Bio
                </Link>
              </li>
              <li>
                <a href="mailto:hello@bogorbookparty.com" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/bogorbookparty"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-full hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-full hover:bg-primary-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
              </a>
              <a
                href="https://tiktok.com/@bogorbookparty"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary rounded-full hover:bg-primary-600 transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5 text-accent" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            &copy; {currentYear} Bogor Book Party. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
