import { Star } from "lucide-react";
import clsx from "clsx";

export function Rating({
  value,
  size = 14,
  className,
}: {
  value: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-0.5", className)}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(value);
        return (
          <Star
            key={i}
            size={size}
            className={filled ? "fill-gold text-gold" : "fill-ink-100 text-ink-100"}
          />
        );
      })}
    </div>
  );
}
