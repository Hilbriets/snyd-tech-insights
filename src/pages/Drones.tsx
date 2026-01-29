import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plane,
  Camera,
  Sprout,
  Building,
  Map,
  Shield,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Wrench,
  ClipboardList
} from "lucide-react";

const droneServices = [
  {
    icon: GraduationCap,
    title: "Drone Pilot Training",
    description: "DGCA-approved drone pilot certification courses for individuals and organizations.",
    features: [
      "Basic to Advanced Flight Training",
      "DGCA Certification Preparation",
      "Hands-on Flying Experience",
      "Safety & Regulations",
    ],
  },
  {
    icon: Camera,
    title: "Aerial Photography & Videography",
    description: "Professional aerial imaging services for events, real estate, and commercial projects.",
    features: [
      "Wedding & Event Coverage",
      "Real Estate Photography",
      "Commercial Ad Filming",
      "360° Panoramic Views",
    ],
  },
  {
    icon: Sprout,
    title: "Agricultural Solutions",
    description: "Precision agriculture services using drone technology for crop monitoring and management.",
    features: [
      "Crop Health Monitoring",
      "Spraying & Seeding",
      "Land Surveying",
      "Irrigation Planning",
    ],
  },
  {
    icon: Building,
    title: "Industrial Inspection",
    description: "Safe and efficient inspection services for infrastructure and industrial facilities.",
    features: [
      "Building & Structure Inspection",
      "Power Line Monitoring",
      "Wind Turbine Inspection",
      "Pipeline Surveying",
    ],
  },
  {
    icon: Map,
    title: "Surveying & Mapping",
    description: "High-precision aerial surveying and 3D mapping services for various applications.",
    features: [
      "Topographic Mapping",
      "Construction Site Monitoring",
      "3D Modeling",
      "Volume Calculations",
    ],
  },
  {
    icon: Shield,
    title: "Security & Surveillance",
    description: "Enhanced security solutions through aerial monitoring and surveillance capabilities.",
    features: [
      "Perimeter Security",
      "Event Security",
      "Traffic Monitoring",
      "Search & Rescue Support",
    ],
  },
];

const Drones = () => {
  return (
    <Layout>
      <PageBanner
        title="Drone Solutions"
        subtitle="Providing Drone-Based Solutions for Day-to-Day Problems"
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
              <Plane className="w-4 h-4" />
              DGCA Approved Training
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Innovative Drone Technology Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              At SNYD TECH, we aim to provide drone-based solutions and products for day-to-day problems across various sectors. Our DGCA-approved training programs and practical approach make us a leader in drone education and services in Tamil Nadu.
            </p>
          </div>
        </div>
      </section>

      {/* Drone Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12">
            Our Drone Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {droneServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover-lift">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-snyd flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Drone Training Programs
              </h2>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    Basic Drone Operations (2 Weeks)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Introduction to drone technology, basic flight operations, and safety protocols.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Drone Components & Types",
                      "Basic Flight Controls",
                      "Pre-flight Checks",
                      "Safety Regulations",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Drone Maintenance Software
              </h2>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wrench className="w-6 h-6 text-secondary" />
                    End-to-End Maintenance Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete application for drone maintenance and fleet management.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Keeping track of inventory",
                      "Log drone configurations",
                      "Manage models and certificates",
                      "Maintenance scheduling",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-snyd relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Start Your Drone Journey Today
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Learn from DGCA-approved instructors with real-world drone operation experience
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">
              Enroll in Drone Course
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Drones;
