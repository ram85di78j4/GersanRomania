import Section from '@/components/ui/Section';
import GlowText from '@/components/ui/GlowText';
import { Sparkles } from 'lucide-react';
import { getProjects } from '@/lib/sanity/client';
import ProjectsClient from './ProjectsClient';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <Section id="projects" className="bg-gradient-to-b from-black via-purple-950/5 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <div className="inline-block mb-4">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-purple-400 font-semibold">Portofoliu Premium</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-5 md:mb-6">
            Proiecte <GlowText color="purple">Realizate</GlowText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Implementări complete de iluminat LED, automatizare și infrastructură EV.
          </p>
        </div>

        <ProjectsClient projects={projects} />
      </div>
    </Section>
  );
}
