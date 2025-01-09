import { profileImage, grainImage } from "@/assets/images";
import HeroRings from "@/components/hero-rings";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    //md:py-48 lg:py-60
    <section className="relative isolate flex min-h-screen items-center overflow-y-hidden overflow-x-clip py-20">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        />
        {/* <div className="absolute inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> */}
        <HeroRings />
        {/* </div> */}
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
          <div className="mt-4 inline-flex items-center gap-4 rounded-md border border-gray-800 bg-gray-950 px-4 py-1.5 text-sm font-medium">
            <span className="relative size-2.5 rounded-full bg-green-500 after:absolute after:-inset-[5px] after:size-5 after:animate-ping after:rounded-full after:bg-green-500/80" />
            <span>Available for work</span>
          </div>
          <div className="mx-auto max-w-[55ch]">
            <h1 className="mt-8 text-center text-3xl font-bold leading-10 tracking-wide md:text-5xl md:leading-[3.5rem]">
              Turning Ideas into Exceptional Digital Experiences
            </h1>
            <p className="text-muted-foreground mt-4 text-center md:text-lg">
              A frontend developer driven by a passion for clean code and
              seamless user experiences. I transform ideas into responsive,
              fast, and visually engaging websites that delight users and
              clients alike.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline" size="lg" className="group h-12" asChild>
            <Link href="#">
              <span>Explore my work</span>
              <ArrowDown className="!size-[18px] group-hover:animate-bounce" />
            </Link>
          </Button>
          <Button
            size="lg"
            asChild
            className="h-12 bg-blue-700 text-white hover:bg-blue-800"
          >
            <Link href="#contact">
              <span className="text-xl">🤝</span> Let&apos;s connect!
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
