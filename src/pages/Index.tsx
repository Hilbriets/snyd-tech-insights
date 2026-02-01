import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/shared/StatCard";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { TechGrid } from "@/components/premium/TechGrid";
import { FlightPath } from "@/components/premium/FlightPath";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Box, 
  GraduationCap,
  Users,
  Building2,
  Award,
  Play,
  Server
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-snyd-navy">
        <TechGrid variant="dark" />
        <FlightPath />
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <HUDLabel 
                icon={Cpu} 
                text="Drone Technology & Education" 
                className="bg-white/5 border-white/10 text-white/80 mb-8"
              />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-white leading-[1.05] mb-8"
            >
              Expand Your<br />
              Perspective with{" "}
              <span className="text-gradient-light">SNYD TECH</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed"
            >
              Pioneering drone technology solutions and next-generation tech education. 
              We're building the future of aerial innovation in Tamil Nadu.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-base px-8 h-12 btn-premium"
              >
                <Link to="/services">
                  Explore Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-base px-8 h-12 border-white/20 text-white hover:bg-white/5 hover:border-white/30"
              >
                <Link to="/drones">
                  <Play className="mr-2 w-4 h-4" />
                  Drone Solutions
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="500+" label="Students Trained" delay={0} />
            <StatCard value="20+" label="Tech Workshops" delay={0.1} />
            <StatCard value="15+" label="Drone Projects" delay={0.2} />
            <StatCard value="50+" label="Enterprise Clients" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background relative">
        <div className="absolute inset-0 tech-grid opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <HUDLabel text="What We Offer" className="mb-6" />
            <h2 className="mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground">
              Comprehensive technology training and drone solutions engineered for tomorrow's challenges.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Code}
              title="Technology Education"
              description="Industry-aligned training in Python, Java, AI, and Data Science. Build skills that matter."
              href="/services"
              index={0}
            />
            <ServiceCard
              icon={Cpu}
              title="Drone Solutions"
              description="DGCA-certified drone operations, from pilot training to enterprise aerial solutions."
              href="/drones"
              index={1}
            />
            <ServiceCard
              icon={Box}
              title="3D Printing"
              description="Rapid prototyping and additive manufacturing training for product development."
              href="/services"
              index={2}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SNYD ADAM Enterprise Platform Section */}
      <section className="section-padding bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <HUDLabel 
                icon={Server} 
                text="Enterprise Platform" 
                className="bg-white/5 border-white/10 text-white/80 mb-6" 
              />
              <h2 className="text-white mb-4">
                SNYD ADAM
              </h2>
              <p className="text-lg text-white/80 mb-6 font-medium">
                The first operating system for drone enterprises.
              </p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Five integrated modules—Core, Fleet, Comply, AI, and Ops—deliver unified 
                asset management, regulatory compliance, and operational intelligence 
                across your entire aerial fleet.
              </p>
              <Button 
                asChild 
                className="bg-white text-snyd-navy hover:bg-white/90"
              >
                <Link to="/adam">
                  Explore SNYD ADAM
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "ADAM Core", desc: "Maintenance & Asset Health" },
                  { title: "ADAM Fleet", desc: "Operations & Scheduling" },
                  { title: "ADAM Comply", desc: "DGCA & Regulatory Compliance" },
                  { title: "ADAM AI", desc: "Predictive Intelligence" },
                ].map((item, index) => (
                  <PremiumCard 
                    key={index} 
                    className={`p-5 bg-white/5 border-white/10 ${index % 2 === 1 ? 'mt-6' : ''}`}
                  >
                    <h4 className="font-heading font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </PremiumCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <HUDLabel text="About SNYD TECH" className="mb-6" />
              <h2 className="mb-6">
                Bridging Education<br />
                and Industry
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Based in Madurai, Tamil Nadu, SNYD TECH delivers cutting-edge technology education and drone solutions. We specialize in hands-on workshops that prepare students and professionals for emerging tech careers.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our mission: close the gap between academic learning and real-world industry requirements through practical, project-based training.
              </p>
              <Button asChild variant="outline" className="group">
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="grid grid-cols-2 gap-4">
              {[
                { icon: GraduationCap, title: "Expert Training", desc: "Industry-certified instructors", color: "primary" },
                { icon: Users, title: "Small Cohorts", desc: "Personalized attention", color: "secondary" },
                { icon: Building2, title: "Enterprise Ready", desc: "Corporate partnerships", color: "primary" },
                { icon: Award, title: "Certified", desc: "Recognized credentials", color: "secondary" },
              ].map((item, index) => (
                <PremiumCard key={index} className={`p-6 ${index % 2 === 1 ? 'mt-8' : ''}`}>
                  <item.icon className={`w-8 h-8 mb-4 ${item.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </PremiumCard>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-snyd-navy relative overflow-hidden">
        <TechGrid variant="dark" />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">
              Ready to Start Your Tech Journey?
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Join hundreds of students who have transformed their careers with SNYD TECH
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-snyd-navy hover:bg-white/90 text-base px-8 h-12"
            >
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
