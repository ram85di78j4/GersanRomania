'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TechnologyPanelProps {
  technology: {
    title: string;
    description: string;
    icon: LucideIcon;
    specs: string[];
    glowColor: 'cyan' | 'purple' | 'pink' | 'green';
  };
  index: number;
}

export default function TechnologyPanel({ technology, index }: TechnologyPanelProps) {
  const Icon = technology.icon;

  const glowColors = {
    cyan: {
      border: 'group-hover:border-cyan-500/40',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]',
      iconBg: 'from-cyan-500/10 to-transparent',
      iconText: 'text-cyan-400',
      accentLine: 'bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent',
    },
    purple: {
      border: 'group-hover:border-purple-500/40',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      iconBg: 'from-purple-500/10 to-transparent',
      iconText: 'text-purple-400',
      accentLine: 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent',
    },
    pink: {
      border: 'group-hover:border-pink-500/40',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]',
      iconBg: 'from-pink-500/10 to-transparent',
      iconText: 'text-pink-400',
      accentLine: 'bg-gradient-to-r from-transparent via-pink-500/50 to-transparent',
    },
    green: {
      border: 'group-hover:border-green-500/40',
      shadow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      iconBg: 'from-green-500/10 to-transparent',
      iconText: 'text-green-400',
      accentLine: 'bg-gradient-to-r from-transparent via-green-500/50 to-transparent',
    },
  };

  const colors = glowColors[technology.glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 ${colors.border} ${colors.shadow} hover:bg-white/10`}>
        <div className="flex items-start space-x-4">
          <motion.div
            className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${colors.iconBg} backdrop-blur-sm flex items-center justify-center transition-transform duration-300`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className={`w-8 h-8 ${colors.iconText}`} strokeWidth={1.5} />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
              {technology.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              {technology.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {technology.specs.map((spec, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + i * 0.05 }}
                  className={`inline-flex items-center px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg text-xs ${colors.iconText} font-medium`}
                >
                  {spec}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-0.5 ${colors.accentLine} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />
      </div>
    </motion.div>
  );
}
