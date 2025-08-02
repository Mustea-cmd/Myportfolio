import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Education: Transforming Learning Experiences",
    excerpt: "Exploring how artificial intelligence is revolutionizing education through personalized learning, intelligent tutoring systems, and adaptive assessment methods...",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "AI & ML",
    date: "Dec 15, 2023",
    readTime: "5 min read"
  },
  {
    title: "Building Scalable Applications with Serverless Architecture",
    excerpt: "A comprehensive guide to designing and implementing serverless applications using AWS Lambda, API Gateway, and modern deployment strategies...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Cloud",
    date: "Dec 10, 2023",
    readTime: "8 min read"
  },
  {
    title: "Essential Cybersecurity Practices for Modern Developers",
    excerpt: "Learn about critical security vulnerabilities, best practices for secure coding, and how to implement robust security measures in your applications...",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    category: "Security",
    date: "Dec 5, 2023",
    readTime: "6 min read"
  }
];

export function BlogSection() {
  return (
    <section className="mb-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Latest Blog Posts
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <Card className="overflow-hidden border border-border hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Button variant="link" className="p-0 h-auto text-primary font-medium text-sm">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
