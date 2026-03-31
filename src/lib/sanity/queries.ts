// Sanity GROQ queries for fetching content
// These queries will be used once Sanity client is configured

import { groqFragments } from './config';

// Articles queries
export const articlesQueries = {
  // Get all published articles
  getAll: `*[_type == "article" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    ${groqFragments.article}
  }`,

  // Get featured articles
  getFeatured: `*[_type == "article" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
    ${groqFragments.article}
  }`,

  // Get recent articles
  getRecent: `*[_type == "article" && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...6] {
    ${groqFragments.article}
  }`,

  // Get article by slug
  getBySlug: (slug: string) => `*[_type == "article" && slug.current == "${slug}"][0] {
    ${groqFragments.article},
    content,
    tags,
    seo
  }`,

  // Get articles by category
  getByCategory: (categorySlug: string) => `*[_type == "article" && category->slug.current == "${categorySlug}" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    ${groqFragments.article}
  }`,
};

// Projects queries
export const projectsQueries = {
  // Get all projects
  getAll: `*[_type == "project" && !(_id in path("drafts.**"))] | order(year desc) {
    ${groqFragments.project}
  }`,

  // Get featured projects
  getFeatured: `*[_type == "project" && featured == true && !(_id in path("drafts.**"))] | order(year desc) [0...6] {
    ${groqFragments.project}
  }`,

  // Get project by slug
  getBySlug: (slug: string) => `*[_type == "project" && slug.current == "${slug}"][0] {
    ${groqFragments.project},
    content,
    "gallery": gallery[]{
      "url": asset->url,
      "alt": alt
    },
    client,
    category,
    seo
  }`,

  // Get projects by type
  getByType: (type: string) => `*[_type == "project" && type == "${type}" && !(_id in path("drafts.**"))] | order(year desc) {
    ${groqFragments.project}
  }`,
};

// Categories queries
export const categoriesQueries = {
  getAll: `*[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color
  }`,
};
