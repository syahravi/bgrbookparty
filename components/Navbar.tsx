"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Check if current page is homepage (has dark hero background)
    const isHomepage = pathname === "/";

    // Navbar should use dark text on non-homepage or when scrolled
    const useDarkText = !isHomepage || isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/tentang", label: "Tentang" },
        { href: "/program", label: "Program" },
        { href: "/jadwal", label: "Jadwal" },
        { href: "/kontak", label: "Kontak" },
    ];

    // Get background style based on page and scroll state
    const getNavBackground = () => {
        if (isScrolled) {
            return "bg-white/95 backdrop-blur-md shadow-lg py-3";
        }
        if (isHomepage) {
            return "bg-transparent py-5";
        }
        // Non-homepage pages have cream hero background (#F5F0E8)
        return "bg-[#F5F0E8] py-4";
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getNavBackground()}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300">
                            <Image
                                src="/logo.png"
                                alt="Bogor Book Party Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${useDarkText ? "text-[#1B5E3F]" : "text-white"
                                }`}>
                                Bogor Book Party
                            </span>
                            <span className={`text-xs font-medium transition-colors duration-300 ${useDarkText ? "text-[#8B6F4A]" : "text-white/80"
                                }`}>
                                BOGOR MEMBACA
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative font-medium transition-all duration-300 hover:scale-105 ${useDarkText
                                    ? "text-gray-700 hover:text-[#1B5E3F]"
                                    : "text-white/90 hover:text-white"
                                    } ${pathname === link.href
                                        ? useDarkText
                                            ? "text-[#1B5E3F] font-semibold"
                                            : "text-white font-semibold"
                                        : ""
                                    } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 ${pathname === link.href ? "after:w-full" : "after:w-0 hover:after:w-full"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/bergabung"
                            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${useDarkText
                                ? "bg-gradient-to-r from-[#1B5E3F] to-[#2E7D5A] text-white shadow-lg shadow-[#1B5E3F]/30 hover:shadow-xl hover:shadow-[#1B5E3F]/40"
                                : "bg-white text-[#1B5E3F] shadow-lg hover:shadow-xl"
                                }`}
                        >
                            Bergabung
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-lg transition-colors ${useDarkText ? "text-[#1B5E3F]" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block font-medium py-2 transition-colors ${pathname === link.href
                                    ? "text-[#1B5E3F] font-semibold"
                                    : "text-gray-700 hover:text-[#1B5E3F]"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/bergabung"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center py-3 bg-gradient-to-r from-[#1B5E3F] to-[#2E7D5A] text-white rounded-full font-semibold"
                        >
                            Bergabung
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
