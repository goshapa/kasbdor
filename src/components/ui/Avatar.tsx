import clsx from "clsx";

export function Avatar({
  initials,
  color,
  size = "md",
  online,
  className,
}: {
  initials: string;
  color: string;
  size?: "sm" | "md" | "lg" | "xl";
  online?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "h-9 w-9 text-xs",
    md: "h-12 w-12 text-sm",
    lg: "h-16 w-16 text-base",
    xl: "h-24 w-24 text-2xl",
  };

  return (
    <div className={clsx("relative shrink-0", className)}>
      <div
        className={clsx(
          "flex items-center justify-center rounded-full font-display font-bold text-white ring-4 ring-white",
          sizes[size],
          color
        )}
      >
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
      )}
    </div>
  );
}
