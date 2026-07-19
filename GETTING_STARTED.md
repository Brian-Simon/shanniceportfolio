# Getting Started Guide

Welcome! This is a complete, production-ready portfolio website for Shannice Wangui Gichia. Here's what you need to know to get started.

## What's Included ✅

This is a **complete, fully functional** portfolio website with:

### ✨ Features
- 🎨 **Luxury Design System** - Premium color palette and typography
- 📱 **Fully Responsive** - Desktop, tablet, and mobile optimized
- 🎬 **Advanced Animations** - GSAP, Framer Motion, smooth scrolling
- 📧 **Contact Form** - EmailJS integration ready
- ⚡ **High Performance** - Optimized for 90+ Lighthouse score
- 🔍 **SEO Ready** - Meta tags, JSON-LD, sitemap, robots.txt
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🚀 **Deployment Ready** - One-click deploy to Vercel

### 📦 Sections Included
1. **Hero** - Eye-catching hero with call-to-action buttons
2. **About** - Personal background and values
3. **Experience** - Interactive experience timeline
4. **Skills** - Categorized skills with progress bars
5. **Services** - Six services with detailed descriptions
6. **Projects** - Portfolio projects with modal details
7. **Achievements** - Animated statistics
8. **Testimonials** - Client testimonials carousel
9. **Contact** - Contact form with validation
10. **Footer** - Links and social media

## Quick Start (5 minutes)

### 1. Install Dependencies

```bash
cd shanniceportfolio
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local and add your EmailJS credentials
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Before Deployment ⚠️

Before deploying to production, you need to:

### 1. **Update Portfolio Content** (`lib/data.ts`)
   - Add your actual information
   - Update contact email
   - Update phone number
   - Update social media links
   - Customize text and descriptions

### 2. **Add Images** (`public/` directory)
   - `favicon.ico` - Your logo
   - `og-image.jpg` - Social media image (1200x630)
   - `apple-touch-icon.png` - iOS icon (180x180)
   - `resume.pdf` - Your CV/Resume
   - Project screenshots in `projects/` folder

### 3. **Setup EmailJS** (for contact form)
   - Create account at [emailjs.com](https://www.emailjs.com/)
   - Create email service
   - Create email template
   - Add Service ID, Template ID, Public Key to `.env.local`

### 4. **Test Locally**

```bash
npm run build
npm start
```

Test all functionality:
- ✅ Navigation works
- ✅ Sections scroll smoothly
- ✅ Contact form submits
- ✅ Responsive on mobile
- ✅ No console errors

### 5. **Lint & Format**

```bash
npm run lint:fix
npm run format
npm run type-check
```

## Deployment to Vercel 🚀

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variables
6. Click "Deploy"

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## File Structure Reference

```
key files/folders:

- lib/data.ts          ← UPDATE YOUR CONTENT HERE
- public/              ← PUT YOUR IMAGES HERE
- .env.local           ← ADD YOUR EMAIL CREDENTIALS
- app/page.tsx         ← Main portfolio page
- components/          ← All UI sections
```

## Documentation

- **[README.md](README.md)** - Project overview
- **[SETUP.md](SETUP.md)** - Detailed setup instructions
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - How to deploy
- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Technical architecture

## Common Tasks

### Update Your Information

Edit `lib/data.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    email: 'your@email.com',
    location: 'Your City, Country',
    // ... update all fields
  },
  experience: [
    // Add your work history
  ],
  skills: [
    // Add your skills
  ],
  // ... update all sections
};
```

### Add Your Images

1. Place images in `public/` directory
2. Update references in components if needed
3. Ensure images are optimized (compressed)

### Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#F8F5FC',
    800: '#280B39',
    // ... update color palette
  },
};
```

### Modify Text & Typography

Edit `app/globals.css` and `tailwind.config.ts`:

```typescript
fontFamily: {
  grotesk: ['Space Grotesk', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
};
```

## Troubleshooting

### Port 3000 Already in Use

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Contact Form Not Working

1. Check EmailJS credentials in `.env.local`
2. Verify template variables match
3. Test in [EmailJS Dashboard](https://www.emailjs.com/)

### Images Not Showing

1. Ensure files are in `public/` directory
2. Check file paths in components
3. Verify file names match exactly

## Performance Checklist

Before going live:

- [ ] All images optimized and compressed
- [ ] Content updated with actual information
- [ ] Contact form tested and working
- [ ] Links all working (internal and external)
- [ ] Mobile responsive tested
- [ ] No console errors
- [ ] Lighthouse score 90+
- [ ] Form submissions working
- [ ] Social media links updated
- [ ] Domain configured (if custom domain)

## Support & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GSAP Docs](https://gsap.com/docs)

## Key Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **GSAP** - Advanced animations
- **Framer Motion** - Declarative animations
- **React Hook Form** - Form handling
- **Zod** - Form validation
- **EmailJS** - Email sending

## Next Steps

1. ✅ **Install dependencies** → `npm install`
2. ✅ **Update content** → Edit `lib/data.ts`
3. ✅ **Add images** → Place in `public/`
4. ✅ **Configure EmailJS** → Add credentials to `.env.local`
5. ✅ **Test locally** → `npm run dev`
6. ✅ **Deploy** → Push to GitHub and connect Vercel

## Questions?

Check the documentation files:
- `SETUP.md` - Setup issues
- `DEPLOYMENT.md` - Deployment issues
- `ARCHITECTURE.md` - Technical questions
- `README.md` - General information

---

**You now have a world-class portfolio website!** 🎉

The code is production-ready. All you need to do is add your content and images, then deploy.

Good luck! 🚀
