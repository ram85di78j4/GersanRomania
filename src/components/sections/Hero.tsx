'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import GlowText from '@/components/ui/GlowText';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, 60]);

  const lightSpread = useTransform(scrollYProgress, [0, 0.6], [1, 1.35]);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.55]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
    >
      {/* ── Architectural Spot Lighting ── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: lightOpacity }}
      >
        {/* Left spot — warm white angled cone from upper-left edge */}
        <motion.div
          className="hero-breathe absolute"
          style={{
            top: '5%',
            left: '-12%',
            width: '75vw',
            height: '85vh',
            background:
              'conic-gradient(from 15deg at 0% 20%, rgba(255,245,225,0.28) 0deg, rgba(255,240,210,0.14) 22deg, transparent 38deg)',
            filter: 'blur(55px)',
            transformOrigin: '0% 20%',
            scale: lightSpread,
          }}
        />
        {/* Left spot — secondary diffuse fill */}
        <motion.div
          className="hero-breathe-slow absolute left-0 top-[20%]"
          style={{
            width: '50vw',
            height: '60vh',
            background:
              'radial-gradient(ellipse at 0% 50%, rgba(255,248,230,0.13) 0%, rgba(255,244,220,0.06) 45%, transparent 75%)',
            filter: 'blur(80px)',
            scale: lightSpread,
            transformOrigin: '0% 50%',
          }}
        />

        {/* Right spot — warm white angled cone from upper-right edge */}
        <motion.div
          className="hero-breathe absolute"
          style={{
            top: '5%',
            right: '-12%',
            width: '75vw',
            height: '85vh',
            background:
              'conic-gradient(from -35deg at 100% 20%, transparent 0deg, rgba(255,240,210,0.14) 16deg, rgba(255,245,225,0.28) 38deg, transparent 54deg)',
            filter: 'blur(55px)',
            transformOrigin: '100% 20%',
            scale: lightSpread,
          }}
        />
        {/* Right spot — secondary diffuse fill */}
        <motion.div
          className="hero-breathe-slow absolute right-0 top-[20%]"
          style={{
            width: '50vw',
            height: '60vh',
            background:
              'radial-gradient(ellipse at 100% 50%, rgba(255,248,230,0.13) 0%, rgba(255,244,220,0.06) 45%, transparent 75%)',
            filter: 'blur(80px)',
            scale: lightSpread,
            transformOrigin: '100% 50%',
          }}
        />

        {/* Center ambient — barely-there fill so text area isn't pitch black */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]"
          style={{
            width: '60vw',
            height: '50vh',
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255,248,230,0.045) 0%, rgba(255,248,230,0.02) 55%, transparent 80%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Hairline floor glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '80vw',
            height: '18vh',
            background:
              'linear-gradient(to top, rgba(255,245,220,0.05) 0%, transparent 100%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center pt-24 sm:pt-0">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-5 py-2.5 backdrop-blur-sm bg-white/[0.03]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" fill="currentColor" />
              <span className="text-xs font-semibold text-white/70 tracking-widest uppercase">
                Gersan Romania
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-xs text-white/45 tracking-wide">
                Soluții Integrate LED &amp; EV
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.18, ease: 'easeOut' }}
            className="text-[2.6rem] sm:text-5xl md:text-[3.6rem] lg:text-[4.2rem] font-black mb-6 sm:mb-7 leading-[1.08] tracking-tight"
          >
            <span className="block text-white/95 mb-2">
              Iluminat Inteligent
            </span>
            <span className="block">
              <span className="text-white/70">și </span>
              <GlowText color="cyan" className="inline-block">Automatizare</GlowText>
              <span className="text-white/70"> Premium</span>
            </span>
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.38, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-white/55 mb-4 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Proiectăm și implementăm soluții complete de iluminat LED, automatizare
            inteligentă și infrastructură de încărcare electrică pentru proiecte
            comerciale, industriale și rezidențiale.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="text-xs sm:text-sm text-cyan-400/70 mb-20 sm:mb-24 tracking-wide font-normal"
          >
            Execuție profesională — de la concept la punere în funcțiune
          </motion.p>

        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[11px] uppercase tracking-widest text-white/30 font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-white/25" />
        </motion.div>
      </motion.div>

    </section>
  );
}
