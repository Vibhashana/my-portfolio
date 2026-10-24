import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  tone = "light",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:gap-6 xl:flex-row xl:items-end xl:justify-between xl:gap-10",
        className
      )}
    >
      <div className="flex flex-col gap-3.5 md:gap-5 xl:shrink-0">
        <p className="eyebrow">{eyebrow}</p>
        <h2
          className={cn(
            "text-balance text-display-l font-semibold",
            tone === "dark" ? "text-on-night" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={cn(
            "max-w-[380px] text-body-m xl:min-w-[260px]",
            tone === "dark" ? "text-on-night-muted" : "text-ink-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
