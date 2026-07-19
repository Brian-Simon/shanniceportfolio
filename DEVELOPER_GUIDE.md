# Developer Quick Reference

Fast lookup guide for common development tasks.

## 🚀 Quick Start

```bash
# Install & Run
npm install
npm run dev

# Navigate to http://localhost:3000
```

## 📁 File Locations

| Need to... | File Location |
|-----------|---------------|
| Add portfolio content | `lib/data.ts` |
| Change colors | `tailwind.config.ts` |
| Add custom animation | `lib/animations.ts` |
| Create new component | `components/ui/` or `components/sections/` |
| Add environment variable | `.env.local` |
| Add public assets | `public/` directory |
| Change metadata/SEO | `app/layout.tsx` |
| Modify global styles | `app/globals.css` |

## 🎨 Common Customizations

### Change Primary Color

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    800: '#YOUR_COLOR_HERE',
    // ...
  },
}
```

### Update Social Links

Edit `lib/data.ts`:

```typescript
social: {
  linkedin: 'https://linkedin.com/...',
  twitter: 'https://twitter.com/...',
}
```

### Add New Skill

Edit `lib/data.ts`:

```typescript
skills: [
  // ...existing
  {
    name: 'New Skill',
    category: 'Core',
    level: 90,
    icon: '🎯',
  },
]
```

### Create Custom Animation

Use `lib/animations.ts`:

```typescript
export const myAnimation = (element) => {
  gsap.to(element, { /* animation props */ });
};
```

## 🧩 Component Usage

### Button Component

```tsx
import { Button } from '@/components/ui/Button';

<Button
  variant="primary"  // primary, secondary, outline, glass
  size="lg"          // sm, md, lg
  icon={<Icon />}
  loading={false}
  fullWidth={false}
>
  Click Me
</Button>
```

### Card Component

```tsx
import { Card } from '@/components/ui/Card';

<Card
  variant="glass"    // glass, dark, gradient
  hover={true}
  delay={0}
>
  Your content
</Card>
```

### Badge Component

```tsx
import { Badge, Tag } from '@/components/ui/Badge';

<Badge variant="primary">New</Badge>
<Tag label="React" onRemove={() => {}} />
```

## 🎬 Animation Hooks

### Fade In On Scroll

```tsx
const ref = useFadeInOnScroll();

return <div ref={ref}>Content fades in on scroll</div>;
```

### Float Animation

```tsx
const ref = useFloatAnimation(3); // 3s duration

return <div ref={ref}>Floating element</div>;
```

### Mouse Parallax

```tsx
const ref = useMouseParallax();

return <div ref={ref}>Parallax on mouse move</div>;
```

## 📝 Form Integration

### Contact Form Example

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from '@/lib/validation';

const { register, formState: { errors }, handleSubmit } = useForm({
  resolver: zodResolver(ContactFormSchema),
});
```

## 🎯 Navigation

### Scroll to Section

```tsx
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
```

### Update Active Nav Item

Update header based on scroll position (handled in `Header.tsx`).

## 🔍 Debugging

### Check TypeScript Errors

```bash
npm run type-check
```

### Run Linter

```bash
npm run lint
npm run lint:fix  # Auto-fix
```

### Format Code

```bash
npm run format
```

### View Build Output

```bash
npm run build
npm start
```

## 📱 Responsive Design

### Breakpoints

```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Usage in Tailwind

```tsx
<div className="text-sm md:text-lg lg:text-xl">
  Responsive text
</div>
```

## 🎨 Color System

```typescript
// Primary palette
primary-50   #F8F5FC  (lightest)
primary-100  #f0e4f8
primary-400  #b78bfa
primary-600  #6d28d9
primary-700  #5D2A7F
primary-800  #280B39  (darkest)

// Use in components
className="bg-primary-700 text-primary-50"
```

## 📦 Environment Variables

Required:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Optional:
```env
NEXT_PUBLIC_SITE_URL=https://shannice.dev
NEXT_PUBLIC_ANALYTICS_ID=G_...
```

## 🚨 Common Issues & Solutions

### Issue: Port 3000 in use
```bash
# Kill process
lsof -i :3000
kill -9 <PID>
```

### Issue: Module not found
```bash
# Clear and reinstall
rm -rf node_modules .next
npm install
```

### Issue: TypeScript errors
```bash
npm run type-check
# Fix errors shown
```

### Issue: Styles not applying
- Check class name spelling
- Ensure Tailwind is processing file
- Clear `.next` folder

### Issue: Images not loading
- Check file exists in `public/`
- Use correct path: `/image.jpg`
- Check file size (optimize if large)

## 🔄 Deployment Checklist

- [ ] Update `lib/data.ts` with content
- [ ] Add images to `public/`
- [ ] Configure `.env.local`
- [ ] Test with `npm run dev`
- [ ] Run `npm run build`
- [ ] Run `npm run lint:fix`
- [ ] Run `npm run format`
- [ ] Commit and push to GitHub
- [ ] Deploy to Vercel
- [ ] Test live site

## 📚 Key Files to Know

```
app/layout.tsx          → Metadata, Google Fonts
app/globals.css         → Global styles
lib/data.ts             → All portfolio content
tailwind.config.ts      → Design tokens
components/sections/    → Page sections
```

## 🎯 Performance Tips

1. **Images**: Use Next.js Image component
2. **Code**: Use dynamic imports for heavy components
3. **Styles**: Keep CSS scoped with Tailwind
4. **Animations**: Use GSAP for performance
5. **Bundles**: Check with `npm run analyze`

## 🔗 Important Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind Docs](https://tailwindcss.com)
- [GSAP Docs](https://gsap.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [React Hook Form](https://react-hook-form.com)

## 💾 Git Workflow

```bash
# Create branch
git checkout -b feature/new-feature

# Make changes
# ...

# Commit
git add .
git commit -m "Add new feature"

# Push
git push origin feature/new-feature

# Create PR on GitHub
```

## 🎓 Component Structure Template

```tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFadeInOnScroll } from '@/lib/hooks';

export const MyComponent: React.FC = () => {
  const ref = useFadeInOnScroll();
  const [state, setState] = useState(false);

  return (
    <section ref={ref} className="relative py-20">
      {/* Content */}
    </section>
  );
};
```

## 📋 Inline Documentation Template

```tsx
/**
 * Component name and brief description
 * @param prop1 - Description
 * @param prop2 - Description
 * @returns Component JSX
 */
export const MyComponent: React.FC<Props> = ({
  prop1,
  prop2,
}) => {
  // Implementation
};
```

## ✅ Before Pushing Code

```bash
npm run lint:fix    # Fix linting issues
npm run format      # Format code
npm run type-check  # Check TypeScript
npm run build       # Verify build works
```

---

**Need more help?** Check the full documentation:
- README.md
- SETUP.md
- ARCHITECTURE.md
- DEPLOYMENT.md
