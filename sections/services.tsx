import Reveal from "@/components/reveal";
import SectionHeader from "@/components/section-header";
import Chip, { ChipList } from "@/components/ui/chip";
import { services } from "@/lib/data";

const Services = () => {
  return (
    <section className="container-page pt-[72px] md:pt-36">
      <SectionHeader
        eyebrow="01 — What I do"
        title={
          <>
            Design-minded frontend,
            <br className="hidden md:block" /> end to end
          </>
        }
        description="Whether you need a senior pair of hands on your team or someone to take a product from Figma to launch."
      />

      <ul className="mt-8 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
        {services.map(({ title, description, chips }, index) => (
          <Reveal
            as="li"
            key={title}
            delay={index * 70}
            className="flex flex-col gap-3 rounded-[22px] border border-line bg-card px-[22px] py-6 md:gap-4 md:rounded-[28px] md:px-8 md:py-9"
          >
            <span className="eyebrow">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-h3 font-semibold">{title}</h3>
            <p className="text-body-s text-ink-muted md:text-body-m">
              {description}
            </p>
            <ChipList className="mt-auto pt-2">
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </ChipList>
          </Reveal>
        ))}
      </ul>
    </section>
  );
};

export default Services;
