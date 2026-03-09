interface ChangeViewButtonProps {
  text: "Show Less" | "Show More" | "Next";
  iconRotation: string;
  onClick: () => void;
  className?: string;
}

const ChangeViewButton = ({
  text,
  iconRotation,
  onClick,
  className = "",
}: ChangeViewButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-secondary text-text-primary text-xs lg:text-sm font-semibold uppercase tracking-wider lg:transition-colors lg:duration-300 lg:hover:bg-text-primary/5 lg:hover:border-text-primary cursor-pointer ${className}`}
    >
      <span>{text}</span>
      <span
        className={`transform transition-transform duration-300 ${iconRotation}`}
      >
        ↓
      </span>
    </button>
  );
};

export default ChangeViewButton;
