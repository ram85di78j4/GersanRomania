'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Palette, Cpu, Eye, Workflow, Home, Activity, Zap, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import TechnologyPanel from '@/components/ui/TechnologyPanel';

const technologies = [
  {
    icon: Lightbulb,
    title: 'LED Eficient Energetic',
    description: 'Tehnologie LED cu eficiență luminosă superioară. Economii până la 90% față de sistemele tradiționale și durată de viață 50.000h+.',
    specs: ['Până la 90% economie', 'Durată 50.000h+', 'CRI 90+'],
    glowColor: 'cyan' as const,
  },
  {
    icon: Palette,
    title: 'Sisteme RGB / RGBW / Ambient',
    description: 'Iluminat color cu 16M+ nuanțe și control individual. Efecte dinamice, sincronizare cu muzică și ambiențe personalizate.',
    specs: ['16M+ culori', 'Adresare individuală', 'Sincronizare muzică'],
    glowColor: 'purple' as const,
  },
  {
    icon: Cpu,
    title: 'Control Inteligent al Iluminatului',
    description: 'Control centralizat DMX512, DALI și wireless. Programare avansată, scenarii personalizate și management remote.',
    specs: ['DMX512', 'DALI', 'Wireless'],
    glowColor: 'pink' as const,
  },
  {
    icon: Eye,
    title: 'Senzori de Prezență și Lumină',
    description: 'Detecție inteligentă a prezenței și luminii naturale. Optimizare automată a consumului și reglaj adaptiv pentru confort maxim.',
    specs: ['PIR & Microwave', 'Daylight harvesting', 'Reglaj automat'],
    glowColor: 'green' as const,
  },
  {
    icon: Workflow,
    title: 'Scenarii de Automatizare',
    description: 'Programare scenarii bazate pe timp, evenimente sau condiții. Logică avansată și adaptare la comportamentul utilizatorilor.',
    specs: ['Programare temporală', 'Trigger evenimente', 'Logică avansată'],
    glowColor: 'cyan' as const,
  },
  {
    icon: Home,
    title: 'Integrare Smart Home',
    description: 'Compatibilitate cu Amazon Alexa, Google Home și Apple HomeKit. Control vocal și automatizări cross-platform.',
    specs: ['Alexa', 'Google Home', 'Apple HomeKit'],
    glowColor: 'purple' as const,
  },
  {
    icon: Activity,
    title: 'Monitorizare și Control',
    description: 'Platforme cloud pentru monitorizare real-time și raportare energetică. Dashboard intuitiv și control remote de oriunde.',
    specs: ['Dashboard real-time', 'Rapoarte energie', 'Control remote'],
    glowColor: 'pink' as const,
  },
  {
    icon: Zap,
    title: 'Management Stații EV',
    description: 'Management complet pentru stații de încărcare EV. Load balancing inteligent, plăți integrate și raportare pentru flote.',
    specs: ['Load balancing', 'Plăți integrate', 'API deschis'],
    glowColor: 'green' as const,
  },
];

export default function Technologies() {
  return (
    <Section id="technologies" className="bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-cyan-400 font-semibold">Tehnologie Avansată</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            Tehnologii <GlowText color="cyan">Premium</GlowText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Sisteme certificate pentru iluminat LED, automatizare și infrastructură EV.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          {technologies.map((tech, index) => (
            <TechnologyPanel key={index} technology={tech} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { value: '99.9%', label: 'Uptime Sisteme', color: 'cyan' },
            { value: '256-bit', label: 'Criptare', color: 'purple' },
            { value: 'ISO 27001', label: 'Certificat', color: 'pink' },
            { value: 'CE/RoHS', label: 'Conformitate', color: 'green' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
            >
              <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${
                stat.color === 'cyan' ? 'from-cyan-400 to-cyan-600' :
                stat.color === 'purple' ? 'from-purple-400 to-purple-600' :
                stat.color === 'pink' ? 'from-pink-400 to-pink-600' :
                'from-green-400 to-green-600'
              } bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
