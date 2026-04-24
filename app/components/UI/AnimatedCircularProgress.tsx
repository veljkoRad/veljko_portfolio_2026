import { motion, useInView, useAnimation, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type AnimatedCircularProgressProps = {
  value: number;
  label: string;
  description: string;
};

const AnimatedCircularProgress = ({
  value,
  label,
  description,
}: AnimatedCircularProgressProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    controls.start({ opacity: 1, y: 0 });

    animate(0, value, {
      duration: 0.5,
      onUpdate(latest) {
        setProgress(Math.round(latest));
      },
    });
  }, [isInView, value, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className=" bg-bg-first flex flex-col items-center gap-3 relative rounded-2xl  p-3 shadow "
    >
      <div className="w-25 h-25 p-2.5 [&_text]:font-semibold">
        <CircularProgressbar
          value={progress}
          text={`${value}%`}
          strokeWidth={14}
          styles={buildStyles({
            textSize: "24px",
            textColor: "#3b82f6",
            pathColor: "#3b82f6",
            trailColor: " var(--c-bg)",
            strokeLinecap: "butt",
          })}
        />
      </div>

      <div className="text-primary text-lg font-bold">{label}</div>
      <div className="text-secondary text-sm font-medium text-center ">
        {description}
      </div>
    </motion.div>
  );
};

export default AnimatedCircularProgress;
