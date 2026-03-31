'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: LucideIcon;
    glowColor: 'cyan' | 'purple' | 'pink' | 'green';
    features?: string[];
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  const glowColors = {
    cyan: {
      border: 'group-hover:border-cyan-500/50',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
      iconBg: 'from-cyan-500/20 to-cyan-600/10',
      iconText: 'text-cyan-400',
      iconGlow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]',
    },
    purple: {
      border: 'group-hover:border-purple-500/50',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
      iconBg: 'from-purple-500/20 to-purple-600/10',
      iconText: 'text-purple-400',
      iconGlow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
    },
    pink: {
      border: 'group-hover:border-pink-500/50',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
      iconBg: 'from-pink-500/20 to-pink-600/10',
      iconText: 'text-pink-400',
      iconGlow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]',
    },
    green: {
      border: 'group-hover:border-green-500/50',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      iconBg: 'from-green-500/20 to-green-600/10',
      iconText: 'text-green-400',
      iconGlow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
    },
  };

  const colors = glowColors[service.glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="group relative h-full"
    >
      <div className={`relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 ${colors.border} ${colors.shadow}`}>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        <div className="relative z-10">
          <motion.div
            className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${colors.iconBg} backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-500 ${colors.iconGlow}`}
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              transition: { type: "spring", stiffness: 400, damping: 17 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Icon className={`w-10 h-10 ${colors.iconText}`} strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          <motion.h3 
            className="text-xl md:text-2xl font-bold text-white mb-3"
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            {service.title}
          </motion.h3>

          <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
            {service.description}
          </p>

          {service.features && service.features.length > 0 && (
            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className="flex items-start space-x-2 text-sm text-white/60"
                >
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.iconText} flex-shrink-0`} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          )}

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
