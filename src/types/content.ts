// Content types for CMS integration
// These types match the expected Sanity CMS schema structure

export interface Article {
  _id: string;
  _type: 'article';
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content?: any; // Rich text content (Portable Text)
  image: {
    url: string;
    alt?: string;
  };
  category: {
    title: string;
    slug: string;
    color: 'cyan' | 'purple' | 'pink' | 'green';
  };
  author: {
    name: string;
    image?: string;
  };
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface Project {
  _id: string;
  _type: 'project';
  title: string;
  slug: {
    current: string;
  };
  type: string;
  location: string;
  year: string;
  description: string;
  content?: any; // Rich text content (Portable Text)
  image: {
    url: string;
    alt?: string;
  };
  gallery?: {
    url: string;
    alt?: string;
  }[];
  technologies: string[];
  equipment: string[];
  results: {
    metric: string;
    value: string;
  }[];
  glowColor: 'cyan' | 'purple' | 'pink' | 'green';
  featured?: boolean;
  client?: string;
  category?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

export interface Category {
  _id: string;
  _type: 'category';
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  color: 'cyan' | 'purple' | 'pink' | 'green';
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  slug: {
    current: string;
  };
  bio?: string;
  image?: {
    url: string;
    alt?: string;
  };
  role?: string;
}

// Helper types for component props
export type ArticleCardData = Pick<
  Article,
  '_id' | 'title' | 'excerpt' | 'image' | 'category' | 'author' | 'publishedAt' | 'readTime' | 'featured'
>;

export type ProjectCardData = Pick<
  Project,
  '_id' | 'title' | 'type' | 'location' | 'year' | 'description' | 'image' | 'technologies' | 'equipment' | 'results' | 'glowColor'
>;
