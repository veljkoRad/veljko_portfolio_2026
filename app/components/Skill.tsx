"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillCategories } from "@/data/skillData";
import SectionTitle from "./UI/SectionTitle";

type SkillCategory = {
  label: string;
  skills: Array<{ icon: React.ReactNode; title: string }>;
};

const SkillCategory = ({ category }: { category: SkillCategory }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <div className="flex flex-col  w-min">
        <p className="pt-16 text-[28px] max-sm:text-[22px] max- font-medium text-primary/90 whitespace-nowrap">
          {category.label}
        </p>
        <div className="w-[60%] h-0.75 bg-primary/40 mt-2.5"></div>
      </div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-wrap mt-4 max-sm:mt-8 gap-8 justify-start max-sm:justify-center"
      >
        {category.skills.map((item, index) => (
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
            <div className="bg-bg-second shadow-xl p-2 flex items-center justify-center gap-3 rounded-lg w-40 cursor-pointer hover:scale-110 transition-transform duration-300">
              {item.icon}
              <p className="text-sm font-medium text-primary/90 text-start">
                {item.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skill = ({
  skillRef,
}: {
  skillRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <section className="px-12 max-sm:px-6" ref={skillRef}>
      <div className="container-main pb-16">
        <h2 className="section-title">
          <SectionTitle>Skills</SectionTitle>
        </h2>
        {skillCategories.map((category, catIdx) => (
          <SkillCategory key={catIdx} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skill;
