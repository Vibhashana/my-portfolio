type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-sm font-semibold uppercase tracking-widest text-transparent">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-3 max-w-[60ch] text-center text-muted-foreground">
          {description}
        </p>
      )}
    </>
  );
};

export default SectionHeader;
