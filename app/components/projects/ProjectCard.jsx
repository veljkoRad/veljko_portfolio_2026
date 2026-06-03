'use client';
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, Eye, CodeXml } from "lucide-react";
import Image from "next/image";
import { NAVBAR_HEIGHT } from "@/lib/constants";

const ProjectCard = ({ cardData, projectRef }) => {
  // Pagination start
  const [page, setPage] = useState(1);
  const [activeCard, setActiveCard] = useState(null);
  const cardsPerPage = 6;
  const totalPage = Math.max(1, Math.ceil(cardData.length / cardsPerPage));
  const firstCard = cardsPerPage * (page - 1);
  const lastCard = firstCard + cardsPerPage;
  const filterCard = cardData.slice(firstCard, lastCard);
  const showPagination = cardData.length > cardsPerPage;
  const skipScrollOnMountRef = useRef(true);

  // WHen presing pagination button, scroll to the project section, but skip Navbar height (72px)

  const scrollToProjectsSection = () => {
    const el = projectRef?.current;
    if (!el) return;

    const top =
      // .top is the distance from top of viewport to top of this element
      // window.scrollY is the distance from top of viewport to top of the page
      // 800px + (-75px) =725px
      el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  // Scroll after the new page is painted — avoids stale height from the previous page.
  useEffect(() => {
    if (skipScrollOnMountRef.current) {
      skipScrollOnMountRef.current = false;
      return;
    }

    // Use double RAF to ensure DOM is painted before scrolling.
    // First RAF: wait for paint. Second RAF: ensure layout is stable.
    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToProjectsSection();
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [page]);

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPage) return;
    setPage(nextPage);
  };
  // Pagination End

  return (
    <div className=" pb-16">
      <div className="grid grid-cols-3 max-xl:grid-cols-2 gap-12 max-md:grid-cols-1 auto-rows-fr mt-12.5"
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
              className="relative flex flex-col h-full items-start transition-all duration-300 ease-in cursor-pointer rounded-2xl bg-bg-second pb-6 shadow-lg shadow-blue/15 "

            >
              <div
                className=" group relative overflow-hidden rounded-t-2xl "
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <Image
                  src={`/images/${item.image}`}
                  alt={item.name}
                  width={585}
                  height={376}
                  className="  object-cover group-hover:scale-110 transition-transform duration-300 w-146.25"
                />
                <div className={`${activeCard === index ? "flex" : "hidden group-hover:flex"} justify-center gap-2 items-center absolute bg-[rgba(18,18,18,0.85)] inset-0`}>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 border border-white/50  rounded-full text-white/50  hover:text-white hover:border-white ">
                      <Eye
                        size={40}
                      />
                    </a>)}
                  {item.git && (
                    <a
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 border  border-white/50  rounded-full text-white/50  hover:text-white hover:border-white">
                      <CodeXml
                        size={40}
                      />
                    </a>
                  )}
                </div>
              </div>
              <div className="px-4 pt-6 flex-1 flex flex-col">
                <h3 className="group-hover:text-blue text-primary/90 text-xl font-semibold">
                  {item.name}
                </h3>
                <div className="mt-2 text-primary/50 text-base max-w-[40ch]">
                  {item.desc}
                </div>


              </div>

              {item.icons && (
                <div className="flex gap-2 mt-3 px-4">
                  {item.icons.map((icon, index) => (
                    <img key={index} src={`/images/stackIcons/${icon}`} alt={icon} className="h-9" />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div >
      {/* Pagination */}
      {showPagination && (
        <div className="flex justify-start  mt-5">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="   disabled:opacity-10 text-primary cursor-pointer px-5 py-1 bg-bg-second rounded-s-lg shadow-lg shadow-blue/20 "
          >
            <ChevronLeft size={30} />
          </button>

          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPage}
            className=" disabled:opacity-10 text-primary cursor-pointer px-5 py-1 bg-bg-second rounded-e-lg shadow-lg shadow-blue/20"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectCard;
