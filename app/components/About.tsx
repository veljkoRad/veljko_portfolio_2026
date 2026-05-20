'use client";';
import { useState, RefObject } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCircularProgress from "./UI/AnimatedCircularProgress";
import { skills } from "@/data/aboutData";
import { aboutTabContent } from "@/data/aboutData";

const aboutTabs = ["About", "Experience", "Education"];

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
    <section className="bg-bg-second px-6">
      <div className="container-main">
        <div className="flex items-start max-lg:items-center justify-between gap-12 mt-12  flex-row max-lg:flex-col-reverse max-sm:max-w-90 max-sm:mx-auto  ">
          {/* Percentage Cards */}
          <div className="grid grid-cols-2  gap-7.5 max-sm:flex max-sm:flex-col  max-sm:w-full">
            {skills.map((item, index) => (
              <AnimatedCircularProgress
                key={index}
                value={item.value}
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
          {/* About me */}
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className=" flex flex-col items-start justify-center gap-2.5 "
          >
            <h2 className="section-title ">About me</h2>
            <p className="text-secondary max-md:text-sm tracking-[1px] font-medium  max-w-[75ch]">
              Frontend Developer with 3 years of experience building responsive
              marketing websites, landing pages, React/Next.js applications, and
              CMS-integrated platforms. Experienced in API integrations,
              frontend performance optimization, and maintaining scalable,
              production-ready interfaces.
            </p>
            <div className="flex gap-8 mt-4">
              {aboutTabs.map((item, i) => (
                <button
                  className={`text-lg normal-case font-bold  ${value == i ? "text-blue" : "text-primary"} cursor-pointer ${value == i ? "border-b-2 border-blue" : ""}`}
                  onClick={() => handleChange(i)}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
            {aboutTabContent.map((item, i) => (
              <div
                className={`${value !== i ? "hidden" : "block"} `}
                key={item.title}
              >
                <div className="text-secondary max-md:text-sm leading-7  ">
                  {item.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
