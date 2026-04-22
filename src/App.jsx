/**
 * App Component
 * Purpose: Root component that assembles all sections and layout
 * Provides ThemeProvider for dark mode support
 * 
 * Architecture:
 *  - ThemeProvider wraps all components for global theme management
 *  - Navbar provides sticky navigation
 *  - Sections are rendered in order
 *  - Footer provides copyright and attribution
 */

import { ThemeProvider } from './context/ThemeContext';
import { Navbar, Footer, BackgroundEffects } from './components/layout';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  Contact,
} from './components/sections';
import './styles/global.css';

function AppContent() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="app-root">
        <BackgroundEffects />
        <div className="site-content">
          <AppContent />
        </div>
      </div>
    </ThemeProvider>
  );
}
