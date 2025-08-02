import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { HeroSection } from "@/components/portfolio/hero-section";
import { SkillsShowcase } from "@/components/portfolio/skills-showcase";
import { ProjectPortfolio } from "@/components/portfolio/project-portfolio";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { AboutSection } from "@/components/portfolio/about-section";
import { ResumeSection } from "@/components/portfolio/resume-section";
import { BlogSection } from "@/components/portfolio/blog-section";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { useTheme } from "@/components/theme-provider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="theme-transition min-h-screen relative overflow-hidden">
      {/* Galactic Background Effects */}
      {theme === "galactic" && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Deep space gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-black opacity-70"></div>
          {/* Nebula effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-pink-500/20"></div>
          {/* Star field */}
          <div className="absolute inset-0 star-field opacity-40"></div>
          {/* Animated cosmic dust */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-pulse-slow"></div>
        </div>
      )}

      <div className="relative z-10 p-6 md:p-12">
        <HeroSection />
        <SkillsShowcase />
        <ProjectPortfolio />
        <ExperienceTimeline />
        <AboutSection />
        <ResumeSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />

        {/* Footer */}
        <motion.footer 
          className="border-t border-border pt-8 pb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-6 mb-4">
            <motion.a 
              href="https://github.com/yourusername" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin />
            </motion.a>
            <motion.a 
              href="https://twitter.com/yourusername" 
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter />
            </motion.a>
            <motion.a 
              href="mailto:mustapha.lawal@example.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail />
            </motion.a>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2023 Mustapha Muhammad Lawal. All rights reserved. Built with passion and modern web technologies.
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
