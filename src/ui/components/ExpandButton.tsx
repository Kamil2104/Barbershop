interface ExpandButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  className?: string;
}

const ExpandButton = ({ isExpanded, onClick, className = "" }: ExpandButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-secondary text-text-primary text-xs lg:text-sm font-semibold uppercase tracking-wider lg:transition-colors lg:duration-300 lg:hover:bg-text-primary/5 lg:hover:border-text-primary cursor-pointer ${className}`}
    >
      <span>{isExpanded ? "Show Less" : "Show More"}</span>
      <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
        ↓
      </span>
    </button>
  );
};

export default ExpandButton;