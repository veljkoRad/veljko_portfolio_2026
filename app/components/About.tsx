'use client";';
import { useState, RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { Download } from "lucide-react";
import SectionTitle from "./UI/SectionTitle";

const aboutCards = [
  {
    name: "Experience",
    title: "WEB DEVELOPER / MARKETING ASSISTANT",
    desc: "Fortrade",
    year: "2023 - Current",
    img: "fortrade.png",
  },
  {
    name: "Education",
    title: "BSc in Mechanical Engineering",
    desc: "University of Belgrade",
    year: "2018",
    img: "UOB.png",
  },
];

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
    <section className=" px-12 max-sm:px-6  mt-10 bg-bg-sn">
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
          <div className="flex-6">
            <p className="text-primary/50 max-md:text-sm tracking-[1px] font-medium ">
              Frontend Developer with 3 years of experience building modern
              marketing websites, landing pages, and React/Next.js applications.
              Focused on scalable UI systems, API integrations, performance, and
              clean user experiences for digital products and businesses
            </p>
            {/* <a className="button max-w-50 mt-6 " href="/cv_2026.pdf" download>
              Download CV
              <Download className="ml-2.5" />
            </a> */}
            <a
              className="btn flex items-center gap-2 justify-center gradient mt-8 "
              href="/cv_2026.pdf"
              download
            >
              Download CV
              <Download />
            </a>
          </div>
          <div className=" flex  flex-5 flex-col items-stretch justify-center gap-2.5 ">
            <div className=" max-md:text-sm leading-7 flex flex-col gap-6  ">
              {aboutCards.map((item, index) => (
                <div className="card " key={index}>
                  <div className="card2 shadow-lg shadow-blue/15">
                    <p className="text-sm max-sm:text-xs font-medium text-blue text-center">
                      {item.name}
                    </p>
                    <div className="flex justify-between items-center gap-8">
                      <div>
                        <p className="text-md max-sm:text-base font-bold mt-4 text-primary">
                          {item.title}
                        </p>
                        <p className="text-primary">{item.desc}</p>
                        <p className="max-sm:text-xs text-primary">
                          {item.year}
                        </p>
                      </div>
                      <img
                        src={`/images/stackIcons/${item.img}`}
                        className="w-12.5 h-auto max-sm:w-10 bg-transparent"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
