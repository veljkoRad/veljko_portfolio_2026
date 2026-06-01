"use client";
import { RefObject } from "react";
import { motion, useInView } from "framer-motion";
import { techDesc, techDesc2 } from "@/data/buildData";
import SectionTitle from "./UI/SectionTitle";

type expertiseProps = {
  expertiseRef: RefObject<HTMLDivElement | null>;
};
const Expertise = ({ expertiseRef }: expertiseProps) => {
  const expertiseInView = useInView(expertiseRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section className=" px-12 max-sm:px-6 bg-bg-sn">
      <div className="container-main pb-16">
        <h2 className="section-title ">
          <SectionTitle>Expertise</SectionTitle>
        </h2>
        <motion.div
          ref={expertiseRef}
          initial="hidden"
          animate={expertiseInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-between  max-lg:flex-col-reverse max-lg:gap-10 "
        >
          {/* Left Div Start */}

          <div className="flex-1">
            <div className="  flex flex-col gap-6  max-w-170 ">
              {techDesc2.map((item, index) => (
                <div className="card " key={index}>
                  <div className="card2 p-8 bg-card shadow-xl">
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

          {/* Left Div End */}

          {/* Right Div Start */}
          <div className=" flex-1  w-full flex justify-center ">
            <img
              src="/images/expertise_2.svg"
              alt="expertise"
              className="w-full h-91.75 max-xl:h-80 max-md:h-100 max-sm:h-80"
            />
          </div>
          {/* Right Div End */}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
