'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import Button from '@/components/ui/Button';
import type { Article } from '@/types/content';

export default function NewsClient({ articles }: { articles: Article[] }) {
  if (!articles.length) {
    return (
      <p className="text-center text-white/40 py-16">Nu există articole publicate momentan.</p>
    );
  }

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <>
      <div className="mb-12">
        <Link href={`/stiri/${typeof featuredArticle.slug === 'string' ? featuredArticle.slug : featuredArticle.slug.current}`}>
          <ArticleCard article={featuredArticle} index={0} featured />
        </Link>
      </div>

      {regularArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {regularArticles.map((article, index) => (
            <Link
              key={article._id ?? index}
              href={`/stiri/${typeof article.slug === 'string' ? article.slug : article.slug.current}`}
            >
              <ArticleCard article={article} index={index + 1} />
            </Link>
          ))}
        </div>
      )}

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
    </>
  );
}
