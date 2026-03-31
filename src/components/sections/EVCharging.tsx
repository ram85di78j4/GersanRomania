'use client';

import { motion } from 'framer-motion';
import { Home, Building2, ParkingCircle, Truck, Wrench, Brain, Gauge, Sparkles, CheckCircle2 } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import EVSolutionCard from '@/components/ui/EVSolutionCard';

const solutions = [
  {
    icon: Home,
    title: 'Soluții Rezidențiale',
    subtitle: 'Locuințe',
    description: 'Stații de încărcare inteligente pentru locuințe unifamiliale și complexe rezidențiale. Instalare profesională, control prin aplicație și integrare completă cu sistemul energetic al casei.',
    features: [
      'Wallbox 7-22kW pentru garaj',
      'Control și programare prin aplicație',
      'Integrare cu panouri solare',
      'Monitorizare consum în timp real',
    ],
    specs: {
      power: '22kW',
      stations: '1-10',
      time: '4-8h',
    },
    glowColor: 'cyan' as const,
  },
  {
    icon: Building2,
    title: 'Soluții Corporate',
    subtitle: 'Companii',
    description: 'Infrastructură completă de încărcare pentru birouri și sedii de companii. Management centralizat, raportare detaliată și acces controlat pentru angajați și vizitatori.',
    features: [
      'Stații multiple cu load balancing',
      'Sistem de acces cu carduri RFID',
      'Raportare și facturare automată',
      'Integrare cu sisteme existente',
    ],
    specs: {
      power: '50kW',
      stations: '10-50',
      time: '1-3h',
    },
    glowColor: 'purple' as const,
  },
  {
    icon: ParkingCircle,
    title: 'Parcări Comerciale',
    subtitle: 'Retail & Hospitality',
    description: 'Hub-uri de încărcare pentru centre comerciale, hoteluri și spații publice. Încărcare rapidă, plăți integrate și experiență premium pentru clienți.',
    features: [
      'Încărcare ultra-rapidă DC 150-350kW',
      'Plăți contactless și aplicație',
      'Branding personalizat',
      'Monitorizare și mentenanță remotă',
    ],
    specs: {
      power: '350kW',
      stations: '20-100',
      time: '15-30m',
    },
    glowColor: 'pink' as const,
  },
  {
    icon: Truck,
    title: 'Managementul Flotelor',
    subtitle: 'Flote Comerciale',
    description: 'Soluții dedicate pentru flote de vehicule electrice. Optimizare încărcare, planificare inteligentă și raportare completă pentru eficiență maximă.',
    features: [
      'Planificare automată încărcare',
      'Optimizare costuri energetice',
      'Rapoarte detaliate flotă',
      'Integrare cu software fleet management',
    ],
    specs: {
      power: '150kW',
      stations: '50+',
      time: '30-60m',
    },
    glowColor: 'green' as const,
  },
];

const benefits = [
  {
    icon: Wrench,
    title: 'Instalare Profesională',
    description: 'Echipă certificată pentru instalare completă și punere în funcțiune',
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'Management Inteligent',
    description: 'Platformă cloud pentru control, monitorizare și optimizare automată',
    color: 'purple',
  },
  {
    icon: Gauge,
    title: 'Eficiență Maximă',
    description: 'Load balancing și programare pentru costuri energetice minime',
    color: 'pink',
  },
  {
    icon: Sparkles,
    title: 'Integrare Modernă',
    description: 'Compatibilitate cu toate vehiculele electrice și sisteme smart',
    color: 'green',
  },
];

export default function EVCharging() {
  return (
    <Section id="ev-charging" className="bg-gradient-to-b from-black via-green-950/5 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -30, 0],
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-semibold">Infrastructură EV</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Soluții <GlowText color="green">Încărcare EV</GlowText>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Proiectare și implementare de infrastructură completă pentru încărcarea vehiculelor electrice.
            Soluții integrate de la rezidențial la comercial și flote corporate, cu management inteligent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <EVSolutionCard key={index} solution={solution} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
            De Ce Să Alegeți Soluțiile Noastre
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${
                    benefit.color === 'cyan' ? 'from-cyan-500/20 to-cyan-600/10' :
                    benefit.color === 'purple' ? 'from-purple-500/20 to-purple-600/10' :
                    benefit.color === 'pink' ? 'from-pink-500/20 to-pink-600/10' :
                    'from-green-500/20 to-green-600/10'
                  } flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${
                      benefit.color === 'cyan' ? 'text-cyan-400' :
                      benefit.color === 'purple' ? 'text-purple-400' :
                      benefit.color === 'pink' ? 'text-pink-400' :
                      'text-green-400'
                    }`} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-md border border-green-500/30 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Pregătit pentru Viitorul Electric?
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Echipa noastră de experți vă poate ajuta să alegeți și să instalați soluția perfectă
                de încărcare EV pentru nevoile dumneavoastră specifice.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Consultanță gratuită',
                  'Instalare certificată',
                  'Garanție extinsă',
                  'Suport 24/7',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-sm text-white/60">Stații Instalate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  350kW
                </div>
                <div className="text-sm text-white/60">Putere Maximă</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-sm text-white/60">Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-green-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-sm text-white/60">Monitorizare</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
