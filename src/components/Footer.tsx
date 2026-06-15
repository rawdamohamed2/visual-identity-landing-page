import { Palette, ChevronUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-white/5 relative" dir="rtl">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4 text-right">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-md">
                <Palette className="w-4.5 h-4.5 text-white" />
              </div>
              <div>
                <span className="font-sans font-black text-lg text-white tracking-widest block">
                  تَـخْـطِـيـطِـي<span className="text-indigo-400">.</span>
                </span>
                <span className="font-sans text-[9px] text-indigo-400 tracking-wider block -mt-1 font-bold">
                  لصناعة الهوية البصرية اللائقة
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              استوديو تصميم عربي متخصص في صياغة وبناء الهويات التجارية والشعارات المتكاملة للعلامات الصاعدة والمشاريع الناشئة. نصمم بعقول واعية تدرك سيكولوجية السوق واحتياج المستهلك.
            </p>
          </div>

          {/* Links 1 */}
          <div className="md:col-span-3 space-y-4 text-right">
            <h4 className="font-sans font-bold text-xs text-indigo-400 tracking-wider">الوصول السريع</h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  الرئيسية (أعلى الصفحة)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  ماذا ستحصل عند الطلب؟
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  معرض أعمالنا البارزة
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  حجز موعد استشاري مجاني
                </button>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="md:col-span-4 space-y-4 text-right">
            <h4 className="font-sans font-bold text-xs text-indigo-400 tracking-wider">مبادئ الجودة</h4>
            <div className="space-y-3">
              <p className="font-sans text-xs text-slate-400 font-medium leading-relaxed">
                جميع حقوق الفنون والخطوط المسلمة تؤول بالكامل لملكية العميل القانونية ولا تستخدم لأي نشاط تجاري آخر، ويتم حمايتها بموجب مستندات سرية المعلومات.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-300 font-bold">SAUDI ARABIA</span>
                <span className="text-[10px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-md text-slate-300 font-bold">EST. 2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-slate-500 font-semibold">
            © {new Date().getFullYear()} تخطيطي لتصميم الهويات التجارية - جميع الحقوق محفوظة لدى أصحاب المصالح الشريكة.
          </p>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full bg-white/5 hover:bg-indigo-600 hover:text-white border border-white/10 transition-colors shadow-sm cursor-pointer"
            title="الرجوع للأعلى"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
