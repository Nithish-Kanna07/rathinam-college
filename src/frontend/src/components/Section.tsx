import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  centered?: boolean;
}

export function Section({
  title,
  subtitle,
  className,
  children,
  titleClassName,
  centered = false,
  ...rest
}: SectionProps) {
  return (
    <section className={cn("py-20", className)} {...rest}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className={cn("mb-12", centered && "text-center")}>
            {title && (
              <h2
                className={cn(
                  "font-display text-3xl md:text-4xl font-bold text-foreground mb-3",
                  titleClassName,
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "text-muted-foreground text-lg max-w-2xl",
                  centered && "mx-auto",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
