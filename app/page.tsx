'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC } from '@/lib/clinic';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || started.current) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        started.current = true;
        const t0 = Date.now(), dur = 2000;
        const tick = () => {
          const p = Math.min((Date.now() - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const services = [
  { title: 'Khám chữa bệnh', desc: 'Đội ngũ bác sĩ giàu kinh nghiệm, chẩn đoán và điều trị toàn diện cho thú cưng.', icon: '🏥', details: ['Khám tổng quát', 'Chẩn đoán bệnh', 'Điều trị nội khoa', 'Tái khám'] },
  { title: 'Tiêm phòng', desc: 'Lịch tiêm phòng đầy đủ, bảo vệ thú cưng khỏi các bệnh nguy hiểm.', icon: '💉', details: ['Vaccine 5 in 1', 'Anti-rabies', 'Lịch tiêm theo độ tuổi', 'Chứng nhận tiêm phòng'] },
  { title: 'Nha khoa thú y', desc: 'Vệ sinh răng miệng, nhổ răng, điều trị bệnh nướu chuyên sâu.', icon: '🦷', details: ['Cạo vôi răng', 'Nhổ răng', 'Điều trị nướu', 'Tư vấn chăm sóc răng'] },
  { title: 'Spa & Grooming', desc: 'Tắm, cắt tỉa lông, spa thú cưng với sản phẩm nhập khẩu.', icon: '✂️', details: ['Tắm sạch', 'Cắt tỉa lông', 'Spa thư giãn', 'Sấy khô'] },
  { title: 'Siêu âm & Xét nghiệm', desc: 'Trang thiết bị hiện đại, kết quả nhanh chóng, chính xác.', icon: '🔬', details: ['Siêu âm', 'Xét nghiệm máu', 'X-quang', 'Soi bệnh lý'] },
  { title: 'Phẫu thuật', desc: 'Ca phẫu thuật an toàn, theo dõi hậu phẫu tận tâm.', icon: '⚕️', details: ['Phẫu thuật tiêu hóa', 'Phẫu thuật cột sống', 'Sửa chữa xương', 'Hậu phẫu chăm sóc'] },
];

const stats = [
  { num: '5000+', label: 'Thú cưng đã khám', icon: '🐾', target: 5000, suffix: '+' },
  { num: '8+', label: 'Năm kinh nghiệm', icon: '⭐', target: 8, suffix: '+' },
  { num: '15+', label: 'Bác sĩ chuyên khoa', icon: '👨‍⚕️', target: 15, suffix: '+' },
  { num: '99%', label: 'Khách hàng hài lòng', icon: '💯', target: 99, suffix: '%' },
];

const blogPreview = [
  { title: 'Cách chăm sóc chó mèo mùa hè', date: '25/08/2026', cat: 'Chăm sóc', readTime: '5 phút đọc', emoji: '☀️', slug: 'cham-soc-cho-meo-mua-he',
    excerpt: 'Mùa hè gay gắt khiến thú cưng dễ bị sốc nhiệt, mất nước. Học cách giữ thú cưng mát mẻ và nhận biết dấu hiệu nguy hiểm.' },
  { title: 'Lịch tiêm phòng cho thú cưng', date: '20/08/2026', cat: 'Y tế', readTime: '4 phút đọc', emoji: '💉', slug: 'lich-tiem-phong',
    excerpt: 'Tiêm phòng là biện pháp phòng bệnh hiệu quả nhất. Tìm hiểu lịch tiêm phòng chuẩn cho chó và mèo theo từng độ tuổi.' },
  { title: 'Dấu hiệu chó mèo cần đưa đi khám', date: '15/08/2026', cat: 'Sức khỏe', readTime: '6 phút đọc', emoji: '🩺', slug: 'dau-hieu-can-kham',
    excerpt: 'Thú cưng không thể nói, nhưng có nhiều dấu hiệu bạn cần chú ý để đưa đi khám kịp thời trước khi bệnh nghiêm trọng.' },
];

const whyUs = [
  { title: 'Bác sĩ giàu kinh nghiệm', desc: 'Đội ngũ bác sĩ được đào tạo bài bản, có chứng chỉ chuyên khoa và nhiều năm thực hành.', icon: '👨‍⚕️' },
  { title: 'Trang thiết bị hiện đại', desc: 'Hệ thống máy móc, thiết bị y tế nhập khẩu, đảm bảo chẩn đoán và điều trị chính xác.', icon: '🔬' },
  { title: 'Tận tâm & Trách nhiệm', desc: 'Mỗi thú cưng được theo dõi sát sao, chăm sóc tận tâm như một thành viên gia đình.', icon: '❤️' },
];

const testimonials = [
  { name: 'Chị Nguyễn Thị Hoa', pet: 'Chó Corgi - Mochi', text: 'Bác sĩ VINPETI rất tận tâm, Mochi khám nhiều lần đều khỏi nhanh. Phòng khám sạch sẽ, nhân viên thân thiện.', rating: 5 },
  { name: 'Anh Trần Văn Minh', pet: 'Mèo Anh - Luna', text: 'Đặt lịch online tiện lắm, không phải chờ lâu. Bác sĩ giải thích rõ ràng về tình trạng của Luna và cách chăm sóc.', rating: 5 },
  { name: 'Chị Lê Thị Mai', pet: 'Chó Poodle - Bông', text: 'Dịch vụ spa & grooming ở đây làm rất đẹp. Bông về lông mượt, thơm tho. Giá cả hợp lý, sẽ quay lại thường xuyên.', rating: 5 },
];

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => { setVisible(true); }, []);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden gradient-hero text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute -bottom-24 left-1/3 w-[400px] h-[400px] bg-sky-400/8 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(3,105,161,.18),transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className={`tag bg-white/10 text-sky-300 mb-6 backdrop-blur-sm transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Phòng khám thú y VINPETI</span>
              <h1 className={`font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>
                Chăm sóc thú cưng của bạn <span className="gradient-text">bằng tấm lòng</span>
              </h1>
              <p className={`text-lg text-slate-300 mb-10 max-w-xl leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.2s' }}>
                Đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại — mang đến dịch vụ thú y chuyên nghiệp tại Tây Ninh.
              </p>
              <div className={`flex flex-wrap gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.3s' }}>
                <Link href="/dat-lich" className="btn-primary pulse-ring">Đặt lịch khám ngay</Link>
                <Link href="/dich-vu" className="btn-outline border-white/25 text-white hover:bg-white/10">Xem dịch vụ</Link>
              </div>
            </div>

            {/* Mobile hero image */}
            <div className="mt-10 lg:hidden">
              <div className="relative w-64 h-64 mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image src="/images/castle1.jpg" alt="Phòng khám VINPETI" width={256} height={256} className="object-cover w-full h-full" />
                </div>
                <div className="absolute -top-2 -right-4 glass rounded-xl px-3 py-2 border border-white/20">
                  <div className="text-lg font-bold text-sky-700">15+</div>
                  <div className="text-[10px] text-navy-600">Bác sĩ</div>
                </div>
                <div className="absolute -bottom-2 -left-4 glass rounded-xl px-3 py-2 border border-white/20">
                  <div className="text-lg font-bold text-sky-700">8+</div>
                  <div className="text-[10px] text-navy-600">Năm KN</div>
                </div>
              </div>
            </div>

            <div className={`hidden lg:flex items-center justify-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white/10 animate-float backdrop-blur-sm">
                  <Image src="/images/castle1.jpg" alt="Phòng khám VINPETI" width={320} height={320} className="object-cover w-full h-full" />
                </div>
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 animate-pulse-slow">
                  <div className="text-2xl font-bold text-sky-400">15+</div>
                  <div className="text-xs text-slate-300">Bác sĩ chuyên khoa</div>
                </div>
                <div className="absolute -bottom-4 -left-6 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 animate-pulse-slow" style={{ animationDelay: '1s' }}>
                  <div className="text-2xl font-bold text-sky-400">8+</div>
                  <div className="text-xs text-slate-300">Năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80V30C240 50 480 0 720 20C960 40 1200 60 1440 30V80H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* ═══ STATS (counter animation) ═══ */}
      <section className="relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center mx-auto mb-4 text-3xl">{s.icon}</div>
                  <div className="font-heading text-3xl md:text-4xl font-bold gradient-text"><Counter target={s.target} suffix={s.suffix} /></div>
                  <div className="text-sm text-navy-600 mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.2s' }}>
            {[
              { label: 'Bác sĩ chứng chỉ', icon: '👨‍⚕️' },
              { label: 'Thiết bị nhập khẩu', icon: '🔬' },
              { label: 'Giờ mở cửa 8:00 - 20:00', icon: '🕐' },
              { label: 'Đặt lịch online 24/7', icon: '📱' },
            ].map((badge, i) => (
              <div key={badge.label} className={`flex items-center gap-2.5 text-sm text-navy-700 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${0.3 + i * 0.08}s` }}>
                <span className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-base">{badge.icon}</span>
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ═══ SERVICES ═══ */}
      <section className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Dịch vụ nổi bật</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Chúng tôi cung cấp gì</h2>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto text-lg">Tất cả dịch vụ thú y từ cơ bản đến chuyên sâu, đáp ứng mọi nhu cầu của thú cưng.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <div key={svc.title} className={`card card-hover p-7 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center mb-5 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{svc.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-navy-900 group-hover:text-sky-700 transition-colors">{svc.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.details.map((d) => (
                    <li key={d} className="text-sm text-navy-700 flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={`text-center mt-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.6s' }}>
            <Link href="/dich-vu" className="btn-outline">Xem tất cả dịch vụ →</Link>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Tại sao chọn VINPETI</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Cam kết của chúng tôi</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((v, i) => (
              <div key={v.title} className={`card card-hover p-8 text-center group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="icon-box mx-auto mb-5">
                  <span className="text-3xl">{v.icon}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-navy-900 group-hover:text-sky-700 transition-colors">{v.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Đánh giá</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Khách hàng nói gì về VINPETI</h2>
            <p className="text-navy-600 mt-4 max-w-xl mx-auto">Niềm tin của bạn là động lực để chúng tôi ngày càng hoàn thiện.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`card p-7 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-navy-700 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center text-lg">{t.pet[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                    <div className="text-xs text-navy-500">{t.pet}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-7xl mx-auto" />

      {/* ═══ BLOG PREVIEW ═══ */}
      <section className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Kiến thức thú y</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Bài viết mới nhất</h2>
            <p className="text-navy-600 mt-4 max-w-xl mx-auto">Chia sẻ kiến thức chăm sóc thú cưng từ đội ngũ bác sĩ VINPETI.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreview.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={`card overflow-hidden group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="h-52 relative overflow-hidden">
                  <Image src="/images/cat.jpg" alt={post.title} width={400} height={208} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 text-2xl">{post.emoji}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1.5 rounded-full">{post.cat}</span>
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
          <div className={`text-center mt-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.4s' }}>
            <Link href="/blog" className="btn-outline">Đọc thêm bài viết →</Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-700 via-sky-600 to-sky-700 animate-gradient dot-pattern" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,.12),transparent_60%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className={`font-heading text-3xl md:text-5xl font-bold text-white mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Sẵn sàng chăm sóc thú cưng?</h2>
          <p className={`text-sky-100 mb-10 text-lg max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>Đặt lịch khám ngay hôm nay — đội ngũ bác sĩ VINPETI luôn sẵn sàng hỗ trợ bạn.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`btn-cta transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.2s' }}>Đặt lịch ngay →</button>
        </div>
      </section>

      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 right-6 z-40 w-11 h-11 bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-full flex items-center justify-center text-navy-700 hover:bg-sky-700 hover:text-white hover:scale-110 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Về đầu trang"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/></svg>
      </button>
    </div>
  );
}
