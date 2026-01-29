import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { PremiumCard } from "@/components/premium/PremiumCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  features?: string[];
  index?: number;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  href, 
  features,
  index = 0 
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <PremiumCard className="p-8 h-full group">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="font-heading text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{description}</p>
        
        {features && features.length > 0 && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </PremiumCard>
    </motion.div>
  );
};
