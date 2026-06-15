import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div 
      className="min-h-screen bg-slate-50 text-right font-sans selection:bg-indigo-600/20 selection:text-indigo-900 antialiased scroll-smooth"
      dir="rtl"
      id="brand-identity-landing"
    >
      {/* Premium Navigation Header */}
      <Header />

      {/* Main Page Flow with motion fade effects */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section 1: Hero Segment (Branding Mockup & Portfolio) */}
        <Hero />

        {/* Section 2: Features Segment & Deliverables List (ماذا ستحصل الباقات) */}
        <Features />

        {/* Section 3: Visual Case Studies (المعرض التفاعلي الفاخر) */}
        <Portfolio />

        {/* Section 4: Lead Request & Consultation Console (ابدأ الاستشارة اليوم) */}
        <ContactForm />
      </motion.main>

      {/* Clean Legal & Reference Footer */}
      <Footer />
    </div>
  );
}
