'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
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
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 auto-rows-fr mt-12.5"
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
            <a
              className="relative w-full h-full max-md:max-w-full max-lg:max-w-112.5 max-w-155 flex flex-col  items-start transition-all duration-300 ease-in cursor-pointer rounded-2xl  bg-bg-first group p-6 "
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={`/images/${item.image}`}
                  alt={item.name}
                  width={585}
                  height={439}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className=" group-hover:flex hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] justify-center items-center bg-[linear-gradient(90deg,#3b82f6,#60a5fa)] p-3  rounded-full text-white -rotate-45 transition-all duration-300 ease-in">
                  <ArrowRight
                    size={35}
                  />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="group-hover:text-blue text-primary/90  max-sm:text-2xl text-4xl font-semibold ">
                  {item.name}
                </h3>
                <div className="mt-4 text-secondary max-sm:text-sm max-w-[40ch]"
                >
                  {item.desc}
                </div>
              </div>


            </a>
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
