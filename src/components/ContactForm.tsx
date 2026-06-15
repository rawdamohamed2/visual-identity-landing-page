import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, User, Briefcase, FileText, CheckCircle2, ChevronDown, Trash2, ArrowLeft } from 'lucide-react';
import { ServiceRequest } from '../types';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRequests, setSubmittedRequests] = useState<ServiceRequest[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [latestSubmittedId, setLatestSubmittedId] = useState('');
  const [showDemoDashboard, setShowDemoDashboard] = useState(false);

  // Load from localstorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('brand_identity_requests');
    if (saved) {
      try {
        setSubmittedRequests(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading saved requests', e);
      }
    }
  }, []);

  const saveRequests = (requests: ServiceRequest[]) => {
    setSubmittedRequests(requests);
    localStorage.setItem('brand_identity_requests', JSON.stringify(requests));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'الرجاء إدخال الاسم الكامل ثنائياً على الأقل';
    } else if (formData.fullName.trim().split(/\s+/).length < 2) {
      newErrors.fullName = 'يرجى كتابة الاسم واللقب لضمان تواصل مهني أفضل';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب لتلقي عروض الأسعار والاتفاقيات';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'شكل البريد الإلكتروني غير صحيح (مثال: name@domain.com)';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب للاتصال الهاتفي أو واتساب';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'رقم الهاتف غير دقيق، يرجى كتابة الرقم مع رمز الدولة';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'اسم النشاط التجاري مطلوب لصياغة أفكار أولية متوافقة';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'يرجى تقديم وصف مختصر لشخصية المشروع وأهداف الهوية المطلوبة';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'يرجى كتابة وصف أطول قليلاً (15 حرفاً على الأقل) لفهم احتياجك';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // scroll to first error
      const firstErrorKey = Object.keys(errors)[0];
      const el = document.getElementsByName(firstErrorKey)[0];
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Simulate Server-side latency
    setTimeout(() => {
      const newRequest: ServiceRequest = {
        id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        businessName: formData.businessName.trim(),
        description: formData.description.trim(),
        createdAt: new Date().toLocaleString('ar-EG', { hour12: true }),
        status: 'new',
      };

      const updated = [newRequest, ...submittedRequests];
      saveRequests(updated);

      setLatestSubmittedId(newRequest.id);
      setShowSuccessModal(true);
      setIsSubmitting(false);

      // Reset Form fields
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        businessName: '',
        description: '',
      });
    }, 1000);
  };

  const deleteRequest = (id: string) => {
    const updated = submittedRequests.filter((r) => r.id !== id);
    saveRequests(updated);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-slate-900/5 rounded-full blur-2xl pointer-events-none animate-pulse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" dir="rtl">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-emerald-700 text-xs font-bold font-sans">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>متاحون لاستقبال مشاريع جديدة اليوم</span>
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-800" id="contact-title">
            ابدأ مشروعك الاحترافي اليوم
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
            املأ نموذج الطلب بدقة وسوف يتواصل معك كبير المصممين لدينا في غضون 24 ساعة لبدء جلسة استشارية مجانية تماماً ومناقشة تفاصيل الهوية.
          </p>
        </div>

        {/* Main Card holding inputs */}
        <div className="bg-white rounded-[32px] border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
          
          {/* Side Info Panel */}
          <div className="md:col-span-4 bg-slate-900 p-8 text-white text-right space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans font-extrabold text-xl text-white">معلومات الاتصال المباشر</h3>
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-medium">
                إذا كنت تفضل التحدث إلينا فوراً أو إرسال تفاصيل في شكل ملفات، يسعدنا تواصلك معنا عبر القنوات التالية:
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-sans font-bold tracking-wide">رقم الهاتف الفوري</span>
                    <a href="tel:+966500000000" className="block text-xs font-mono text-white hover:text-indigo-400 transition-colors tracking-wide font-black">+966 50 000 0000</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 font-sans font-bold tracking-wide">البريد الإلكتروني المباشر</span>
                    <a href="mailto:design@takhteety.com" className="block text-xs font-mono text-white hover:text-indigo-400 transition-colors tracking-wide font-black">design@takhteety.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="font-sans text-[11px] text-indigo-400 font-extrabold">★ خيار الدفعة الميسرة</p>
              <p className="font-sans text-[10px] text-slate-400 leading-relaxed font-medium">
                نوفر خطة مرنة لسداد القيمة على دفعتين (50% لبدء التصميم والتحضير، و 50% بعد الموافقة النهائية وقبل تسليم الملفات المفتوحة).
              </p>
            </div>
          </div>

          {/* Form Content Panel */}
          <div className="md:col-span-8 p-8 sm:p-10 text-right">
            <form onSubmit={handleSubmit} className="space-y-6" id="consultation-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name input */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="block font-sans text-xs font-bold text-slate-700">
                    الاسم الكامل <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="عبدالله الراشد"
                      className={`w-full font-sans text-xs sm:text-sm bg-slate-50 border rounded-2xl pr-10 pl-4 py-3.5 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 ${
                        errors.fullName ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="font-sans text-[11px] text-rose-500 font-medium">{errors.fullName}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block font-sans text-xs font-bold text-slate-700">
                    البريد الإلكتروني <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@domain.com"
                      className={`w-full font-sans text-xs sm:text-sm bg-slate-50 border rounded-2xl pr-10 pl-4 py-3.5 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 text-left ${
                        errors.email ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                      }`}
                      style={{ direction: 'ltr' }}
                    />
                  </div>
                  {errors.email && <p className="font-sans text-[11px] text-rose-500 font-medium">{errors.email}</p>}
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone Number Input */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block font-sans text-xs font-bold text-slate-700">
                    رقم الهاتف والواتساب <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+966 50 123 4567"
                      className={`w-full font-sans text-xs sm:text-sm bg-slate-50 border rounded-2xl pr-10 pl-4 py-3.5 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 text-left ${
                        errors.phone ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                      }`}
                      style={{ direction: 'ltr' }}
                    />
                  </div>
                  {errors.phone && <p className="font-sans text-[11px] text-rose-500 font-medium">{errors.phone}</p>}
                </div>

                {/* Business Name Input */}
                <div className="space-y-1.5">
                  <label htmlFor="businessName" className="block font-sans text-xs font-bold text-slate-700">
                    اسم الشركة / النشاط التجاري <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="متجر رملة أو شركة نمو العقارية"
                      className={`w-full font-sans text-xs sm:text-sm bg-slate-50 border rounded-2xl pr-10 pl-4 py-3.5 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 ${
                        errors.businessName ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                      }`}
                    />
                  </div>
                  {errors.businessName && <p className="font-sans text-[11px] text-rose-500 font-medium">{errors.businessName}</p>}
                </div>

              </div>

              {/* Description Input */}
              <div className="space-y-1.5">
                <label htmlFor="description" className="block font-sans text-xs font-bold text-slate-700">
                  وصف مختصر للمشروع ورسالتك للمصمم <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute top-4 right-3.5 text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="اكتب فكرتك أو قيم الهوية التي تريد إبرازها بوضوح (مثال: الشعار يخدم مطعماً فاخراً بألوان ترابية وخط عربي كلاسيكي مخصص...)"
                    className={`w-full font-sans text-xs sm:text-sm bg-slate-50 border rounded-2xl pr-10 pl-4 py-3.5 text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 leading-relaxed resize-none ${
                      errors.description ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20' : 'border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
                {errors.description && <p className="font-sans text-[11px] text-rose-500 font-medium">{errors.description}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full font-sans font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 py-4.5 rounded-2xl shadow-lg shadow-indigo-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-4"
                id="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>برجاء الانتظار، جاري معالجة الطلب...</span>
                  </span>
                ) : (
                  <>
                    <span>إرسال الطلب وحجز موعد استشاري</span>
                    <ArrowLeft className="w-4 h-4" />
                  </>
                )}
              </motion.button>

            </form>
          </div>
        </div>

        {/* Floating Toggle for Demo Requests Area */}
        {submittedRequests.length > 0 && (
          <div className="mt-8 flex justify-center" id="demo-dashboard-toggle-wrap">
            <button
              onClick={() => setShowDemoDashboard(!showDemoDashboard)}
              className="font-sans text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm transition-colors cursor-pointer animate-pulse"
            >
              <span>{showDemoDashboard ? 'إخفاء الطلبات التجريبية المسجلة' : `معاينة الطلبات المسجلة محلياً (${submittedRequests.length})`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showDemoDashboard ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}

        {/* Demo Submissions Dashboard */}
        <AnimatePresence>
          {showDemoDashboard && submittedRequests.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 bg-white rounded-[24px] border border-slate-100 shadow-lg p-6 text-right"
              id="demo-leads-dashboard"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <h4 className="font-sans font-black text-slate-800 text-sm">لوحة رصد المستندات المسجلة متصفحك (Demo Dashboard)</h4>
                  <p className="font-sans text-[10px] text-slate-400 font-semibold mt-0.5">يمكنك الحذف والتعديل المباشر، الهيكل جاهز بنسبة 100% للربط بقاعدة بيانات MySQL أو Firestore مستقبلاً</p>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('brand_identity_requests');
                    setSubmittedRequests([]);
                    setShowDemoDashboard(false);
                  }}
                  className="font-sans text-[10px] text-rose-500 font-bold hover:bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100 transition-colors"
                >
                  تصفية وحذف الكل
                </button>
              </div>

              <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
                {submittedRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start justify-between gap-4 text-xs"
                  >
                    <div className="space-y-1.5 text-right w-full">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-bold">{req.id}</span>
                        <h5 className="font-sans font-bold text-slate-800">{req.fullName} ({req.businessName})</h5>
                      </div>
                      <p className="font-sans text-slate-500 text-[11px] leading-relaxed font-semibold">{req.description}</p>
                      <div className="flex items-center gap-4 text-[10px] text-slate-400 font-bold">
                        <span>الهاتف: {req.phone}</span>
                        <span>•</span>
                        <span>ايميل: {req.email}</span>
                        <span>•</span>
                        <span>التوقيت: {req.createdAt}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteRequest(req.id)}
                      className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors shrink-0 cursor-pointer"
                      title="حذف هذا الطلب"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Success visual feedback popup */}
        <AnimatePresence>
          {showSuccessModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSuccessModal(false)}
                className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 10 }}
                className="bg-white rounded-[32px] p-8 max-w-md w-full relative z-10 text-center shadow-2xl space-y-6 border border-slate-100"
                id="success-modal-body"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-md border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-xs text-emerald-800 font-bold bg-emerald-50 px-3 py-1 rounded-full">
                    معرف التذكرة: {latestSubmittedId}
                  </span>
                  <h3 className="font-sans font-extrabold text-xl text-slate-850">
                    تم إرسال طلبك بنجاح!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    نشكرك على ثقتك بـ <strong>تخطيطي</strong>. قمنا بتسجيل طلبك لـ <strong>تصميم الهوية البصرية</strong> وحجزنا جلستك الاستشارية وجاري مراجعة الأفكار الآن. سنقوم بالرد عليك وإرسال عينات مقترحة عبر الواتساب والبريد المذكورين قريباً جداً.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      setShowDemoDashboard(true);
                      // Scroll to demo board bottom
                      setTimeout(() => {
                        const el = document.getElementById('demo-leads-dashboard');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 150);
                    }}
                    className="w-full font-sans font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 py-3.5 rounded-xl transition-colors cursor-pointer shadow-lg shadow-indigo-600/20"
                  >
                    حسناً، الانتقال لمعاينة تذكرتي
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
