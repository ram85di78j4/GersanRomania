// Sanity client setup
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig, groqFragments } from './config';
import type { Project, Article } from '@/types/content';
import { placeholderProjects as projects } from '@/data/placeholder/projects';
import { placeholderArticles as articles } from '@/data/placeholder/articles';

// Check if Sanity is configured
const isSanityConfigured = () => {
  return !!sanityConfig.projectId && sanityConfig.projectId !== '';
};

// Create Sanity client only if configured
export const sanityClient = isSanityConfigured() ? createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
}) : null;

// Image URL builder
export function urlFor(source: any) {
  if (!sanityClient) {
    throw new Error('Sanity client is not configured');
  }
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(source);
}

// Helper function to fetch data
export async function fetchContent<T>(query: string): Promise<T[]> {
  if (!isSanityConfigured() || !sanityClient) {
    // Return empty array if Sanity is not configured
    return [] as T[];
  }
  
  try {
    return await sanityClient.fetch<T[]>(query);
  } catch (error) {
    console.error('Error fetching content from Sanity:', error);
    return [] as T[];
  }
}

// Helper function to fetch single document
export async function fetchDocument<T>(query: string, params?: Record<string, any>): Promise<T | null> {
  if (!isSanityConfigured() || !sanityClient) {
    return null;
  }
  
  try {
    return await sanityClient.fetch<T>(query, params || {});
  } catch (error) {
    console.error('Error fetching document from Sanity:', error);
    return null;
  }
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  if (!isSanityConfigured()) {
    // Return placeholder data if Sanity is not configured
    return projects as unknown as Project[];
  }
  
  const query = `*[_type == "project"] | order(publishedAt desc) {
    ${groqFragments.project}
  }`;
  
  return fetchContent<Project>(query);
}

// Fetch single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (!isSanityConfigured()) {
    // Return placeholder data if Sanity is not configured
    const project = projects.find(p => {
      const projectSlug = typeof p.slug === 'string' ? p.slug : p.slug.current;
      return projectSlug === slug;
    });
    return project ? (project as unknown as Project) : null;
  }
  
  const query = `*[_type == "project" && slug.current == $slug][0] {
    ${groqFragments.project},
    content,
    "gallery": gallery[]{
      "url": asset->url,
      "alt": alt
    },
    client,
    category,
    seo
  }`;
  
  return fetchDocument<Project>(query, { slug });
}

// Fetch all articles
export async function getArticles(): Promise<Article[]> {
  if (!isSanityConfigured()) {
    // Return placeholder data if Sanity is not configured
    return articles as unknown as Article[];
  }
  
  const query = `*[_type == "article"] | order(publishedAt desc) {
    ${groqFragments.article}
  }`;
  
  return fetchContent<Article>(query);
}

// Fetch single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!isSanityConfigured()) {
    // Return placeholder data if Sanity is not configured
    const article = articles.find(a => {
      const articleSlug = typeof a.slug === 'string' ? a.slug : a.slug.current;
      return articleSlug === slug;
    });
    return article ? (article as unknown as Article) : null;
  }
  
  const query = `*[_type == "article" && slug.current == $slug][0] {
    ${groqFragments.article},
    content,
    tags,
    seo
  }`;
  
  return fetchDocument<Article>(query, { slug });
}

// Fetch featured projects
export async function getFeaturedProjects(limit: number = 6): Promise<Project[]> {
  if (!isSanityConfigured()) {
    return projects.slice(0, limit) as unknown as Project[];
  }
  
  const query = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...${limit}] {
    ${groqFragments.project}
  }`;
  
  return fetchContent<Project>(query);
}

// Fetch featured articles
export async function getFeaturedArticles(limit: number = 4): Promise<Article[]> {
  if (!isSanityConfigured()) {
    return articles.slice(0, limit) as unknown as Article[];
  }
  
  const query = `*[_type == "article" && featured == true] | order(publishedAt desc) [0...${limit}] {
    ${groqFragments.article}
  }`;
  
  return fetchContent<Article>(query);
}
