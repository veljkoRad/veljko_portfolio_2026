"use client";
import { RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { techStack, techDesc } from "@/data/toolsData";

type ToolsProps = {
  toolsRef: RefObject<HTMLDivElement | null>;
};
const Tools = ({ toolsRef }: ToolsProps) => {
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });

  return (
    <section className="py-30 px-6">
      <div className="max-w-7xl w-full mx-auto ">
        <div className=" text-6xl max-md:text-5xl font-bold text-blue text-center">
          Tools
        </div>
        <motion.div
          ref={toolsRef}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex  max-lg:flex-col max-lg:gap-10 flex-row"
        >
          {/* Left Div Start */}
          <div className="flex flex-col justify-center gap-10 fled-[1 1 0] min-w-0 items-center max-md:mx-0 mx-13 ">
            <div className="overflow-x-clip overflow-y-visible max-w-134.75 w-full  ">
              <motion.div
                className="flex gap-8 w-max pr-8 "
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Array of 10 items - first 5 items x 2 */}
                {[...techStack.slice(0, 5), ...techStack.slice(0, 5)].map(
                  (item, i) => (
                    <div key={i} className=" group relative">
                      <div className="tooltip group-hover:opacity-100 group-hover:translate-y-0;">
                        {item.name}
                      </div>
                      <div className="bg-bg-second rounded-xl w-20 h-20 flex items-center justify-center transition-all duration-300 ease-in border border-blue/20 hover:border-blue">
                        <img alt={item.name} src={item.icon} className="h-10" />
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </div>
            <div className="overflow-x-clip overflow-y-visible max-w-134.75 w-full ">
              <motion.div
                className="flex gap-8 w-max pr-8"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...techStack.slice(5, 10), ...techStack.slice(5, 10)].map(
                  (item, i) => (
                    <div key={i} className="relative group tabIndex={0}">
                      <div className="tooltip group-hover:opacity-100 group-hover:translate-y-0; focus-within:opacity-100 focus-within:translate-y-0">
                        {item.name}
                      </div>
                      <div className="bg-bg-second rounded-xl w-20 h-20 flex items-center justify-center transition-all duration-300 ease-in border border-blue/40 hover:border-blue">
                        <img alt={item.name} src={item.icon} className="h-10" />
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
          {/* Left Div End */}

          {/* Right Div Start */}
          <div className="flex-[1-1-0] min-w-0 m-auto  max-lg:border-none border-l border-l-secondary">
            <ul className="p-0 list-disc pl-6 max-md:mx-0 mx-11 flex flex-col gap-6 ">
              {techDesc.map((item) => (
                <li
                  key={item.title}
                  className="list-disc pl-1 text-xl max-sm:text-base max-w-[45ch]"
                >
                  <strong>{item.title}:</strong> {item.desc}
                </li>
              ))}
            </ul>
          </div>
          {/* Right Div End */}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
