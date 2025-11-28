import React from 'react';
import { ArrowRight, Calculator, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dotlottie-player': any;
    }
  }
}

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

        {/* Animated Gradient Orbs using Framer Motion */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-100/40 rounded-full blur-[120px] mix-blend-multiply"
        />
       
      
        
        

    
      </div>

    
    </section>
  );
};

export default Hero;