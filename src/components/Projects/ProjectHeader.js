import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ARROW_SVG from "../../svg/arrow-up-right.svg";
import { Link } from "react-router-dom";

const ProjectHeader = (props) => {
  console.log("PROJECTS PROPS", props.data);
  const [project, setProject] = useState(props.data[0]);
  return (
    <>
      {project && (
        <motion.section className="project-header">
          {/* <div className="name">
            <h1 style={{ color: project.brand_color[0] }}>{project.name}</h1>
            <p>{project.logo}</p>
            <ul className="services">
              {project.services.map((item, i) => (
                <li key={i}>{item} &nbsp;</li>
              ))}
            </ul>
          </div> */}
          {/* ///////////////////////////////////////////////*/}
          <div className="project-details hv-space">
            <div className="left">
              <h2>{project.name}</h2>
              <p>{project.short_dis}</p>
              <br />
              {/* SKILLS */}
              <ul className="services">
                {project.services.map((item, i) => (
                  <li key={i}>{item} &nbsp;</li>
                ))}
              </ul>
              {/* URL */}
              <Link className="btn-link" to={project.url} target="_blank">View Project</Link>
              {/* <img src={ARROW_SVG} alt="" height={36} /> */}
            </div>
            <div className="right">
              <img alt="browser" src={project.logo_url} width="100%" />
            </div>
          </div>
          {/* IF DESIGN IMG IS IN THE OBJ  */}
          {project.images.design !== "" && (
            <div className="hv-space">
              <img
                src={project.images.designs}
                alt={project.images.designs}
                width="100%"
              />
            </div>
          )}

          <div className="brand-details hv-space">
            <h2>Brand/Client details</h2>
            <ul className="colorguide">
              {project.brand_color.map((item) => (
                <li key={item} style={{ background: item }}>
                  {item}
                </li>
              ))}
              <li style={{ background: "#000" }}>#000000</li>
              <li style={{ background: "#fff" }}>#FFFFFF</li>
            </ul>
          </div>
          <div className="website-imgs hv-space">
            <div>
              <img src={project.images.website} alt={project.images.website} />
            </div>
            <div>
              <img
                src={project.images.website2}
                alt={project.images.website2}
              />
            </div>
          </div>
          <div className="gallery hv-space">
            <h2>Gallery</h2>
            {/* <div style={{ background: project.brand_color[0] }}> */}
            {/* <div className="gallery-container">
              <img
                alt={project.images.desktop}
                src={project.images.desktop}
                width="100%"
              />
              <img
                alt={project.images.laptop}
                src={project.images.laptop}
                width="100%"
              />
              <img
                alt={project.images.tab}
                src={project.images.tab}
                width="100%"
              />
              <img
                alt={project.images.mobile}
                src={project.images.mobile}
                width="100%"
              />
              <img
                alt={project.images.iphone}
                src={project.images.iphone}
                width="100%"
              />
            </div> */}
            <div>
              <img
                alt={project.images.desktop}
                src={project.images.desktop}
                width="100%"
              />
              <img
                alt={project.images.laptop}
                src={project.images.laptop}
                width="100%"
              />
              <img
                alt={project.images.tab}
                src={project.images.tab}
                width="100%"
              />
              <img
                alt={project.images.mobile}
                src={project.images.mobile}
                width="100%"
              />
            </div>
          </div>
          {/* Object.keys(myarray[0]).length === 0; */}
          {/* {console.log(
            "project.social_media_posts",
            Object.keys(project.social_media_posts).length !== 0
          )} */}
          {/* IF SOCIAL MEDIA POST IMG IS N THE OBJ  */}
          {Object.keys(project.social_media_posts).length !== 0 && (
            <div className="social hv-space">
              <h1>Social media posts</h1>
            </div>
          )}
        </motion.section>
      )}
    </>
  );
};

export default ProjectHeader;
