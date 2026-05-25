"use client";
import { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import ReactTab from "./projects/ReactTab";
import LandingPageTab from "./projects/LandingPageTab";
import EmailTab from "./projects/EmailTab";
import SectionTitle from "./UI/SectionTitle";

const tabs = [
  { label: "REACT", component: <ReactTab /> },
  { label: "LANDING PAGES", component: <LandingPageTab /> },
  { label: "EMAIL TEMPLATES", component: <EmailTab /> },
];

type ProjectProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};
const Projects = ({ projectRef }: ProjectProps) => {
  const [value, setValue] = useState(0);
  const [plan, setPlan] = useState("free");
  const handleChange = (index: number) => setValue(index);
  const projectInView = useInView(projectRef, { once: true, margin: "-100px" });

  return (
    <section className=" px-12 max-sm:px-6">
      <div className="container-main">
        <h2 className="section-title ">
          <SectionTitle>Projects</SectionTitle>
        </h2>
        <motion.div
          ref={projectRef}
          initial="hidden"
          animate={projectInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <div className="mt-12.5 flex flex-wrap gap-2">
            {tabs.map((item, index) => (
              <button
                onClick={() => handleChange(index)}
                className={` cursor-pointer px-4 py-3 rounded-xl font-semibold ${value === index ? "btn-color text-white" : "bg-hidden text-primary hover:text-blue"}`}
                key={item.label}
              >
                {item.label}
              </button>
            ))}
            <div className="pill-radio-container">
              <input
                checked={plan === "free"}
                name="plan"
                id="pill-free"
                type="radio"
                onChange={() => setPlan("free")}
              />
              <label htmlFor="pill-free">Free</label>
              <input
                checked={plan === "basic"}
                name="plan"
                id="pill-basic"
                type="radio"
                onChange={() => setPlan("basic")}
              />
              <label htmlFor="pill-basic">Basic</label>
              <input
                checked={plan === "premium"}
                name="plan"
                id="pill-premium"
                type="radio"
                onChange={() => setPlan("premium")}
              />
              <label htmlFor="pill-premium">Premium</label>
              <div className="pill-indicator"></div>
            </div>
          </div>

          {/* <div className="pill-radio-container">
            <input
              checked={plan === "free"}
              name="plan"
              id="pill-free"
              type="radio"
              onChange={() => setPlan("free")}
            />
            <label htmlFor="pill-free">Free</label>
            <input
              checked={plan === "basic"}
              name="plan"
              id="pill-basic"
              type="radio"
              onChange={() => setPlan("basic")}
            />
            <label htmlFor="pill-basic">Basic</label>
            <input
              checked={plan === "premium"}
              name="plan"
              id="pill-premium"
              type="radio"
              onChange={() => setPlan("premium")}
            />
            <label htmlFor="pill-premium">Premium</label>
            <div className="pill-indicator"></div>
          </div> */}

          {/* Preload all tabs so images stay cached */}
          <div className="hidden">
            {tabs.map((tab) => (
              <div key={`preload-${tab.label}`}>{tab.component}</div>
            ))}
          </div>
          {/* Animated active tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {tabs[value].component}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
