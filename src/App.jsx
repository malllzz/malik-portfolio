import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const About = lazy(() => import('./components/About'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Projects />
          <Experience />
          <About />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <ThemeToggle />
      <ScrollToTop />
    </div>
  )
}

export default App