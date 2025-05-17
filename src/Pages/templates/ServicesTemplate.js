import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useLocation } from "react-router-dom";

import ServiceHeader from "./../../components/Services/ServiceHeader";
import ServiceApproach from "./../../components/Services/ServiceApproach";
import ServiceProcess from "./../../components/Services/ServiceProcess";
import ServiceCaseStudies from "./../../components/Services/ServiceCaseStudies";
import SayHello from "./../../components/SayHello";
//DATA
import { ServicesData } from "../../data/services.js";
import ProjectsList from "../../components/ProjectsList.js";
import ProjectsCard from "../../components/Projects/ProjectCard.js";

function ServicesTemplate() {
  const location = useLocation();
  const serviceParam = location.pathname;
  const serviceName = serviceParam.replace(/\//g, "");

  //Local State
  const [data, setData] = useState(ServicesData);
  const [urlParam, setUrlParam] = useState("");
  //  console.log("DATA", data);

  // ✅ Find the first object that matches a condition
  const found = data.find((obj) => {
    return obj.id === 1;
  });

  // 👇️ {id: 1, country: 'Austria'}
  // console.log(found);

  // ✅ Find multiple objects that satisfy a condition
  const filtered = data.filter((obj) => {
    return obj.slug === serviceName;
  });

  useEffect(() => {}, [urlParam]);

  return (
    <div className="container">
      <div className="bg-animation">
        <div className="anim-cir"></div>
        <div className="anim-cir2"></div>
      </div>

      <ServiceHeader data={filtered} />

      <ServiceApproach data={filtered} />

      <ServiceProcess data={filtered} />

      {/* <ServiceCaseStudies data={filtered} /> */}
      {/* <ProjectsList /> */}
      <ProjectsCard/>

      <SayHello />
    </div>
  );
}

export default ServicesTemplate;
