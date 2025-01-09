// import About from "@/sections/about";
// import Contact from "@/sections/contact";
// import Experience from "@/sections/experience";
import Footer from "@/sections/footer";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* <About />
        <Experience />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
