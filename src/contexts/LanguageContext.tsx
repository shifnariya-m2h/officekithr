import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';
type Region = 'india' | 'uae';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  region: Region;
  setRegion: (reg: Region) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation keys for UAE landing page
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact Us',
    'nav.getStarted': 'Get Started',
    // Hero
    'hero.title': 'AI Powered HR Built for the UAE',
    'hero.subtitle': 'Your journey matters. Our tailored software streamlines operations, supports your team, and fuels growth. Together, let\'s build a brighter tomorrow.',
    'hero.cta.demo': 'Schedule Demo',
    'hero.cta.watch': 'Watch Overview',
    'hero.badge': 'Future of UAE HR',
    // Features
    'features.title': 'OfficeKit HR: The Complete Suite',
    'features.subtitle': 'From hiring to retiring, we cover every aspect of the employee lifecycle with precision and ease.',
    // Footer
    'footer.company': 'Company',
    'footer.features': 'Features',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact',
    'footer.global': 'Global',
    'footer.india': 'India',
    'footer.uae': 'UAE',
  },
  ar: {
    // Navigation
    'nav.features': 'الميزات',
    'nav.resources': 'الموارد',
    'nav.about': 'من نحن',
    'nav.pricing': 'الأسعار',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',
    // Hero
    'hero.title': 'نظام موارد بشرية مدعوم بالذكاء الاصطناعي مصمم للإمارات',
    'hero.subtitle': 'رحلتك مهمة. برنامجنا المخصص يبسط العمليات ويدعم فريقك ويحفز النمو. معاً، لنبني غداً أفضل.',
    'hero.cta.demo': 'حجز عرض توضيحي',
    'hero.cta.watch': 'شاهد نظرة عامة',
    'hero.badge': 'مستقبل الموارد البشرية في الإمارات',
    // Features
    'features.title': 'OfficeKit HR: الحل الكامل',
    'features.subtitle': 'من التوظيف إلى التقاعد، نغطي كل جانب من جوانب دورة حياة الموظف بدقة وسهولة.',
    // Footer
    'footer.company': 'الشركة',
    'footer.features': 'الميزات',
    'footer.resources': 'الموارد',
    'footer.contact': 'اتصل',
    'footer.global': 'عالمي',
    'footer.india': 'الهند',
    'footer.uae': 'الإمارات',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
  defaultLanguage?: Language;
  defaultRegion?: Region;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  defaultLanguage = 'en',
  defaultRegion = 'india',
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [region, setRegion] = useState<Region>(defaultRegion);

  // Detect region from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/ae') || path.startsWith('/uae')) {
      setRegion('uae');
    } else {
      setRegion('india');
    }
  }, []);

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  const value: LanguageContextType = {
    language,
    setLanguage,
    region,
    setRegion,
    t,
    isRTL,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};




