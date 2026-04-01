'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import GlowText from '@/components/ui/GlowText';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section 
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Premium Studio Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main key lights - left side */}
        <div 
          className="absolute top-[15%] left-0 w-[800px] h-[800px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.08) 50%, transparent 75%)',
            filter: 'blur(90px)',
            transform: 'translateX(-45%)',
          }}
        />
        <div 
          className="absolute top-[35%] left-0 w-[650px] h-[650px] rounded-full opacity-45"
          style={{
            background: 'radial-gradient(circle, rgba(255,248,240,0.45) 0%, rgba(255,248,240,0.22) 30%, rgba(255,248,240,0.08) 55%, transparent 75%)',
            filter: 'blur(85px)',
            transform: 'translateX(-38%)',
          }}
        />
        <div 
          className="absolute top-[60%] left-0 w-[600px] h-[600px] rounded-full opacity-38"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0.06) 60%, transparent 80%)',
            filter: 'blur(80px)',
            transform: 'translateX(-32%)',
          }}
        />
        
        {/* Main key lights - right side */}
        <div 
          className="absolute top-[20%] right-0 w-[800px] h-[800px] rounded-full opacity-50"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.25) 25%, rgba(255,255,255,0.08) 50%, transparent 75%)',
            filter: 'blur(90px)',
            transform: 'translateX(45%)',
          }}
        />
        <div 
          className="absolute top-[40%] right-0 w-[650px] h-[650px] rounded-full opacity-45"
          style={{
            background: 'radial-gradient(circle, rgba(255,248,240,0.45) 0%, rgba(255,248,240,0.22) 30%, rgba(255,248,240,0.08) 55%, transparent 75%)',
            filter: 'blur(85px)',
            transform: 'translateX(38%)',
          }}
        />
        <div 
          className="absolute top-[65%] right-0 w-[600px] h-[600px] rounded-full opacity-38"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0.06) 60%, transparent 80%)',
            filter: 'blur(80px)',
            transform: 'translateX(32%)',
          }}
        />
        
        {/* Light beams effect - diagonal from top corners */}
        <div 
          className="absolute -top-20 -left-20 w-[400px] h-[1200px] opacity-15"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'rotate(25deg)',
          }}
        />
        <div 
          className="absolute -top-20 -right-20 w-[400px] h-[1200px] opacity-15"
          style={{
            background: 'linear-gradient(225deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
            filter: 'blur(60px)',
            transform: 'rotate(-25deg)',
          }}
        />
        
        {/* Center fill light - soft ambient */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 40%, rgba(255,255,255,0.02) 70%, transparent 85%)',
            filter: 'blur(120px)',
          }}
        />
        
        {/* Rim light - subtle edge definition */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-12"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, transparent 80%)',
            filter: 'blur(70px)',
          }}
        />
        
        {/* Subtle floor reflection simulation */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[200px] opacity-8"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.08) 0%, transparent 100%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity, scale, y }}
        className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center pt-20 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div 
              className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 md:py-3.5 mb-5 sm:mb-6 md:mb-8 shadow-lg shadow-cyan-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(6, 182, 212, 0.5)" }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Zap className="w-4 h-4 text-cyan-400" fill="currentColor" />
              </motion.div>
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="text-xs sm:text-sm font-black text-white tracking-tight">GERSAN</span>
                <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ROMANIA</span>
                <span className="text-white/40 hidden xs:inline">•</span>
                <span className="text-[10px] sm:text-xs text-white/70 font-semibold hidden xs:inline">Soluții Integrate LED & EV</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-5 sm:mb-6 md:mb-8 leading-[1.05] sm:leading-[1.1] tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-white mb-2 sm:mb-3"
            >
              Iluminat Inteligent
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block"
            >
              <span className="text-white/90">și </span>
              <GlowText color="cyan" className="inline-block">Automatizare</GlowText>
              <span className="text-white/90"> Premium</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-16 sm:mb-20 md:mb-24 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Proiectăm și implementăm soluții complete de iluminat LED, automatizare inteligentă și infrastructură de încărcare electrică pentru proiecte comerciale, industriale și rezidențiale.
            <span className="block mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-cyan-400/90 font-normal">Execuție profesională de la concept la punere în funcțiune</span>
          </motion.p>

        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer group"
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-white/60 text-xs sm:text-sm mb-2 group-hover:text-cyan-400 transition-colors">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-cyan-400 transition-colors">
            <motion.div 
              className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <ChevronDown className="w-5 h-5 text-white/40 mt-2 group-hover:text-cyan-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
