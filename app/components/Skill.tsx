"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skillData";

const Skill = ({
  skillRef,
}: {
  skillRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const skillInView = useInView(skillRef, { once: true, margin: "-100px" });

  return (
    <section className="px-6">
      <div className="bg-hero bg-center bg-auto bg-no-repeat max-sm:bg-repeat-y container-main ">
        <h2 className="section-title">Skill</h2>
        <motion.div
          ref={skillRef}
          initial="hidden"
          animate={skillInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-between gap-7.5 mt-12.5"
        >
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <div className=" group bg-bg-second max-sm:bg-[linear-gradient(to_right,#3b82f6,#2563eb)]  w-full h-full rounded-xl cursor-pointer transition-all duration-300 ease-out hover:bg-[linear-gradient(to_right,#3b82f6,#2563eb)] hover:-translate-y-1 hover:shadow-lg hover:shadow-blue/40 px-9.75 py-13 max-xl:px-5.5 max-xl:py-8.25 font-medium  ">
                {item.icon}
                <h4 className="group-hover:text-white text-2xl font-semibold    text-primary/90 max-sm:text-white mt-4 max-md:text-xl ">
                  {item.title}
                </h4>
                <div className="descHover text-lg group-hover:text-white text-secondary leading-7.5  max-sm:text-white mt-2 max-md:text-base ">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
