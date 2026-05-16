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
        "flex h-12 w-full rounded-[18px] border border-white/12 bg-white/[0.045] px-4 text-[15px] text-white/92 outline-none transition placeholder:text-white/35 focus:border-[color:var(--brand-gold)] focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)]/25",
        className,
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
