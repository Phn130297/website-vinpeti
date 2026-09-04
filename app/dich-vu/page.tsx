'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { title: 'Khám chữa bệnh', desc: 'Đội ngũ bác sĩ giàu kinh nghiệm, chẩn đoán và điều trị toàn diện cho thú cưng.', icon: '🏥', details: ['Khám tổng quát', 'Chẩn đoán bệnh', 'Điều trị nội khoa', 'Tái khám'] },
  { title: 'Tiêm phòng', desc: 'Lịch tiêm phòng đầy đủ, bảo vệ thú cưng khỏi các bệnh nguy hiểm.', icon: '💉', details: ['Vaccine 5 in 1', 'Anti-rabies', 'Lịch tiêm theo độ tuổi', 'Chứng nhận tiêm phòng'] },
  { title: 'Nha khoa thú y', desc: 'Vệ sinh răng miệng, nhổ răng, điều trị bệnh nướu chuyên sâu.', icon: '🦷', details: ['Cạo vôi răng', 'Nhổ răng', 'Điều trị nướu', 'Tư vấn chăm sóc răng'] },
  { title: 'Spa & Grooming', desc: 'Tắm, cắt tỉa lông, spa thú cưng với sản phẩm nhập khẩu.', icon: '✂️', details: ['Tắm sạch', 'Cắt tỉa lông', 'Spa thư giãn', 'Sấy khô'] },
  { title: 'Siêu âm & Xét nghiệm', desc: 'Trang thiết bị hiện đại, kết quả nhanh chóng, chính xác.', icon: '🔬', details: ['Siêu âm', 'Xét nghiệm máu', 'X-quang', 'Soi bệnh lý'] },
  { title: 'Phẫu thuật', desc: 'Ca phẫu thuật an toàn, theo dõi hậu phẫu tận tâm.', icon: '⚕️', details: ['Phẫu thuật tiêu hóa', 'Phẫu thuật cột sống', 'Sửa chữa xương', 'Hậu phẫu chăm sóc'] },
  { title: 'Khách sạn thú cưng', desc: 'Nơi lưu trú an toàn, thoải mái cho thú cưng khi bạn vắng nhà.', icon: '🏠', details: ['Phòng lưu trú', 'Chăm sóc 24/7', 'Đồ ăn theo yêu cầu', 'Giám sát camera'] },
  { title: 'Tư vấn dinh dưỡng', desc: 'Tư vấn chế độ ăn uống phù hợp với loại, độ tuổi và tình trạng sức khỏe.', icon: '🥗', details: ['Thực đơn cá nhân', 'Bổ sung dinh dưỡng', 'Tư vấn giảm cân', 'Thực phẩm y học'] },
];

export default function Services() {
  const [visible, setVisible] = useState(false);

  useEffect(() => { setVisible(true); }, []);
  return (
    <div>
      <section className="section-pad bg-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Dịch vụ</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-navy-950">Dịch vụ của chúng tôi</h1>
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto text-lg">Tất cả dịch vụ thú y chuyên nghiệp, từ khám chữa bệnh đến chăm sóc thường ngày.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <div key={svc.title} className={`card card-hover p-7 group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-sky-400 rounded-t-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 flex items-center justify-center mb-5 text-3xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">{svc.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-navy-900 group-hover:text-sky-700 transition-colors">{svc.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2.5">
                    {svc.details.map((d) => (
                      <li key={d} className="text-sm text-navy-700 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-sky-600 rounded-full shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-600/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Cần tư vấn?</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4 text-navy-950">Chưa chọn được dịch vụ phù hợp?</h2>
            <p className="text-navy-600 mb-8 max-w-xl mx-auto">Đội ngũ bác sĩ VINPETI sẽ tư vấn dịch vụ phù hợp nhất cho thú cưng của bạn.</p>
            <Link href="/dat-lich" className="btn-cta pulse-ring">Đặt lịch tư vấn →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
