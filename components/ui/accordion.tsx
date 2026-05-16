"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn(
        "overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] shadow-[0_16px_38px_rgba(0,0,0,0.14)]",
        className,
      )}
      {...props}
    />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 px-5 py-[1.05rem] text-left text-[15px] font-semibold leading-7 text-white transition hover:text-[color:var(--brand-gold)] sm:px-6 sm:py-[1.15rem] sm:text-base",
          className,
        )}
        {...props}
      >
        {children}
        <span className="relative flex h-5 w-5 items-center justify-center">
          <Plus className="absolute h-4 w-4 transition group-data-[state=open]:opacity-0" />
          <Minus className="absolute h-4 w-4 opacity-0 transition group-data-[state=open]:opacity-100" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden text-sm leading-7 text-white/70 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className,
      )}
      {...props}
    >
      <div className="px-5 pb-5 sm:px-6 sm:pb-6">{props.children}</div>
    </AccordionPrimitive.Content>
  );
}
