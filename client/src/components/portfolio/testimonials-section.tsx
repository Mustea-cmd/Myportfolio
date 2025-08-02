import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    content: "Mustapha is an exceptional developer and instructor. His deep understanding of AI and cloud technologies, combined with his ability to explain complex concepts clearly, makes him invaluable to any team.",
    name: "Sarah Johnson",
    position: "Tech Director, InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    content: "Working with Mustapha on our cybersecurity project was transformative. His expertise in both security and development resulted in a system that exceeded our expectations.",
    name: "Michael Chen",
    position: "CTO, SecureFlow Systems",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    content: "As a student at Techminds Academy, Mustapha's teaching style and expertise helped me transition from a complete beginner to landing my first developer role. His guidance was invaluable.",
    name: "Emily Rodriguez",
    position: "Full Stack Developer, TechStart",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export function TestimonialsSection() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What People Say
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="h-full border border-border hover:shadow-xl transition-all duration-300 relative">
              <CardContent className="p-8">
                <div className="text-primary text-4xl mb-4">
                  <Quote />
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
