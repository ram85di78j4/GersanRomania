'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Factory, Home, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import Button from '@/components/ui/Button';
import type { Project } from '@/types/content';

const categories = [
  { id: 'all', name: 'Toate Proiectele', icon: Sparkles },
  { id: 'Comercial', name: 'Comercial', icon: Building2 },
  { id: 'Industrial', name: 'Industrial', icon: Factory },
  { id: 'Rezidențial', name: 'Rezidențial', icon: Home },
];

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.type === activeCategory);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0"
      >
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;

          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-purple-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-1.5 sm:space-x-2">
                <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                <span>{category.name}</span>
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
      >
        {filteredProjects.map((project, index) => (
          <Link
            key={project._id ?? project.title}
            href={`/proiecte/${typeof project.slug === 'string' ? project.slug : project.slug.current}`}
          >
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/proiecte">
          <Button variant="outline" size="lg" className="group">
            <span>Vezi Toate Proiectele</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </>
  );
}
