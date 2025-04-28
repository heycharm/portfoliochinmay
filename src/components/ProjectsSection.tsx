
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const projects = [{
  title: 'LegalGist',
  description: 'A legal assistance platform built with React, Next.js, and Gemini API. Features include case file scanning, smart summarization, and query answering.',
  tags: ['ReactJS', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Gemini API', 'Supabase'],
  // techStack: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn UI', 'Gemini API'],
  category: 'web',
  image: '/legalgist.jpg',
  liveUrl: 'https://legal-gist-major-project.vercel.app/',
  githubUrl: 'https://github.com/heycharm/LegalGistMajorProject'
}, {
  title: 'GangaMitra',
  description: 'A fully responsive real-time Ganga river pollution monitoring web app built with React. Awarded runner-up at Smart India Hackathon 2024.',
  tags: ['JavaScript', 'ReactJS', 'TailwindCSS','GSAP', 'SIH2024'],
  // techStack: ['React', 'TypeScript', 'Firebase', 'Framer Motion', 'Material UI'],
  category: 'app',
  image: '/ganga mitra.png',
  liveUrl: 'https://ganga-tech-flame.vercel.app/#/search',
  githubUrl: 'https://github.com/heycharm/GangaMitra'
}, {
  title: 'PASSOP - Password Manager',
  description: 'Developed PASSOP, a secure MERN stack-based password manager with robust encryption and JWT authentication. ',
  tags: ['ReactJS', 'ExpressJS', 'Node.js', 'MongoDB(Compass)','JWT'],
  // techStack: ['ReactJS', 'Node.js', 'Express', 'MongoDB'],
  category: 'data',
  image: '/passop.png',
  liveUrl: 'https://passop-heycharm.vercel.app/',
  githubUrl: 'https://github.com/heycharm/PASSOP-Password-Manager'
}, {
  title: 'Apple iPhone Website Replica',
  description: 'A fully responsive Apple website replica built with React and Tailwind CSS. Features include smooth animations, device showcases, and a modern UI.',
  tags: ['ReactJS', 'TailwindCSS', 'Three.js', 'GSAP','JavaScript'],
  // techStack: ['Python', 'TensorFlow', 'React', 'Express', 'OpenAI API'],
  category: 'ai',
  image: '/iPhoneSIte.png',
  liveUrl: 'https://iphone-charm.netlify.app/',
  githubUrl: 'https://github.com/heycharm/Apple-iPhone-Website-Project/'
}, {
  title: 'Brainwave Website',
  description: 'A modern AI web app built with JavaScript and Tailwind CSS. Features include smart AI interactions, real-time responses, and a sleek, responsive design.',
  tags: ['ReactJS', 'React Router Dom', 'TailwindCSS', 'Javascript'],
  // techStack: ['React Native', 'Redux', 'Node.js', 'Express', 'MongoDB'],
  category: 'app',
  image: '/brainwave.png',
  liveUrl: 'https://brain-wave-heycharms-projects.vercel.app/',
  githubUrl: 'https://github.com/heycharm/BrainWave'
},
];

// const categories = [
//   { id: 'all', label: 'All Projects' },
//   { id: 'web', label: 'Web Development' },
//   { id: 'app', label: 'Applications' },f
//   { id: 'data', label: 'Data Visualization' },
//   { id: 'ai', label: 'AI & ML' }
// ];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 bg-gradient-to-b from-secondary/20 via-secondary/10 to-transparent py-16">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient tracking-wider">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 opacity-80"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications and design projects.
          </p>
        </AnimatedSection>
        
        {/* Category Filter */}
        {/* <AnimatedSection delay={0.1} className="mb-10">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <Button 
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-1 transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? 'bg-primary/90 hover:bg-primary/80 shadow-lg shadow-primary/20' 
                    : 'border-primary/30 hover:bg-primary/20 hover:border-primary/50'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </AnimatedSection> */}
        
        {/* Mobile View Projects (Grid for small screens) */}
       
        
        {/* Desktop View Projects (Carousel for medium and larger screens) */}
     {/* Projects Carousel for all devices (mobile + desktop) */}
<div className="w-full">
  <Carousel opts={{
    align: "start",
    loop: true
  }} className="w-full">
    <CarouselContent>
      {filteredProjects.map((project, index) => (
        <CarouselItem 
          key={project.title} 
          className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
        >
          <AnimatedSection delay={index * 0.1}>
            <ProjectCard project={project} />
          </AnimatedSection>
        </CarouselItem>
      ))}
    </CarouselContent>
    
    {/* Navigation Buttons */}
    <div className="flex justify-center mt-8">
      <CarouselPrevious className="static mx-2 transform-none bg-secondary/80 hover:bg-primary/80 text-white border-primary/30 hover-glow" />
      <CarouselNext className="static mx-2 transform-none bg-secondary/80 hover:bg-primary/80 text-white border-primary/30 hover-glow" />
    </div>
  </Carousel>
</div>

        
        {/* View All Projects Button */}
        <AnimatedSection delay={0.6} className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:bg-primary/20 text-white px-8 btn-hover-effect"
          >
            View All Projects
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

// Extracted ProjectCard component for reuse
const ProjectCard = ({
  project
}: {
  project: typeof projects[0];
}) => (
  <motion.div
    className="project-card bg-gradient-to-br from-secondary to-background border border-border/80 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full shadow-lg shadow-black/20"
    whileHover={{
      y: -5,
      transition: {
        duration: 0.2
      }
    }}
  >
    <div className="relative aspect-video bg-muted/30 overflow-hidden group">
      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <h4 className="text-white font-medium mb-2">{project.title}</h4>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" size="sm" className="bg-black/40 border-white/30 hover:bg-white/20 backdrop-blur-md" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} />
                Demo
              </a>
            </Button>
            <Button variant="outline" size="sm" className="bg-black/40 border-white/30 hover:bg-white/20 backdrop-blur-md" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={14} />
                Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary-foreground hover:bg-primary/20 transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Tech Stack Tags */}
      {/* <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map(tech => (
            <Badge key={tech} variant="outline" className="bg-secondary/50 text-xs border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </div> */}
      
      <div className="flex gap-4">
        <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary/20 hover-lift hover-glow" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
        <Button variant="outline" size="sm" className="gap-2 border-primary/30 hover:bg-primary/20 hover-lift hover-glow" asChild>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            Code
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);
