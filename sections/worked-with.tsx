import { companies } from "@/lib/data";

const WorkedWith = () => {
  return (
    <section
      aria-label="Companies I’ve worked with"
      className="border-y border-line"
    >
      <div className="container-page flex flex-col gap-3.5 py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <p className="mono-label shrink-0 text-ink-muted">
          Shipped with teams at
        </p>
        <ul className="flex flex-wrap gap-x-[18px] gap-y-2 lg:gap-x-[34px]">
          {companies.map(({ name }) => (
            <li
              key={name}
              className="text-xl font-semibold tracking-[-0.015em] text-ink-muted lg:text-[28px] lg:leading-[1.18]"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkedWith;
