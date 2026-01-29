import { motion } from "framer-motion";

interface TechGridProps {
  className?: string;
  variant?: "light" | "dark";
}

export const TechGrid = ({ className = "", variant = "dark" }: TechGridProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base Grid */}
      <div 
        className={`absolute inset-0 ${variant === "dark" ? "tech-grid-dark" : "tech-grid"}`}
      />
      
      {/* Animated Scan Line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Corner Accents */}
      <svg className="absolute top-8 left-8 w-16 h-16 text-primary/20" viewBox="0 0 64 64">
        <path
          d="M0 20 L0 0 L20 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg className="absolute top-8 right-8 w-16 h-16 text-primary/20" viewBox="0 0 64 64">
        <path
          d="M44 0 L64 0 L64 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg className="absolute bottom-8 left-8 w-16 h-16 text-primary/20" viewBox="0 0 64 64">
        <path
          d="M0 44 L0 64 L20 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg className="absolute bottom-8 right-8 w-16 h-16 text-primary/20" viewBox="0 0 64 64">
        <path
          d="M44 64 L64 64 L64 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
