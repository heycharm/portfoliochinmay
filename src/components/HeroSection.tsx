
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDownCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { damping: 25, stiffness: 700 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 700 });

  const [isClient, setIsClient] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsClient(true);
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cursorX, cursorY]);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center relative px-6 md:px-12 lg:px-24 pt-15 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#1A1F2C]/70 via-[#1A1F2C]/90 to-[#171923] z-[-2]"></div>
        
        {/* Accent color blobs with parallax effect */}
        <motion.div 
          className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px] opacity-40 animate-pulse"
          style={{
            y: scrollY * 0.2,
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full filter blur-[100px] opacity-40"
          style={{
            y: scrollY * -0.1,
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-600/15 rounded-full filter blur-[80px] opacity-30"
          style={{
            y: scrollY * 0.15,
          }}
        ></motion.div>
        
        {/* Fine grain texture overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.15] mix-blend-soft-light z-[-1]"></div>
      </div>
      
      {/* Cursor glow effect */}
      {isClient && (
        <motion.div
          className="fixed w-80 h-80 rounded-full pointer-events-none mix-blend-screen z-0"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, rgba(0, 0, 0, 0) 70%)',
            left: 0,
            top: 0,
            x: springX,
            y: springY,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-sm md:text-base text-muted-foreground bg-muted inline-block px-4 py-1 rounded-full">
            Full-Stack Developer
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ y: scrollY * -0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight letter-spacing-wide"
        >
          This is <span className="text-gradient"><br/>Chinmay Pundir.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          I design and build exceptional digital experiences 
          with a focus on user experience and clean code.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 hover-lift hover-glow">
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="secondary" asChild className="hover-lift">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary/30 hover:bg-primary/20 hover-lift hover-glow gap-2">
            <a href="#resume">
              <Download size={18} />
              Resume
            </a>
          </Button>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#about" 
          className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowDownCircle className="animate-pulse" size={32} />
        </a>
      </motion.div>
    </section>
  );
};
