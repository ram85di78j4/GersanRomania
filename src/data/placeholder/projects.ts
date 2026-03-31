// Placeholder project data
// This will be replaced with Sanity CMS data in the future

import { Project } from '@/types/content';

export const placeholderProjects: Project[] = [
  {
    _id: 'p1',
    _type: 'project',
    title: 'Centru Comercial AFI Palace',
    slug: {
      current: 'centru-comercial-afi-palace',
    },
    type: 'Iluminat Comercial',
    location: 'București',
    year: '2024',
    description: 'Sistem complet de iluminat LED inteligent pentru centrul comercial AFI Palace, incluzând zone comune, magazine și parcare.',
    image: {
      url: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800',
      alt: 'AFI Palace commercial lighting',
    },
    technologies: ['LED RGB', 'DMX Control', 'Smart Sensors', 'Energy Management'],
    equipment: ['Panouri LED 600x600', 'Benzi LED RGB', 'Senzori de mișcare', 'Controller DMX'],
    results: [
      { metric: 'Reducere Consum', value: '65%' },
      { metric: 'Suprafață', value: '15,000m²' },
    ],
    glowColor: 'cyan',
    featured: true,
  },
  {
    _id: 'p2',
    _type: 'project',
    title: 'Stații Încărcare EV - Kaufland',
    slug: {
      current: 'statii-incarcare-ev-kaufland',
    },
    type: 'EV Charging',
    location: 'Național',
    year: '2024',
    description: 'Implementare rețea de stații de încărcare rapidă pentru vehicule electrice în parcările Kaufland din toată țara.',
    image: {
      url: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      alt: 'Kaufland EV charging stations',
    },
    technologies: ['DC Fast Charging', 'Smart Grid', 'Mobile App', 'Payment Integration'],
    equipment: ['Stații 150kW DC', 'Wallbox 22kW AC', 'Management Software', 'RFID System'],
    results: [
      { metric: 'Stații Instalate', value: '120+' },
      { metric: 'Putere Totală', value: '18MW' },
    ],
    glowColor: 'purple',
    featured: true,
  },
  {
    _id: 'p3',
    _type: 'project',
    title: 'Smart Home - Primăverii Residence',
    slug: {
      current: 'smart-home-primaverii-residence',
    },
    type: 'Automatizare Rezidențială',
    location: 'București',
    year: '2023',
    description: 'Sistem complet de automatizare pentru complex rezidențial de lux, incluzând iluminat, climatizare și securitate.',
    image: {
      url: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      alt: 'Primaverii smart home',
    },
    technologies: ['KNX System', 'Voice Control', 'Mobile App', 'AI Learning'],
    equipment: ['KNX Modules', 'Smart Switches', 'Sensors', 'Central Hub'],
    results: [
      { metric: 'Apartamente', value: '45' },
      { metric: 'Economie Energie', value: '55%' },
    ],
    glowColor: 'pink',
    featured: true,
  },
  {
    _id: 'p4',
    _type: 'project',
    title: 'Fabrică Automobile Dacia',
    slug: {
      current: 'fabrica-automobile-dacia',
    },
    type: 'Iluminat Industrial',
    location: 'Mioveni',
    year: '2023',
    description: 'Modernizare completă a sistemului de iluminat industrial cu LED de înaltă eficiență și control inteligent.',
    image: {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      alt: 'Dacia factory industrial lighting',
    },
    technologies: ['High-Bay LED', 'DALI Control', 'Daylight Harvesting', 'Emergency Lighting'],
    equipment: ['LED High-Bay 200W', 'DALI Controllers', 'Light Sensors', 'Emergency Modules'],
    results: [
      { metric: 'Reducere Costuri', value: '70%' },
      { metric: 'Suprafață', value: '50,000m²' },
    ],
    glowColor: 'green',
    featured: true,
  },
  {
    _id: 'p5',
    _type: 'project',
    title: 'Hotel Marriott - Iluminat Arhitectural',
    slug: {
      current: 'hotel-marriott-iluminat-arhitectural',
    },
    type: 'Iluminat Arhitectural',
    location: 'Cluj-Napoca',
    year: '2023',
    description: 'Design și implementare iluminat arhitectural premium pentru hotel de 5 stele, incluzând fațadă și spații interioare.',
    image: {
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      alt: 'Marriott hotel architectural lighting',
    },
    technologies: ['RGB LED', 'DMX Control', 'Architectural Fixtures', 'Scene Programming'],
    equipment: ['LED Wall Washers', 'RGB Spotlights', 'DMX Controllers', 'Dimming Systems'],
    results: [
      { metric: 'Camere', value: '250' },
      { metric: 'Eficiență', value: '60%' },
    ],
    glowColor: 'cyan',
    featured: true,
  },
  {
    _id: 'p6',
    _type: 'project',
    title: 'Flotă EV - Glovo România',
    slug: {
      current: 'flota-ev-glovo-romania',
    },
    type: 'Fleet Management',
    location: 'București',
    year: '2024',
    description: 'Soluție completă de management și încărcare pentru flota de vehicule electrice Glovo, incluzând software și hardware.',
    image: {
      url: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800',
      alt: 'Glovo EV fleet charging',
    },
    technologies: ['Fleet Management', 'Smart Charging', 'Route Optimization', 'Analytics'],
    equipment: ['Wallbox 22kW', 'Fleet Software', 'Mobile App', 'Energy Monitor'],
    results: [
      { metric: 'Vehicule', value: '200+' },
      { metric: 'Optimizare Costuri', value: '45%' },
    ],
    glowColor: 'purple',
    featured: true,
  },
];
