import { Newspaper } from 'lucide-react';
import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import { getArticles } from '@/lib/sanity/client';
import NewsClient from './NewsClient';

export default async function News() {
  const articles = await getArticles();

  return (
    <Section id="news" className="bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <div className="inline-block mb-4">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm border border-pink-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Newspaper className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-pink-400" />
              <span className="text-xs sm:text-sm text-pink-400 font-semibold">Știri & Tendințe</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            Ultimele <GlowText color="pink">Noutăți</GlowText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Tendințe, inovații și case studies din domeniul iluminatului LED, automatizării inteligente și infrastructurii de încărcare pentru vehicule electrice.
          </p>
        </div>

        <NewsClient articles={articles} />
      </div>
    </Section>
  );
}
