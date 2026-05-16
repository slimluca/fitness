import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,var(--brand-gold),#f0c64c)] px-6 py-3 text-black shadow-[0_18px_45px_rgba(255,215,0,0.16)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,215,0,0.22)]",
        outline:
          "border border-white/20 bg-white/5 px-6 py-3 text-white hover:border-[color:var(--brand-gold)] hover:bg-white/10",
        ghost: "px-4 py-2 text-white/80 hover:text-white",
        dark: "bg-[var(--surface-strong)] px-6 py-3 text-white hover:-translate-y-0.5",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
