import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gradient" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all",
          {
            "bg-gray-800 text-gray-300 hover:bg-gray-700": variant === "default",
            "bg-white text-black shadow-md":
              variant === "gradient",
            "border border-gray-700 bg-transparent text-gray-400 hover:border-gray-500 hover:text-gray-300":
              variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
