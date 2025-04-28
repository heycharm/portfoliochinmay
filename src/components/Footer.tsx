
import { cn } from '@/lib/utils';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} ChinmayPundir. All rights reserved.
          </p>
        </div>
        
        <nav className="flex items-center gap-6">
          <a 
            href="#home" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a 
            href="#resume" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a 
            href="#contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
