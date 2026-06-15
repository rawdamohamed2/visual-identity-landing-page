import { FeatureItem, PortfolioItem } from './types';

export const featuresList: FeatureItem[] = [
  {
    id: 'feat-logo',
    title: 'تصميم شعار احترافي فريد',
    description: 'شعار مبتكر يعبر عن قيم مشروعك ويسهل تذكره، يُصمم خصيصاً من الصفر ليمثل بصمتك المميزة ويعمر لسنوات.',
    iconName: 'Sparkles',
  },
  {
    id: 'feat-identity',
    title: 'نظام ألوان وخطوط متكامل',
    description: 'تحديد لوحة الألوان السيكولوجية والخطوط الأنيقة التي تخلق انطباعاً بصرياً موحداً واحترافياً يعزز جاذبية العلامة.',
    iconName: 'Palette',
  },
  {
    id: 'feat-guidelines',
    title: 'كتيب دليل الهوية البصرية',
    description: 'دليل شامل يوضح كيفية استخدام الشعار والمقاسات والممنوعات لضمان الحفاظ على اتساق المظهر البصري لشركتك.',
    iconName: 'BookOpen',
  },
  {
    id: 'feat-files',
    title: 'ملفات جاهزة للطباعة والديجيتال',
    description: 'تسليم جميع الملفات المصدرية المفتوحة بمختلف الصيغ (AI, PDF, SVG, PNG) عالية الدقة لتناسب كافة استخداماتك بسلاسة.',
    iconName: 'FileCheck',
  },
];

export const portfolioList: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'الهوية البصرية لشركة "نمو" التقنية',
    category: 'هوية رقمية متكاملة',
    image: '/src/assets/images/brand_mockup_one_1781565585752.jpg',
    accentColor: '#BCA374',
    description: 'هوية عصرية تعكس الابتكار والنمو بشعار هندسي أنيق يجمع بين الحرفية التقنية واللمسة الفاخرة.',
  },
  {
    id: 'port-2',
    title: 'كتيب معايير شركة "روافد" العقارية',
    category: 'دليل استخدام الهوية',
    image: '/src/assets/images/brand_guidelines_mockup_1781565601084.jpg',
    accentColor: '#1A365D',
    description: 'تصميم كتيب إرشادات شامل يغطي سلوك الهوية والألوان والمطبوعات المؤسساتية لضمان الهيبة البصرية بجميع المحافل.',
  },
  {
    id: 'port-3',
    title: 'هوية مقهى "إكسير" الهادئ',
    category: 'تغليف وتجربة بصرية',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=800',
    accentColor: '#8C6239',
    description: 'إعادة صياغة الهوية البصرية لعلامة تجارية متخصصة في القهوة المختصة، ترتكز على درجات دافئة وتصاميم تغليف مستدامة.',
  },
  {
    id: 'port-4',
    title: 'بصمة تطبيق "سهل" اللوجستي',
    category: 'شعار واجهات رقمية',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    accentColor: '#10B981',
    description: 'تصميم أيقونة تطبيق فريدة تمثل السرعة والمرونة مع تحديد دليل أسلوب مريح ومحفز لجمهور الهواتف الذكية.',
  },
];
