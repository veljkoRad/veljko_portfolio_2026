"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  projectRef: React.RefObject<HTMLElement | null>;
  heroRef: React.RefObject<HTMLElement | null>;
};
const Hero = ({ projectRef, heroRef }: HeroProps) => {
  // Text Animation Start
  const texts = ["Web Developer", "Marketing Assistant"];
  function useTypewriter(texts: string[], speed = 40, pause = 2000) {
    const [display, setDisplay] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
      const current = texts[index];
      const timeout = setTimeout(
        () => {
          if (!deleting && display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1));
          } else if (!deleting && display.length === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else if (deleting && display.length > 0) {
            setDisplay(display.slice(0, -1));
          } else if (deleting && display.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % texts.length);
          }
        },
        deleting ? speed / 2 : speed,
      );
      return () => clearTimeout(timeout);
    }, [display, deleting, index]);

    return display;
  }
  const text = useTypewriter(texts);
  // Text Animation End
  return (
    <section
      className="mt-24 px-12 max-sm:px-6  pt-26.5 max-md:pt-12 pb-16 max-sm:pb-0 "
      ref={heroRef}
    >
      <div className="  container-main   flex flex-col items-center gap-31.5">
        <div className="relative  w-full flex max-lg:justify-center max-sm:flex-col  ">
          <div className="relative flex flex-col justify-center z-20 w-full   ">
            <h1
              className="max-sm:text-3xl max-md:text-5xl max-xl:text-6xl text-7xl font-extrabold bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(90deg,rgba(59, 130, 246, 1) 0%, rgba(168, 85, 247, 1) 40%)",
                WebkitBackgroundClip: "text",
              }}
            >
              Hello, I'm Veljko <br />
              <p className="max-lg:mt-0 max-xl:mt-5 mt-7 text-primary  ...">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                >
                  |
                </motion.span>
              </p>
            </h1>
            <p className="max-lg:mt-4 mt-9 text-primary/50   text-lg  max-md:text-base max-w-[60ch] max-lg:max-w-[40ch] max-xl:max-w-[55ch]   ">
              I build fast, modern marketing websites and React/Next.js
              applications focused on performance, SEO, and clean user
              experience for startups, businesses, and digital products.
            </p>
            <div className="flex gap-6 mt-6">
              <a
                href="https://github.com/veljkoRad"
                aria-label="Github profile"
              >
                <Image
                  priority
                  width={42}
                  height={42}
                  src="/images/stackicons/github-icon.svg"
                  alt="github icon"
                  className=" hover:scale-110 transition-transform duration-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/veljko-radivojevic-77a825267"
                aria-label="LinkedIn profile"
              >
                <Image
                  priority
                  width={42}
                  height={42}
                  src="/images/stackicons/linkedin-icon.svg"
                  alt="linkedin icon"
                  className="rounded-md hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>

            <div className="flex items-center max-md:items-start gap-4 mt-8 flex-row max-md:flex-col font-bold">
              <button
                className="button"
                onClick={() =>
                  projectRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                My Work
                <ArrowRight />
              </button>
            </div>
          </div>
          <Image
            priority
            width={800}
            height={573}
            src="/images/hero_image.svg"
            alt="profile contact veljko"
            className="max-w-[500px] max-sm:max-w-[250px]  max-md:max-w-[250px] max-lg:max-w-[300px] max-xl:max-w-[360px] absolute max-sm:static right-0 bottom-0 self-end max-sm:mt-12 "
          />
        </div>
        <div className="flex justify-between w-full max-w-[1312px] max-md:px-6 px-16 py-8 border border-primary/20 rounded-md max-sm:hidden block">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">3+</p>
            <p className="font-thin text-primary/50 max-lg:text-sm">
              Years of experience
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">100+</p>
            <p className="font-thin text-primary/50  max-lg:text-sm">
              Delivered Projects
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">SEO</p>
            <p className="font-thin text-primary/50  max-lg:text-sm">
              Performance Focused
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
