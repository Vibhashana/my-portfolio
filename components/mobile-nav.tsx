"use client";

import { menu } from "@/lib/data";
import type { Variants } from "motion/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const MotionLink = motion.create(Link);

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(containerRef);

  return (
    <div className="sm:hidden">
      <div style={container}>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={nav}
        >
          <motion.div
            className="absolute inset-0 max-w-[300px] backdrop-blur dark:border-white/15 dark:bg-white/10"
            variants={sidebarVariants}
          />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
          <Navigation />
        </motion.nav>
      </div>
    </div>
  );
};

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.3 },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const Navigation = () => (
  <motion.div
    variants={navVariants}
    className="relative z-10 mt-[60px] flex flex-col gap-5 p-5"
  >
    {menu.map((link, i) => (
      <MenuItem link={link} key={i} />
    ))}
  </motion.div>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ link }: { link: (typeof menu)[number] }) => {
  return (
    <MotionLink
      href={link.href}
      variants={itemVariants}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      {link.title}
    </MotionLink>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),

  closed: {
    clipPath: "circle(25px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

interface PathProps {
  d?: string;
  variants: Variants;
  transition?: { duration: number };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <Button
    size="icon"
    variant="ghost"
    onClick={toggle}
    className="absolute left-4 top-4 size-[50px] rounded-full bg-transparent !outline-none ring-inset"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </Button>
);

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
  position: "fixed",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  maxWidth: "100%",
  backgroundColor: "var(--accent)",
  // borderRadius: 30,
  overflow: "hidden",
  height: "100%",
  top: 0,
  left: 0,
};

const nav: React.CSSProperties = {
  width: 300,
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
