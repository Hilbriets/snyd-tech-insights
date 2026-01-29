import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { StatCard } from "@/components/shared/StatCard";
import { PremiumCard } from "@/components/premium/PremiumCard";
import { ScrollReveal } from "@/components/premium/ScrollReveal";
import { HUDLabel } from "@/components/premium/HUDLabel";
import { SectionDivider } from "@/components/premium/SectionDivider";
import { 
  Calendar, 
  Building2, 
  Users, 
  MapPin, 
  Award,
  GraduationCap,
  Cpu,
  Briefcase,
  Target,
  Rocket
} from "lucide-react";

const companyDetails = [
  { icon: Calendar, value: "2022", label: "Founded" },
  { icon: Building2, value: "Education", label: "Industry" },
  { icon: Users, value: "11-50", label: "Team Size" },
  { icon: MapPin, value: "Madurai", label: "Location" },
  { icon: Award, value: "Tech & Drones", label: "Focus" },
];

const About = () => {
  return (
    <Layout>
      <PageBanner
        title="About SNYD TECH"
        subtitle="Pioneering drone technology and next-generation tech education in Tamil Nadu."
        label="Our Story"
        labelIcon={Rocket}
      />

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <HUDLabel text="Who We Are" className="mb-6" />
              <h2 className="mb-8">Building the Future of Tech Education</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Founded in Madurai, Tamil Nadu, SNYD TECH emerged from a vision to democratize 
                  technology education and make cutting-edge skills accessible to students across India.
                </p>
                <p className="leading-relaxed">
                  We recognized the growing gap between academic curricula and industry demands in 
                  emerging technologies—and we're closing it. From programming fundamentals to 
                  advanced drone technology, we've helped hundreds of students transform their 
                  curiosity into careers.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="space-y-6">
              <PremiumCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Our Mission</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To bridge the gap between academic learning and industry requirements by 
                      offering practical, hands-on training in cutting-edge technologies including 
                      AI, Data Science, Drone Technology, and 3D Printing.
                    </p>
                  </div>
                </div>
              </PremiumCard>
              
              <PremiumCard className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Rocket className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Our Vision</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To become the leading technology education provider in South India, empowering 
                      students with the skills needed for tomorrow's jobs and fostering innovation 
                      through technology.
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyDetails.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <PremiumCard className="p-6 text-center">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                  <div className="font-heading font-bold text-lg">{item.value}</div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">{item.label}</div>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12">
            <HUDLabel text="Track Record" className="mb-6 mx-auto" />
            <h2>Our Achievements</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard value="500+" label="Students Trained" delay={0} />
            <StatCard value="20+" label="Tech Workshops" delay={0.1} />
            <StatCard value="15+" label="Drone Projects" delay={0.2} />
            <StatCard value="5.0" label="Rating" delay={0.3} />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <HUDLabel text="Our Team" className="mb-6" />
            <h2 className="mb-4">Expert Instructors</h2>
            <p className="text-muted-foreground">
              Learn from industry professionals with real-world experience
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Technology Trainers",
                description: "Certified experts in Python, Java, and AI technologies with years of teaching experience.",
              },
              {
                icon: Cpu,
                title: "Drone Specialists",
                description: "DGCA-approved drone pilots and engineers with real-world operational experience.",
              },
              {
                icon: Briefcase,
                title: "Industry Mentors",
                description: "Professionals from leading tech companies providing career guidance and insights.",
              },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <PremiumCard className="p-8 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3">{member.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </PremiumCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
