# Project Architecture

A comprehensive overview of the Shannice Portfolio website's structure and design patterns.

## Directory Structure

```
shanniceportfolio/
│
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Main portfolio page
│   ├── globals.css               # Global styles
│   ├── fonts/                    # Custom fonts
│   └── README.md                 # Font setup instructions
│
├── components/                    # React components
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx           # Button component
│   │   ├── Card.tsx             # Card wrapper component
│   │   ├── Badge.tsx            # Badge & Tag components
│   │   └── index.ts             # UI exports
│   │
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx             # Hero section
│   │   ├── About.tsx            # About section
│   │   ├── Experience.tsx       # Experience timeline
│   │   ├── Skills.tsx           # Skills showcase
│   │   ├── Services.tsx         # Services grid
│   │   ├── Projects.tsx         # Projects portfolio
│   │   ├── Achievements.tsx     # Animated stats
│   │   ├── Testimonials.tsx     # Testimonials carousel
│   │   ├── Contact.tsx          # Contact form
│   │   └── index.ts             # Section exports
│   │
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer component
│   │   ├── CursorGlow.tsx       # Custom cursor effect
│   │   └── index.ts             # Layout exports
│   │
│   └── 3d/                      # Three.js 3D components
│       ├── ParticleSystem.tsx   # Particle effects (placeholder)
│       ├── CrystalSphere.tsx    # Crystal sphere (placeholder)
│       └── HeroScene.tsx        # Hero 3D scene (placeholder)
│
├── lib/                          # Utility functions & hooks
│   ├── constants.ts             # Design tokens & constants
│   ├── animations.ts            # Animation utilities (GSAP)
│   ├── hooks.ts                 # Custom React hooks
│   ├── validation.ts            # Form validation schemas (Zod)
│   ├── data.ts                  # Portfolio content & data
│   ├── index.ts                 # Exports
│   └── README.md                # Utilities documentation
│
├── public/                       # Static assets
│   ├── favicon.ico              # Website favicon
│   ├── apple-touch-icon.png     # iOS icon
│   ├── icon-192.png             # PWA icon
│   ├── icon-512.png             # PWA icon
│   ├── og-image.jpg             # Open Graph image
│   ├── resume.pdf               # CV/Resume
│   ├── robots.txt               # SEO robots
│   ├── sitemap.xml              # SEO sitemap
│   ├── manifest.json            # PWA manifest
│   ├── README.md                # Assets documentation
│   ├── projects/                # Project screenshots
│   └── testimonials/            # Testimonial images
│
├── .github/                      # GitHub configuration
│   └── copilot-instructions.md  # Copilot setup guide
│
├── Configuration Files
│   ├── tsconfig.json            # TypeScript configuration
│   ├── tailwind.config.ts       # Tailwind CSS config
│   ├── postcss.config.js        # PostCSS config
│   ├── next.config.js           # Next.js configuration
│   ├── .eslintrc.json           # ESLint rules
│   ├── .prettierrc               # Prettier config
│   ├── .gitignore               # Git ignore rules
│   ├── .env.local               # Environment variables (LOCAL)
│   ├── .env.example             # Environment template
│   └── package.json             # Dependencies
│
├── Documentation
│   ├── README.md                # Project overview
│   ├── SETUP.md                 # Setup instructions
│   ├── DEPLOYMENT.md            # Deployment guide
│   └── ARCHITECTURE.md          # This file
│
└── Root Files
    ├── README.md
    ├── SETUP.md
    └── DEPLOYMENT.md
```

## Component Architecture

### UI Components (`components/ui/`)

Reusable, atomic components with consistent styling:

```tsx
<Button variant="primary" size="lg" icon={<Icon />}>
  Click Me
</Button>

<Card variant="glass" hover>
  <h2>Content</h2>
</Card>

<Badge variant="primary">New</Badge>
```

### Section Components (`components/sections/`)

Full-page sections with animations and interactions:

```tsx
export const Hero = () => {
  // Hero section with animations
};

export const About = () => {
  // About section
};
```

### Layout Components (`components/layout/`)

Top-level layout wrappers:

```tsx
<Header />      // Navigation bar
<Footer />      // Footer
<CursorGlow />  // Custom cursor
```

## Data Flow

### Data Structure (`lib/data.ts`)

Centralized data management for portfolio content:

```typescript
export const portfolioData = {
  personal: { /* Personal info */ },
  experience: [ /* Work history */ ],
  skills: [ /* Skills list */ ],
  services: [ /* Services offered */ ],
  projects: [ /* Portfolio projects */ ],
  testimonials: [ /* Client testimonials */ ],
  // ... more data
};
```

### Usage Pattern

```tsx
import { portfolioData } from '@/lib/data';

export const Skills = () => {
  return (
    <div>
      {portfolioData.skills.map(skill => (
        <div key={skill.id}>{skill.name}</div>
      ))}
    </div>
  );
};
```

## Animation Architecture

### GSAP Animations (`lib/animations.ts`)

Utility functions for common animations:

