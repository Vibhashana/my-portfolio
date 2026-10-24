import About from "@/sections/about";
import Contact from "@/sections/contact";
import Experience from "@/sections/experience";
import Header from "@/sections/header";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Skills from "@/sections/skills";
import WorkedWith from "@/sections/worked-with";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkedWith />
        <Services />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
