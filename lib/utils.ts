import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom type scale from tailwind.config.ts so
// `text-display-l` isn't treated as a colour and dropped next to `text-ink`.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-xl",
            "display-xl-serif",
            "display-l",
            "display-l-serif",
            "display-m",
            "title-l",
            "title-m",
            "h2",
            "stat",
            "h3",
            "body-l",
            "body-m",
            "body-s",
            "label",
            "mono-s",
            "mono-m",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
