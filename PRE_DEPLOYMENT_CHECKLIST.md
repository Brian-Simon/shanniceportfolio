# Pre-Deployment Checklist

Complete this checklist before deploying to production.

## Content Updates

- [ ] Updated `lib/data.ts` with:
  - [ ] Full name and professional title
  - [ ] Email address
  - [ ] Phone number
  - [ ] Location
  - [ ] Professional summary
  - [ ] All work experience entries
  - [ ] All skills with descriptions
  - [ ] All services offered
  - [ ] All portfolio projects
  - [ ] All testimonials with correct names
  - [ ] Education information
  - [ ] Languages
  - [ ] Social media links

## Media Assets

- [ ] Added images to `public/`:
  - [ ] `favicon.ico` - Website favicon
  - [ ] `apple-touch-icon.png` - iOS icon (180x180)
  - [ ] `og-image.jpg` - Social media image (1200x630)
  - [ ] `resume.pdf` - CV or resume
  - [ ] Project screenshots in `projects/` folder
  - [ ] All images are optimized (compressed)
  - [ ] All images are correct file format

## Configuration

- [ ] Configured `.env.local`:
  - [ ] Added EmailJS Service ID
  - [ ] Added EmailJS Template ID
  - [ ] Added EmailJS Public Key
  - [ ] (Optional) Added custom domain if using
  - [ ] (Optional) Added Google Analytics ID

## Customization

- [ ] Updated colors if desired:
  - [ ] Checked `tailwind.config.ts`
  - [ ] Verified primary color palette

- [ ] Updated typography if desired:
  - [ ] Checked `app/layout.tsx` for fonts
  - [ ] Verified heading and body fonts look good

- [ ] Updated header/navigation:
  - [ ] Verified navigation items are correct
  - [ ] Tested active state highlighting

## Testing - Functionality

- [ ] Navigation:
  - [ ] All nav links work and scroll to sections
  - [ ] Mobile hamburger menu works
  - [ ] Active nav item highlights correctly

- [ ] Contact Form:
  - [ ] All form fields display properly
  - [ ] Form validation works
  - [ ] Can submit form successfully
  - [ ] Confirmation message appears
  - [ ] Email is received in inbox

- [ ] Links & CTAs:
  - [ ] Download CV button works
  - [ ] All social media links work
  - [ ] All external links open correctly
  - [ ] Email links work

- [ ] Animations:
  - [ ] Smooth scroll works
  - [ ] Section animations trigger
  - [ ] Hover effects work
  - [ ] Particles/cursor effects work

## Testing - Responsive

- [ ] Desktop (1920px):
  - [ ] Layout looks perfect
  - [ ] No overflow or misalignment

- [ ] Tablet (768px):
  - [ ] Layout adapts properly
  - [ ] Touch interactions work
  - [ ] Buttons are clickable

- [ ] Mobile (375px):
  - [ ] Layout is mobile-optimized
  - [ ] Text is readable
  - [ ] Buttons are appropriately sized
  - [ ] Navigation works
  - [ ] No horizontal scroll

## Testing - Performance

- [ ] Build completes without errors:
  ```bash
  npm run build
  ```

- [ ] No TypeScript errors:
  ```bash
  npm run type-check
  ```

- [ ] No linting errors:
  ```bash
  npm run lint
  ```

- [ ] Production build runs:
  ```bash
  npm start
  ```

- [ ] Page loads quickly
- [ ] No console errors
- [ ] No console warnings

## Testing - Accessibility

- [ ] Keyboard navigation works:
  - [ ] Tab through all interactive elements
  - [ ] Can access all links via keyboard
  - [ ] Focus indicators are visible

- [ ] Color contrast acceptable:
  - [ ] Text is readable
  - [ ] Sufficient contrast between colors

- [ ] Screen reader friendly:
  - [ ] Images have alt text (if applicable)
  - [ ] Form labels are associated
  - [ ] Heading hierarchy is correct

## Testing - SEO

- [ ] Page title is present
- [ ] Meta description is present
- [ ] Open Graph meta tags are set
- [ ] Twitter Card meta tags are set
- [ ] Favicon is present
- [ ] robots.txt file exists
- [ ] sitemap.xml file exists
- [ ] JSON-LD schema is valid

## Code Quality

- [ ] No commented-out code
- [ ] No console.log statements (except intentional)
- [ ] No placeholder text remaining
- [ ] All imports are used
- [ ] Code is formatted:
  ```bash
  npm run format
  ```

- [ ] Code passes linter:
  ```bash
  npm run lint:fix
  ```

## Environment

- [ ] `.env.local` is NOT committed to git
- [ ] `.env.local` is in `.gitignore`
- [ ] All environment variables are set
- [ ] No hardcoded API keys or secrets
- [ ] Sample `.env.example` is accurate

## Final Checks

- [ ] README.md is up to date
- [ ] All documentation links work
- [ ] Contact information is correct
- [ ] Resume/CV file is current
- [ ] Social media profiles are live
- [ ] No broken links on the site

## Deployment

- [ ] Code is committed to git:
  ```bash
  git add .
  git commit -m "Ready for production"
  git push origin main
  ```

- [ ] GitHub repository is public (if desired)
- [ ] Connected to Vercel successfully
- [ ] Environment variables added to Vercel
- [ ] Initial deployment successful
- [ ] Site is accessible at production URL

## Post-Deployment

- [ ] Test live site thoroughly
- [ ] Verify contact form sends emails
- [ ] Check all links work
- [ ] Verify responsive design
- [ ] Test on different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

- [ ] Check Google Search Console
- [ ] Submit sitemap to Google
- [ ] Check Google Analytics (if enabled)
- [ ] Monitor error logs
- [ ] Share with friends for feedback

## Monitoring

- [ ] Set up error tracking
- [ ] Monitor performance metrics
- [ ] Check uptime regularly
- [ ] Review analytics weekly
- [ ] Update content regularly

## Optional Enhancements (Post-Launch)

- [ ] Add Google Analytics
- [ ] Add contact form notifications
- [ ] Add newsletter signup
- [ ] Add blog section
- [ ] Add testimonial section
- [ ] Implement dark mode
- [ ] Add additional 3D scenes
- [ ] Add case studies

## Troubleshooting Before Deploy

### If Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### If Tests Fail
```bash
npm run lint:fix
npm run format
npm run type-check
```

### If Contact Form Not Working
- Verify EmailJS credentials
- Check template ID is correct
- Test in EmailJS dashboard
- Verify environment variables

### If Images Not Showing
- Check files are in `public/`
- Verify file paths
- Check file formats
- Ensure images are optimized

## Sign-Off

- [ ] I have completed all applicable checklist items
- [ ] I have tested the site thoroughly
- [ ] The site is ready for public launch
- [ ] I understand how to maintain the site

---

**Date Completed**: _______________

**Deployed By**: _______________

**Production URL**: _______________

**Notes**:
