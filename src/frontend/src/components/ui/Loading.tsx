import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const sizeMap = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-10 h-10 border-3",
};

export function Loading({ size = "md", label, className }: LoadingProps) {
  return (
    <output
      aria-label={label ?? "Loading"}
      className={cn("flex flex-col items-center gap-3", className)}
    >
      <div
        className={cn(
          "rounded-full border-border border-t-primary animate-spin",
          sizeMap[size],
        )}
      />
      {label && (
        <p className="text-sm text-muted-foreground animate-pulse">{label}</p>
      )}
    </output>
  );
}

export function SkeletonLine({ className }: { className?: string }) {
  return (
    <div className={cn("h-4 bg-muted rounded animate-pulse", className)} />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 space-y-3",
        className,
      )}
    >
      <SkeletonLine className="w-3/4" />
      <SkeletonLine className="w-full" />
      <SkeletonLine className="w-1/2" />
    </div>
  );
}
