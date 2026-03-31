'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Building2, Zap, Package, TrendingUp, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import type { Project } from '@/types/content';

interface ProjectDetailPageProps {
  project: Project;
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const slug = typeof project.slug === 'string' ? project.slug : project.slug.current;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with integrated back button */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-black via-purple-950/5 to-black">
        <div className="mb-12">
          <Link href="/proiecte">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Înapoi la Proiecte
            </motion.button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400" />
                <span className="text-sm sm:text-base text-purple-400 font-semibold">{project.type}</span>
              </div>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight max-w-2xl">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>

            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 text-white/60">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>{project.year}</span>
              </div>
              {project.client && (
                <div className="flex items-center space-x-3 text-white/60 col-span-2">
                  <Building2 className="w-5 h-5 text-pink-400" />
                  <span>{project.client}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Image
              src={project.image.url || '/placeholder-project.jpg'}
              alt={project.image.alt || project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Technologies & Equipment */}
      <Section className="bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-white">Tehnologii Utilizate</h2>
            </div>
            <div className="space-y-3">
              {project.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-white/80">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Package className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Echipamente Instalate</h2>
            </div>
            <div className="space-y-3">
              {project.equipment.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <Section className="bg-gradient-to-b from-black via-pink-950/5 to-black">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <TrendingUp className="w-6 h-6 text-pink-400" />
              <h2 className="text-3xl font-bold text-white">Rezultate & Beneficii</h2>
            </div>
            <p className="text-white/60 max-w-2xl mx-auto">
              Impactul măsurabil al soluțiilor implementate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl text-center"
              >
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
                  {result.value}
                </div>
                <div className="text-white/70">{result.metric}</div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Vrei un proiect similar?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Echipa noastră este pregătită să transforme viziunea ta în realitate cu aceleași standarde de calitate și profesionalism.
          </p>
          <motion.button
            onClick={() => window.location.href = '/#contact'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
          >
            Începe Proiectul
          </motion.button>
        </motion.div>
      </Section>
    </div>
  );
}
