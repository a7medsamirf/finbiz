import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "DarkBtn" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyles = "font-semibold rounded-full transition duration-300 relative";

  const variantStyles = {
    primary:"bg-primary text-white overflow-hidden group hover:bg-gradient-to-r hover:from-lime-400 hover:to-lime-400 hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 shadow-lg shadow-primary/30",
    secondary: "bg-black dark:bg-white text-white dark:text-black overflow-hidden group hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300",
    DarkBtn: "bg-gray-100 dark:bg-gray-800 border border-neutral-700 border-b-0",
    outline: "",
  };

  const sizeStyles = {
    sm: "px-2 py-3 text-sm md:w-30 w-1/2",
    md: "px-5 py-3 text-base md:w-40 w-1/2",
    lg: "px-2 md:px-2 md:py-3 py-3 text-lg md:w-52 w-1/2",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      <span className="relative">{label}</span>
    </button>
  );
};

export default Button;
