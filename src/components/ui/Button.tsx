/**
 * Button.tsx
 * Reusable button primitive with two variants: "primary" (filled navy) and "outline" (bordered).
 * Props: label, href (optional — renders <a> if present), variant, onClick, icon (Material Symbol name)
 */

import React from "react";

interface ButtonProps {
  label: string;
  href?: string;
  variant?: "primary" | "outline";
  icon?: string;
  onClick?: () => void;
  className?: string;
}

// Renders a filled primary button or an outlined secondary button
const Button: React.FC<ButtonProps> = ({
  label,
  href,
  variant = "primary",
  icon,
  onClick,
  className = "",
}) => {
  const base =
    "inline-flex items-center gap-2 px-8 py-3 rounded-lg font-body-md transition-all duration-200 active:scale-95 cursor-pointer";

  const styles =
    variant === "primary"
      ? `${base} bg-primary text-on-primary hover:bg-primary/90`
      : `${base} border-2 border-primary text-primary hover:bg-primary/5`;

  const content = (
    <>
      {label}
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
    </>
  );

  // Render anchor if href provided, otherwise button
  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${styles} ${className}`}>
      {content}
    </button>
  );
};

export default Button;
