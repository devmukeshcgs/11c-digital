 

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function AnimatedText({ value }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref,offset:['start 0.9', 'start 0.25'] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // scrollYProgress.on("change", (e) => console.log(e));
    // console.log(scaleX);
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <motion.h1 className="" ref={ref} style={{ opacity: scrollYProgress }}>
        {value}
      </motion.h1>
    </>
  );
}
