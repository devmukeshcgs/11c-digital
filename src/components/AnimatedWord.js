import React, { useEffect, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function AnimatedWord({ value }) {
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

  useEffect(() => {
    // scrollYProgress.on("change", (e) => console.log(e));
    // console.log(scaleX);
  }, []);
  const words = value.split(" ");

  return (
    <>
      {/* <motion.div className="progress-bar" style={{ scaleX }} /> */}
      <h3 className="anim-word" ref={ref}>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <SingleWord key={i} range={[start, end]} progress={scrollYProgress}>
              {word}
            </SingleWord>
          );
        })}
      </h3>
    </>
  );
}
const SingleWord = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  //   console.log("opacity", opacity);
  //   console.log(range);

  return (
    <span className="word">
      <span className="shadow">{children}</span>
      <motion.span className="" style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
