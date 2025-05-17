import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BURGER_SVG from "../images/Hero-Image.jpg";

const ProjectsList = () => {
  return (
    <motion.section className="project-card-section">
      <h1> Projects List </h1>
      <div>
        <ul className="cards">
          <li>
            <div className="card">
              <img src={BURGER_SVG} />
              <small>Project 1</small>
            </div>
          </li>
          <li>
            <div className="card">
              <img src={BURGER_SVG} />
              <small>Project 1</small>
            </div>
          </li>
          <li>
            <div className="card">
              <img src={BURGER_SVG} />
              <small>Project 1</small>
            </div>
          </li>
          <li>
            <div className="card">
              <img src={BURGER_SVG} />
              <small>Project 1</small>
            </div>
          </li>
          <li>
            <div className="card">
              <img src={BURGER_SVG} />
              <small>Project 1</small>
            </div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default ProjectsList;
