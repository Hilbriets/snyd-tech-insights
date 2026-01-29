import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { TechGrid } from "@/components/premium/TechGrid";
import { 
  Code, 
  Coffee, 
  Brain, 
  BarChart3, 
  Box,
  ArrowRight,
  Check,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Python Programming",
    description: "From fundamentals to advanced applications—web development, automation, and data analysis.",
    features: [
      "Core Python Fundamentals",
      "Web Development with Django",
      "Data Analysis & Visualization",
      "Automation Scripts",
    ],
  },
  {
    icon: Coffee,
    title: "Java Development",
    description: "Comprehensive Java training covering OOP, enterprise applications, and Android development.",
    features: [
      "Core Java & OOP Concepts",
      "Spring Framework",
      "Android App Development",
      "Enterprise Applications",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Practical AI/ML implementations using TensorFlow, PyTorch, and industry frameworks.",
    features: [
      "Machine Learning Algorithms",
      "Deep Learning Networks",
      "Computer Vision",
      "NLP Fundamentals",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    description: "Master data science tools and techniques to extract insights and drive decisions.",
    features: [
      "Data Analysis with Pandas",
      "Statistical Analysis",
      "ML for Data Science",
      "Data Visualization",
    ],
  },
  {
    icon: Box,
    title: "3D Printing",
    description: "Hands-on training from design to production for prototyping and manufacturing.",
    features: [
      "3D Modeling & Design",
      "Printer Operations",
      "Material Selection",
      "Prototyping Services",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <PageBanner
        title="Technology Programs"
        subtitle="Industry-aligned training designed to build real-world skills that matter."
        label="Services"
        labelIcon={Zap}
      />

      {/* Intro */}
      <section className="section-padding-sm bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <HUDLabel text="Technology Education" className="mb-6" />
            <h2 className="mb-4">Build Skills That Matter</h2>
            <p className="text-muted-foreground text-lg">
              We specialize in practical, project-based workshops for students and professionals. 
              Our curriculum bridges the gap between academic learning and industry demands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30 relative">
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-6">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <PremiumCard className="p-0 overflow-hidden">
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Left Panel */}
                    <div className="lg:col-span-4 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-b lg:border-b-0 lg:border-r border-border/50">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-heading text-xl font-semibold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Panel - Features */}
                    <div className="lg:col-span-8 p-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">Ready to Level Up?</h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Join our next cohort and accelerate your tech career
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-snyd-navy hover:bg-white/90 text-base px-8 h-12"
            >
              <Link to="/contact">
                Enroll Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
