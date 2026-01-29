import { LucideIcon } from "lucide-react";

interface HUDLabelProps {
  icon?: LucideIcon;
  text: string;
  className?: string;
}

export const HUDLabel = ({ icon: Icon, text, className = "" }: HUDLabelProps) => {
  return (
    <div className={`label-tech ${className}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{text}</span>
    </div>
  );
};
