import {
  CssIcon,
  HtmlIcon,
  JavascriptIcon,
  NextIcon,
  ReactIcon,
  SassIcon,
  ShadcnIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/assets/icons";
import SkillIcon from "@/components/skill-icon";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      iconType: HtmlIcon,
    },
    {
      title: "CSS",
      iconType: CssIcon,
    },
    {
      title: "React",
      iconType: ReactIcon,
    },
    {
      title: "JavaScript",
      iconType: JavascriptIcon,
    },
    {
      title: "TypeScript",
      iconType: TypescriptIcon,
    },
    {
      title: "Next.js",
      iconType: NextIcon,
    },
    {
      title: "ShadCN",
      iconType: ShadcnIcon,
    },
    {
      title: "Tailwind",
      iconType: TailwindIcon,
    },
    {
      title: "Sass",
      iconType: SassIcon,
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
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-muted-foreground">
          Here are the tools and technologies I use to turn ideas into reality:
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          {skills.map(({ title, iconType }) => (
            <div
              className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5"
              key={title}
            >
              <SkillIcon type={iconType} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
