"use client";
import { useState, Fragment } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import ReactTab from "./projects/ReactTab";
import LandingPageTab from "./projects/LandingPageTab";
import EmailTab from "./projects/EmailTab";
import SectionTitle from "./UI/SectionTitle";
import AllTab from "./projects/AllTab";

const tabs = [
  { label: "all", component: <AllTab />, id: "pill-all" },
  { label: "react", component: <ReactTab />, id: "pill-react" },
  { label: "landing", component: <LandingPageTab />, id: "pill-landing" },
  { label: "email", component: <EmailTab />, id: "pill-email" },
];

type ProjectProps = {
  projectRef: React.RefObject<HTMLDivElement | null>;
};
const Projects = ({ projectRef }: ProjectProps) => {
  const [value, setValue] = useState(0);
  const [project, setProject] = useState("all");
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
          className="pt-16 flex flex-col max-sm:items-center"
        >
          <div className="pill-radio-container max-sm:gap-2">
            {tabs.map((item) => (
              <Fragment key={item.id}>
                <input
                  checked={project === item.label}
                  name="project"
                  id={item.id}
                  type="radio"
                  onChange={() => {
                    setProject(item.label);
                    setValue(
                      tabs.findIndex((tab) => tab.label === item.label) || 0,
                    );
                  }}
                />
                <label
                  className="capitalize text-primary max-sm:px-3 py-2 max-sm:text-sm"
                  htmlFor={item.id}
                >
                  {item.label}
                </label>
              </Fragment>
            ))}

            <div
              style={{
                background:
                  "linear-gradient(90deg,rgba(59, 130, 246, 1) 0%, rgba(168, 85, 247, 1) 85%)",
              }}
              className="pill-indicator"
            ></div>
          </div>

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
