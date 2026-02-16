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
            "bg-gray-100 text-gray-800 hover:bg-gray-200": variant === "default",
            "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md":
              variant === "gradient",
            "border border-gray-300 bg-transparent text-gray-700 hover:border-purple-600 hover:text-purple-600":
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
