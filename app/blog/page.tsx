'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  { title: 'Cách chăm sóc chó mèo mùa hè', date: '25/08/2026', cat: 'Chăm sóc', readTime: '5 phút đọc', emoji: '☀️', slug: 'cham-soc-cho-meo-mua-he',
    excerpt: 'Mùa hè gay gắt khiến thú cưng dễ bị sốc nhiệt, mất nước. Học cách giữ thú cưng mát mẻ, cung cấp đủ nước và nhận biết dấu hiệu nguy hiểm.' },
  { title: 'Lịch tiêm phòng cho thú cưng', date: '20/08/2026', cat: 'Y tế', readTime: '4 phút đọc', emoji: '💉', slug: 'lich-tiem-phong',
    excerpt: 'Tiêm phòng là biện pháp phòng bệnh hiệu quả nhất. Tìm hiểu lịch tiêm phòng chuẩn cho chó và mèo theo từng độ tuổi.' },
  { title: 'Dấu hiệu chó mèo cần đưa đi khám', date: '15/08/2026', cat: 'Sức khỏe', readTime: '6 phút đọc', emoji: '🩺', slug: 'dau-hieu-can-kham',
    excerpt: 'Thú cưng không thể nói, nhưng có nhiều dấu hiệu bạn cần chú ý để đưa đi khám kịp thời trước khi bệnh nghiêm trọng.' },
  { title: 'Chế độ dinh dưỡng cho chó già', date: '10/08/2026', cat: 'Dinh dưỡng', readTime: '5 phút đọc', emoji: '🥗', slug: 'dinh-duong-cho-cho-gia',
    excerpt: 'Chó già có nhu cầu dinh dưỡng khác biệt. Cách điều chỉnh chế độ ăn để đảm bảo sức khỏe và tuổi thọ cho thú cưng lớn tuổi.' },
  { title: 'Cách vệ sinh răng miệng cho thú cưng', date: '05/08/2026', cat: 'Chăm sóc', readTime: '4 phút đọc', emoji: '🦷', slug: 've-sinh-rang-mieng',
    excerpt: 'Vệ sinh răng miệng thường xuyên giúp ngăn ngừa bệnh nướu và mất răng sớm. Hướng dẫn chi tiết cách chăm sóc răng cho chó mèo.' },
  { title: 'Khi nào nên cắt tỉa lông cho thú cưng?', date: '01/08/2026', cat: 'Grooming', readTime: '3 phút đọc', emoji: '✂️', slug: 'cat-tia-long-cho-thu-cung',
    excerpt: 'Cắt tỉa lông định kỳ giúp thú cưng thoải mái, tránh bám bẩn và ký sinh trùng. Tìm hiểu tần suất và lưu ý khi grooming.' },
];

const catColors: Record<string, string> = {
  'Chăm sóc': 'text-amber-700 bg-amber-50',
  'Y tế': 'text-rose-700 bg-rose-50',
  'Sức khỏe': 'text-emerald-700 bg-emerald-50',
  'Dinh dưỡng': 'text-orange-700 bg-orange-50',
  'Grooming': 'text-violet-700 bg-violet-50',
};

export default function Blog() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 -right-32 w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-sky-400/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Kiến thức thú y</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-navy-950">Bài viết mới nhất</h1>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto text-lg">Chia sẻ kiến thức chăm sóc thú cưng từ đội ngũ bác sĩ VINPETI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogPosts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={`card overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="h-52 relative overflow-hidden">
                  <Image src="/images/cat.jpg" alt={post.title} width={400} height={208} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-4 left-4 text-2xl drop-shadow-md">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${catColors[post.cat] || 'text-sky-700 bg-sky-50'}`}>{post.cat}</span>
                    <span className="text-xs text-navy-500">{post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-navy-900 group-hover:text-sky-700 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-xs text-navy-500 mb-3">{post.date}</p>
                  <p className="text-sm text-navy-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 text-sm font-semibold text-sky-700 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Đọc thêm <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
