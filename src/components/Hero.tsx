import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, ShieldCheck, Clock, Award, Star } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 bg-slate-50 overflow-hidden flex items-center"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-28"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Info - Right Column in RTL */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 select-none text-right"
            id="hero-text-content"
          >
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>هوية تترك انطباعاً أول يدوم للأبد</span>
            </motion.div>

            {/* Core Titles */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl text-slate-800 leading-tight tracking-tight"
                id="hero-title"
              >
                هوية بصرية{' '}
                <span className="text-indigo-600 italic relative inline-block">
                  احترافية
                  <span className="absolute bottom-1 left-0 right-0 h-1 bg-indigo-100 rounded-full"></span>
                </span>{' '}
                تجعل علامتك التجارية أكثر قوة وتميزًا
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="font-sans text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl font-medium"
                id="hero-desc"
              >
                  نساعد أصحاب المشاريع والشركات الناشئة على بناء هوية بصرية متكاملة تعكس احترافية العلامة التجارية وتزيد ثقة العملاء.
              </motion.p>
            </div>

            {/* Micro Rating Panel */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-xs font-bold py-1 border-r-2 border-indigo-600 pr-4"
              id="hero-trust-stars"
            >
              <div className="flex gap-0.5 text-indigo-600">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-slate-700 font-sans">
                قيمنا بـ 4.9/5 من قبل أكثر من 120+ رائد أعمال وصاحب مشروع محلي وعربي
              </span>
            </motion.div>

            {/* Button Layout */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className="font-sans font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-700 px-8 py-4.5 rounded-2xl shadow-lg shadow-indigo-100 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                id="hero-cta-btn-main"
              >
                <span>اطلب تصميمك الآن</span>
                <ArrowLeft className="w-5 h-5 animate-pulse" />
              </motion.button>

              <button
                onClick={() => {
                  const element = document.getElementById('portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="font-sans font-bold text-sm text-slate-700 hover:text-indigo-600 px-6 py-4 rounded-2xl border border-slate-200 hover:border-indigo-200 bg-white shadow-sm transition-all text-center cursor-pointer"
                id="hero-secondary-btn"
              >
                رؤية معرض الأعمال
              </button>
            </motion.div>

            {/* Value Checkpoints */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 max-w-xl"
              id="hero-trust-badges"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span className="font-sans text-xs text-slate-600 font-bold">جودة مضمونة 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="font-sans text-xs text-slate-600 font-bold">تسليم جدول دقيق</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                <span className="font-sans text-xs text-slate-600 font-bold">ملفات مصدرية مفتوحة</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Business Card & Previous Work Showcase - Left Column in RTL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 relative"
            id="hero-visual-showcase"
          >
            {/* Background design accents */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-indigo-200 pointer-events-none opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-indigo-200 pointer-events-none opacity-60"></div>

            <div className="relative bg-white p-5 rounded-[32px] shadow-xl border border-slate-100 overflow-hidden transform duration-500 hover:scale-[1.01]">
              
              {/* Premium Business Card Mockup (Primary Visual Element) */}
              <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-slate-50 flex items-center justify-center border border-slate-100">
                <img
                  src="/src/assets/images/brand_mockup_one_1781565585752.jpg"
                  alt="نموذج بطاقة أعمال الهوية البصرية"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  id="primary-hero-mockup-img"
                />
                
                {/* Floating Micro Badge */}
                <span className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-sans tracking-wide font-medium shadow-md">
                  تصميم تجريبي أصلي
                </span>

                {/* Overlaid Label */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-4 text-right transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-sans text-white font-bold text-xs mb-0.5">تصميم هوية فاخرة</p>
                  <p className="font-sans text-indigo-300 text-[10px] font-semibold">ورق فاخر محفور بجيلدن غولد</p>
                </div>
              </div>

              {/* Grid of secondary visual samples */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="relative group overflow-hidden rounded-xl aspect-square bg-slate-50 border border-slate-100 flex items-center justify-center">
                  <img
                    src="/src/assets/images/brand_guidelines_mockup_1781565601084.jpg"
                    alt="نموذج دليل الهوية والمطبوعات"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500"
                    id="secondary-hero-guideline-img"
                  />
                  <div className="absolute inset-0 bg-indigo-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] font-sans font-bold">
                    مرشد الشعارات
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-xl aspect-square bg-gradient-to-tr from-slate-900 to-indigo-600 p-4 flex flex-col justify-between text-right">
                  <div className="text-indigo-400 font-sans font-black text-2xl">A+</div>
                  <div>
                    <p className="font-sans text-white text-xs font-bold leading-tight">معايير دقيقة</p>
                    <p className="font-sans text-slate-300 text-[10px] mt-0.5 font-medium">مخرجات هندسية متكاملة</p>
                  </div>
                </div>
              </div>

            </div>

            {/* floating feedback popup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -right-6 top-1/2 p-3 bg-white rounded-2xl shadow-xl border border-indigo-100 flex items-center gap-3 max-w-[200px]"
              id="hero-floating-satisfaction"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shadow-inner">
                ★
              </div>
              <div className="text-right">
                <p className="font-sans text-slate-800 font-bold text-xs">رضا العملاء</p>
                <p className="font-sans text-indigo-600 text-[10px] font-black">99.7% نجاح مستدام</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
