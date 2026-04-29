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
      className="fixed inset-0 z-60 pointer-events-none"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Curtain panels */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: PANEL_COUNT }).map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 bg-bg-second"
            variants={panelVariants}
          />
        ))}
      </div>

      {/* Loading Text overlay */}
      <motion.p
        className="absolute inset-0 flex items-center justify-center text-primary text-4xl tracking-widest font-semibold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
