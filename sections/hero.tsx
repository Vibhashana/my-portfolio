import { profileImage, grainImage } from "@/assets/images";
import HeroRings from "@/components/hero-rings";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-y-hidden overflow-x-clip py-20">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-[0.075] dark:opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        <HeroRings />
      </div>
      <div className="container isolate">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={profileImage}
            alt="Sahan"
            className="size-[100px] rounded-full"
            width={100}
            height={100}
            priority
          />
          <div className="mt-4 inline-flex items-center gap-4 rounded-md border border-neutral-500/20 bg-neutral-200 px-4 py-1.5 text-sm font-medium dark:border-gray-800 dark:bg-gray-950">
            <span className="relative size-2.5 rounded-full bg-green-500 after:absolute after:-inset-[5px] after:size-5 after:animate-ping after:rounded-full after:bg-green-500/80" />
            <span>Available for work</span>
          </div>
          <div className="mx-auto max-w-[55ch]">
            <h1 className="mt-8 text-center text-3xl font-bold leading-10 tracking-wide md:text-5xl md:leading-[3.5rem]">
              Turning Ideas into{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-300 bg-clip-text text-transparent">
                Exceptional Digital Experiences
              </span>
            </h1>
            <p className="mt-4 text-center text-muted-foreground md:text-lg">
              A frontend developer driven by a passion for clean code and
              seamless user experiences. I transform ideas into responsive,
              fast, and visually engaging websites that delight users and
              clients alike.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="outline" size="lg" className="group h-12" asChild>
            <Link href="#projects">
              <span>Explore my work</span>
              <ArrowDown className="!size-[18px] group-hover:animate-bounce" />
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="h-12 shadow-[0_8px_20px_0] shadow-blue-800/50"
          >
            <Link href="#contact">
              <span className="text-xl">🤝</span> Let&apos;s connect!
            </Link>
          </Button>
        </div>
        <Mouse className="mx-auto mt-10 animate-bounce" size={30} />
      </div>
    </section>
  );
};

export default Hero;
