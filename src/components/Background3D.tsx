
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const particles: HTMLDivElement[] = [];
    const container = containerRef.current;
    const COUNT = 40; // Particle count for more visible effect
    
    // Create particles
    for (let i = 0; i < COUNT; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full backdrop-blur-sm';
      
      // Random size between 50px and 200px
      const size = Math.random() * 150 + 50;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random z-index for depth effect
      particle.style.zIndex = Math.floor(Math.random() * 10).toString();
      
      // Enhanced gradient colors with more vibrant options
      const colors = [
        'radial-gradient(circle, rgba(155, 135, 245, 0.25) 0%, rgba(123, 90, 255, 0.08) 70%)',
        'radial-gradient(circle, rgba(99, 102, 241, 0.20) 0%, rgba(99, 102, 241, 0.05) 70%)',
        'radial-gradient(circle, rgba(217, 70, 239, 0.18) 0%, rgba(217, 70, 239, 0.05) 70%)',
        'radial-gradient(circle, rgba(14, 165, 233, 0.20) 0%, rgba(14, 165, 233, 0.04) 70%)',
        'radial-gradient(circle, rgba(70, 85, 200, 0.22) 0%, rgba(70, 85, 200, 0.05) 70%)',
        'radial-gradient(circle, rgba(139, 92, 246, 0.23) 0%, rgba(139, 92, 246, 0.06) 70%)',
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = randomColor;
      particle.style.boxShadow = '0 0 40px rgba(155, 135, 245, 0.2)';
      
      // Add to DOM
      container.appendChild(particle);
      particles.push(particle);
      
      // Animate
      const duration = 15000 + Math.random() * 35000; // Between 15s and 50s
      const xMovement = 100 + Math.random() * 300; // Movement range
      const yMovement = 100 + Math.random() * 300;
      
      const animate = () => {
        const startX = parseFloat(particle.style.left);
        const startY = parseFloat(particle.style.top);
        
        // Random movement direction
        const newX = Math.max(0, Math.min(100, startX + (Math.random() - 0.5) * xMovement));
        const newY = Math.max(0, Math.min(100, startY + (Math.random() - 0.5) * yMovement));
        
        particle.animate(
          [
            { left: `${startX}%`, top: `${startY}%`, opacity: Math.random() * 0.5 + 0.4 },
            { left: `${newX}%`, top: `${newY}%`, opacity: Math.random() * 0.5 + 0.4 }
          ],
          {
            duration,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards'
          }
        ).onfinish = () => {
          particle.style.left = `${newX}%`;
          particle.style.top = `${newY}%`;
          animate();
        };
      };
      
      // Stagger animations slightly
      setTimeout(() => {
        animate();
      }, i * 100);
    }
    
    return () => {
      // Cleanup
      particles.forEach(p => p.remove());
    };
  }, []);
  
  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Enhanced gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/95 z-20"></div>
      <div className="absolute top-0 left-0 right-0 h-[35vh] bg-gradient-to-b from-primary/10 to-transparent opacity-40 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[25vh] bg-gradient-to-t from-background to-transparent z-10"></div>
    </motion.div>
  );
};
