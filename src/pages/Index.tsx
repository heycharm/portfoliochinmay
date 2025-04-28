
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Background3D } from '@/components/Background3D';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0.5,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      opacity: 0.6,
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AnimatePresence>
        <motion.div
          className="fixed top-0 left-0 w-[32px] h-[32px] bg-primary/40 rounded-full filter blur-xl pointer-events-none z-50"
          variants={variants}
          animate={cursorVariant}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 150,
            mass: 0.5
          }}
        />
      </AnimatePresence>
      
      <Background3D />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
