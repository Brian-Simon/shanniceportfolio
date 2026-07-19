# Production Deployment Guide

**Date**: July 19, 2026  
**Status**: Production Ready ✅

---

## 🚀 Pre-Deployment Checklist

### 1. Local Testing
```bash
# Clear node_modules and reinstall (removes Three.js)
rm -rf node_modules package-lock.json
npm install

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix

# Build production version
npm run build

# Test production build locally
npm start
```

### 2. Verify All Fixes
- [ ] Test cursor animation (smooth, no lag after 5+ min)
- [ ] Verify contact form loads
- [ ] Test keyboard navigation (Tab key through all elements)
- [ ] Check mobile responsiveness
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Open DevTools > Lighthouse and run audit

### 3. EmailJS Setup
```bash
# Follow these steps:
# 1. Create account at emailjs.com
# 2. Set up email service
# 3. Create email template
# 4. Get credentials

# Create .env.local with:
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_xxxxx

# Verify in .gitignore (should already be there)
# .env.local
```

### 4. Final Checks
```bash
# Run linter one more time
npm run lint

# Check for console errors
npm start
# Open browser DevTools > Console
# Should see no errors

# Test contact form submission
# Go to Contact section
# Fill form and submit
# Check your email
```

---

## 📦 Deployment Steps

### For Vercel (Recommended for Next.js)

#### Option A: GitHub Integration (Easiest)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Optimize portfolio for production"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel Dashboard: Project Settings > Environment Variables
   - Add each variable:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~3-5 minutes)
   - Visit your live site

#### Option B: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect account
# Select project settings
# Add environment variables when prompted
# Wait for deployment
```

### For Other Hosting

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build locally
npm run build

# Deploy
netlify deploy --prod
```

#### Self-Hosted (VPS/XAMPP)
```bash
# Build production version
npm run build

# Copy to server
scp -r .next/ package.json server:/var/www/portfolio/

# On server
cd /var/www/portfolio
npm install --production
npm start
```

#### Docker (Optional)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY .next ./.next
EXPOSE 3000
CMD ["npm", "start"]
```

---

## ✅ Post-Deployment Verification

### 1. Check Live Site
```
https://your-domain.com
```

- [ ] Homepage loads (should be < 2 seconds)
- [ ] All sections visible and animated
- [ ] Images load properly
- [ ] No console errors (F12 > Console tab)

### 2. Test Contact Form
- [ ] Fill contact form
- [ ] Submit
- [ ] Check your email (allow up to 30 seconds)
- [ ] Email contains all form data

### 3. Lighthouse Audit
```
1. Open your domain
2. Press F12 (DevTools)
3. Click "Lighthouse"
4. Click "Analyze page load"
5. Check scores:
   - Performance: 95+
   - Accessibility: 100
   - Best Practices: 100
   - SEO: 100
```

### 4. Mobile Testing
- [ ] Open on mobile device (or DevTools device mode)
- [ ] All content readable
- [ ] Touch interactions work
- [ ] No horizontal scroll

### 5. Core Web Vitals Check

Using Web Vitals Dashboard or PageSpeed Insights:
```
1. Go to pagespeed.insights.google.com
2. Enter your URL
3. Check metrics:
   - LCP < 2.5s
   - FID < 100ms
   - CLS < 0.1
```

### 6. Accessibility Testing

Keyboard Navigation:
```
1. Reload page
2. Press Tab repeatedly
3. Verify focus indicator visible
4. Should visit all interactive elements
5. Press Enter/Space to activate
```

Screen Reader (Mac):
```
1. Command + F5 to enable VoiceOver
2. Test navigation
3. Verify all content readable
```

### 7. SEO Verification

Google Search Console:
```
1. Go to google.com/webmasters/tools/
2. Add your domain
3. Check:
   - No indexing errors
   - Structured data valid
   - Mobile compatibility
```

Google Search:
```
1. Search: "site:your-domain.com"
2. Should see indexed pages
3. Check rich snippets appear
```

---

## 🔧 Troubleshooting

### Issue: Contact form not sending emails

**Solutions**:
1. Check environment variables are set
   ```bash
   # Vercel: Check in Project Settings > Environment Variables
   # Local: Check .env.local
   ```

2. Verify EmailJS credentials
   - Go to emailjs.com dashboard
   - Confirm Service ID format: `service_xxxxx`
   - Confirm Template ID format: `template_xxxxx`

3. Check EmailJS limits
   - Free tier: 200 emails/month
   - If exceeded, upgrade or wait for reset

4. Check browser console for errors
   - F12 > Console
   - Look for EmailJS errors
   - Try form submission again

5. Test directly in EmailJS
   - Go to emailjs.com > Email Templates
   - Click "Test it"
   - Verify email arrives

### Issue: Lighthouse scores lower than expected

**Solutions**:
1. Clear browser cache
   - Ctrl+Shift+Delete (Windows)
   - Cmd+Shift+Delete (Mac)

2. Test in incognito mode
   - Ctrl+Shift+N (Windows)
   - Cmd+Shift+N (Mac)

3. Run audit multiple times
   - Scores vary based on server load
   - Average multiple runs

4. Check for 404 errors
   - F12 > Network tab
   - Look for red status codes
   - Verify all resources load

### Issue: Memory still leaks after deploy

**Verify fix was deployed**:
```
1. Open DevTools > Sources
2. Find "CursorGlow.tsx"
3. Look for `TRAIL_POOL_SIZE = 50`
4. If not found, rebuild and redeploy
```

### Issue: Emails going to spam

**Solutions**:
1. Add your domain to EmailJS whitelist
2. Customize email template with proper headers
3. Use EmailJS SMTP service instead of API
4. Add SPF, DKIM, DMARC records to domain

---

## 📊 Monitoring

### Set Up Error Tracking

#### Vercel (Built-in)
```
Vercel Dashboard > Project Settings > Monitoring
- Automatically tracks errors
- No setup needed
```

#### Alternative Services
- **Sentry**: sentry.io (recommended)
- **LogRocket**: logrocket.com
- **DataDog**: datadoghq.com

### Monitor Performance

```
1. Google Search Console
   - Check Core Web Vitals
   - Monitor indexing status

