import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProjectDetailPage from '@/components/pages/ProjectDetailPage';
import { getProjectBySlug, getProjects } from '@/lib/sanity/client';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Proiect negăsit - GERSAN ROMANIA',
    };
  }

  return {
    title: `${project.title} - Proiecte GERSAN ROMANIA`,
    description: project.description,
    openGraph: {
      title: `${project.title} - GERSAN ROMANIA`,
      description: project.description,
      images: project.image?.url ? [project.image.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    slug: typeof project.slug === 'string' ? project.slug : project.slug.current,
  }));
}

export const revalidate = 60;

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <ProjectDetailPage project={project} />
      <Footer />
    </main>
  );
}
