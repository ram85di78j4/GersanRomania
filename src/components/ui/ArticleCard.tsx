'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Image from 'next/image';
import type { Article } from '@/types/content';

interface ArticleCardProps {
  article: Article;
  index?: number;
  featured?: boolean;
}

export default function ArticleCard({ article, index = 0, featured = false }: ArticleCardProps) {
  const categoryColor = article.category.color;
  const categoryColors = {
    cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    pink: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
  };

  const hoverColors = {
    cyan: 'group-hover:border-cyan-500/50',
    purple: 'group-hover:border-purple-500/50',
    pink: 'group-hover:border-pink-500/50',
    green: 'group-hover:border-green-500/50',
  };

  const textColors = {
    cyan: 'group-hover:text-cyan-400',
    purple: 'group-hover:text-purple-400',
    pink: 'group-hover:text-pink-400',
    green: 'group-hover:text-green-400',
  };
  
  const formattedDate = new Date(article.publishedAt).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative"
      >
        <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${hoverColors[categoryColor]}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-full overflow-hidden">
              <Image
                src={article.image.url}
                alt={article.image.alt || article.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:opacity-100 opacity-60" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${categoryColors[categoryColor]}`}>
                  {article.category.title}
                </span>
              </div>

              <h3 className={`text-3xl lg:text-4xl font-black text-white mb-4 leading-tight transition-colors duration-300 ${textColors[categoryColor]}`}>
                {article.title}
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {article.excerpt}
              </p>

              <div className="flex items-center space-x-6 text-sm text-white/50 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{article.author.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime} min</span>
                </div>
              </div>

              <motion.button
                className={`inline-flex items-center space-x-2 text-white font-semibold group/btn transition-colors ${textColors[categoryColor]}`}
                whileHover={{ x: 5 }}
              >
                <span>Citește Articolul</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative"
    >
      <div className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${hoverColors[categoryColor]}`}>
        <div className="relative h-56 overflow-hidden">
          <Image
            src={article.image.url}
            alt={article.image.alt || article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md ${categoryColors[categoryColor]}`}>
              {article.category.title}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 text-xs text-white/50 mb-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formattedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime} min</span>
            </div>
          </div>

          <h3 className={`text-xl font-bold text-white mb-3 leading-tight transition-colors duration-300 ${textColors[categoryColor]}`}>
            {article.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center space-x-2 text-xs text-white/50">
              <User className="w-3.5 h-3.5" />
              <span>{article.author.name}</span>
            </div>

            <motion.button
              className={`inline-flex items-center space-x-1 text-sm font-semibold text-white/70 transition-colors ${textColors[categoryColor]}`}
              whileHover={{ x: 3 }}
            >
              <span>Citește</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
