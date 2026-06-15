import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioList } from '../data';
import { Globe, ArrowLeft, ExternalLink, ZoomIn } from 'lucide-react';

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-sans font-bold">
            روائع من معرض أعمالنا البصمية
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-800">
            علامات بصرية ألهمت الملايين
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            تصفح نماذج حية من هويات وشعارات قمنا بتطويرها لشركات ومؤسسات رائدة في مختلف القطاعات التجارية واللوجستية.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="portfolio-cards-grid">
          {portfolioList.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`portfolio-container-${item.id}`}
              onClick={() => setActiveItem(item.id)}
              className="group cursor-pointer bg-white rounded-[28px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col"
              id={`portfolio-item-${item.id}`}
            >
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-50">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Visual Glassmorphic Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-right">
                  <div className="flex items-center justify-between text-white">
                    <span className="font-sans text-xs bg-indigo-600/80 backdrop-blur-sm px-3 py-1 rounded-full font-bold border border-indigo-500/35">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Direct category badge (always visible) */}
                <div className="absolute top-4 right-4 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full shadow-sm">
                  <span className="font-sans text-[10px] text-indigo-700 font-bold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Portfolio Text Body */}
              <div className="p-6 text-right space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.accentColor }} />
                    <span className="font-mono text-[10px] text-slate-400 font-bold tracking-wider">Accent {item.accentColor}</span>
                  </div>
                  <span className="font-sans text-xs font-bold text-indigo-600 group-hover:text-indigo-705 transition-colors flex items-center gap-1">
                    <span>تفاصيل ودراسة الحالة</span>
                    <span>←</span>
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal for Zoomed Study */}
        <AnimatePresence>
          {activeItem && (() => {
            const item = portfolioList.find((p) => p.id === activeItem);
            if (!item) return null;
            return (
               <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setActiveItem(null)}
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                  layoutId={`portfolio-container-${item.id}`}
                  className="bg-white rounded-[32px] overflow-hidden shadow-2xl max-w-3xl w-full relative z-10 max-h-[90vh] flex flex-col border border-slate-100"
                >
                  <div className="overflow-y-auto">
                    <div className="aspect-[16/10] relative bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => setActiveItem(null)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-slate-800 font-bold p-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="p-8 text-right space-y-6">
                      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-100 pb-4">
                        <div>
                          <span className="text-xs text-indigo-600 font-bold tracking-wide font-sans block mb-1">
                            {item.category}
                          </span>
                          <h3 className="font-sans font-extrabold text-2xl text-slate-800">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-2xl border border-indigo-100">
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.accentColor }} />
                          <span className="font-sans text-xs text-indigo-700 font-bold">كل الألوان معتمدة</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-sans font-bold text-sm text-slate-800">تفاصيل النهج الإبداعي:</h4>
                        <p className="font-sans text-sm text-slate-500 leading-relaxed font-semibold">
                          تم بناء هذا التصميم بعد دراسات معمقة لنشاط العميل ودراسة وتحليل المنافسين في السوق العربي والعالمي. تم التركيز على بساطة الخطوط الهندسية، واختيار تباين مريح للعين يدعم القابلية العالية للتوسع والاستخدام على الهواتف والمطبوعات الإعلانية ومبنى الشركة.
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                        <button
                          onClick={() => setActiveItem(null)}
                          className="font-sans font-bold text-xs text-slate-500 hover:text-slate-800 transition-colors"
                        >
                          إغلاق النافذة
                        </button>
                        <button
                          onClick={() => {
                            setActiveItem(null);
                            const el = document.getElementById('contact');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="font-sans font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2 shadow-lg shadow-indigo-600/25"
                        >
                          <span>احصل على هوية مماثلة لمشروعك</span>
                          <ArrowLeft className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}
