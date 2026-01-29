interface SectionDividerProps {
  className?: string;
}

export const SectionDivider = ({ className = "" }: SectionDividerProps) => {
  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="divider-gradient" />
      </div>
    </div>
  );
};