```typescript
// Fade in animation
fadeInAnimation(element, duration);

// Scale animation
scaleAnimation(element, duration);

// Stagger animation
staggerAnimation(elements, { duration, stagger });

// Float animation
floatAnimation(element, duration);
```

### Custom Hooks (`lib/hooks.ts`)

React hooks for animations with lifecycle management:

```typescript
const ref = useFadeInOnScroll();
const ref = useFloatAnimation(3);
const ref = useMouseParallax();
```

### Framer Motion

Used for declarative animations:

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  Animated content
</motion.div>
```

## Form Architecture

### Validation (`lib/validation.ts`)

Zod schemas for form validation:

```typescript
export const ContactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  // ... more fields
});

type ContactFormData = z.infer<typeof ContactFormSchema>;
```

### Form Implementation

React Hook Form + Zod resolver:

```tsx
const { register, handleSubmit, formState } = useForm({
  resolver: zodResolver(ContactFormSchema),
});
```

## Styling Architecture

### Design System (`lib/constants.ts`)

Centralized design tokens:

```typescript
export const colors = {
  primary: '#280B39',
  secondary: '#5D2A7F',
  // ... more colors
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  // ... more spacing
};
```

### Tailwind CSS (`tailwind.config.ts`)

Configured with custom colors and utilities:

```typescript
colors: {
  primary: { /* color palette */ },
  luxury: { /* luxury colors */ },
},
plugins: [
  // Glass effect
  // Text gradient
  // GPU acceleration
]
```

### Global Styles (`app/globals.css`)

Global CSS includes:
- Custom cursor styles
- Smooth scrolling
- Selection styles
- Accessibility utilities
- Performance optimizations

## State Management

The app uses local component state with:

- **React Hooks**: `useState`, `useRef`, `useEffect`
- **Framer Motion**: Gesture and animation state
- **Context API**: For shared state (if needed)

For global state:
```tsx
// Example: Contact form state
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState('idle');
```

## Performance Optimizations

### Code Splitting

- **Dynamic imports** with `next/dynamic`
- **Suspense boundaries** for loading states
- **Route-based code splitting** with App Router

### Image Optimization

- Next.js `Image` component for optimization
- Lazy loading with `loading="lazy"`
- Responsive images with `sizes` prop
- WebP format support

### Caching Strategy

- Static generation (SSG) for static content
- Incremental Static Regeneration (ISR) for dynamic content
- Browser cache headers for assets
- Edge caching with Vercel

### Bundle Optimization

- Tree shaking for unused code
- CSS purging with Tailwind
- Minification and compression
- Dynamic imports for heavy libraries

## SEO Implementation

### Meta Tags (`app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  title: "...",
  description: "...",
  keywords: [...],
  openGraph: {...},
  twitter: {...},
};
```

### JSON-LD Schema

Structured data for search engines:

```tsx
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    // ... schema data
  }
</script>
```

### Sitemap & Robots

- `public/sitemap.xml` - URL list for crawlers
- `public/robots.txt` - Crawler directives

## Accessibility Features

- **Semantic HTML** for screen readers
- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for keyboard users
- **Color contrast** ratios meet WCAG AA
- **Reduced motion** support
- **Form validation** with error messages

## Third-Party Integrations

### EmailJS

Contact form email submission:

```typescript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

await emailjs.send(
  serviceId,
  templateId,
  templateParams,
);
```

### React Icons

Consistent icon library:

```tsx
import { FiMenu, FiX, FiArrowDown } from 'react-icons/fi';
```

## Development Workflow

### File Naming Conventions

- Components: `PascalCase.tsx` (e.g., `Button.tsx`)
- Utilities: `camelCase.ts` (e.g., `animations.ts`)
- Styles: Global in `globals.css`, component-scoped with Tailwind

### Formatting & Linting

- **ESLint**: Code quality rules
- **Prettier**: Code formatting
- **TypeScript**: Type safety

### Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm run lint       # Check code quality
npm run lint:fix   # Fix linting issues
npm run format     # Format code
npm run type-check # TypeScript check
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Desktop, tablet, mobile responsive design
- Progressive enhancement for older browsers
- Fallbacks for CSS features

## Performance Targets

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.8s

## Security Measures

- **Content Security Policy** (CSP) headers
- **XSS Protection** with proper escaping
- **CORS** configuration
- **Environment variable** protection
- **HTTPS** enforcement
- **Input validation** with Zod

## Deployment Architecture

### Vercel Deployment

- **Automatic deployments** on push to main
- **Preview deployments** for pull requests
- **Zero-config** setup
- **Global CDN** for fast delivery
- **Automatic SSL** certificates
- **Analytics** included

## Monitoring & Analytics

- **Vercel Analytics** for Core Web Vitals
- **Google Analytics** integration (optional)
- **Error tracking** in browser console
- **Build logs** available in Vercel dashboard

## Scaling Considerations

For future enhancements:

- **Database**: Add database for CMS if needed
- **API Routes**: Additional backend functionality
- **Authentication**: User accounts if needed
- **Payment Integration**: Booking/transactions
- **Admin Dashboard**: Content management
- **Multi-language**: i18n support

---

This architecture provides a scalable, maintainable foundation for the portfolio website.
