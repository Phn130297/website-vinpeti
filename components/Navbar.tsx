'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Trang chủ' },
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/dich-vu', label: 'Dịch vụ' },
  { href: '/blog', label: 'Blog' },
  { href: '/dat-lich', label: 'Đặt lịch' },
  { href: '/lien-he', label: 'Liên hệ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-100/80'
          : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16 md:h-20'}`}>
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className={`rounded-xl overflow-hidden shadow-lg shadow-sky-700/20 group-hover:shadow-sky-700/40 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`}>
              <Image src="/images/logo.png" alt="VINPETI" width={40} height={40} className="object-cover" />
            </div>
            <span className="font-heading font-bold text-xl text-navy-950 tracking-tight">
              VINPETI
            </span>
          </Link>

          <div className={`hidden md:flex items-center gap-0.5 transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-xl ${
                  isActive(link.href)
                    ? 'text-sky-700 bg-sky-50'
                    : 'text-navy-700 hover:text-sky-700 hover:bg-sky-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dat-lich"
              className="ml-5 btn-zalo text-sm !py-2.5 !px-6 !rounded-xl"
            >
              Đặt lịch ngay
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-navy-700 hover:text-sky-700 hover:bg-sky-50 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-2xl animate-slide-up">
          <div className="px-5 py-5 space-y-1">
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-base font-medium text-navy-700 hover:text-sky-700 hover:bg-sky-50 rounded-xl transition-all animate-slide-up"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/dat-lich"
                onClick={() => setMobileOpen(false)}
                className="block btn-zalo text-center text-sm animate-slide-up"
                style={{ animationDelay: `${navLinks.length * 0.06}s` }}
              >
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
