# Sanity CMS Setup Guide for GERSAN ROMANIA

This guide will help you set up Sanity CMS for managing Projects and News content on the GERSAN ROMANIA website.

## Overview

The website is now prepared for Sanity CMS integration with:
- ✅ Content types defined (Projects, Articles, Categories, Authors)
- ✅ Sanity schemas ready
- ✅ Dynamic pages created (`/proiecte`, `/proiecte/[slug]`, `/stiri`, `/stiri/[slug]`)
- ✅ Fallback to placeholder data when Sanity is not configured
- ✅ Client-side and server-side content fetching

## Quick Start

### 1. Create a Sanity Project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize Sanity in the project
cd sanity
sanity init

# Follow the prompts:
# - Create new project
# - Project name: "Gersan Romania"
# - Use default dataset: "production"
# - Output path: current directory
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Important:** Get your Project ID from:
- Sanity dashboard: https://www.sanity.io/manage
- Or from `sanity/sanity.config.ts` after initialization

### 3. Deploy Sanity Studio

```bash
cd sanity
sanity deploy

# Choose a studio hostname (e.g., gersan-romania)
# Your studio will be available at: https://gersan-romania.sanity.studio
```

### 4. Start Creating Content

Visit your Sanity Studio at `https://your-hostname.sanity.studio` and start adding:

1. **Authors** (Autori)
   - Add team members who will write articles
   
2. **Categories** (Categorii)
   - Create categories for news articles (e.g., "LED Technology", "EV Charging", "Smart Automation")
   
3. **Projects** (Proiecte)
   - Add completed projects with images, descriptions, technologies, results
   
4. **Articles** (Articole)
   - Publish news articles and blog posts

## Content Structure

### Projects (Proiecte)

Each project supports:
- **Title** - Project name
- **Slug** - URL-friendly identifier
- **Type** - Comercial, Industrial, or Rezidențial
- **Location** - Project location
- **Year** - Completion year
- **Client** - Client name (optional)
- **Description** - Short summary (max 300 chars)
- **Content** - Full rich text description
- **Image** - Main project image
- **Gallery** - Additional project images
- **Technologies** - List of technologies used
- **Equipment** - List of equipment installed
- **Results** - Measurable benefits (metric + value pairs)
- **Glow Color** - Accent color (cyan, purple, pink, green)
- **Featured** - Mark as featured project
- **SEO** - Meta title, description, keywords

### Articles (Articole)

Each article supports:
- **Title** - Article title
- **Slug** - URL-friendly identifier
- **Excerpt** - Short summary (max 300 chars)
- **Content** - Full rich text content
- **Image** - Featured image
- **Category** - Reference to category
- **Author** - Reference to author
- **Published At** - Publication date
- **Read Time** - Estimated reading time in minutes
- **Featured** - Mark as featured article
- **Tags** - Article tags
- **SEO** - Meta title, description, keywords

### Categories (Categorii)

- **Title** - Category name
- **Slug** - URL-friendly identifier
- **Description** - Category description
- **Color** - Accent color (cyan, purple, pink, green)

### Authors (Autori)

- **Name** - Author name
- **Slug** - URL-friendly identifier
- **Image** - Author photo
- **Bio** - Author biography
- **Role** - Author role/title

## How It Works

### Without Sanity Configuration

When `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set:
- Website uses placeholder data from `src/data/placeholder/`
- All pages work normally with sample content
- Perfect for development and preview

### With Sanity Configuration

When environment variables are set:
- Website fetches real content from Sanity CMS
- Content is cached and revalidated every 60 seconds
- Static pages are generated at build time
- ISR (Incremental Static Regeneration) keeps content fresh

## Content Management Workflow

1. **Create/Edit Content** in Sanity Studio
2. **Publish** the content
3. **Wait 60 seconds** for revalidation (or rebuild the site)
4. **Content appears** on the website

## API Routes

The website uses these Sanity queries:

- `getProjects()` - Fetch all projects
- `getProjectBySlug(slug)` - Fetch single project
- `getFeaturedProjects(limit)` - Fetch featured projects
- `getArticles()` - Fetch all articles
- `getArticleBySlug(slug)` - Fetch single article
- `getFeaturedArticles(limit)` - Fetch featured articles

## Image Optimization

Sanity images are automatically optimized using:
- Next.js Image component
- Sanity's CDN
- Automatic format conversion (WebP)
- Responsive sizes

## SEO

Each content type includes SEO fields:
- Meta title
- Meta description
- Keywords

These are automatically used in page metadata for better search engine optimization.

## Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Environment Variables for Production

Make sure to set these on your hosting platform:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Troubleshooting

### Content not showing up?

1. Check environment variables are set correctly
2. Verify Sanity project ID matches
3. Ensure content is published (not draft)
4. Wait for revalidation (60 seconds) or rebuild

### Images not loading?

1. Check image URLs in Sanity
2. Verify images are uploaded to Sanity
3. Check Next.js image domains configuration

### Build errors?

1. Ensure all required fields are filled in Sanity
2. Check content structure matches TypeScript types
3. Verify Sanity client connection

## Support

For Sanity-specific issues:
- Documentation: https://www.sanity.io/docs
- Community: https://slack.sanity.io

For website-specific issues:
- Check `src/lib/sanity/client.ts` for query logic
- Review `src/types/content.ts` for type definitions
- Inspect page components in `src/app/`

## Next Steps

1. ✅ Set up Sanity project
2. ✅ Configure environment variables
3. ✅ Deploy Sanity Studio
4. ✅ Create initial content (authors, categories)
5. ✅ Add projects and articles
6. ✅ Test on development server
7. ✅ Deploy to production

---

**The website is fully functional with or without Sanity CMS configured!**
