import React, { useEffect, useRef } from "react";
import { motion, inView, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ServicesData } from "../data/services.js";
import ARROW_SVG from "../svg/arrow-up-right.svg";

function ServicesCard() {
  const listItems = ServicesData.map((item) => (
    <motion.li
      key={item.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.25, 0, 1],
        delay: 3,
      }}>
      <Link to={item.slug} className="card shadow">
        <figure>
          <img src={item.icon} alt="" />
        </figure>
        <div className="details">
          <h5 className="title">{item.name}</h5>
          <p>{item.short_dis} </p>
        </div>
      </Link>
    </motion.li>
  ));
  return (
    <nav className="nav-services">
      <ul className="cards">{listItems}</ul>
    </nav>
  );
}

export default ServicesCard;
