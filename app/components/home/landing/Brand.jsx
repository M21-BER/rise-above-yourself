"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Brand() {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("brandAnimated")) {
      controls.start("visible");
      sessionStorage.setItem("brandAnimated", "true");
    } else {
      setHasAnimated(true);
    }
  }, []);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.3,
      },
    },
  };

  return (
    <div className="overflow-hidden  text-white py-12 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-6xl mx-auto">
        {/* Image Section */}
        <motion.div
          className="w-[160px] sm:w-[220px] shrink-0"
          initial="hidden"
          animate={hasAnimated ? "visible" : controls}
          variants={imageVariants}
        >
          <Image
            src="/images/icon.png"
            width={220}
            height={220}
            alt="rise above yourself brand icon"
            priority
            className="w-full h-auto"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="text-center sm:text-left"
          initial="hidden"
          animate={hasAnimated ? "visible" : controls}
          variants={textVariants}
        >
          <h2 className="font-allerta_stencil text-4xl sm:text-6xl mb-2">
            R.A.Y ATHLETICS
          </h2>
          <h4 className="font-light italic text-2xl sm:text-3xl text-[#EF0101] mb-6">
            RISE ABOVE YOURSELF
          </h4>
        </motion.div>
      </div>
    </div>
  );
}
