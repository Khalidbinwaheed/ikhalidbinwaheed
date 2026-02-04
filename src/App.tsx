import { Dock } from './components/layout/Dock';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { CyberWork } from './sections/CyberWork';
import { Certifications } from './sections/Certifications';
import { Projects } from './sections/Projects';
import { WebProjects } from './sections/WebProjects';
import { Contact } from './sections/Contact';

import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ui/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-background min-h-screen text-foreground selection:bg-primary/30 transition-colors duration-300">
        <ThemeToggle />
        {/* Fixed Background Elements */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(50,50,80,0.5),transparent_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        {/* Main Content */}
        <main className="relative z-10 pb-32">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <WebProjects />
          <CyberWork />
          <Certifications />
          <Contact />
        </main>

        <Dock />
      </div>
    </ThemeProvider>
  );
}

export default App;
