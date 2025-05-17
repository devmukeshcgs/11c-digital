import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import AnimatedWord from "./AnimatedWord";
import TextReveal from "./TextReveal";

const Achivment = () => {
  const Text =
    "Take a glimpse into our world of creativity. From striking visuals to seamless user experiences. Explore our portfolio to see how we bring ideas to life.";
  return (
    <motion.section className="achivment">
      <div className="container">
        {/* <h6> Achievements </h6>
        <h3>We create tools adapted to your image and your objectives.</h3> */}
        {/* <div className="title-subtitle">
          <TextReveal delay={0.25}>
            <h3>Where creativity meets strategy & innovation</h3>
          </TextReveal>
          <TextReveal delay={0.5}>
            <p>
              Take a glimpse into our world of creativity. From striking visuals
              to seamless user experiences. Explore our portfolio to see how we
              bring ideas to life.
            </p>
          </TextReveal>
        </div> */}
        {/* <AnimatedText value={Text} /> */}
        <AnimatedWord value={Text} />
      </div>
    </motion.section>
  );
};

export default Achivment;
