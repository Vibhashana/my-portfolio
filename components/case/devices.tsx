import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  url: string;
  image: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  screenClassName?: string;
};

export const BrowserFrame = ({
  url,
  image,
  alt,
  sizes,
  className,
  screenClassName,
}: BrowserFrameProps) => (
  <div
    className={cn(
      "flex flex-col overflow-hidden rounded-[14px] border border-line bg-card shadow-[0_24px_60px_rgba(0,0,0,0.14)]",
      className
    )}
  >
    <div className="flex items-center gap-[7px] border-b border-line bg-paper px-4 py-[11px]">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="size-2.5 rounded-full bg-line" />
      ))}
      <span className="mx-auto truncate rounded-full bg-surface px-4 py-1 font-mono text-[12px] leading-[1.5] text-ink-muted">
        {url}
      </span>
      <span className="w-[44px] shrink-0" aria-hidden />
    </div>
    <div className={cn("relative min-h-0 flex-1", screenClassName)}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  </div>
);

type PhoneFrameProps = {
  image: StaticImageData;
  alt: string;
  className?: string;
};

export const PhoneFrame = ({ image, alt, className }: PhoneFrameProps) => (
  <div
    className={cn(
      "relative aspect-[300/640] rounded-[15.3%/7.2%] bg-ink p-[3.33%] shadow-[0_30px_60px_rgba(0,0,0,0.25)]",
      className
    )}
  >
    <div className="relative size-full overflow-hidden rounded-[12.9%/5.8%]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="300px"
        className="object-cover object-top"
      />
    </div>
    <span
      aria-hidden
      className="absolute left-1/2 top-[3.1%] h-[3.75%] w-[28%] -translate-x-1/2 rounded-full bg-ink"
    />
  </div>
);
