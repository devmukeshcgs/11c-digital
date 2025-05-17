import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SayHello = () => {
  return (
    <motion.section className="hello-section">
      <h1> Say HELLO! </h1>
    </motion.section>
  );
};

export default SayHello;
