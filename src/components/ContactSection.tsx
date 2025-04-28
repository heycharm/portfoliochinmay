
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Instagram, FileDown, ArrowUp, Send, Contact } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';


// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  contact: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:heychinmay2@gmail.com',
    color: 'bg-red-500/10 text-red-500 hover:bg-red-500/20',
    hoverColor: 'group-hover:text-red-400',
    ringColor: 'group-hover:ring-red-500/50'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/chinmay2',
    color: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
    hoverColor: 'group-hover:text-blue-400',
    ringColor: 'group-hover:ring-blue-500/50'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/heycharm',
    color: 'bg-gray-500/10 text-gray-400 hover:bg-gray-500/20',
    hoverColor: 'group-hover:text-gray-300',
    ringColor: 'group-hover:ring-gray-500/50'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/chinmay.p2',
    color: 'bg-pink-500/10 text-pink-500 hover:bg-pink-500/20',
    hoverColor: 'group-hover:text-pink-400',
    ringColor: 'group-hover:ring-pink-500/50'
  },
];

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      contact:"",
      message: "",
      
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
  
    try {
      // Sending email using EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        contact: data.contact,
      };
  
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
  
      console.log('Form submitted:', data);
      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.15] mix-blend-soft-light z-[-1]"></div>
      
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wider text-gradient text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
            Feel free to reach out to me through the contact form or any of the social platforms below.
            I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="glass p-8 rounded-xl shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send me a message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field} 
                          className="bg-secondary/10 border-secondary/20 focus-visible:ring-primary/40"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email*</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          type="email" 
                          {...field}
                          className="bg-secondary/10 border-secondary/20 focus-visible:ring-primary/40"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your Contact Number" 
                          type="tel" 
                          {...field}
                          className="bg-secondary/10 border-secondary/20 focus-visible:ring-primary/40"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message*</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Type your message here..." 
                          rows={5}
                          {...field}
                          className="bg-secondary/10 border-secondary/20 focus-visible:ring-primary/40 resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* <FormField
                  control={form.control}
                  name="subscribe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="leading-none">
                        <FormLabel className="text-sm font-medium text-muted-foreground cursor-pointer">
                          Keep me updated on new projects and opportunities
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                /> */}
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send size={18} className="ml-1" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </Form>
          </AnimatedSection>
          
          {/* Social Links */}
          <AnimatedSection delay={0.4}>
            <h3 className="text-xl md:text-2xl font-bold mb-8">Connect with me</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              {socialLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block glass p-6 rounded-lg transition-all duration-300 hover:border-primary/50 ring-offset-background hover:ring-2 ring-offset-2"
                    style={{ boxShadow: '0 0 25px rgba(0, 0, 0, 0.2)' }}
                  >
                    <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full ${link.color} mb-4 transform transition-all duration-300 group-hover:scale-110 ${link.ringColor}`}>
                      <link.icon size={32} className={`transition-all duration-300 ${link.hoverColor}`} />
                    </div>
                    <p className="font-medium text-lg transition-all duration-300 group-hover:text-white text-center">{link.name}</p>
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="glass p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <p className="text-muted-foreground mb-6">Based in Delhi NCR, India - Available for remote work worldwide</p>
              
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground">Currently available for freelance projects and full-time opportunities.</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
