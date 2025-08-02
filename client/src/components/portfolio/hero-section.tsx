import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Globe, Palette } from "lucide-react";
import { useTheme } from "../theme-provider";

export function HeroSection() {
  const { toggleTheme } = useTheme();

  return (
    <section className="text-center mb-16 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Mustapha Muhammad Lawal
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Developer | Teacher | AI & Cloud Enthusiast
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github />
          </motion.a>
          <motion.a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin />
          </motion.a>
          <motion.a 
            href="mailto:mustapha.lawal@example.com"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail />
          </motion.a>
          <motion.a 
            href="https://yourwebsite.com" 
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe />
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            onClick={toggleTheme}
            className="px-6 py-3 font-medium"
            size="lg"
          >
            <Palette className="mr-2 h-4 w-4" />
            Toggle Theme
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
