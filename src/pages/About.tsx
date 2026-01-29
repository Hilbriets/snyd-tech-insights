import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { StatCard } from "@/components/shared/StatCard";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Building2, 
  Users, 
  MapPin, 
  Award,
  GraduationCap,
  Cpu,
  Briefcase
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageBanner
        title="About SNYD TECH"
        subtitle="Expanding Perspectives Through Technology Education"
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in Madurai, Tamil Nadu, SNYD TECH emerged from a vision to democratize technology education and make cutting-edge skills accessible to students across India. We recognized the growing gap between academic curricula and industry demands in emerging technologies.
                </p>
                <p>
                  Our journey began with a simple mission: to provide practical, hands-on training in technologies that are shaping the future. From programming fundamentals to advanced drone technology, we've helped hundreds of students transform their curiosity into careers.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <h3 className="font-heading font-bold text-xl mb-3">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To bridge the gap between academic learning and industry requirements by offering practical, hands-on training in cutting-edge technologies including AI, Data Science, Drone Technology, and 3D Printing.
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                <h3 className="font-heading font-bold text-xl mb-3">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To become the leading technology education provider in South India, empowering students with the skills needed for tomorrow's jobs and fostering innovation through technology.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="p-6 text-center border-0 shadow-md hover-lift">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading font-bold text-2xl">2022</div>
              <div className="text-muted-foreground text-sm">Founded</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover-lift">
              <Building2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading font-bold text-lg">Education</div>
              <div className="text-muted-foreground text-sm">Industry</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover-lift">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading font-bold text-2xl">11-50</div>
              <div className="text-muted-foreground text-sm">Employees</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover-lift">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading font-bold text-lg">Madurai</div>
              <div className="text-muted-foreground text-sm">Tamil Nadu</div>
            </Card>
            <Card className="p-6 text-center border-0 shadow-md hover-lift">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading font-bold text-lg">Tech & Drones</div>
              <div className="text-muted-foreground text-sm">Specialization</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="500+" label="Students Trained" />
            <StatCard value="20+" label="Technology Workshops" />
            <StatCard value="15+" label="Drone Projects Completed" />
            <StatCard value="5.0" label="Rating from Reviews" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Expert Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Learn from the best in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-lg hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-snyd flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Technology Trainers</h3>
              <p className="text-muted-foreground">
                Certified experts in Python, Java, and AI technologies with years of teaching experience.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-snyd flex items-center justify-center">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Drone Specialists</h3>
              <p className="text-muted-foreground">
                DGCA-approved drone pilots and engineers with real-world operational experience.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-lg hover-lift">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-snyd flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Industry Mentors</h3>
              <p className="text-muted-foreground">
                Real-world professionals from leading tech companies providing career guidance.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
