'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC } from '@/lib/clinic';

const socialLinks = [
  { label: 'Facebook', href: '#', icon: '📘' },
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'TikTok', href: '#', icon: '🎵' },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  const links = [
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    { label: 'Dịch vụ', href: '/dich-vu' },
    { label: 'Blog', href: '/blog' },
    { label: 'Đặt lịch', href: '/dat-lich' },
    { label: 'Liên hệ', href: '/lien-he' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-700/40 to-transparent" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center gap-2.5 mb-5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-sky-700/20 group-hover:shadow-sky-700/40 group-hover:scale-105 transition-all">
                <Image src="/images/logo.png" alt="VINPETI" width={40} height={40} className="object-cover" />
              </div>
              <span className="font-heading font-bold text-xl text-white">VINPETI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Phòng khám thú y VINPETI — Chăm sóc sức khỏe thú cưng bằng tấm lòng và công nghệ.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <Link key={s.label} href={s.href} className="w-10 h-10 rounded-xl bg-white/5 hover:bg-sky-700/30 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110" aria-label={s.label}>
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>
            <h4 className="font-heading font-semibold text-white mb-5">Liên kết</h4>
            <ul className="space-y-3 text-sm">
            {links.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-sky-400 transition-colors" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.2s' }}>
            <h4 className="font-heading font-semibold text-white mb-5">Dịch vụ</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" /> Khám chữa bệnh</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" /> Tiêm phòng</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" /> Nha khoa thú y</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" /> Spa & Grooming</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" /> Siêu âm & Xét nghiệm</li>
            </ul>
          </div>
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.3s' }}>
            <h4 className="font-heading font-semibold text-white mb-5">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5">📍</span>
                <span>{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span>📞</span>
                <Link href={`tel:${CLINIC.phoneRaw}`} className="hover:text-sky-400 transition-colors">{CLINIC.phone}</Link>
              </li>
              <li className="flex items-center gap-2.5">
                <span>✉️</span>
                <Link href={`mailto:${CLINIC.email}`} className="hover:text-sky-400 transition-colors">{CLINIC.email}</Link>
              </li>
              <li className="flex items-center gap-2.5">
                <span>🕐</span>
                <span>{CLINIC.hours}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} VINPETI. All rights reserved.</p>
          <p className="group">Designed with <span className="group-hover:scale-125 inline-block transition-transform">❤️</span> for your furry friends</p>
        </div>
      </div>
    </footer>
  );
}
