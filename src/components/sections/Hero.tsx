'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Play, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useRef } from 'react';
import Button from '@/components/ui/Button';
import GlowText from '@/components/ui/GlowText';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const EnhancedScene = dynamic(() => import('@/components/3d/EnhancedScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
});

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <AnimatedBackground />
      
      <div className="absolute inset-0 opacity-30 sm:opacity-40">
        <EnhancedScene />
      </div>

      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-5 sm:mb-6 md:mb-8 leading-[1.05] sm:leading-[1.1] tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-white mb-2 sm:mb-3"
            >
              Iluminat LED
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block"
            >
              <GlowText color="cyan" className="inline-block">Premium</GlowText>
              <span className="text-white/90"> pentru </span>
              <GlowText color="purple" className="inline-block">Viitor</GlowText>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-7 sm:mb-9 md:mb-11 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Proiectăm și implementăm sisteme integrate de iluminat LED, automatizare inteligentă și infrastructură de încărcare EV. Soluții complete de la concept la execuție.
            <span className="block mt-4 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-cyan-400/90 font-normal">Design premium • Control inteligent • Eficiență maximă</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-5 mb-10 sm:mb-14 md:mb-18 max-w-md sm:max-w-none mx-auto px-6 sm:px-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button variant="primary" size="lg" glow className="group w-full sm:w-auto min-w-[200px] shadow-xl shadow-cyan-500/20">
                <span className="relative z-10 font-bold">Începe Proiectul</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Button variant="secondary" size="lg" className="group w-full sm:w-auto min-w-[200px] shadow-lg">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
                <span className="font-semibold">Vezi Demo</span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto px-6 sm:px-4 md:px-0"
          >
            {[
              { value: '500+', label: 'Proiecte Finalizate', color: 'cyan' },
              { value: '98%', label: 'Clienți Mulțumiți', color: 'purple' },
              { value: '24/7', label: 'Suport Expert', color: 'pink' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 group-hover:border-white/20 transition-all shadow-lg">
                  <motion.div 
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-3 bg-gradient-to-r ${
                      stat.color === 'cyan' ? 'from-cyan-400 to-cyan-600' :
                      stat.color === 'purple' ? 'from-purple-400 to-purple-600' :
                      'from-pink-400 to-pink-600'
                    } bg-clip-text text-transparent`}
                    animate={{
                      backgroundPosition: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/70 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
