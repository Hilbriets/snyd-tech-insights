import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Coffee, 
  Brain, 
  BarChart3, 
  Box,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Python Programming",
    description: "From basics to advanced applications including web development, automation, and data analysis. Perfect for beginners and intermediate programmers.",
    features: [
      "Core Python Fundamentals",
      "Web Development with Django",
      "Data Analysis & Visualization",
      "Automation Scripts",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Coffee,
    title: "Java Development",
    description: "Comprehensive Java programming courses covering object-oriented concepts, enterprise applications, and Android development.",
    features: [
      "Core Java & OOP Concepts",
      "Spring Framework",
      "Android App Development",
      "Enterprise Applications",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence & Machine Learning",
    description: "Learn AI/ML concepts with practical implementations using popular frameworks like TensorFlow and PyTorch.",
    features: [
      "Machine Learning Algorithms",
      "Deep Learning with Neural Networks",
      "Computer Vision Applications",
      "NLP Fundamentals",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Data Science & Analytics",
    description: "Master data science tools and techniques to extract insights from data and make data-driven decisions.",
    features: [
      "Data Analysis with Pandas",
      "Statistical Analysis",
      "Machine Learning for Data Science",
      "Data Visualization",
    ],
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Box,
    title: "3D Printing Technology",
    description: "Hands-on training in 3D printing technology from design to production for prototyping and manufacturing.",
    features: [
      "3D Modeling & Design",
      "Printer Operation & Maintenance",
      "Material Selection",
      "Prototyping Services",
    ],
    color: "from-amber-500 to-yellow-500",
  },
];

const Services = () => {
  return (
    <Layout>
      <PageBanner
        title="Our Services"
        subtitle="Empowering You with Cutting-Edge Technology Skills"
      />

      {/* Intro */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Technology Education & Training
            </h2>
            <p className="text-lg text-muted-foreground">
              We specialize in providing workshops on the latest technologies for school and college students, helping them build successful careers in emerging tech fields.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover-lift">
                <div className="grid lg:grid-cols-3">
                  <div className={`p-8 bg-gradient-to-br ${service.color} text-white flex flex-col justify-center`}>
                    <service.icon className="w-12 h-12 mb-4" />
                    <CardTitle className="text-2xl mb-2 text-white">{service.title}</CardTitle>
                  </div>
                  <CardContent className="lg:col-span-2 p-8">
                    <p className="text-muted-foreground text-lg mb-6">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
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
            Ready to Learn?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our next batch and start your journey in technology
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
            <Link to="/contact">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
