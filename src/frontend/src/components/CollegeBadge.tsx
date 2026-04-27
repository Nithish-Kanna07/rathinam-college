import { cn } from "@/lib/utils";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "muted"
  | "success"
  | "warning"
  | "placement"
  | "green";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/15 text-secondary border-secondary/30",
  accent: "bg-accent/15 text-accent border-accent/30",
  muted: "bg-muted text-muted-foreground border-border",
  success: "bg-accent/10 text-accent border-accent/20",
  warning: "bg-secondary/10 text-secondary border-secondary/20",
  placement: "bg-secondary/15 text-secondary border-secondary/30 font-bold",
  green: "bg-accent/15 text-accent border-accent/30 font-bold",
};

export function Badge({
  variant = "primary",
  className,
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 text-xs font-semibold rounded-full border",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
