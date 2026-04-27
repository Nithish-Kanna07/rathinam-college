import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { forwardRef } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "accent"
  | "hero"
  | "destructive";
type ButtonSize = "sm" | "md" | "lg" | "xl" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle hover:shadow-card",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-card hover:shadow-elevated",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  ghost: "text-muted-foreground hover:text-foreground hover:bg-muted/60",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent/90 shadow-subtle hover:shadow-card",
  hero: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-elevated font-bold tracking-wide",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs rounded-md",
  md: "h-9 px-4 text-sm rounded-md",
  lg: "h-11 px-6 text-sm rounded-lg",
  xl: "h-13 px-8 text-base rounded-full",
  icon: "h-9 w-9 rounded-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      leftIcon,
      rightIcon,
      children,
      className,
      disabled,
      href,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      sizeStyles[size],
      variantStyles[variant],
      className,
    );

    if (href) {
      return (
        <Link to={href} className={classes}>
          {leftIcon}
          {children}
          {rightIcon}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!loading && rightIcon}
      </button>
    );
  },
);
Button.displayName = "Button";
