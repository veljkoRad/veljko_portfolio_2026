'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft, Eye, CodeXml } from "lucide-react";
import Image from "next/image";

const ProjectCard = ({ cardData }) => {
  // Pagination start
  const [page, setPage] = useState(1);
  const pageChange = (item, value) => setPage(value);
  const cardsPerPage = 4;
  const firstCard = cardsPerPage * page - cardsPerPage;
  const lastCard = cardsPerPage * page;
  const filterCard = cardData.slice(firstCard, lastCard);
  const totalPage = Math.ceil(cardData.length / cardsPerPage);
  // Pagination End

  return (
    <div>
      <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-12 max-md:grid-cols-1 auto-rows-fr mt-12.5 pb-16"
      >
        {filterCard.map((item, index) => (
          <motion.div
            key={item.name}
            className="h-full flex flex-col"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -300 : 300,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <div
              className="relative flex flex-col h-full items-start transition-all duration-300 ease-in cursor-pointer rounded-2xl bg-bg-second"

            >
              <div className=" group relative overflow-hidden rounded-t-2xl">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.name}
                  width={585}
                  height={376}
                  className=" h-auto object-cover group-hover:scale-110 transition-transform duration-300 w-[448px] max-md:w-full"
                />
                <div className=" group-hover:flex justify-center gap-2 items-center hidden absolute bg-[rgba(18,18,18,0.85)] inset-0 ">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border border-[3px] border-gray  rounded-full text-gray  hover:text-white hover:border-white">
                      <Eye
                        size={40}
                      />
                    </a>)}
                  {item.git && (
                    <a
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-[6px] border border-[3px] border-gray  rounded-full text-gray  hover:text-white hover:border-white">
                      <CodeXml
                        size={40}
                      />
                    </a>
                  )}
                </div>

              </div>
              <div className="px-4 py-6 flex-1 flex flex-col">
                <h3 className="group-hover:text-blue text-primary/90 text-xl font-semibold">
                  {item.name}
                </h3>
                <div className="mt-2 text-primary/70 text-sm max-w-[40ch]">
                  {item.desc}
                </div>
                {item.icons && (
                  <div className="flex gap-2 mt-3">
                    {item.icons.map((icon, index) => (
                      <img key={index} src={`/images/stackIcons/${icon}`} alt={icon} className="h-9" />
                    ))}
                  </div>
                )}
              </div>


            </div>
          </motion.div>
        ))}
      </div >
      {/* Pagination */}
      {cardData?.length >= cardsPerPage && (
        <div className="flex justify-start gap-2 mt-5">
          <button
            onClick={() => pageChange(null, page - 1)}
            disabled={page === 1}
            className="  disabled:opacity-50 text-[#1f1f24] cursor-pointer px-5 py-1 bg-white rounded-lg"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={() => pageChange(null, page + 1)}
            disabled={page === totalPage}
            className="  disabled:opacity-50 text-[#1f1f24] cursor-pointer px-5 py-1 bg-white rounded-lg"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectCard;
