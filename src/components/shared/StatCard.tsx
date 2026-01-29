interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
