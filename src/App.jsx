import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />

      <main>
      <Hero />
      <Projects />
      <Experience />
      <About />
      </main>

      <Footer />
      <ThemeToggle />
      <ScrollToTop />
    </div>
  )
}

export default App