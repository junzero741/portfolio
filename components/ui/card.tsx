import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: "blue" | "purple" | "orange" | "green" | "none";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient = "none", hover = true, children, ...props }, ref) => {
    const gradientClasses = {
      blue: "from-blue-500 to-cyan-500",
      purple: "from-purple-500 to-pink-500",
      orange: "from-orange-500 to-yellow-500",
      green: "from-green-500 to-emerald-500",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all",
          hover && "hover:shadow-xl hover:scale-105",
          className
        )}
        {...props}
      >
        {gradient !== "none" && (
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity",
              hover && "group-hover:opacity-5",
              gradientClasses[gradient]
            )}
          />
        )}
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
