'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import ArticleCard from '@/components/ui/ArticleCard';
import type { Article } from '@/types/content';

interface NewsListPageProps {
  articles: Article[];
}

export default function NewsListPage({ articles }: NewsListPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = searchTerm
    ? articles.filter(article => 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles;

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter(a => a._id !== featuredArticle?._id);

  return (
    <div className="pt-24 pb-16">
      <Section className="bg-black">
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400" />
              <span className="text-sm sm:text-base text-pink-400 font-semibold">Știri & Tendințe</span>
            </div>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <GlowText className="bg-gradient-to-r from-white via-pink-200 to-white">
              Ultimele Noutăți
            </GlowText>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
            Explorează cele mai recente tendințe în iluminat LED, tehnologii EV și automatizări inteligente. 
            Articole și insights de la experți din industrie.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Caută articole..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-pink-500 focus:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <Link href={`/stiri/${typeof featuredArticle.slug === 'string' ? featuredArticle.slug : featuredArticle.slug.current}`}>
              <ArticleCard article={featuredArticle} featured />
            </Link>
          </motion.div>
        )}

        {/* Articles Grid */}
        {regularArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Link href={`/stiri/${typeof article.slug === 'string' ? article.slug : article.slug.current}`}>
                  <ArticleCard article={article} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-white/50">
              Nu am găsit articole care să corespundă căutării tale.
            </p>
          </motion.div>
        )}
      </Section>
    </div>
  );
}
