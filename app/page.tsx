'use client';

import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom Cursor */}
      <CursorGlow />

      {/* Header/Navigation */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
          <Hero />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <About />
        </Suspense>

        {/* Experience Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Experience />
        </Suspense>

        {/* Skills Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Skills />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Services />
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects />
        </Suspense>

        {/* Achievements Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Achievements />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Testimonials />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<div className="min-h-screen" />}>
          <Contact />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
