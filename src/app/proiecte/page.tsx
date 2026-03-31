import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectsListPage from '@/components/pages/ProjectsListPage';
import { getProjects } from '@/lib/sanity/client';

export const metadata: Metadata = {
  title: 'Proiecte - GERSAN ROMANIA | Portfolio LED & EV',
  description: 'Explorează portofoliul nostru de proiecte finalizate: iluminat LED comercial, industrial și rezidențial, stații de încărcare EV și automatizări inteligente.',
  openGraph: {
    title: 'Proiecte - GERSAN ROMANIA',
    description: 'Explorează portofoliul nostru de proiecte finalizate: iluminat LED comercial, industrial și rezidențial, stații de încărcare EV și automatizări inteligente.',
  },
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProiectePage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <ProjectsListPage projects={projects} />
      <Footer />
    </main>
  );
}
