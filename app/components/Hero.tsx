"use client";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
type HeroProps = {
  projectRef: React.RefObject<HTMLElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
};
const Hero = ({ projectRef, heroRef }: HeroProps) => {
  return (
    <section className="mt-19" ref={heroRef}>
      <div className="bg-hero  px-6">
        <div className="relative max-w-7xl w-full mx-auto flex max-lg:justify-center h-[93vh]  ">
          <div className="relative flex flex-col justify-center z-20 w-full  max-sm:max-w-90 ">
            <h1 className="text-primary  max-md:text-5xl max-lg:text-6xl text-7xl font-bold">
              Hi, I'm Veljko <br />
              <span className="text-blue font-bold max-sm:text-3xl max-lg:text-4xl text-7xl ">
                Web Developer
              </span>
            </h1>
            <p className="mt-4 text-secondary max-w-[60ch] max-lg:max-w-[50ch] font-medium ">
              I build websites and apps that convert. Whether it's landing pages
              or React projects. Lead gen background means I think like a
              marketer first, developer second.
            </p>
            <div className="flex items-center max-md:items-start gap-4 mt-10 flex-row max-md:flex-col font-bold">
              <a
                href="/cv_2026.pdf"
                download
                className="btn-color flex items-center justify-center px-7 py-4.5 rounded-2xl text-white "
              >
                Download CV <Download className="ml-2.5" />
              </a>
              <button
                className="border border-blue/60 w-36 text-primary flex items-center justify-center rounded-2xl px-4 py-4.5 cursor-pointer group hover:border-blue"
                onClick={() =>
                  projectRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                My Work{" "}
                <ArrowRight className="ml-2.5 group-hover:translate-x-1 transform-translate duration-300" />
              </button>
            </div>
          </div>
          <div className="flex absolute  z-10 max-xs:!w-35  max-sm:w-50 max-md:max-w-70 max-lg:max-w-87 max-xl:max-w-115 bottom-0  -right-10 max-lg:right-4 self-end">
            <Image
              priority
              src="/images/gear.svg"
              className="text-blue w-[83%] absolute -z-10 top-[12%] -left-[14%] animate-[spin_28s_linear_infinite]"
              width={480}
              height={480}
              alt="gear background"
            />
            <Image
              priority
              width={593}
              height={853}
              src="/images/profile2.png"
              className="w-full h-auto "
              alt="profile contact veljko"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
