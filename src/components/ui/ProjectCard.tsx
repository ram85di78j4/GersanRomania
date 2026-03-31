'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Zap, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    type: string;
    location: string;
    year: string;
    image: string;
    technologies: string[];
    equipment: string[];
    results: {
      metric: string;
      value: string;
    }[];
    description: string;
    glowColor: 'cyan' | 'purple' | 'pink' | 'green';
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const glowColors = {
    cyan: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    purple: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    pink: 'group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    green: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
  };

  const borderColors = {
    cyan: 'group-hover:border-cyan-500/50',
    purple: 'group-hover:border-purple-500/50',
    pink: 'group-hover:border-pink-500/50',
    green: 'group-hover:border-green-500/50',
  };

  const accentColors = {
    cyan: 'text-cyan-400',
    purple: 'text-purple-400',
    pink: 'text-pink-400',
    green: 'text-green-400',
  };

  const bgGradients = {
    cyan: 'from-cyan-500/10 to-cyan-600/5',
    purple: 'from-purple-500/10 to-purple-600/5',
    pink: 'from-pink-500/10 to-pink-600/5',
    green: 'from-green-500/10 to-green-600/5',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500 ${glowColors[project.glowColor]} ${borderColors[project.glowColor]}`}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${bgGradients[project.glowColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className={`px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold ${accentColors[project.glowColor]}`}>
            {project.type}
          </div>
        </div>

        <motion.div
          className="absolute top-4 right-4 w-12 h-12 bg-black/60 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 45 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUpRight className={`w-5 h-5 ${accentColors[project.glowColor]}`} />
        </motion.div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-white/70">
            <div className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-white/70 leading-relaxed">
          {project.description}
        </p>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Zap className={`w-4 h-4 ${accentColors[project.glowColor]}`} />
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Technologies</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/80 hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Equipment Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.equipment.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Results</h4>
          <div className="grid grid-cols-2 gap-4">
            {project.results.map((result, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl font-bold ${accentColors[project.glowColor]} mb-1`}>
                  {result.value}
                </div>
                <div className="text-xs text-white/60">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 border-2 border-transparent ${borderColors[project.glowColor]} rounded-2xl pointer-events-none transition-all duration-500`} />
    </motion.article>
  );
}
