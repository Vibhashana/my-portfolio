import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahanbandara.com"),
  alternates: {
    canonical: "/",
  },
  title: "Sahan Bandara | Frontend Developer",
  description:
    "Frontend developer crafting responsive, visually stunning, and high-performance websites. Let's bring your ideas to life!",
  keywords: [
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TailwindCSS",
    "html",
    "css",
    "UI Developer",
    "Portfolio",
    "Web Design",
    "TypeScript",
  ],
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sahan Bandara's Portfolio",
    url: "https://sahanbandara.com",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sahan Bandara",
    url: "https://sahanbandara.com",
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer crafting responsive, visually stunning, and high-performance websites. Let's bring your ideas to life!",
    sameAs: [
      "https://www.linkedin.com/in/sahan-bandara",
      "https://x.com/SahanVibhashana",
      "https://www.facebook.com/svbbk",
      "https://dribbble.com/vibhashana",
      "https://www.behance.net/vibhashana",
      "https://codepen.io/vibhashana",
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-mt-16 scroll-smooth"
    >
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
