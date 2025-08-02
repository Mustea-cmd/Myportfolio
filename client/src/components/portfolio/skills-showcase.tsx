import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Brain, Cloud, Shield } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Programming",
    description: "Full-stack development with modern technologies",
    skill: "JavaScript/TypeScript",
    percentage: 95,
    color: "text-blue-600"
  },
  {
    icon: Brain,
    title: "AI & ML",
    description: "Machine learning and artificial intelligence solutions",
    skill: "Python/TensorFlow",
    percentage: 88,
    color: "text-purple-600"
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "AWS, Azure, and distributed systems architecture",
    skill: "AWS/Azure",
    percentage: 82,
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security auditing and penetration testing",
    skill: "Security Auditing",
    percentage: 78,
    color: "text-red-600"
  }
];

export function SkillsShowcase() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Technical Expertise
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="h-full border border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className={`text-3xl mb-4 ${skill.color}`}>
                  <skill.icon />
                </div>
                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.skill}</span>
                    <span className="font-medium">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
