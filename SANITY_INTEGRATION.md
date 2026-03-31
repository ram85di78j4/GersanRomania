# Sanity CMS Integration Guide

This document outlines the architecture and steps for integrating Sanity CMS into the LuxeLED website.

## Current Architecture

The project is prepared for Sanity CMS integration with the following structure:

### Folder Structure

```
src/
├── types/
│   └── content.ts              # TypeScript types for Article, Project, Category, Author
├── lib/
│   └── sanity/
│       ├── config.ts           # Sanity configuration and GROQ fragments
│       ├── queries.ts          # Pre-built GROQ queries for content
│       ├── client.ts           # Sanity client setup (placeholder)
│       └── index.ts            # Central exports
└── data/
    └── placeholder/
        ├── articles.ts         # Placeholder article data
        ├── projects.ts         # Placeholder project data
        └── index.ts            # Placeholder data exports
```

## Content Types

### Article Schema
```typescript
{
  _id: string;
  _type: 'article';
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any; // Portable Text
  image: { url: string; alt?: string };
  category: { title: string; slug: string; color: 'cyan' | 'purple' | 'pink' | 'green' };
  author: { name: string; image?: string };
  publishedAt: string;
  readTime: number;
  featured?: boolean;
  tags?: string[];
  seo?: { metaTitle?: string; metaDescription?: string; keywords?: string[] };
}
```

### Project Schema
```typescript
{
  _id: string;
  _type: 'project';
  title: string;
  slug: { current: string };
  type: string;
  location: string;
  year: string;
  description: string;
  content: any; // Portable Text
  image: { url: string; alt?: string };
  gallery?: { url: string; alt?: string }[];
  technologies: string[];
  equipment: string[];
  results: { metric: string; value: string }[];
  glowColor: 'cyan' | 'purple' | 'pink' | 'green';
  featured?: boolean;
  client?: string;
  category?: string;
  seo?: { metaTitle?: string; metaDescription?: string; keywords?: string[] };
}
```

## Integration Steps

### 1. Set Up Sanity Studio

```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Initialize Sanity project
sanity init

# Choose:
# - Project name: LuxeLED CMS
# - Dataset: production
# - Output path: ./sanity-studio
```

### 2. Create Sanity Schemas

Create the following schemas in your Sanity Studio:

**schemas/article.ts**
```typescript
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text', validation: Rule => Rule.max(200) },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'author', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'readTime', type: 'number' },
    { name: 'featured', type: 'boolean' },
    { name: 'tags', type: 'array', of: [{ type: 'string' }] },
  ],
};
```

**schemas/project.ts**
```typescript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', validation: Rule => Rule.required() },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'type', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'year', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
    { name: 'image', type: 'image', options: { hotspot: true } },
    { name: 'gallery', type: 'array', of: [{ type: 'image' }] },
    { name: 'technologies', type: 'array', of: [{ type: 'string' }] },
    { name: 'equipment', type: 'array', of: [{ type: 'string' }] },
    { 
      name: 'results', 
      type: 'array', 
      of: [{ 
        type: 'object',
        fields: [
          { name: 'metric', type: 'string' },
          { name: 'value', type: 'string' }
        ]
      }] 
    },
    { 
      name: 'glowColor', 
      type: 'string', 
      options: { 
        list: ['cyan', 'purple', 'pink', 'green'] 
      } 
    },
    { name: 'featured', type: 'boolean' },
  ],
};
```

### 3. Configure Environment Variables

Add to `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-01
```

### 4. Install Sanity Client

```bash
npm install @sanity/client @sanity/image-url
```

### 5. Activate Sanity Client

Uncomment the client code in `src/lib/sanity/client.ts`:

```typescript
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});
```

### 6. Update Components to Use CMS Data

Replace placeholder data imports with Sanity queries:

**Before:**
```typescript
import { placeholderArticles } from '@/data/placeholder';
```

**After:**
```typescript
import { fetchContent } from '@/lib/sanity';
import { articlesQueries } from '@/lib/sanity/queries';

const articles = await fetchContent(articlesQueries.getRecent);
```

## Available Queries

### Articles
- `articlesQueries.getAll` - All published articles
- `articlesQueries.getFeatured` - Featured articles (max 3)
- `articlesQueries.getRecent` - Recent articles (max 6)
- `articlesQueries.getBySlug(slug)` - Single article by slug
- `articlesQueries.getByCategory(categorySlug)` - Articles by category

### Projects
- `projectsQueries.getAll` - All projects
- `projectsQueries.getFeatured` - Featured projects (max 6)
- `projectsQueries.getBySlug(slug)` - Single project by slug
- `projectsQueries.getByType(type)` - Projects by type

## Migration Checklist

- [ ] Set up Sanity Studio project
- [ ] Create content schemas (article, project, category, author)
- [ ] Configure environment variables
- [ ] Install Sanity client dependencies
- [ ] Activate Sanity client in `client.ts`
- [ ] Migrate placeholder data to Sanity Studio
- [ ] Update News section to fetch from CMS
- [ ] Update Projects section to fetch from CMS
- [ ] Test all queries and data rendering
- [ ] Deploy Sanity Studio
- [ ] Set up webhooks for revalidation (optional)

## Benefits of This Architecture

1. **Type Safety**: Full TypeScript support with defined interfaces
2. **Modular**: Clean separation of concerns
3. **Scalable**: Easy to add new content types
4. **Maintainable**: Centralized queries and configuration
5. **Flexible**: Can switch between placeholder and CMS data easily
6. **SEO Ready**: Includes SEO fields in content types
7. **Performance**: CDN support and query optimization

## Next Steps

1. Create Sanity Studio project
2. Add content schemas
3. Populate with real content
4. Connect frontend to CMS
5. Deploy and test
