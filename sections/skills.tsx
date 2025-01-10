import { CssIcon, HtmlIcon } from "@/assets/icons";
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      icon: HtmlIcon,
    },
    {
      id: 2,
      title: "CSS",
      icon: CssIcon,
    },
  ];

  return (
    <section className="py-10" id="skills">
      <div className="container">
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
            My Toolbox
          </p>
        </div>
        <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Skills & Technologies
        </h2>
        <p className="text-muted-foreground mx-auto mt-3 max-w-[60ch] text-center">
          Here are the tools and technologies I use to turn ideas into reality:
        </p>

        <div className="mt-5 flex justify-center gap-4">
          {skills.map((skill) => (
            <div
              className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2"
              key={skill.id}
            >
              <Image
                src={skill.icon}
                alt={skill.title}
                width={30}
                height={30}
              />
              <span>{skill.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