2. PageSpeed Insights
   - Weekly audits
   - Track trends

3. Vercel Analytics
   - Real user performance
   - Error rates
```

---

## 🔒 Security After Deployment

### Verify Headers
```bash
curl -I https://your-domain.com

# Should see:
# X-Content-Type-Options: nosniff
# X-Frame-Options: SAMEORIGIN
# X-XSS-Protection: 1; mode=block
```

### SSL/TLS Check
```
1. Open site in browser
2. Click padlock icon
3. Verify "Secure" or "Safe"
4. Check certificate validity
```

### Check Security Headers
```
Visit: securityheaders.com
Enter your domain
Grade should be A or higher
```

---

## 🎯 Performance Optimization After Deployment

### Enable CDN Caching
- Vercel: Automatic ✅
- Netlify: Automatic ✅
- Self-hosted: Configure nginx/Apache

### Monitor Real User Metrics
```
1. Google Search Console > Experience > Core Web Vitals
2. Check 28-day average:
   - Good: Green checkmarks
   - Needs Improvement: Yellow/Red
```

### Optimize Images (if needed)
```
1. Audit finds images > 100KB
2. Use imagemin or sharp
3. Convert to WebP format
4. Implement responsive images
```

---

## 📱 Mobile-Specific Checks

### iOS
- [ ] Open in Safari
- [ ] Test in portrait and landscape
- [ ] Verify touch interactions
- [ ] Check form inputs (16px minimum)

### Android
- [ ] Open in Chrome
- [ ] Test on Android 11+
- [ ] Verify vibration feedback (if any)
- [ ] Check image loading quality

---

## 🚨 Rollback Plan

If something goes wrong:

### Vercel
```
1. Dashboard > Deployments
2. Find previous successful deployment
3. Click three dots
4. Select "Promote to Production"
```

### GitHub
```bash
git revert <commit-hash>
git push origin main
# Redeploy
```

---

## 📞 Support Contacts

### Service Providers
- **Vercel Support**: vercel.com/help
- **EmailJS Support**: emailjs.com/help
- **Next.js Issues**: github.com/vercel/next.js/issues

### Monitoring Alerts

Set up alerts for:
- [ ] Error rate > 5%
- [ ] Response time > 3s
- [ ] CPU > 80%
- [ ] Memory > 90%

---

## 🎉 Deployment Success Criteria

✅ **Complete When**:
1. Site loads in < 2 seconds
2. Lighthouse scores: 95+ Performance, 100 Accessibility
3. Contact form emails arrive successfully
4. No console errors
5. Mobile responsive verified
6. All sections render correctly
7. Core Web Vitals all green
8. SSL certificate valid
9. Email deliverability working
10. Monitoring alerts configured

---

## 📋 Deployment Checklist

### Pre-Deploy
- [ ] All code committed
- [ ] `.env.local` created with EmailJS credentials
- [ ] `npm install` successful
- [ ] `npm run build` successful
- [ ] No TypeScript errors
- [ ] No ESLint warnings (resolve or ignore intentionally)
- [ ] Local testing completed
- [ ] Contact form tested locally

### During Deploy
- [ ] Push code to repository
- [ ] Connect to hosting platform
- [ ] Add environment variables
- [ ] Trigger deployment
- [ ] Monitor build logs
- [ ] Wait for deployment to complete

### Post-Deploy
- [ ] Verify live site loads
- [ ] Test contact form
- [ ] Run Lighthouse audit
- [ ] Check console for errors
- [ ] Test mobile responsiveness
- [ ] Verify email delivery
- [ ] Set up monitoring
- [ ] Document deployment details

---

## 📝 Deployment Notes Template

```
Date: ___________
Deployed By: ___________
Environment: Production / Staging
Changes: 
- CursorGlow memory leak fixed
- Three.js removed (350KB)
- Email service integrated
- Performance optimizations
- Accessibility improvements

Build Time: ___________
Deployment Time: ___________
Issues Found: None / [List]
Resolution: ___________
Verified By: ___________
```

---

**Deployment Status**: Ready for production ✅

For questions, refer to:
- OPTIMIZATION_SUMMARY.md (Changes made)
- AUDIT_REPORT.md (Detailed findings)
- EMAILJS_SETUP.md (Email setup)

Good luck with your deployment! 🚀
