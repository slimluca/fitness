import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-w-0 items-center justify-center gap-2 rounded-full text-center text-sm font-semibold leading-[1.15] whitespace-normal transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,var(--brand-gold),#f0c64c)] px-5 py-3 text-black shadow-[0_18px_45px_rgba(255,215,0,0.16)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(255,215,0,0.22)] sm:px-6",
        outline:
          "border border-white/20 bg-white/5 px-5 py-3 text-white hover:border-[color:var(--brand-gold)] hover:bg-white/10 sm:px-6",
        ghost: "px-4 py-2.5 text-white/80 hover:bg-white/4 hover:text-white",
        dark: "bg-[var(--surface-strong)] px-5 py-3 text-white hover:-translate-y-0.5 sm:px-6",
      },
      size: {
        default: "min-h-11",
        sm: "min-h-10 px-4 text-xs",
        lg: "min-h-12 px-6 py-3.5 sm:px-8",
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
