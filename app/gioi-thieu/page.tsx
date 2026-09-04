'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const whyUs = [
  { title: 'Bác sĩ giàu kinh nghiệm', desc: 'Đội ngũ bác sĩ được đào tạo bài bản, có chứng chỉ chuyên khoa và nhiều năm thực hành.', icon: '👨‍⚕️' },
  { title: 'Trang thiết bị hiện đại', desc: 'Hệ thống máy móc, thiết bị y tế nhập khẩu, đảm bảo chẩn đoán và điều trị chính xác.', icon: '🔬' },
  { title: 'Tận tâm & Trách nhiệm', desc: 'Mỗi thú cưng được theo dõi sát sao, chăm sóc tận tâm như một thành viên gia đình.', icon: '❤️' },
  { title: 'Giá cả minh bạch', desc: 'Báo giá rõ ràng trước khi điều trị, không phát sinh chi phí đột ngột.', icon: '💰' },
];

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);
  return (
    <div>
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className={`tag mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Về chúng tôi</span>
              <h1 className={`font-heading text-4xl md:text-5xl font-bold mt-3 mb-6 text-navy-950 leading-tight transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.05s' }}>VINPETI —<br />Phòng khám thú y Tây Ninh</h1>
              <p className={`text-navy-600 text-lg leading-relaxed mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.1s' }}>
                VINPETI được thành lập với sứ mệnh mang đến dịch vụ thú y chuyên nghiệp, tận tâm cho thú cưng tại Tây Ninh.
              </p>
              <p className={`text-navy-600 leading-relaxed mb-5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.15s' }}>
                Đội ngũ bác sĩ của chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực thú y, liên tục cập nhật kiến thức và kỹ thuật mới nhất.
              </p>
              <p className={`text-navy-600 leading-relaxed transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.2s' }}>
                Chúng tôi tin rằng mỗi thú cưng là một thành viên của gia đình — và xứng đáng được chăm sóc tốt nhất.
              </p>
              <div className={`mt-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '0.25s' }}>
                <Link href="/dat-lich" className="btn-primary">Đặt lịch khám</Link>
              </div>
            </div>
            <div className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/doctor.jpg" alt="Đội ngũ VINPETI" width={500} height={500} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="icon-box !w-12 !h-12 !rounded-xl">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <div className="font-heading font-bold text-navy-900">15+ Bác sĩ</div>
                    <div className="text-xs text-navy-600">Chuyên khoa uy tín</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Giá trị cốt lõi</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Tại sao chọn VINPETI</h2>
            <p className="text-navy-600 mt-4 max-w-xl mx-auto">Chúng tôi luôn đặt chất lượng dịch vụ và sức khỏe thú cưng lên hàng đầu.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((v, i) => (
              <div key={v.title} className={`card p-8 text-center group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center mx-auto mb-5 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{v.icon}</div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-navy-900 group-hover:text-sky-700 transition-colors">{v.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Không gian phòng khám</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-3 text-navy-950">Môi trường chuyên nghiệp</h2>
            <p className="text-navy-600 mt-4 max-w-xl mx-auto">Không gian khám chữa bệnh sạch sẽ, thoáng mát, đảm bảo an toàn cho thú cưng.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/castle1.jpg', alt: 'Khu vực tiếp đón', span: 'md:col-span-2 md:row-span-2' },
              { src: '/images/castle2.jpg', alt: 'Khu vực khám chữa', span: '' },
              { src: '/images/library2.jpg', alt: 'Khu vực điều trị', span: '' },
              { src: '/images/cat.jpg', alt: 'Thú cưng tại VINPETI', span: '' },
            ].map((img, i) => (
              <div key={img.src} className={`aspect-square rounded-2xl overflow-hidden shadow-lg ${img.span} transition-all duration-700 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
                <Image src={img.src} alt={img.alt} width={img.span ? 600 : 300} height={img.span ? 400 : 300} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`card p-8 md:p-12 bg-gradient-to-br from-sky-50 to-white border-sky-100`}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <span className="tag mb-4">Sứ mệnh</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4 text-navy-950">Mỗi thú cưng là<br />một thành viên gia đình</h2>
                <p className="text-navy-600 leading-relaxed">Chúng tôi nỗ lực mỗi ngày để mang đến môi trường chăm sóc an toàn, thân thiện, nơi thú cưng cảm thấy thoải mái như ở nhà.</p>
              </div>
              <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.15s' }}>
                {[
                  { num: '5000+', label: 'Thú cưng đã khám' },
                  { num: '8+', label: 'Năm kinh nghiệm' },
                  { num: '15+', label: 'Bác sĩ' },
                  { num: '99%', label: 'Hài lòng' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-5 text-center border border-slate-100">
                    <div className="font-heading text-2xl font-bold gradient-text">{s.num}</div>
                    <div className="text-xs text-navy-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
