"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SlideInFromTop({ children }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: false, margin: "-50px 0px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // play animation when in view
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
