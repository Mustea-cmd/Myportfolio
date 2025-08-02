import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    period: "2019 - Present",
    title: "IT Instructor",
    company: "Techminds Academy",
    description: "Leading instruction in programming, cybersecurity, and emerging technologies. Developed curriculum for AI and cloud computing courses, mentored 200+ students.",
    color: "bg-blue-500"
  },
  {
    period: "2020 - Present",
    title: "Computer Science Student",
    company: "Nasarawa State University, Keffi",
    description: "Pursuing Bachelor's degree in Computer Science with focus on AI, distributed systems, and software engineering. Maintaining high academic performance while gaining practical experience.",
    color: "bg-purple-500"
  },
  {
    period: "2018 - 2019",
    title: "Freelance Developer",
    company: "Various Clients",
    description: "Developed web applications and provided technical consulting for small businesses. Specialized in full-stack development and digital transformation projects.",
    color: "bg-green-500"
  }
];

export function ExperienceTimeline() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-border"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                className="relative flex items-center md:justify-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${exp.color} rounded-full border-4 border-background shadow-lg z-10`}></div>
                
                <motion.div 
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-sm text-primary font-medium mb-1">{exp.period}</div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <h4 className="text-muted-foreground font-medium mb-3">{exp.company}</h4>
                      <p className="text-foreground text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
