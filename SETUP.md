# Setup Guide - Shannice Portfolio Website

This guide will walk you through setting up and deploying the portfolio website.

## Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, or pnpm package manager
- Git
- Code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your EmailJS credentials:

```env
# Get these from https://www.emailjs.com/
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxxxxxx

# Optional
NEXT_PUBLIC_SITE_URL=https://shannice.dev
```

### 3. Add Fonts (Optional)

By default, the project uses Google Fonts which are automatically imported. If you want to use local fonts:

1. Download Space Grotesk and Inter from Google Fonts or Fontsource
2. Place `.woff2` files in `app/fonts/` directory
3. Uncomment the `localFont` imports in `app/layout.tsx`

### 4. Add Images and Assets

Place required images in the `public/` directory:

- `favicon.ico` - Website favicon
- `apple-touch-icon.png` - iOS icon (180x180)
- `icon-192.png` - PWA icon (192x192)
- `icon-512.png` - PWA icon (512x512)
- `og-image.jpg` - Social media sharing (1200x630)
- `resume.pdf` - CV/Resume
- `projects/` - Project screenshots

See `public/README.md` for detailed image specifications.

### 5. Update Content

Edit the portfolio content in `lib/data.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    email: 'your@email.com',
    // ... other fields
  },
  // ... rest of data
};
```

## Development

### Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## Code Quality

### Lint Code

```bash
npm run lint
```

### Fix Linting Issues

```bash
npm run lint:fix
```

### Format Code

```bash
npm run format
```

### Type Check

```bash
npm run type-check
```

## EmailJS Setup

To enable contact form functionality:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create an email service
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Add them to `.env.local`

### Email Template Setup

Create a template in EmailJS with these variables:

```
Name: {{name}}
Email: {{email}}
Subject: {{subject}}
Message: {{message}}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your GitHub repository
4. Add environment variables in Vercel settings
5. Deploy

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy from local
vercel
```

### Deploy to Other Platforms

#### Netlify

1. Push code to GitHub
2. Connect repository on Netlify
3. Add environment variables
4. Deploy

#### AWS Amplify

1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

#### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t shannice-portfolio .
docker run -p 3000:3000 shannice-portfolio
```

## Performance Optimization

### Image Optimization

- Use Next.js Image component for images
- Optimize all images with tools like:
  - TinyPNG
  - ImageOptim
  - Squoosh

### Code Splitting

The project uses automatic code splitting with Next.js. Components are lazy-loaded with `Suspense`.

### Caching Strategy

- Static files are cached for 1 year
- Dynamic pages are revalidated regularly
- API responses are cached appropriately

## SEO Optimization

The site includes:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (social media sharing)
- ✅ Twitter Card tags
- ✅ JSON-LD Person schema
- ✅ Sitemap (`public/sitemap.xml`)
- ✅ Robots.txt (`public/robots.txt`)
- ✅ Mobile-friendly responsive design
- ✅ Fast Core Web Vitals (target: 90+ Lighthouse score)

## Accessibility

The site meets WCAG 2.1 AA standards:

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast ratios
- ✅ Reduced motion support

## Troubleshooting

### Port Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Contact Form Not Working

1. Check `.env.local` has correct EmailJS credentials
2. Verify EmailJS template variables match form data
3. Check browser console for errors
4. Test with EmailJS dashboard

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Three.js Documentation](https://threejs.org/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)

## Support

For issues or questions:

1. Check the README.md
2. Review the code comments
3. Check browser console for errors
4. Test in a different browser
5. Review environment variables

## License

This project is proprietary and belongs to Shannice Wangui Gichia.

---

Need help? Feel free to reach out to hello@shannice.dev
