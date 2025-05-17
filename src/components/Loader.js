import React, { useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
//Varients
const container = {
  show: { transition: { staggerChildren: 0.35 } },
  exit: {
    scale: 0,
    transition: { ease: "easeInOut", duration: 0.8 },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      className="loading-wrapper"
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      onAnimationComplete={() => setLoading(false)}>
      <motion.p>Loading</motion.p>
    </motion.div>
  );
};

export default Loader;
