"use client";
import { RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { techStack, techDesc, techDesc2 } from "@/data/toolsData";
import Image from "next/image";
import SectionTitle from "./UI/SectionTitle";
import { CircleGauge, CodeXml } from "lucide-react";

type ToolsProps = {
  toolsRef: RefObject<HTMLDivElement | null>;
};
const Tools = ({ toolsRef }: ToolsProps) => {
  const toolsInView = useInView(toolsRef, { once: true, margin: "-100px" });

  return (
    <section className=" px-12 max-sm:px-6 ">
      <div className="container-main pb-16">
        <h2 className="section-title ">
          <SectionTitle>Expertise</SectionTitle>
        </h2>
        <motion.div
          ref={toolsRef}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center  max-lg:flex-col max-lg:gap-10 gap-[64px] "
        >
          {/* Left Div 1 Start */}
          <div className="max-w-[689px] w-full flex justify-center ">
            <img
              src="/images/expertise.svg"
              autoPlay
              loop
              muted
              playsInline
              className="h-full max-h-[474px]    max-xl:h-120 max-md:h-100 max-sm:h-80"
            />
          </div>

          {/* Left Div 1 End */}

          {/* Right Div 1 Start */}
          <div>
            <div className="  flex flex-col gap-6 ">
              {techDesc.map((item, index) => (
                <div className="card " key={index}>
                  <div className="card2 p-8">
                    <p className="text-xl font-medium  text-purple ">
                      {item.title}
                    </p>
                    <p className="text-md max-sm:text-base  mt-2 text-primary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Div 1 End */}
        </motion.div>
        <motion.div
          ref={toolsRef}
          initial="hidden"
          animate={toolsInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-[96px] flex justify-between  max-lg:flex-col max-lg:gap-10 "
        >
          {/* Left Div 2 Start */}

          <div>
            <div className="  flex flex-col gap-6 ">
              {techDesc2.map((item, index) => (
                <div className="card " key={index}>
                  <div className="card2 p-8 bg-card">
                    <p className="text-xl font-medium  text-purple ">
                      {item.title}
                    </p>
                    <p className="text-md max-sm:text-base  mt-2 text-primary  ">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Div 2 End */}

          {/* Right Div 2 Start */}
          <div className="max-w-[689px] w-full flex justify-center ">
            <img
              src="/images/expertise_2.svg"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[490px]   h-[367px] max-xl:h-120 max-md:h-100 max-sm:h-80"
            />
          </div>
          {/* Right Div 2 End */}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
