'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Newspaper } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import { placeholderArticles as articles } from '@/data/placeholder/articles';

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
          <Link href={`/stiri/${typeof featuredArticle.slug === 'string' ? featuredArticle.slug : featuredArticle.slug.current}`}>
            <ArticleCard article={featuredArticle} index={0} featured />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {regularArticles.map((article, index) => (
            <Link key={index} href={`/stiri/${typeof article.slug === 'string' ? article.slug : article.slug.current}`}>
              <ArticleCard article={article} index={index + 1} />
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/stiri">
            <Button variant="outline" size="lg" className="group">
              <span>Vezi Toate Articolele</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
