'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import ProjectCard from '@/components/ui/ProjectCard';
import type { Project } from '@/types/content';
import { cn } from '@/lib/utils';

interface ProjectsListPageProps {
  projects: Project[];
}

const categories = [
  { id: 'all', label: 'Toate Proiectele' },
  { id: 'commercial', label: 'Comercial' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'residential', label: 'Rezidențial' },
];

export default function ProjectsListPage({ projects }: ProjectsListPageProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category?.toLowerCase() === activeCategory || p.type?.toLowerCase().includes(activeCategory));

  return (
    <div className="pt-24 pb-16">
      <Section className="bg-gradient-to-b from-black via-purple-950/5 to-black">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
              <span className="text-sm sm:text-base text-purple-400 font-semibold">Portfolio Excellence</span>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <GlowText className="bg-gradient-to-r from-white via-purple-200 to-white">
              Proiecte Realizate
            </GlowText>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explorează portofoliul nostru de proiecte finalizate cu succes. Soluții integrate de iluminat LED, 
            automatizare inteligentă și infrastructură EV pentru diverse tipuri de spații.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative px-6 py-3 rounded-xl font-semibold transition-all duration-300',
                  isActive
                    ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                    : 'text-white/70 bg-white/5 hover:bg-white/10 border border-white/10'
                )}
              >
                <span className="relative z-10">{category.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/proiecte/${typeof project.slug === 'string' ? project.slug : project.slug.current}`}>
                <ProjectCard project={project} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-white/50">
              Nu există proiecte în această categorie momentan.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ai un proiect în minte?
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Hai să discutăm despre cum putem transforma viziunea ta în realitate.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
              >
                Începe Proiectul
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
