import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Menu, X, ArrowLeft } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
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

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
            id="header-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-900 to-indigo-600 flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-sans font-black text-lg text-slate-800 tracking-tight block">
                تَـخْـطِـيـطِـي<span className="text-indigo-600">.</span>
              </span>
              <span className="font-sans text-[10px] text-slate-500 tracking-wider block -mt-1 font-semibold">
                لصناعة الهوية البصرية
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-sans font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="font-sans font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              ماذا ستحصل؟
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="font-sans font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              أعمالنا البارزة
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-sans font-semibold text-sm text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
            >
              ابدأ مشروعك
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block" id="header-cta-wrapper">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="font-sans font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full shadow-lg shadow-indigo-100 transition-colors duration-300 flex items-center gap-2 cursor-pointer"
              id="header-cta-btn"
            >
              <span>اطلب تصميمك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden" id="mobile-menu-toggle-wrapper">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-800 focus:outline-none cursor-pointer"
              aria-label="قائمة التنقل"
              id="mobile-menu-toggle-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            id="mobile-drawer"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-right font-sans font-medium text-sm text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-right font-sans font-medium text-sm text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                ماذا ستحصل؟
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-right font-sans font-medium text-sm text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                id="mobile-link-portfolio"
              >
                أعمالنا البارزة
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-right font-sans font-medium text-sm text-slate-700 py-2 px-3 rounded-lg hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                ابدأ مشروعك
              </button>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full font-sans font-bold text-center text-xs text-white bg-indigo-600 py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>اطلب تصميمك الآن</span>
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
