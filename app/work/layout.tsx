import Contact from "@/sections/contact";
import Header from "@/sections/header";

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>
        {children}
        <Contact />
      </main>
    </>
  );
}
