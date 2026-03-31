'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface EVSolutionCardProps {
  solution: {
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    specs: {
      power: string;
      stations: string;
      time: string;
    };
    glowColor: 'cyan' | 'purple' | 'pink' | 'green';
  };
  index: number;
}

export default function EVSolutionCard({ solution, index }: EVSolutionCardProps) {
  const Icon = solution.icon;

  const glowColors = {
    cyan: {
      border: 'group-hover:border-cyan-500/50',
      shadow: 'group-hover:shadow-[0_0_50px_rgba(0,255,255,0.3)]',
      iconBg: 'from-cyan-500/20 via-cyan-600/10 to-transparent',
      iconText: 'text-cyan-400',
      accentGradient: 'from-cyan-500 to-cyan-600',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    },
    purple: {
      border: 'group-hover:border-purple-500/50',
      shadow: 'group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]',
      iconBg: 'from-purple-500/20 via-purple-600/10 to-transparent',
      iconText: 'text-purple-400',
      accentGradient: 'from-purple-500 to-purple-600',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    },
    pink: {
      border: 'group-hover:border-pink-500/50',
      shadow: 'group-hover:shadow-[0_0_50px_rgba(236,72,153,0.3)]',
      iconBg: 'from-pink-500/20 via-pink-600/10 to-transparent',
      iconText: 'text-pink-400',
      accentGradient: 'from-pink-500 to-pink-600',
      badgeBg: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
    },
    green: {
      border: 'group-hover:border-green-500/50',
      shadow: 'group-hover:shadow-[0_0_50px_rgba(16,185,129,0.3)]',
      iconBg: 'from-green-500/20 via-green-600/10 to-transparent',
      iconText: 'text-green-400',
      accentGradient: 'from-green-500 to-green-600',
      badgeBg: 'bg-green-500/10 border-green-500/30 text-green-400',
    },
  };

  const colors = glowColors[solution.glowColor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="group relative h-full"
    >
      <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${colors.border} ${colors.shadow}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 p-8">
          <motion.div
            className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${colors.iconBg} backdrop-blur-sm flex items-center justify-center mb-6 transition-all duration-500`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Icon className={`w-12 h-12 ${colors.iconText}`} strokeWidth={1.5} />
          </motion.div>

          <div className={`inline-block px-3 py-1 ${colors.badgeBg} border rounded-full text-xs font-bold uppercase tracking-wider mb-4`}>
            {solution.subtitle}
          </div>

          <h3 className="text-3xl font-black text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
            {solution.title}
          </h3>

          <p className="text-white/70 leading-relaxed mb-6">
            {solution.description}
          </p>

          <div className="space-y-3 mb-6">
            {solution.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + i * 0.05 }}
                className="flex items-center space-x-3"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.accentGradient}`} />
                <span className="text-sm text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className={`text-2xl font-bold ${colors.iconText} mb-1`}>
                {solution.specs.power}
              </div>
              <div className="text-xs text-white/50">Putere</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${colors.iconText} mb-1`}>
                {solution.specs.stations}
              </div>
              <div className="text-xs text-white/50">Stații</div>
            </div>
            <div>
              <div className={`text-2xl font-bold ${colors.iconText} mb-1`}>
                {solution.specs.time}
              </div>
              <div className="text-xs text-white/50">Timp</div>
            </div>
          </div>

          <motion.button
            className={`mt-6 w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${colors.accentGradient} rounded-xl text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Detalii Soluție</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colors.accentGradient} opacity-10 blur-3xl rounded-full`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
