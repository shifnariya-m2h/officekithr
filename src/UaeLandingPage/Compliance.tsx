
import React from 'react';
import { Landmark, FileSignature, Building2, Server } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Compliance: React.FC = () => {
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

  return (
    <section id="compliance" className="py-20 bg-brand-50 border-y border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900">Legal Assurance & Compliance</h2>
          <p className="mt-4 text-slate-600">Peace of mind built directly into the system code.</p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
               <Landmark className="text-brand-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Federal Decree-Law No. 33</h3>
            <p className="text-sm text-slate-600">Built-in UAE labour law rules updated according to the 2021 decree and subsequent amendments.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
              <FileSignature className="text-brand-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">WPS Certified</h3>
            <p className="text-sm text-slate-600">Support for Wages Protection System with generated SIF files for all major UAE banks.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
              <Building2 className="text-brand-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">DIFC & Free Zones</h3>
            <p className="text-sm text-slate-600">Separate rule engines for DIFC, ADGM, and various Free Zone authorities.</p>
          </motion.div>

          <motion.div variants={item} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
              <Server className="text-brand-600" size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Local Hosting</h3>
            <p className="text-sm text-slate-600">Data hosted locally in the UAE/GCC to ensure data sovereignty and low latency.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Compliance;