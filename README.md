# Shannice Wangui Gichia - Portfolio Website

An award-winning, production-ready luxury interactive portfolio website for Shannice Wangui Gichia, an Executive Assistant specializing in virtual assistance, scheduling, and operations coordination.

## 🎯 Features

- **3D Immersive Experience** - Interactive Three.js scenes with particle systems and animations
- **Smooth Scroll** - Lenis smooth scroll for cinematic camera movements
- **Advanced Animations** - GSAP ScrollTrigger and Framer Motion animations
- **Luxury Design** - Premium glassmorphism UI with gradient color system
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized** - Server-rendered content with metadata, Open Graph, and JSON-LD schema
- **Contact Form** - EmailJS integration for direct message submission
- **Performance** - Optimized for 60 FPS with lazy loading and code splitting

## 🛠 Tech Stack

- **Frontend Framework** - Next.js 15 (App Router)
- **React** - React 19
- **Language** - TypeScript
- **Styling** - Tailwind CSS
- **3D Graphics** - Three.js, React Three Fiber, Drei
- **Animations** - GSAP, ScrollTrigger, Framer Motion
- **Scroll** - Lenis Smooth Scroll
- **Forms** - React Hook Form, Zod validation
- **Email** - EmailJS
- **Icons** - React Icons
- **Code Quality** - ESLint, Prettier

## 📁 Project Structure

```
shanniceportfolio/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Main page
│   ├── globals.css             # Global styles
│   └── fonts/                  # Custom fonts
├── components/
│   ├── 3d/                     # Three.js scenes
│   │   ├── Hero3D.tsx
│   │   ├── ParticleSystem.tsx
│   │   ├── CrystalSphere.tsx
│   │   └── ...
│   ├── sections/               # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   └── ...
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── CursorGlow.tsx
│   └── ui/                     # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── ...
├── lib/
│   ├── constants.ts            # Design tokens & constants
│   ├── animations.ts           # Animation utilities
│   ├── hooks.ts                # Custom React hooks
│   ├── validation.ts           # Form validation schemas
│   └── data.ts                 # Portfolio content
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── .env.local
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shanniceportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🎨 Design System

### Colors

- **Primary**: `#280B39` (Deep Purple)
- **Secondary**: `#5D2A7F` (Purple)
- **Accent**: `#8A5CF6` (Light Purple)
- **Light**: `#B78BFA` (Lighter Purple)
- **Lighter**: `#E9D9FF` (Lightest Purple)
- **Background**: `#F8F5FC` (Off-white)
- **Text**: `#111111` (Dark)
- **White**: `#FFFFFF`

### Typography

- **Headings**: Space Grotesk
- **Body**: Inter

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus indicators visible
- Semantic HTML
- Color contrast ratios met
- Reduced motion support

## 🔍 SEO

- Server-side rendering with Next.js
- Meta tags and Open Graph
- Twitter Cards
- JSON-LD Person schema
- Dynamic sitemap and robots.txt
- Fast Core Web Vitals
- Mobile-first indexing

## 📊 Performance

- Target 60 FPS animations
- Lazy loading for images and components
- Code splitting
- Image optimization
- CSS optimization
- Minified and compressed assets
- Lighthouse score: 90+

## 🌐 Deployment

### Deploy to Vercel

1. **Push to Git repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy

### Deploy to Other Platforms

The website can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Self-hosted servers

## 📚 Documentation

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Add scroll animations using hooks
4. Style with Tailwind CSS

### Creating 3D Scenes

1. Create a new component in `components/3d/`
2. Use React Three Fiber for rendering
3. Import Drei helpers for effects
4. Integrate with page using Suspense

### Form Integration

Forms use React Hook Form and Zod validation:
1. Define schema in `lib/validation.ts`
2. Create form component
3. Add validation and error handling
4. Submit via EmailJS

## 🐛 Known Issues

None at the moment. Please report any issues via GitHub Issues.

## 🤝 Contributing

Contributions are welcome! Please follow the project's code style and standards.

## 📄 License

This project is proprietary and belongs to Shannice Wangui Gichia.

## 👩‍💼 About Shannice

Shannice Wangui Gichia is an award-winning Executive Assistant based in Nairobi, Kenya. She specializes in executive scheduling, virtual assistance, and operations coordination for busy executives and entrepreneurs.

**Contact**: [hello@shannice.dev](mailto:hello@shannice.dev)

---

Built with ❤️ using modern web technologies | [Portfolio](https://shannice.dev)
