// Placeholder article data
// This will be replaced with Sanity CMS data in the future

import { Article } from '@/types/content';

export const placeholderArticles: Article[] = [
  {
    _id: '1',
    _type: 'article',
    title: 'Viitorul Iluminatului LED în Spațiile Comerciale',
    slug: {
      current: 'viitorul-iluminatului-led-spatii-comerciale',
    },
    excerpt: 'Descoperă cum tehnologia LED revoluționează designul și eficiența energetică în spațiile comerciale moderne.',
    image: {
      url: '/images/article-led-commercial.svg',
      alt: 'Modern LED commercial lighting',
    },
    category: {
      title: 'Iluminat Comercial',
      slug: 'iluminat-comercial',
      color: 'cyan',
    },
    author: {
      name: 'Maria Ionescu',
    },
    publishedAt: '2024-03-15T10:00:00Z',
    readTime: 5,
    featured: true,
  },
  {
    _id: '2',
    _type: 'article',
    title: 'Ghid Complet: Instalarea Stațiilor de Încărcare EV',
    slug: {
      current: 'ghid-instalare-statii-incarcare-ev',
    },
    excerpt: 'Tot ce trebuie să știi despre instalarea și configurarea stațiilor de încărcare pentru vehicule electrice.',
    image: {
      url: '/images/article-ev-charging.svg',
      alt: 'EV charging station installation',
    },
    category: {
      title: 'EV Charging',
      slug: 'ev-charging',
      color: 'purple',
    },
    author: {
      name: 'Alexandru Popescu',
    },
    publishedAt: '2024-03-10T14:30:00Z',
    readTime: 8,
    featured: false,
  },
  {
    _id: '3',
    _type: 'article',
    title: 'Automatizarea Casei: Tendințe și Tehnologii 2024',
    slug: {
      current: 'automatizare-casa-tendinte-2024',
    },
    excerpt: 'Explorează cele mai noi tehnologii de automatizare pentru case inteligente și beneficiile lor.',
    image: {
      url: '/images/article-smart-home.svg',
      alt: 'Smart home automation',
    },
    category: {
      title: 'Smart Home',
      slug: 'smart-home',
      color: 'pink',
    },
    author: {
      name: 'Elena Dumitrescu',
    },
    publishedAt: '2024-03-05T09:15:00Z',
    readTime: 6,
    featured: false,
  },
  {
    _id: '4',
    _type: 'article',
    title: 'Eficiența Energetică: Economii de până la 70% cu LED',
    slug: {
      current: 'eficienta-energetica-economii-led',
    },
    excerpt: 'Studiu de caz: Cum companiile reduc costurile energetice prin trecerea la iluminat LED inteligent.',
    image: {
      url: '/images/article-energy-efficiency.svg',
      alt: 'Energy efficient LED lighting',
    },
    category: {
      title: 'Eficiență Energetică',
      slug: 'eficienta-energetica',
      color: 'green',
    },
    author: {
      name: 'Andrei Constantinescu',
    },
    publishedAt: '2024-02-28T11:00:00Z',
    readTime: 7,
    featured: false,
  },
];
