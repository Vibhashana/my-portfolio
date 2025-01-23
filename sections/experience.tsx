import * as motion from "motion/react-client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SectionHeader from "@/components/section-header";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/ui/tag";

import { companies } from "@/lib/data";

const Experience = () => {
  return (
    <section className="py-10" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Work Experience"
          description="I've had the privilege of working on diverse projects that honed
          my technical skills and creativity. Here are some highlights:"
        />

        <div className="relative isolate mt-10 grid grid-cols-1 gap-10 after:absolute after:bottom-0 after:left-1/2 after:top-0 after:-z-20 after:w-[4px] after:-translate-x-1/2 after:bg-gradient-to-b after:from-blue-600 after:to-sky-300 md:mt-20 md:overflow-y-clip lg:grid-cols-2 lg:gap-y-0">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="group relative col-start-1 lg:-mt-[35%] lg:first:mt-0 lg:odd:col-start-2 lg:odd:ml-[30px] lg:even:mr-[30px]"
              style={{
                gridRowStart: index + 1,
              }}
            >
              {/* Dot */}
              <div className="absolute -top-[20px] left-1/2 size-[20px] -translate-x-1/2 rounded-full border-[5px] border-background bg-blue-700 lg:-left-[60px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:even:left-auto lg:group-even:-right-[60px] lg:group-even:left-auto" />

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="z-0"
              >
                <div className="absolute left-1/2 top-[21px] -z-10 size-[20px] -translate-x-1/2 rotate-45 border-2 bg-background lg:-left-[10px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[10px] lg:group-even:left-auto" />

                <div className="absolute left-1/2 top-[24px] z-20 size-[18px] -translate-x-1/2 rotate-45 bg-[#f2f2f2] dark:bg-[#080e1c] lg:-left-[7px] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:group-even:-right-[7px] lg:group-even:left-auto" />

                <Card className="relative z-10 mt-[30px] border-2 after:absolute after:inset-0 after:-z-10 after:bg-grain after:opacity-5 lg:mt-0">
                  <CardHeader className="flex flex-row items-center justify-between gap-2">
                    <motion.div
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5, staggerChildren: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs text-muted-foreground">
                        {company.duration}
                      </p>
                      <p className="text-sm">
                        <Link href={company.companyUrl} target="_blank">
                          {company.name}
                        </Link>
                      </p>
                      <p className="text-lg font-medium">{company.title}</p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="!mt-0"
                    >
                      <Link href={company.companyUrl} target="_blank">
                        <Image
                          src={company.logo}
                          alt={company.title}
                          width={80}
                          height={80}
                          className="h-auto w-[40px] object-cover md:w-[60px]"
                          sizes="(min-width: 780px) 60px, 38px"
                        />
                      </Link>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-4 list-disc space-y-2 text-sm text-muted-foreground">
                      {company.responsibilities.map((responsibility, key) => (
                        <motion.li
                          key={`${company.id}-${key}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5, staggerChildren: 0.1 }}
                        >
                          {responsibility}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <p className="text-sm font-medium">
                        Tech Stack and tools:
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, staggerChildren: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-2 flex flex-wrap gap-2"
                      >
                        {company.techStack?.map(({ icon, name }) => (
                          <Tag
                            key={`${company.id}-${name}`}
                            text={name}
                            icon={icon}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
