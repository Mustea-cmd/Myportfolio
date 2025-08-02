import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const traits = [
  "Problem Solver",
  "Team Leader", 
  "Continuous Learner",
  "Innovation Focused"
];

export function AboutSection() {
  return (
    <section className="mb-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground leading-relaxed">
              I am a passionate computer science student at NSUK and a dedicated IT professional with over five years of experience in the technology sector. My journey in tech has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              At Techminds Academy, I've had the privilege of teaching and mentoring students in programming, cybersecurity, AI, cloud computing, and emerging technologies. I believe in hands-on learning and practical application of theoretical concepts.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My expertise spans full-stack development, machine learning, cloud architecture, and cybersecurity. I'm particularly passionate about AI applications and their potential to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="px-4 py-2 font-medium">
                    {trait}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional headshot of Mustapha Muhammad Lawal"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
