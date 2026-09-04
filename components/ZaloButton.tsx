'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CLINIC } from '@/lib/clinic';

export default function ZaloButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  return (
    <Link
      href={CLINIC.zalo}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      aria-label="Chat Zalo với VINPETI"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-[#0068FF] rounded-full animate-ping opacity-20" />
        <div className="relative w-14 h-14 bg-[#0068FF] hover:bg-[#0056cc] rounded-full flex items-center justify-center shadow-2xl shadow-[#0068FF]/30 hover:scale-110 transition-all cursor-pointer">
          <span className="text-white font-heading font-bold text-2xl">Z</span>
        </div>
      </div>
    </Link>
  );
}
