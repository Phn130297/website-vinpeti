'use client';

import { useState, useEffect, useRef } from 'react';
import { CLINIC } from '@/lib/clinic';

const species = ['Chó', 'Mèo'];
const services = ['Khám tổng quát', 'Tiêm phòng', 'Nha khoa', 'Spa & Grooming', 'Siêu âm & Xét nghiệm', 'Phẫu thuật', 'Tư vấn dinh dưỡng', 'Khác'];

const formSections = [
  { title: 'Thông tin chủ nhân', fields: ['owner', 'phone'] },
  { title: 'Thông tin thú cưng', fields: ['petName', 'species', 'breed', 'age'] },
  { title: 'Chi tiết đặt lịch', fields: ['service', 'date', 'note'] },
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => { setVisible(true); }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const existing = JSON.parse(localStorage.getItem('bookings') || '[]');
    existing.push({ ...data, id: Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem('bookings', JSON.stringify(existing));
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    formRef.current?.reset();
  };

  if (submitted) {
    return (
      <div className="section-pad bg-slate-50">
        <div className="max-w-xl mx-auto px-4">
          <div className={`card p-10 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">✅</span>
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3 text-navy-900">Đặt lịch thành công!</h2>
            <p className="text-navy-600 mb-8">Chúng tôi sẽ liên hệ xác nhận lịch hẹn qua số điện thoại của bạn trong vòng 30 phút.</p>
            <p className="text-sm text-navy-500">Hotline: {CLINIC.phone} | {CLINIC.hours}</p>
            <button onClick={resetForm} className="btn-primary">Đặt lịch khác</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-pad bg-slate-50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none dot-pattern" aria-hidden="true" />
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="tag mb-4">Đặt lịch</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 text-navy-950">Đặt lịch khám</h1>
          <p className="text-navy-600 mt-4 text-lg">Điền thông tin bên dưới, chúng tôi sẽ xác nhận lịch hẹn qua điện thoại.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className={`card card-hover p-8 md:p-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.15s' }}>
          {formSections.map((section, si) => (
            <div key={section.title} className={`mb-8 ${si > 0 ? 'pt-8 border-t border-slate-100' : ''}`}>
              <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-sky-700 mb-5 flex items-center gap-2.5">
                <span className="number-badge !w-8 !h-8 !rounded-lg !text-sm">{si + 1}</span>
                {section.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {section.fields.map((fieldName) => {
                  if (fieldName === 'owner') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Tên chủ nhân <span className="text-sky-600">*</span></label>
                      <input required name="owner" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder="Họ tên" />
                    </div>
                  );
                  if (fieldName === 'phone') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Số điện thoại <span className="text-sky-600">*</span></label>
                      <input required type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder={CLINIC.phone} />
                    </div>
                  );
                  if (fieldName === 'petName') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Tên thú cưng <span className="text-sky-600">*</span></label>
                      <input required name="petName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder="Tên thú cưng" />
                    </div>
                  );
                  if (fieldName === 'species') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Loài <span className="text-sky-600">*</span></label>
                      <select required name="species" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all bg-white">
                        <option value="">Chọn loài</option>
                        {species.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  );
                  if (fieldName === 'breed') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Giống</label>
                      <input name="breed" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder="Ví dụ: Poodle, Mèo ta..." />
                    </div>
                  );
                  if (fieldName === 'age') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Tuổi</label>
                      <input name="age" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" placeholder="Ví dụ: 2 tuổi" />
                    </div>
                  );
                  if (fieldName === 'service') return (
                    <div key={fieldName} className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Dịch vụ <span className="text-sky-600">*</span></label>
                      <select required name="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all bg-white">
                        <option value="">Chọn dịch vụ</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  );
                  if (fieldName === 'date') return (
                    <div key={fieldName}>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Ngày hẹn <span className="text-sky-600">*</span></label>
                      <input required type="date" name="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all" />
                    </div>
                  );
                  if (fieldName === 'note') return (
                    <div key={fieldName} className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-navy-800 mb-2">Ghi chú</label>
                      <textarea name="note" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-600 focus:ring-2 focus:ring-sky-600/20 outline-none text-sm transition-all resize-none" placeholder="Mô tả triệu chứng hoặc yêu cầu đặc biệt..." />
                    </div>
                  );
                  return null;
                })}
              </div>
            </div>
          ))}
          <button type="submit" className="w-full btn-cta pulse-ring !py-4 !text-base justify-center text-center mt-2">Xác nhận đặt lịch</button>
        </form>
      </div>
    </div>
  );
}
