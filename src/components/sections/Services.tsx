'use client';

import { motion } from 'framer-motion';
import { Building2, Factory, Home, Lightbulb, Zap, Cpu, Smartphone, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    icon: Building2,
    title: 'Iluminat Comercial',
    description: 'Sisteme LED arhitecturale pentru retail, birouri și spații comerciale. Design personalizat care reflectă identitatea brandului cu economii energetice de până la 80%.',
    glowColor: 'cyan' as const,
    features: [
      'Sisteme LED eficiente energetic',
      'Control inteligent al luminii',
      'Design personalizat pentru brand',
    ],
  },
  {
    icon: Factory,
    title: 'Iluminat Industrial',
    description: 'LED high-bay pentru fabrici, depozite și hale industriale. Rezistență la condiții extreme, durată de viață 50.000h+ și reducere costuri operaționale cu 70%.',
    glowColor: 'purple' as const,
    features: [
      'LED high-bay pentru înălțimi mari',
      'Rezistență la condiții extreme',
      'Reducere costuri operaționale 70%',
    ],
  },
  {
    icon: Home,
    title: 'Iluminat Rezidențial',
    description: 'Sisteme LED personalizate pentru apartamente și vile premium. Integrare smart home completă, scenarii personalizate și control vocal.',
    glowColor: 'pink' as const,
    features: [
      'Iluminat adaptat stilului de viață',
      'Integrare cu sisteme smart home',
      'Economii substanțiale la energie',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Benzi LED și Sisteme RGB',
    description: 'Benzi LED adresabile RGB/RGBW pentru iluminat arhitectural și decorativ. Control dinamic, sincronizare cu muzică și efecte personalizate.',
    glowColor: 'cyan' as const,
    features: [
      'RGB și RGBW adresabile individual',
      'Sincronizare cu muzică și evenimente',
      'Instalare profesională garantată',
    ],
  },
  {
    icon: Zap,
    title: 'Stații de Încărcare EV',
    description: 'Infrastructură EV de la 7kW rezidențial la 350kW ultra-rapid comercial. Management inteligent, monitorizare real-time și plăți integrate.',
    glowColor: 'green' as const,
    features: [
      'Încărcare rapidă până la 350kW',
      'Monitorizare și plăți inteligente',
      'Integrare cu energie solară',
    ],
  },
  {
    icon: Cpu,
    title: 'Automatizări Inteligente',
    description: 'Control centralizat DMX, DALI și KNX pentru iluminat și climatizare. Scenarii programabile, optimizare automată și integrare IoT.',
    glowColor: 'purple' as const,
    features: [
      'Control centralizat DMX/DALI',
      'Scenarii și programare automată',
      'Integrare IoT și cloud',
    ],
  },
  {
    icon: Smartphone,
    title: 'Case Inteligente',
    description: 'Ecosisteme smart home complete: iluminat, climatizare, securitate și multimedia. Control vocal, scenarii circadiene și compatibilitate Alexa, Google, Apple HomeKit.',
    glowColor: 'pink' as const,
    features: [
      'Control vocal și prin aplicație',
      'Ritm circadian și scenarii',
      'Integrare completă smart home',
    ],
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-black via-cyan-950/5 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 12,
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
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-cyan-400 font-semibold">Soluții Premium</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            Servicii <GlowText color="cyan">Premium</GlowText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Soluții integrate de iluminat arhitectural, automatizare inteligentă și infrastructură EV.
            Proiectare profesională, execuție impecabilă, suport dedicat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 md:space-x-8 px-4 sm:px-6 md:px-8 py-4 sm:py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl mx-4 sm:mx-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                500+
              </div>
              <div className="text-xs sm:text-sm text-white/60">Proiecte Finalizate</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                98%
              </div>
              <div className="text-xs sm:text-sm text-white/60">Clienți Mulțumiți</div>
            </div>
            <div className="w-full sm:w-px h-px sm:h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-green-500 bg-clip-text text-transparent mb-1">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-white/60">Suport Tehnic</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
