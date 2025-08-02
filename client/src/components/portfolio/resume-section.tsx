import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

export function ResumeSection() {
  return (
    <section className="mb-16">
      <div className="text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Download my comprehensive resume to learn more about my experience, skills, and achievements in the technology sector.
        </motion.p>
        
        <motion.div 
          className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="px-8 py-4" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-3 h-4 w-4" />
              Download PDF Resume
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-4" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Eye className="mr-3 h-4 w-4" />
              View Online
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
