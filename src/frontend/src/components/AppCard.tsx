import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  elevation?: "flat" | "subtle" | "card" | "elevated";
  hover?: boolean;
  onClick?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  tabIndex?: number;
}

const elevationStyles = {
  flat: "border border-border",
  subtle: "border border-border shadow-subtle",
  card: "border border-border shadow-card",
  elevated: "border border-border shadow-elevated",
};

export function Card({
  className,
  children,
  elevation = "card",
  hover = false,
  onClick,
  onKeyDown,
  tabIndex,
}: CardProps) {
  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (onKeyDown) {
      onKeyDown(e);
      return;
    }
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={tabIndex ?? (onClick ? 0 : undefined)}
      role={onClick ? "button" : undefined}
      className={cn(
        "bg-card rounded-lg",
        elevationStyles[elevation],
        hover &&
          "cursor-pointer hover:shadow-elevated hover:-translate-y-0.5 transition-smooth",
        onClick && "cursor-pointer",
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
  return <div className={cn("px-5 pt-5 pb-3", className)}>{children}</div>;
}

export function CardContent({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return <div className={cn("px-5 pb-5", className)}>{children}</div>;
}

export function CardFooter({
  className,
  children,
}: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn("px-5 pb-4 pt-2 border-t border-border mt-2", className)}
    >
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
        "font-display font-semibold text-foreground leading-tight",
        className,
      )}
    >
      {children}
    </h3>
  );
}
