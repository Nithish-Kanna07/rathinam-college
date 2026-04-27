import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ className, children, hover, onClick }: CardProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };
  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={cn(
        "bg-card rounded-xl border border-border shadow-card",
        hover &&
          "cursor-pointer hover:shadow-elevated hover:-translate-y-1 transition-smooth",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return <div className={cn("px-6 pt-6 pb-3", className)}>{children}</div>;
}

export function CardContent({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return <div className={cn("px-6 pb-6", className)}>{children}</div>;
}

export function CardFooter({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("px-6 pb-5 pt-3 border-t border-border", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return (
    <h3
      className={cn(
        "font-display font-semibold text-lg text-foreground leading-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
