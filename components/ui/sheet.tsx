"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetTitle = SheetPrimitive.Title;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-sm duration-300 ease-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-line bg-paper px-5 pb-8 pt-4 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.25)] duration-400 ease-drawer data-[state=closed]:duration-200 data-[state=closed]:ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top motion-reduce:data-[state=open]:fade-in-0 motion-reduce:data-[state=closed]:slide-out-to-top-0 motion-reduce:data-[state=open]:slide-in-from-top-0",
        className
      )}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="absolute right-5 top-[14px] inline-flex h-11 items-center gap-2 rounded-full border border-line bg-card px-[18px] text-label font-medium transition-transform duration-150 ease-out active:scale-[0.97]">
        Close
        <X className="size-4" aria-hidden />
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetContent };
