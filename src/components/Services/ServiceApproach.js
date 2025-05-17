import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ServiceApproach = (props) => {
  const [approach, setApproch] = useState(props.data[0].approach);
  console.log("approch", approach);

  return (
    <motion.section className="service-approach">
      {approach && (
        <>
          <h6 className="text-gradiant">Our approach</h6>
          <div className="main-section">
            <div className="left-sec">
              <h2 className="title">{approach.title}</h2>
              <div className="approach">
                <p>{approach.description}</p>
              </div>
            </div>
            <div className="right-sec">
              <ul>
                {/* 👇️ render array of objects */}
                {approach.list.map((obj, i) => {
                  return (
                    <div key={i}>
                      <li>
                        <span>{i + 1}.</span> {obj}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default ServiceApproach;
