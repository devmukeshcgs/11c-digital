import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import ICON from "../../svg/sample-icon.svg";
const ProjectHeader = (props) => {
  console.log("PROPS", props.data);
  const [service, setProject] = useState(props.data[0]);
  return (
    <motion.section className="service-header">
      {service && (
        <>
          <div className="icon">
            {/* <img src={service.icon} alt="" />  */}
          </div>
          <div className="name">
            <h1>{service.name}sss</h1>
            <p>{service.tagline}</p>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default ProjectHeader;
