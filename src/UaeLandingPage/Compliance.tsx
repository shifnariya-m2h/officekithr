import React from 'react';
import { Landmark, FileSignature, Building2, Server } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Compliance: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as any, stiffness: 50 } }
  };

  const complianceItems = language === 'ar' ? [
    {
      title: 'المرسوم الاتحادي رقم 33',
      description: 'قواعد قانون العمل الإماراتي المدمجة المحدثة وفقاً للمرسوم الصادر عام 2021 والتعديلات اللاحقة.',
      icon: Landmark,
    },
    {
      title: 'معتمد WPS',
      description: 'دعم نظام حماية الأجور مع ملفات SIF المولدة لجميع البنوك الإماراتية الكبرى.',
      icon: FileSignature,
    },
    {
      title: 'DIFC والمناطق الحرة',
      description: 'محركات قواعد منفصلة لـ DIFC و ADGM وسلطات المناطق الحرة المختلفة.',
      icon: Building2,
    },
    {
      title: 'الاستضافة المحلية',
      description: 'البيانات المستضافة محلياً في الإمارات/دول مجلس التعاون الخليجي لضمان سيادة البيانات وزمن انتقال منخفض.',
      icon: Server,
    },
  ] : [
    {
      title: 'Federal Decree-Law No. 33',
      description: 'Built-in UAE labour law rules updated according to the 2021 decree and subsequent amendments.',
      icon: Landmark,
    },
    {
      title: 'WPS Certified',
      description: 'Support for Wages Protection System with generated SIF files for all major UAE banks.',
      icon: FileSignature,
    },
    {
      title: 'DIFC & Free Zones',
      description: 'Separate rule engines for DIFC, ADGM, and various Free Zone authorities.',
      icon: Building2,
    },
    {
      title: 'Local Hosting',
      description: 'Data hosted locally in the UAE/GCC to ensure data sovereignty and low latency.',
      icon: Server,
    },
  ];

  return (
    <section id="compliance" className="py-20 bg-brand-50 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center mb-12 ${isRTL ? 'font-arabic' : ''}`}
        >
          <h2 className="text-3xl font-bold text-slate-900">
            {language === 'ar' ? 'الضمان القانوني والامتثال' : 'Legal Assurance & Compliance'}
          </h2>
          <p className="mt-4 text-slate-600">
            {language === 'ar' ? 'راحة البال مدمجة مباشرة في كود النظام.' : 'Peace of mind built directly into the system code.'}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {complianceItems.map((item, index) => (
            <motion.div 
              key={index}
              variants={item} 
              className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group ${isRTL ? 'text-right' : ''}`}
            >
              <div className={`w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors ${isRTL ? 'ml-auto' : ''}`}>
                <item.icon className="text-brand-600" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;
