import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import { Space_Grotesk, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

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
      </head>
      <body className="font-inter bg-gradient-to-b from-primary-50 to-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
