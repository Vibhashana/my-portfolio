"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  as?: "div" | "li" | "figure";
  // "rise" fades content up; "clip" wipes an image in from the top.
  variant?: "rise" | "clip";
  // Stagger siblings by 60–80ms; longer delays make the page feel slow.
  delay?: number;
  className?: string;
};

// Reveals its children once, the first time they scroll into view.
const Reveal = ({
  children,
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className,
}: RevealProps) => {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [node]);

  return (
    <Tag
      ref={setNode}
      data-revealed={revealed || undefined}
      className={cn("reveal", `reveal-${variant}`, className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
