import { cn } from "@/lib/utils";

type ChipProps = {
  children: React.ReactNode;
  className?: string;
};

const Chip = ({ children, className }: ChipProps) => (
  <li
    className={cn(
      "inline-flex rounded-full border border-line px-3.5 py-2 text-label font-medium text-ink",
      className
    )}
  >
    {children}
  </li>
);

export const ChipList = ({ children, className }: ChipProps) => (
  <ul className={cn("flex flex-wrap gap-2", className)}>{children}</ul>
);

export default Chip;
