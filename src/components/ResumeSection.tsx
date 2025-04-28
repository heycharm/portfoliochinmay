
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Download, Star, Eye, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const experiences = [{
  position: 'Frontend Developer Intern',
  company: 'Aaradhari',
  period: 'Jan 2025 - Present',
  description: 'Developed modern websites for Aardhari using React, JavaScript, and Tailwind CSS. Designed fully responsive layouts and optimized site performance for a seamless user experience.'
}, ];

const education = [{
  degree: 'Bachelor of Technology in Computer Science (AIML)',
  institution: 'Dr. APJ Abdul Kalam Technical University, Lucknow',
  period: '2021 - 2025',
}];

const skillLevels = {
  Frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TailwindCSS', level: 90 },
    { name: 'Framer Motion', level: 80 }
  ],
  Backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Supabase', level: 70 },
    { name: 'RESTful APIs', level: 90 },
    // { name: 'GraphQL', level: 75 }
  ],
  Tools: [
    { name: 'Git', level: 90 },
    { name: 'Github', level: 85 },
    // { name: 'Docker', level: 70 },
    // { name: 'AWS', level: 65 },
    // { name: 'CI/CD', level: 75 },
    { name: 'Figma', level: 80 },
    { name: 'Canva', level: 80 }
  ]
};

export const ResumeSection = () => {
  const [openSkillCategory, setOpenSkillCategory] = useState<string | null>("Frontend");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section id="resume" className="px-6 md:px-12 lg:px-24 py-20 relative">
      {/* Textured background overlay */}
      <div className="absolute inset-0 bg-background/90 bg-gradient-to-b from-secondary/5 via-primary/5 to-background/95 textured-bg"></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient tracking-wider">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </AnimatedSection>
        
        {/* Resume Preview/Download Card */}
        <AnimatedSection delay={0.1} className="mb-12">
          <Card className="glass max-w-md mx-auto border-primary/20 shadow-xl hover:shadow-primary/10 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-secondary/80 p-4 rounded-lg mb-4">
                <FileText size={40} className="text-primary/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2">My Resume</h3>
              <p className="text-muted-foreground text-sm text-center mb-4">
                View or download my full resume to learn more about my skills and experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="gap-2 hover-lift hover-glow bg-secondary/90 hover:bg-secondary/70 border border-primary/30">
                      <Eye size={16} />
                      Preview Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl w-[30rem] h-[45rem] p-0 overflow-hidden border-primary/20">
                    <div className="relative w-[30rem] h-[45rem]">
                      <iframe 
                        src="/CHINMAY_RESUME.pdf" 
                        className="w-full h-full"
                        title="Resume Preview"
                      ></iframe>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button className="gap-2 hover-lift hover-glow bg-gradient-to-r from-primary/90 to-purple-600 hover:from-primary hover:to-purple-500 shadow-lg shadow-primary/20">
                  <Download size={16} />
                  <a href="/CHINMAY_RESUME.pdf" download className="flex items-center">
                  Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-12 gap-8">
          {/* Experience Section - Span 5 columns */}
          <AnimatedSection delay={0.2} className="md:col-span-5">
            <Card className="glass border-white/5 bg-gradient-to-br from-secondary/50 to-background hover:shadow-primary/5 hover-glow transition-all h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-foreground/90 flex items-center">
                  <Star size={20} className="text-yellow-500 mr-2" />
                  Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-1">
                      <h4 className="text-lg font-medium text-foreground/90">{exp.position}</h4>
                      <Badge variant="outline" className="sm:ml-2 mt-1 sm:mt-0 bg-secondary/50 text-foreground/70 border-primary/20 whitespace-nowrap">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-primary mb-2 font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>
          
          {/* Education Section - Span 3 columns */}
          <AnimatedSection delay={0.4} className="md:col-span-3">
            <Card className="glass border-white/5 bg-gradient-to-br from-secondary/50 to-background hover:shadow-primary/5 hover-glow transition-all h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-foreground/90 flex items-center">
                  <Star size={20} className="text-yellow-500 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex flex-col justify-between mb-1">
                      <h4 className="text-lg font-medium text-foreground/90">{edu.degree}</h4>
                      <Badge variant="outline" className="mt-1 bg-secondary/50 text-foreground/70 border-primary/20 w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-primary mb-2 font-medium">{edu.institution}</p>
                  
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>
          
          {/* Skills Section - Span 4 columns */}
          <AnimatedSection delay={0.6} className="md:col-span-4">
            <Card className="glass border-white/5 bg-gradient-to-br from-secondary/50 to-background hover:shadow-primary/5 hover-glow transition-all h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-semibold text-foreground/90 flex items-center">
                  <Star size={20} className="text-yellow-500 mr-2" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                {Object.entries(skillLevels).map(([category, skills], catIndex) => (
                  <Collapsible 
                    key={category} 
                    open={openSkillCategory === category}
                    onOpenChange={() => setOpenSkillCategory(openSkillCategory === category ? null : category)}
                    className={catIndex > 0 ? "mt-4" : ""}
                  >
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded-md hover:bg-white/5 transition-colors">
                      <h4 className="text-lg font-medium text-foreground/90">{category}</h4>
                      <Badge variant="outline" className="bg-primary/10 border-primary/20">
                        {skills.length}
                      </Badge>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-3 mt-2 pl-2">
                      {skills.map((skill) => (
                        <HoverCard key={skill.name} openDelay={200} closeDelay={100}>
                          <HoverCardTrigger asChild>
                            <div className="group cursor-pointer">
                              <div className="flex justify-between mb-1">
                                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{skill.name}</span>
                                <span className="text-sm text-muted-foreground/80">{skill.level}%</span>
                              </div>
                              <Progress 
                                value={skill.level} 
                                className="h-2 bg-secondary/70" 
                                indicatorClassName="bg-gradient-to-r from-primary/80 to-purple-600/80"
                              />
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-auto bg-gradient-to-br from-background/95 to-secondary/30 backdrop-blur-xl border border-white/10">
                            <div className="text-center">
                              <div className="font-medium">{skill.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">Proficiency: {skill.level}%</div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </CollapsibleContent>
                    {catIndex < Object.entries(skillLevels).length - 1 && (
                      <Separator className="my-2 bg-primary/10" />
                    )}
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
