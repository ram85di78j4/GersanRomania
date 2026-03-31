# Gersan Romania - Premium LED Lighting & Smart Solutions

A futuristic, high-performance landing page for Gersan Romania, built with Next.js 14, featuring stunning 3D effects, smooth animations, and a dark luxury aesthetic. Showcasing integrated solutions for LED lighting, smart automation, and EV charging infrastructure.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **3D Effects**: React Three Fiber for lightweight, optimized 3D hero animations
- **Smooth Animations**: Framer Motion for buttery-smooth scroll interactions
- **Premium Design**: Dark luxury theme with RGB LED glow accents
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Reusable Components**: Scalable component architecture

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Project Structure

```
led-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── LightningOrb.tsx
│   │   │   └── Scene.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Technologies.tsx
│   │   │   ├── EVCharging.tsx
│   │   │   ├── News.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Section.tsx
│   │       └── GlowText.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── grid.svg
└── package.json
```

## 🎨 Sections

1. **Hero** - 3D animated hero section with React Three Fiber
2. **Services** - LED lighting and smart home services showcase
3. **Projects** - Portfolio of completed projects with hover effects
4. **Technologies** - Tech stack and capabilities display
5. **EV Charging** - Electric vehicle charging solutions
6. **News** - Latest articles and industry insights
7. **Contact** - Contact form with business information

## 🎯 Key Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - 3D graphics with Three.js
- **Lucide React** - Beautiful icon library

## 🎨 Design Features

- Dark luxury aesthetic with black background
- RGB LED glow effects (cyan, purple, pink, green)
- Smooth scroll animations and transitions
- Glass morphism effects with backdrop blur
- Gradient accents and hover states
- Custom scrollbar styling
- Responsive grid layouts

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1920px+)

## ⚡ Performance

- Lazy loading for 3D components
- Optimized images with Next.js Image
- Code splitting and tree shaking
- Minimal JavaScript bundle size
- CSS purging with Tailwind

## 🔧 Customization

All colors, animations, and content can be easily customized through:
- `tailwind.config.ts` - Theme colors and animations
- Component props - Glow colors, variants, sizes
- Section content - Text, images, and data arrays

## 📄 License

This project is created for demonstration purposes.

## 🔒 Security

This project is safe for public deployment:
- No hardcoded API keys or secrets
- All environment variables are public (NEXT_PUBLIC_ prefix)
- Uses placeholder data (no CMS required)
- See `SECURITY.md` for detailed security guidelines
- See `.env.example` for configuration template

## 🤝 Support

For questions or support regarding Gersan Romania services, visit our contact section.
