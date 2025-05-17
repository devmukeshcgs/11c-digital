import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const marqueeVariants = {
  animate: {
    x: [0, -500],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.05"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className="marquee">
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate">
        <h1>
          <span></span>Website<span></span>Branding<span></span>Webapps
          <span></span>SEO<span></span>Website<span></span>Branding<span></span>
          Webapps<span></span>SEO<span></span>Website<span></span>Branding
          <span></span>Webapps<span></span>SEO<span></span>Website<span></span>
          Branding<span></span>Webapps<span></span>SEO
        </h1> 
      </motion.div>
    </section>
  );
};
 

export default Marquee;
