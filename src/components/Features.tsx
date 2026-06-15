import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { featuresList } from '../data';

// Helper to resolve string font icons dynamically
function FeatureIcon({ name, className }: { name: string; className?: string }) {
  if (name === 'Sparkles') return <Icons.Sparkles className={className} />;
  if (name === 'Palette') return <Icons.Palette className={className} />;
  if (name === 'BookOpen') return <Icons.BookOpen className={className} />;
  if (name === 'FileCheck') return <Icons.FileCheck className={className} />;
  return <Icons.HelpCircle className={className} />;
}

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="features"
      className="py-24 bg-slate-50 relative overflow-hidden"
    >
      {/* Visual Accent */}
      <div className="absolute top-[30%] left-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="inline-block px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-sans font-bold"
          >
            عطاء القيمة والتميز الفني
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-800 tracking-tight"
            id="features-title"
          >
            ماذا ستحصل عند طلب الخدمة؟
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            نعمل بخطوات هندسية مدروسة نضمن من خلالها تسليم أصول بصرية استثنائية متكاملة تتوافق مع هوية وشخصية مشروعك وعملائك.
          </motion.p>
        </div>

        {/* Features Sub Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          id="features-cards-grid"
        >
          {featuresList.map((feature, idx) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 25px -5px rgb(79 70 229 / 0.05), 0 8px 10px -6px rgb(79 70 229 / 0.05)"
              }}
              className="relative bg-white p-8 rounded-[28px] border border-slate-100 shadow-sm transition-all duration-300 text-right group flex flex-col justify-between"
              id={`feature-card-${idx}`}
            >
              <div>
                
                {/* Accent line */}
                <div className="absolute top-0 right-8 w-12 h-1 bg-gradient-to-l from-indigo-600 to-indigo-300 rounded-b-md transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-300"></div>

                {/* Card Number */}
                <span className="absolute top-6 left-6 font-mono text-xs text-slate-100 group-hover:text-indigo-600/20 font-black transition-all duration-300">
                  0{idx + 1}
                </span>

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-6 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 duration-300">
                  <FeatureIcon name={feature.iconName} className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="font-sans font-extrabold text-lg text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-350">
                  {feature.title}
                </h3>

                {/* Content */}
                <p className="font-sans text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>

              </div>

              {/* Read more hint link / CTA path */}
              <div className="pt-6 mt-4 border-t border-slate-50 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-indigo-600 transition-colors duration-300">
                <span>جاهز للاستخدام الفوري</span>
                <span className="inline-block transform translate-x-0 group-hover:-translate-x-1 transition-transform">←</span>
              </div>

            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
