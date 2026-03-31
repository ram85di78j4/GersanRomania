import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArticleDetailPage from '@/components/pages/ArticleDetailPage';
import { getArticleBySlug, getArticles } from '@/lib/sanity/client';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Articol negăsit - GERSAN ROMANIA',
    };
  }

  return {
    title: `${article.title} - Știri GERSAN ROMANIA`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} - GERSAN ROMANIA`,
      description: article.excerpt,
      images: article.image?.url ? [article.image.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  
  return articles.map((article) => ({
    slug: typeof article.slug === 'string' ? article.slug : article.slug.current,
  }));
}

export const revalidate = 60;

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <ArticleDetailPage article={article} />
      <Footer />
    </main>
  );
}
