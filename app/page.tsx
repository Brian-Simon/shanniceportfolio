'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { ErrorBoundary } from '@/components/layout/ErrorBoundary';
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
      <main id="main-content" className="relative">
        {/* Hero Section */}
        <ErrorBoundary sectionName="Hero">
          <Hero />
        </ErrorBoundary>

        {/* About Section */}
        <ErrorBoundary sectionName="About">
          <About />
        </ErrorBoundary>

        {/* Experience Section */}
        <ErrorBoundary sectionName="Experience">
          <Experience />
        </ErrorBoundary>

        {/* Skills Section */}
        <ErrorBoundary sectionName="Skills">
          <Skills />
        </ErrorBoundary>

        {/* Services Section */}
        <ErrorBoundary sectionName="Services">
          <Services />
        </ErrorBoundary>

        {/* Projects Section */}
        <ErrorBoundary sectionName="Projects">
          <Projects />
        </ErrorBoundary>

        {/* Achievements Section */}
        <ErrorBoundary sectionName="Achievements">
          <Achievements />
        </ErrorBoundary>

        {/* Testimonials Section */}
        <ErrorBoundary sectionName="Testimonials">
          <Testimonials />
        </ErrorBoundary>

        {/* Contact Section */}
        <ErrorBoundary sectionName="Contact">
          <Contact />
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
