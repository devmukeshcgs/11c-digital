import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ServicesCard from "../Pages/ServicesCard";
import TextReveal from "./TextReveal";

const Experties = () => {
  return (
    <motion.section className="experties">
      <div className="container">
        <div className="content-wrapper">
          <TextReveal delay={0.25}>
            <h6> Expertise </h6>
          </TextReveal>
          <TextReveal delay={0.5}>
            <h3>What we can do for you<span className="dot">!</span></h3>
          </TextReveal>
          <TextReveal delay={0.75}>
            <p>
              Shaping the digital frontier, we specialize in UX/UI design,
              dynamic web development, and strategic branding—tailored to
              amplify your brand's digital presence.
            </p>
            {/* <p>
            From the design of a website, marketing tools or even the
            development of a web application to simplify your processes, our
            team of experts is there to bring your ideas to life and support you
            in achieving your objectives.
          </p> */}
          </TextReveal>
        </div>
        <ServicesCard />
      </div>
    </motion.section>
  );
};

export default Experties;
