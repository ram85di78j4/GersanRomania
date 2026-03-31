// Sanity CMS configuration
// This file will be used for future Sanity client setup

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: process.env.NODE_ENV === 'production',
};

// Image URL builder configuration
export const imageConfig = {
  baseUrl: `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/`,
};

// GROQ query fragments for reusability
export const groqFragments = {
  article: `
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    "category": category->{
      title,
      "slug": slug.current,
      color
    },
    "author": author->{
      name,
      "image": image.asset->url
    },
    publishedAt,
    readTime,
    featured
  `,
  project: `
    _id,
    _type,
    title,
    "slug": slug.current,
    type,
    location,
    year,
    description,
    "image": {
      "url": image.asset->url,
      "alt": image.alt
    },
    technologies,
    equipment,
    results,
    glowColor,
    featured
  `,
};
