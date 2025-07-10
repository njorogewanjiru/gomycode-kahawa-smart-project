interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  className?: string;
}

export function Button({
  children,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "px-4 py-2 rounded-lg font-medium transition";
  const variants = {
    primary: "bg-[#5e8c61] hover:bg-[#4b7350] text-white",
    secondary: "bg-[#f5efe6] hover:bg-[#e2dbd2] text-[#3b2f2f]",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
