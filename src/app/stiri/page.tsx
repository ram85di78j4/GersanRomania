import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsListPage from '@/components/pages/NewsListPage';
import { getArticles } from '@/lib/sanity/client';

export const metadata: Metadata = {
  title: 'Știri & Tendințe - GERSAN ROMANIA | LED & EV Insights',
  description: 'Ultimele noutăți din industria LED, tendințe în iluminat arhitectural, tehnologii EV și automatizări inteligente. Articole și insights de la experți.',
  openGraph: {
    title: 'Știri & Tendințe - GERSAN ROMANIA',
    description: 'Ultimele noutăți din industria LED, tendințe în iluminat arhitectural, tehnologii EV și automatizări inteligente.',
  },
};

export const revalidate = 60;

export default async function StiriPage() {
  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <NewsListPage articles={articles} />
      <Footer />
    </main>
  );
}
