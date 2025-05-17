import React, { useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import TextReveal from "./TextReveal";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end ", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // scrollYProgress.on("change", (e) => console.log(scaleX.current));
  }, []);

  return (
    <motion.section
      ref={ref}
      className="hero-banner"
      style={{ backgroundPosition: backgroundY }}>
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          Creating Digital Experiences{" "}
        </motion.h1>
        <motion.h5
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          We're a India-based Company, crafting tailor-made digital product
          design and development around the globe.
          {/* Enhance your brand with <span> DOT STUDIO</span>, a realm where
        boundless creativity thrives. We specialize in crafting impactful
        experiences that linger in memory. Let's transform your vision into
        tangible reality. */}
        </motion.h5>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <TextReveal delay={0.75}>
          <div className="cta">
            <button className=" ">DISCOVER OUR WORK</button>
          </div>
        </TextReveal>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
