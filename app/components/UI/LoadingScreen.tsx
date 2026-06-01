// app/components/UI/LoadingScreen.tsx
"use client";
import { motion, Variants } from "framer-motion";

const PANEL_COUNT = 10;

const containerVariants: Variants = {
  initial: {},
  animate: {},
  exit: {
    transition: {
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

const panelVariants: Variants = {
  initial: { y: 0 },
  animate: { y: 0 },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.9,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const LoadingScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-60"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Curtain panels */}
      <div className="absolute inset-0 flex   ">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-bg-second  overflow-hidden"
            variants={panelVariants}
          />
        ))}
      </div>

      {/* Loading Text overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
        >
          <div
            className="loader"
            style={{ width: 150, height: 150, position: "relative" }}
          >
            <div className="loader_cube loader_cube--color"></div>
            <div className="loader_cube loader_cube--glowing"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
