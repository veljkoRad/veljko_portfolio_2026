'use client";';
import { useState, RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import SectionTitle from "./UI/SectionTitle";

type AboutTabContent = {
  aboutRef: RefObject<HTMLDivElement | null>;
};
const About = ({ aboutRef }: AboutTabContent) => {
  const aboutInView = useInView(aboutRef, { once: true, margin: "-150px" });

  const [value, setValue] = useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className=" px-12 max-sm:px-6  mt-10">
      <div className="container-main">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="section-title ">
            <SectionTitle>About Me</SectionTitle>
          </h2>
        </div>

        <motion.div
          ref={aboutRef}
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center max-lg:items-stretch justify-between gap-12 py-16  flex-row max-lg:flex-col  "
        >
          <div>
            <p className="text-secondary max-md:text-sm tracking-[1px] font-medium  max-w-[75ch]">
              Frontend Developer with 3 years of experience building modern
              marketing websites, landing pages, and React/Next.js applications.
              Focused on scalable UI systems, API integrations, performance, and
              clean user experiences for digital products and businesses
            </p>
            <a
              className="button max-w-[200px] mt-6 "
              href="/cv_2026.pdf"
              download
            >
              Download CV
              <Download className="ml-2.5" />
            </a>
          </div>
          <div className=" flex flex-col items-stretch justify-center gap-2.5">
            <div className=" max-md:text-sm leading-7 flex flex-col gap-6  ">
              <div className="card ">
                <div className="card2">
                  <p className="text-sm max-sm:text-xs font-medium text-blue text-center">
                    Experience
                  </p>
                  <p className="text-lg max-sm:text-base font-bold mt-4">
                    {" "}
                    WEB DEVELOPER / MARKETING ASSISTANT
                  </p>
                  <p>
                    Fortrade <br />
                  </p>
                  <p className="max-sm:text-xs">2023 - Current</p>
                </div>
              </div>
              <div className="card ">
                <div className="card2">
                  <p className="text-sm max-sm:text-xs font-medium text-blue text-center">
                    Education
                  </p>
                  <p className="text-lg max-sm:text-base font-bold mt-4">
                    {" "}
                    BSc in Mechanical Engineering
                  </p>
                  <p>University of Belgrade</p>
                  <p className="max-sm:text-xs">2018</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
