import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ProjectsData } from "../../data/projects.js";
import ARROW_SVG from "../../svg/arrow-up-right.svg";
import { useLocation } from "react-router-dom";
import TextReveal from "../TextReveal.js";

function ProjectsCard({ cardLength, page }) {
  const location = useLocation();

  useEffect(() => {
    // execute on location change
    console.log("Location changed!", location.pathname);
  }, [location]);

  const projectList = ProjectsData.map((item, i) => (
    <motion.li
      key={item.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.25, 0.25, 0, 1],
        delay: 0.75,
      }}
    // style={{ background: item.brand_color[0] }}
    >
      {item.slug === "starstake"}
      <div className="card">
        {/* DETAILS */}
        <div
          className="page-img"
        // style={{ backgroundImage: `url(${item.images.browser})` }}
        >
          <img src={item.images.desktop} alt="" />
        </div>
        {/* DETAILS */}
        <div className="page-details">
          <h6 className="title">
            {item.name}
          </h6>
          <p>{item.short_dis} </p>
          <p></p>
          <div className="services-labels">
            {item.services.map((item, i) => (
              <small key={i}>{item} &nbsp;</small>
            ))}
          </div>
          {/* //LINK */}
          <button className="">VIEW</button>
          {/* <Link to={page === "home" ? `projects/${item.slug}` : `${item.slug}`}>
            VIEW  PROJECTS
          </Link> */}
        </div>

      </div>
    </motion.li>
  ));
  return (
    <motion.section
      className={page === "home" ? `project-card ${page}` : "project-card"}>
      <div className="container">
        <div className="content-wrapper">
          {page && (
            <TextReveal delay={0.50}>
              <h3>
                Featured projects<span className="dot">.</span>
              </h3>
            </TextReveal>
          )}
        </div>
        <TextReveal delay={0.75}>
          <div
            className={
              page === "home" ? `nav-services ${page}` : "nav-services"
            }>
            <ul className="cards">{projectList}</ul>
          </div>
        </TextReveal>
        <TextReveal delay={0.25}>
          <div className="cta">
            <Link to='/projects' className=" ">VIEW ALL PROJECTS</Link>
          </div>
        </TextReveal>
      </div>
    </motion.section>
  );
}
export default ProjectsCard;
