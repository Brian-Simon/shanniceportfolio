# Deployment Guide - Vercel

This guide covers deploying the Shannice Portfolio website to Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free tier available)
- EmailJS account and credentials configured

## Step-by-Step Deployment

### 1. Prepare Repository

Ensure your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

Make sure you have:
- ✅ All environment variables in `.env.local`
- ✅ Updated `lib/data.ts` with actual content
- ✅ Added images to `public/` directory
- ✅ Tested locally with `npm run dev`

### 2. Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel to access your GitHub repositories

### 3. Import Repository to Vercel

1. Click "New Project" on Vercel dashboard
2. Select "Import Git Repository"
3. Search for your repository (`shanniceportfolio`)
4. Click "Import"

### 4. Configure Project

On the import screen:

1. **Project Name**: `shannice-portfolio`
2. **Framework Preset**: `Next.js` (should auto-detect)
3. **Root Directory**: `.` (current directory)
4. **Environment Variables**: Add your variables

### 5. Add Environment Variables

Click "Environment Variables" and add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID: service_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: template_xxxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: xxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL: https://yourdomain.com
```

### 6. Deploy

Click "Deploy" and wait for the build to complete.

This typically takes 1-3 minutes.

## Post-Deployment

### 1. Custom Domain (Optional)

1. Go to project settings → "Domains"
2. Click "Add"
3. Enter your custom domain (e.g., `shannice.dev`)
4. Update DNS records if purchasing domain separately

### 2. SSL Certificate

Vercel automatically provides a free SSL certificate.

Your site is automatically accessible at `https://yourdomain.com`

### 3. Environment Variables Update

If you need to update environment variables later:

1. Go to project settings → "Environment Variables"
2. Add, edit, or delete variables
3. Redeploy to apply changes

### 4. Monitoring & Analytics

Vercel provides analytics including:

- Page load times
- Cache hits/misses
- Edge requests
- Build times
- Deployment history

Access these from your project dashboard.

## Continuous Deployment

With the GitHub integration, the site automatically deploys:

- ✅ On every push to `main` branch
- ✅ On pull requests (preview deployments)
- ✅ On merges to production

## Domain Setup

### Option A: Vercel Domains

1. In project settings, click "Domains"
2. Click "Add" → "Buy a Domain"
3. Search for available domains
4. Complete purchase

### Option B: External Domain

If you own a domain with another registrar:

1. In project settings, click "Domains"
2. Click "Add" → "Enter custom domain"
3. Update DNS records at your registrar

Common DNS record updates:
- Point root domain to Vercel nameservers
- Or create CNAME record pointing to Vercel domain

## SSL/TLS Certificate

Vercel automatically provides:

- ✅ Free SSL certificate (Let's Encrypt)
- ✅ Auto-renewal
- ✅ HTTPS enforcement
- ✅ HTTP/2 support

All HTTPS settings are automatic – no configuration needed.

## Build & Runtime Optimization

Vercel's Edge Network provides:

- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Static site generation
- ✅ Incremental static regeneration
- ✅ API route functions

## Monitoring Performance

### Web Vitals

Check Core Web Vitals in:
- Vercel Analytics dashboard
- Google Search Console
- Google PageSpeed Insights

### Error Tracking

Monitor errors in:
- Vercel dashboard → "Deployments"
- Browser console (client-side)
- Server logs (server-side)

## Rollback a Deployment

To revert to a previous deployment:

1. Go to project → "Deployments"
2. Find the desired deployment
3. Click "Redeploy"

This creates a new deployment from that commit.

## Preview Deployments

Vercel automatically creates preview deployments for:

- Pull requests
- Feature branches

Share preview links with others for review before merging.

## Environment-Specific Configuration

You can have different environments:

```
.env.local               # Local development
.env.production.local    # Production
```

Or use Vercel's environment variables UI for:
- Production
- Preview
- Development

## Troubleshooting Deployments

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Dependencies not installed
   - Incorrect configuration

Solution:
```bash
# Test build locally
npm run build

# Check for errors
npm run type-check
npm run lint
```

### Page Shows Blank

1. Check browser console for errors
2. Verify all imports are correct
3. Check environment variables are set
4. Rebuild deployment

### Contact Form Not Working

1. Verify EmailJS credentials in environment variables
2. Check EmailJS template ID and service ID
3. Test with EmailJS console
4. Check browser network tab for CORS issues

### Slow Performance

1. Check Core Web Vitals in Vercel Analytics
2. Optimize images with Next.js Image component
3. Enable caching headers
4. Use Vercel Edge Functions for API routes

## Cost

Vercel pricing for this project:

- **Hobby Tier** (Free):
  - Up to 6000 minutes build time/month
  - Unlimited deployments
  - Automatic HTTPS
  - Perfect for a portfolio

- **Pro Tier** ($20/month):
  - Unlimited build minutes
  - Priority support
  - Team collaboration

For a portfolio, the free tier is typically sufficient.

## Documentation

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)

## Support

- [Vercel Support](https://vercel.com/support)
- [Community Discord](https://vercel.com/discord)

---

Happy deploying! 🚀
