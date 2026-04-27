import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "destructive"
  | "outline"
  | "muted";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-primary/10 text-primary border-primary/20",
  primary: "bg-primary text-primary-foreground border-primary",
  secondary: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  accent: "bg-accent/15 text-accent border-accent/30",
  success: "bg-secondary/20 text-secondary-foreground border-secondary/30",
  warning: "bg-accent/15 text-accent border-accent/30",
  destructive: "bg-destructive/10 text-destructive border-destructive/20",
  outline: "bg-transparent text-foreground border-border",
  muted: "bg-muted text-muted-foreground border-border",
};

export function Badge({
  variant = "default",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border transition-smooth",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
