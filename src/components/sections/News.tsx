'use client';

import { motion } from 'framer-motion';
import { Newspaper, TrendingUp } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import Button from '@/components/ui/Button';
import ArticleCard from '@/components/ui/ArticleCard';

const articles = [
  {
    title: 'The Future of Intelligent Lighting: AI-Driven Adaptive Systems',
    excerpt: 'Discover how artificial intelligence and machine learning are transforming LED lighting systems into intelligent networks that adapt to human behavior, optimize energy consumption, and create personalized lighting experiences in real-time.',
    date: 'March 28, 2026',
    category: 'Technology',
    readTime: '6 min read',
    author: 'Dr. Sarah Chen',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    categoryColor: 'cyan' as const,
  },
  {
    title: 'EV Charging Infrastructure: 500+ Stations Deployed Nationwide',
    excerpt: 'Our largest infrastructure rollout to date brings ultra-fast charging capabilities to major metropolitan areas, reducing charging times and supporting the electric vehicle revolution.',
    date: 'March 25, 2026',
    category: 'EV Charging',
    readTime: '5 min read',
    author: 'Michael Torres',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    categoryColor: 'green' as const,
  },
  {
    title: 'Sustainable LED Solutions: Reducing Carbon Footprint by 70%',
    excerpt: 'Case study on how modern LED technology is helping businesses achieve sustainability goals while improving lighting quality and reducing operational costs.',
    date: 'March 22, 2026',
    category: 'Sustainability',
    readTime: '7 min read',
    author: 'Emma Rodriguez',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
    categoryColor: 'green' as const,
  },
  {
    title: 'Smart Home Integration: Complete Setup Guide for 2026',
    excerpt: 'Step-by-step walkthrough for integrating advanced LED lighting systems with popular home automation platforms including Alexa, Google Home, and Apple HomeKit.',
    date: 'March 18, 2026',
    category: 'Smart Home',
    readTime: '8 min read',
    author: 'James Park',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    categoryColor: 'purple' as const,
  },
  {
    title: 'RGB Lighting Trends: From Retail to Residential Applications',
    excerpt: 'Exploring the latest trends in dynamic RGB lighting and how businesses and homeowners are using color-changing LEDs to create immersive environments.',
    date: 'March 15, 2026',
    category: 'Design',
    readTime: '5 min read',
    author: 'Lisa Anderson',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    categoryColor: 'pink' as const,
  },
  {
    title: 'Industrial Lighting Retrofit: 72% Energy Savings Case Study',
    excerpt: 'Real-world results from a manufacturing facility that upgraded to high-efficiency LED systems, achieving dramatic energy reductions and improved workplace safety.',
    date: 'March 12, 2026',
    category: 'Industry',
    readTime: '6 min read',
    author: 'Robert Kim',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80',
    categoryColor: 'cyan' as const,
  },
];

export default function News() {
  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <Section id="news" className="bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
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
          className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Newspaper className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-pink-400" />
              <span className="text-xs sm:text-sm text-pink-400 font-semibold">Știri & Tendințe</span>
            </div>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            Ultimele <GlowText color="pink">Noutăți</GlowText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Tendințe, inovații și case studies din domeniul iluminatului LED, automatizării inteligente și infrastructurii de încărcare pentru vehicule electrice.
          </p>
        </motion.div>

        <div className="mb-12">
          <ArticleCard article={featuredArticle} index={0} featured />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {regularArticles.map((article, index) => (
            <ArticleCard key={index} article={article} index={index + 1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group">
            <TrendingUp className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Explore All Articles</span>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
