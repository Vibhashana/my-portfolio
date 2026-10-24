import SectionHeader from "@/components/section-header";
import Chip, { ChipList } from "@/components/ui/chip";
import { skillGroups } from "@/lib/data";

const Skills = () => {
  return (
    <section id="toolbox" className="bg-surface">
      <div className="container-page py-[72px] md:py-36">
        <SectionHeader
          eyebrow="05 — Toolbox"
          title="Skills & technologies"
          description="Here are the tools and technologies I use to turn ideas into reality."
          className="[&>p]:hidden md:[&>p]:block"
        />

        <ul className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-5 md:mt-16 lg:grid-cols-4">
          {skillGroups.map(({ title, skills }) => (
            <li
              key={title}
              className="flex flex-col gap-[18px] rounded-[22px] bg-card p-[22px] md:min-h-[321px] md:gap-7 md:rounded-[28px] md:p-8"
            >
              <div className="mono-label flex justify-between">
                <h3>{title}</h3>
                <span className="hidden text-ink-muted md:inline">
                  {String(skills.length).padStart(2, "0")}
                </span>
              </div>
              <ChipList>
                {skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </ChipList>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
