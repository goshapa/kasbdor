import { type ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: ReactNode;
  variant?: "neutral" | "brand" | "success" | "dark";
  className?: string;
}) {
  const variants = {
    neutral: "bg-ink-50 text-ink-600",
    brand: "bg-brand-50 text-brand-700",
    success: "bg-emerald-50 text-emerald-700",
    dark: "bg-ink-900 text-white",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
