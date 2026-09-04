'use client';

import { useState, useEffect } from 'react';
import { CLINIC } from '@/lib/clinic';

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="relative">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="tag mb-4">Liên hệ</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-navy-950">Liên hệ với chúng tôi</h1>
            <p className="text-navy-600 mt-4 text-lg max-w-xl mx-auto">Chúng tôi luôn sẵn sàng hỗ trợ bạn và thú cưng.</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-10">
            <div className={`lg:col-span-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.15s' }}>
              <div className="card p-7 space-y-5">
                {[
                  { icon: '📍', label: 'Địa chỉ', value: CLINIC.address },
                  { icon: '📞', label: 'Hotline', value: CLINIC.phone },
                  { icon: '✉️', label: 'Email', value: CLINIC.email },
                  { icon: '🕐', label: 'Giờ mở cửa', value: CLINIC.hours },
                ].map((c, i) => (
                  <div key={c.label} className={`flex items-start gap-4 group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: `${0.2 + i * 0.08}s` }}>
                    <div className="icon-box !w-10 !h-10 !rounded-xl !text-lg shrink-0 group-hover:scale-110 transition-transform">
                      <span>{c.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy-800 mb-0.5">{c.label}</div>
                      <div className="font-medium text-navy-900">{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`lg:col-span-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
              <div className="card p-8 md:p-10">
                <h2 className="font-heading text-2xl font-bold mb-2 text-navy-900">Gửi tin nhắn</h2>
                <p className="text-navy-600 text-sm mb-6">Chúng tôi sẽ phản hồi trong vòng 24h.</p>
            {sent ? (
              <div className={`card p-8 md:p-10 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-5xl">✅</span>
                </div>
                <h2 className="font-heading text-2xl font-bold mb-3 text-navy-900">Gửi tin nhắn thành công!</h2>
                <p className="text-navy-600 mb-2">Chúng tôi sẽ phản hồi trong vòng 24h.</p>
                <p className="text-sm text-navy-500 mb-6">Hotline: {CLINIC.phone}</p>
                <button onClick={() => setSent(false)} className="btn-primary">Gửi tin nhắn khác</button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">Tên <span className="text-sky-600">*</span></label>
                    <input required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder="Họ tên" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-800 mb-2">Số điện thoại <span className="text-sky-600">*</span></label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder={CLINIC.phone} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-800 mb-2">Nội dung <span className="text-sky-600">*</span></label>
                  <textarea required rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all resize-none" placeholder="Nội dung tin nhắn..." />
                </div>
                <button type="submit" className="w-full btn-primary justify-center text-center !py-4">Gửi tin nhắn</button>
              </form>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
