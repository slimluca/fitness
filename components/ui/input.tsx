import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-white/12 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[color:var(--brand-gold)]",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
