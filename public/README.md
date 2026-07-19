# Public Assets

This directory contains static assets for the portfolio website.

## Directory Structure

```
public/
├── favicon.ico              # Website favicon
├── apple-touch-icon.png     # iOS home screen icon
├── icon-192.png            # PWA icon 192x192
├── icon-512.png            # PWA icon 512x512
├── og-image.jpg            # Open Graph image (1200x630)
├── screenshot-540.png      # PWA screenshot narrow
├── screenshot-1280.png     # PWA screenshot wide
├── robots.txt              # SEO robots configuration
├── sitemap.xml             # SEO sitemap
├── manifest.json           # PWA manifest
├── resume.pdf              # Shannice's resume/CV
└── projects/
    └── [project screenshots and media]
```

## Image Requirements

- **og-image.jpg**: 1200x630px for Open Graph (social media sharing)
- **favicon.ico**: 64x64px
- **apple-touch-icon.png**: 180x180px
- **icon-192.png**: 192x192px (PWA)
- **icon-512.png**: 512x512px (PWA)
- **screenshot-540.png**: 540x720px (PWA narrow)
- **screenshot-1280.png**: 1280x720px (PWA wide)

## Adding Assets

1. Replace `favicon.ico` with Shannice's logo
2. Create Open Graph image for social media
3. Add PWA icons
4. Upload project screenshots to `/projects/` directory
5. Place resume PDF as `resume.pdf`

## Optimization

All images should be optimized for web:
- Use JPEG for photos
- Use PNG for graphics with transparency
- Compress all images to reduce file size
- Consider using WebP format for better compression
