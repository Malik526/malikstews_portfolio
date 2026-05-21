import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({ className = "", variant = "primary", ...props }: ButtonProps) => {
  const styles =
    variant === "primary"
      ? "border-signal/50 bg-signal text-ink hover:bg-cyan-300"
      : "border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <button
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    />
  );
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export const ButtonLink = ({ to, children, className = "", variant = "primary", ...props }: ButtonLinkProps) => {
  const styles =
    variant === "primary"
      ? "border-signal/50 bg-signal text-ink hover:bg-cyan-300"
      : "border-white/15 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link
      to={to}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-4 text-sm font-semibold transition ${styles} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
