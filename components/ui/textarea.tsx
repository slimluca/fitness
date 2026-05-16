import * as React from "react";

import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[132px] w-full rounded-[22px] border border-white/12 bg-white/[0.045] px-4 py-3.5 text-[15px] leading-7 text-white/92 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] outline-none transition placeholder:text-white/35 focus:border-[color:var(--brand-gold)] focus-visible:ring-2 focus-visible:ring-[color:var(--brand-gold)]/25",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
