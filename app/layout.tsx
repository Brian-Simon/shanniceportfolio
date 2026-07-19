import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { EmailJSProvider } from '@/components/providers/EmailJSProvider';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const title = 'Shannice Wangui Gichia - Executive Assistant | Virtual Assistant';
const description =
  'Award-winning Executive Assistant specializing in executive scheduling, virtual assistance, and operations coordination. Discover an immersive digital experience showcasing skills in Google Workspace, CRM, and leadership support.';
const url = 'https://shannice.dev';
const image = '/og-image.jpg';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Executive Assistant',
    'Virtual Assistant',
    'Operations Coordinator',
    'Scheduling',
    'Calendar Management',
    'CRM',
    'Google Workspace',
    'Remote Support',
    'Nairobi',
    'Kenya',
  ],
  authors: [{ name: 'Shannice Wangui Gichia' }],
  creator: 'Shannice Wangui Gichia',
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    siteName: title,
    title,
    description,
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [image],
    creator: '@shannicegichia',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#280B39',
  colorScheme: 'light',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Shannice Wangui Gichia',
              jobTitle: 'Executive Assistant',
              url: url,
              image: image,
              location: {
                '@type': 'Place',
                name: 'Nairobi, Kenya',
              },
              sameAs: [
                'https://linkedin.com/in/shannice-gichia',
                'https://twitter.com/shannicegichia',
              ],
              worksFor: {
                '@type': 'Organization',
                name: 'Self-employed',
              },
            }),
          }}
        />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shannice Wangui Gichia',
              url: url,
              logo: url + '/logo.png',
              description: description,
              founder: {
                '@type': 'Person',
                name: 'Shannice Wangui Gichia',
              },
              sameAs: [
                'https://linkedin.com/in/shannice-gichia',
                'https://twitter.com/shannicegichia',
              ],
              contact: {
                '@type': 'ContactPoint',
                telephone: '+254-700-000-000',
                contactType: 'Professional Services',
              },
            }),
          }}
        />

        {/* JSON-LD BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: url,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'About',
                  item: url + '#about',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: 'Experience',
                  item: url + '#experience',
                },
                {
                  '@type': 'ListItem',
                  position: 4,
                  name: 'Services',
                  item: url + '#services',
                },
                {
                  '@type': 'ListItem',
                  position: 5,
                  name: 'Contact',
                  item: url + '#contact',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-inter bg-gradient-to-b from-primary-50 to-white">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-50 focus:bg-primary-700 focus:text-white focus:px-4 focus:py-2 focus:font-semibold focus:rounded-b-lg"
        >
          Skip to main content
        </a>

        {/* Email service provider */}
        <EmailJSProvider>
          {children}
        </EmailJSProvider>

        <Analytics />
      </body>
    </html>
  );
}
