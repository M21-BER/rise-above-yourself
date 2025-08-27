"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function FadeInOnScroll({ children }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: false,
    margin: "-100px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // fade in
    } else {
      controls.start("hidden"); // fade out
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeOut" },
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
