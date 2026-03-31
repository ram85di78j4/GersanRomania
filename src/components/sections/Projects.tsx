'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Factory, Home, Sparkles } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/ui/ProjectCard';

const categories = [
  { id: 'all', name: 'All Projects', icon: Sparkles },
  { id: 'commercial', name: 'Commercial', icon: Building2 },
  { id: 'industrial', name: 'Industrial', icon: Factory },
  { id: 'residential', name: 'Residential', icon: Home },
];

const projects = [
  {
    title: 'Grand Plaza Hotel',
    type: 'Commercial',
    category: 'commercial',
    location: 'Dubai, UAE',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    description: 'Complete architectural lighting transformation featuring dynamic RGB facade system with 15,000+ individually addressable LED points, creating stunning visual displays synchronized with music and events.',
    technologies: ['RGB LED Strips', 'DMX Control', 'IoT Integration', 'Smart Scheduling'],
    equipment: ['Philips ColorKinetics', 'Lutron Control System', 'Wireless DMX', 'Power Supplies 500W'],
    results: [
      { metric: 'Energy Savings', value: '65%' },
      { metric: 'LED Points', value: '15K+' },
      { metric: 'Uptime', value: '99.9%' },
      { metric: 'ROI Period', value: '2.5yr' },
    ],
    glowColor: 'cyan' as const,
  },
  {
    title: 'TechCorp Manufacturing',
    type: 'Industrial',
    category: 'industrial',
    location: 'Munich, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
    description: 'High-bay industrial LED lighting retrofit for 200,000 sq ft manufacturing facility with integrated motion sensors, daylight harvesting, and emergency backup systems for maximum efficiency and safety.',
    technologies: ['High-Bay LED', 'Motion Sensors', 'Daylight Harvesting', 'Emergency Backup'],
    equipment: ['Cree LED High-Bay 200W', 'Occupancy Sensors', 'DALI Controllers', 'Battery Backup Units'],
    results: [
      { metric: 'Energy Reduction', value: '72%' },
      { metric: 'Lux Improvement', value: '+40%' },
      { metric: 'Maintenance Cost', value: '-85%' },
      { metric: 'Payback', value: '1.8yr' },
    ],
    glowColor: 'purple' as const,
  },
  {
    title: 'Skyline Residences',
    type: 'Residential',
    category: 'residential',
    location: 'Singapore',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Luxury smart home lighting ecosystem for 120-unit residential tower featuring voice control, circadian rhythm automation, and integrated EV charging infrastructure in underground parking.',
    technologies: ['Smart Home Integration', 'Voice Control', 'Circadian Lighting', 'EV Charging'],
    equipment: ['Philips Hue System', 'Amazon Alexa', 'Tesla Wall Connectors', 'Smart Dimmers'],
    results: [
      { metric: 'Resident Satisfaction', value: '96%' },
      { metric: 'EV Chargers', value: '150' },
      { metric: 'Energy Efficient', value: '68%' },
      { metric: 'Smart Units', value: '120' },
    ],
    glowColor: 'pink' as const,
  },
  {
    title: 'Metro Shopping Center',
    type: 'Commercial',
    category: 'commercial',
    location: 'London, UK',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80',
    description: 'Interactive LED installation across 500,000 sq ft retail space with dynamic color-changing zones, motion-activated displays, and energy-efficient track lighting for optimal product presentation.',
    technologies: ['Interactive LED', 'Motion Detection', 'Color Tuning', 'Track Lighting'],
    equipment: ['Osram LED Modules', 'PIR Sensors', 'Tunable White Strips', 'Track Systems'],
    results: [
      { metric: 'Foot Traffic', value: '+28%' },
      { metric: 'Energy Saved', value: '58%' },
      { metric: 'Coverage Area', value: '500K ft²' },
      { metric: 'Zones', value: '45' },
    ],
    glowColor: 'green' as const,
  },
  {
    title: 'AutoPlant Assembly Line',
    type: 'Industrial',
    category: 'industrial',
    location: 'Detroit, USA',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    description: 'Precision task lighting for automotive assembly with 5000K color temperature, high CRI for quality control, and zoned control for different production areas with minimal glare and flicker.',
    technologies: ['High CRI LED', 'Zoned Control', 'Flicker-Free', 'Task Lighting'],
    equipment: ['Lumileds LED Arrays', 'Zone Controllers', 'Linear High-Bay', 'Glare Shields'],
    results: [
      { metric: 'Quality Defects', value: '-45%' },
      { metric: 'Worker Comfort', value: '92%' },
      { metric: 'CRI Rating', value: '95+' },
      { metric: 'Energy Drop', value: '63%' },
    ],
    glowColor: 'cyan' as const,
  },
  {
    title: 'Greenfield Estates',
    type: 'Residential',
    category: 'residential',
    location: 'Austin, USA',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'Sustainable community development with solar-powered street lighting, smart home packages, and Level 2 EV charging stations for every home, creating a fully integrated eco-friendly neighborhood.',
    technologies: ['Solar LED', 'Smart Street Lights', 'Home Automation', 'L2 EV Charging'],
    equipment: ['Solar LED Posts', 'Smart Controllers', 'ChargePoint Stations', 'Battery Storage'],
    results: [
      { metric: 'Homes Equipped', value: '250' },
      { metric: 'Solar Powered', value: '100%' },
      { metric: 'EV Chargers', value: '250' },
      { metric: 'Carbon Offset', value: '450T' },
    ],
    glowColor: 'green' as const,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" className="bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
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
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400 font-semibold">Portofoliu Premium</span>
            </div>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Proiecte <GlowText color="purple">Realizate</GlowText>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Proiecte integrate de iluminat arhitectural, automatizare și infrastructură EV pentru spații comerciale,
            industriale și rezidențiale. Execuție premium de la concept la punere în funcțiune.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_30px_rgba(168,85,247,0.3)]'
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-purple-500/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </span>
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

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            <span>View Complete Portfolio</span>
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
