import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import StepsCard from "../../Pages/StepsCard";

const ServiceProcess = (props) => {
  console.log("ServiceProcess", props);
  const [steps, setSteps] = useState(props.data[0].steps);

  return (
    <motion.section className="service-process">
      <h6 className="text-gradiant">Our steps</h6>
      <div className="main-section">
        <h3>How does a project at 11C Digitals work?</h3>
        {/* <div className="left-sec"> </div> */}
        {/* <div className="right-sec"></div> */}
      </div>
      <StepsCard stepsdata={steps.steps} />
    </motion.section>
  );
};

export default ServiceProcess;
