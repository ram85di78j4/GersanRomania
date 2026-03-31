'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import type { Article } from '@/types/content';

interface ArticleDetailPageProps {
  article: Article;
}

export default function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const slug = typeof article.slug === 'string' ? article.slug : article.slug.current;

  return (
    <div className="pt-24 pb-16">
      {/* Back Button */}
      <Section className="pb-0">
        <Link href="/stiri">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="inline-flex items-center text-pink-400 hover:text-pink-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Înapoi la Știri
          </motion.button>
        </Link>
      </Section>

      {/* Article Header */}
      <Section className="bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full">
              <span className="text-pink-400 font-semibold">{article.category.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              <GlowText className="bg-gradient-to-r from-white via-pink-200 to-white">
                {article.title}
              </GlowText>
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-12 text-white/60">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-pink-400" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>{new Date(article.publishedAt).toLocaleDateString('ro-RO', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>{article.readTime} min citire</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12"
          >
            <Image
              src={article.image.url || '/placeholder-article.jpg'}
              alt={article.image.alt || article.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none mb-12"
          >
            {/* If you have rich text content from Sanity, render it here */}
            {/* For now, we'll show the excerpt as placeholder */}
            <div className="text-white/80 leading-relaxed space-y-6">
              <p>{article.excerpt}</p>
              
              {/* Placeholder for rich content */}
              <p className="text-white/60 italic border-l-4 border-pink-500/50 pl-6 py-4">
                Conținutul complet al articolului va fi disponibil după configurarea CMS-ului Sanity.
                Aici va apărea textul integral cu formatare rich text, imagini, citate și alte elemente multimedia.
              </p>
            </div>
          </motion.div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Tag className="w-5 h-5 text-white/40" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/10 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl"
          >
            <div className="flex items-center space-x-4">
              {article.author.image && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500/50">
                  <Image
                    src={article.author.image}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <div className="text-sm text-white/60 mb-1">Autor</div>
                <div className="text-xl font-bold text-white">{article.author.name}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-black via-pink-950/5 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Vrei să afli mai multe?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru consultanță personalizată și soluții adaptate nevoilor tale specifice.
          </p>
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg shadow-pink-500/50 hover:shadow-pink-500/70 transition-all"
            >
              Contactează-ne
            </motion.button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
