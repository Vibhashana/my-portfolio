import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Sahan Bandara | Frontend Developer (HTML, CSS, JavaScript, TypeScript, React, Next.js)",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  );
}
