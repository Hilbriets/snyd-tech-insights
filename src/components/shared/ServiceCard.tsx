import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features?: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, href, features }: ServiceCardProps) => {
  return (
    <Card className="group hover-lift border-0 shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-snyd flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="font-heading text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
