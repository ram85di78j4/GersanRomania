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
    description: 'Proiectare și execuție de sisteme de iluminat arhitectural pentru spații comerciale, retail și birouri. Integrăm tehnologie LED avansată cu control inteligent pentru ambiențe care valorifică identitatea brandului și optimizează eficiența energetică.',
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
    description: 'Sisteme profesionale de iluminat pentru fabrici, depozite și hale industriale. Implementăm soluții LED de înaltă performanță cu management inteligent, durabilitate excepțională și reduceri semnificative ale costurilor operaționale.',
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
    description: 'Soluții integrate de iluminat și automatizare pentru locuințe premium. Proiectăm sisteme personalizate care combină estetica cu funcționalitatea, de la apartamente moderne la vile de lux, cu control inteligent complet.',
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
    description: 'Sisteme avansate de iluminat arhitectural cu benzi LED adresabile și control dinamic al culorii. Implementăm soluții pentru iluminat decorativ, ambiental și scenic, integrate cu platforme de automatizare profesionale.',
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
    description: 'Proiectare și implementare de infrastructură completă pentru încărcarea vehiculelor electrice. De la soluții rezidențiale la stații comerciale și flote corporate, cu management inteligent și monitorizare în timp real.',
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
    description: 'Platforme integrate de automatizare pentru control complet al iluminatului, climatizării și consumului energetic. Implementăm sisteme profesionale DMX, DALI și KNX cu programare avansată și optimizare automată.',
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
    description: 'Soluții complete smart home cu integrare totală a iluminatului, climatizării, securității și multimedia. Proiectăm ecosisteme inteligente cu control centralizat, scenarii personalizate și compatibilitate cu platformele majore de automatizare.',
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
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">Soluții Premium</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Servicii <GlowText color="cyan">Premium</GlowText>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Proiectare, integrare și implementare de sisteme complete pentru iluminat arhitectural, automatizare inteligentă,
            case smart și infrastructură de încărcare vehicule electrice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
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
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-1">
                500+
              </div>
              <div className="text-sm text-white/60">Proiecte Finalizate</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                98%
              </div>
              <div className="text-sm text-white/60">Clienți Mulțumiți</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-green-500 bg-clip-text text-transparent mb-1">
                24/7
              </div>
              <div className="text-sm text-white/60">Suport Tehnic</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
