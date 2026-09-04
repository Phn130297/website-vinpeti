'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const posts: Record<string, { title: string; date: string; cat: string; readTime: string; emoji: string; content: string[] }> = {
  'cham-soc-cho-meo-mua-he': {
    title: 'Cách chăm sóc chó mèo mùa hè',
    date: '25/08/2026', cat: 'Chăm sóc', readTime: '5 phút đọc', emoji: '☀️',
    content: [
      'Mùa hè là thời điểm thú cưng dễ gặp rủi ro nhất do nhiệt độ cao. Chó mèo không tiết mồ hôi như con người nên cần các biện pháp chăm sóc đặc biệt.',
      'Đảm bảo thú cưng luôn có nước sạch để uống. Nên thay nước mỗi ngày và giữ nước ở nơi mát mẻ.',
      'Không nên để thú cưng trong xe đóng kín dưới trời nắng. Nhiệt độ trong xe có thể lên đến 70°C chỉ sau vài phút.',
      'Đi dạo vào sáng sớm hoặc chiều mát. Tránh đi dạo giữa trưa khi nhiệt độ cao nhất.',
      'Kiểm tra dấu hiệu say nắng: thở gấp, lưỡi thè ra dài, chán ăn, co giật. Nếu nghi ngờ, hạ nhiệt ngay và đưa đến phòng khám.',
    ],
  },
  'lich-tiem-phong': {
    title: 'Lịch tiêm phòng đầy đủ cho thú cưng',
    date: '20/08/2026', cat: 'Y tế', readTime: '4 phút đọc', emoji: '💉',
    content: [
      'Tiêm phòng là biện pháp phòng bệnh hiệu quả nhất cho thú cưng. Mỗi loài và độ tuổi có lịch tiêm khác nhau.',
      'Chó con: tiêm lần đầu ở tuần 6-8, nhắc lại sau 3-4 tuần. Tiêm nhắc hàng năm.',
      'Mèo con: tiêm lần đầu ở tuần 6-8, nhắc lại sau 3-4 tuần. Tiêm nhắc hàng năm.',
      'Vaccine cơ bản: 5 in 1 (chó), 3 in 1 (mèo) — phòng bệnh dại, ho cuzzi, parvovirus.',
      'Lưu ý: thú cưng cần khỏe mạnh trước khi tiêm. Hỏi bác sĩ về lịch tiêm phù hợp.',
    ],
  },
  'dau-hieu-can-kham': {
    title: 'Dấu hiệu chó mèo cần đưa đi khám ngay',
    date: '15/08/2026', cat: 'Sức khỏe', readTime: '6 phút đọc', emoji: '🩺',
    content: [
      'Thú cưng không thể nói, nhưng chúng có nhiều cách để báo hiệu sức khỏe kém. Quan sát hàng ngày là chìa khóa.',
      'Chán ăn hoặc bỏ ăn hơn 24h — có thể là dấu hiệu bệnh lý nghiêm trọng.',
      'Thay đổi thói quen đi vệ sinh: tiểu nhiều, đi ngoài lỏng, đi ngoài ra máu.',
      'Thở khò khè, ho kéo dài, chảy nước mũi — cần kiểm tra đường hô hấp.',
      'Lười hoạt động, ủ rũ, trốn vào góc — dấu hiệu đau hoặc sốt.',
      'Nếu thấy bất kỳ dấu hiệu bất thường, hãy đưa thú cưng đến phòng khám ngay.',
    ],
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  if (!post) notFound();

  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Link href="/blog" className="text-sm text-sky-700 hover:text-sky-600 mb-6 inline-flex items-center gap-1 group">← <span className="group-hover:translate-x-0.5 transition-transform">Quay lại Blog</span></Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="tag">{post.cat}</span>
              <span className="text-xs text-navy-500">{post.readTime}</span>
            </div>

            <div className="h-64 md:h-80 rounded-2xl overflow-hidden mb-6 shadow-lg">
              <Image src="/images/cat.jpg" alt={post.title} width={800} height={400} className="w-full h-full object-cover" />
            </div>

            <div className="text-6xl mb-5">{post.emoji}</div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-3 text-navy-950 leading-tight">{post.title}</h1>
            <p className="text-sm text-navy-600 mb-10 flex items-center gap-2">
              <span>{post.date}</span>
              <span className="w-1 h-1 bg-navy-400 rounded-full" />
              <span>Bác sĩ VINPETI</span>
            </p>
          </div>

          <div className={`h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-10 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`} />

          <article className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.15s' }}>
            {post.content.map((p, i) => (
              <p key={i} className="text-navy-700 leading-[1.8] mb-5 text-base">{p}</p>
            ))}
          </article>

          <div className="mt-14 pt-10 border-t border-slate-100">
            <div className="card p-8 bg-gradient-to-br from-sky-50 to-sky-100/50 border-sky-100 text-center">
              <h3 className="font-heading font-semibold text-xl text-navy-900 mb-2">Cần tư vấn cho thú cưng?</h3>
              <p className="text-navy-600 text-sm mb-5">Đặt lịch khám để được bác sĩ VINPETI tư vấn trực tiếp.</p>
              <Link href="/dat-lich" className="btn-cta pulse-ring">Đặt lịch khám ngay →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
