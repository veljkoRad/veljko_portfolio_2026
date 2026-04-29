"use client";
import { RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { techStack, techDesc } from "@/data/toolsData";
import Image from "next/image";

type ToolsProps = {
  toolsRef: RefObject<HTMLDivElement | null>;
};
const Tools = ({ toolsRef }: ToolsProps) => {
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });

  return (
    <section className=" px-6">
      <div className="container-main">
        <h2 className=" section-title text-center">Tools</h2>
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
                        <Image
                          alt={item.name}
                          src={item.icon}
                          width={40}
                          height={40}
                          className="h-10 w-auto"
                        />
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
                        <Image alt={item.name} src={item.icon} width={40} height={40} className="h-10 w-auto" />
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
                  className="list-disc pl-1 text-xl max-sm:text-base max-w-[45ch] font-semibold"
                >
                  {item.title}:{" "}
                  <span className="text-secondary"> {item.desc}</span>
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
