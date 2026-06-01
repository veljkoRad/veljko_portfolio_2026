"use client";
import { RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { techDesc, techDesc2 } from "@/data/buildData";
import SectionTitle from "./UI/SectionTitle";

type BuildProps = {
  buildRef: RefObject<HTMLDivElement | null>;
};
const Build = ({ buildRef }: BuildProps) => {
  const buildInView = useInView(buildRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className=" px-12 max-sm:px-6 ">
      <div className="container-main pb-16">
        <h2 className="section-title ">
          <SectionTitle>Build</SectionTitle>
        </h2>
        <motion.div
          ref={buildRef}
          initial="hidden"
          animate={buildInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center  max-lg:flex-col max-lg:gap-10 gap-16 "
        >
          {/* Left Div 1 Start */}
          <div className="flex-1 w-full flex justify-center ">
            <img
              src="/images/expertise.svg"
              alt="expertise"
              className="h-full max-h-118.5 max-xl:max-h-105    max-xl:h-120 max-md:h-100 max-sm:h-80"
            />
          </div>

          {/* Left Div 1 End */}

          {/* Right Div 1 Start */}
          <div className="flex-1">
            <div className="  flex flex-col gap-6 ">
              {techDesc.map((item, index) => (
                <div className="card " key={index}>
                  <div className="card2 p-8 shadow-xl">
                    <p className="text-xl font-medium  text-blue ">
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
      </div>
    </section>
  );
};

export default Build;
