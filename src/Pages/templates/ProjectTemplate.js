import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, useLocation } from "react-router-dom";

//COMPONANT
import SayHello from "./../../components/SayHello";
import ProjectHeader from "../../components/Projects/ProjectHeader.js";

//DATA
import { ProjectsData } from "../../data/projects.js";

function ProjectTemplate() {
  const location = useLocation();
  const projectParam = location.pathname;
  var n = projectParam.lastIndexOf("/");
  var projectName = projectParam.substring(n + 1);
  //   console.log("PROJECT", projectName);

  //Local State
  const [data, setData] = useState(ProjectsData);
  const [urlParam, setUrlParam] = useState("");
  const [project, setProject] = useState(null);
  //   console.log("PROJECTS DATA", data);

  // ✅ Find multiple objects that satisfy a condition
  const filtered = data.filter((obj) => {
    return obj.slug === projectName;
  });
  //   console.log("filtered",filtered);

  useEffect(() => {}, [urlParam]);

  return (
    <div className="project-template">
      <div className="container">
        <div className="bg-animation">
          <div className="anim-cir"></div>
          <div className="anim-cir2"></div>
        </div>

        <ProjectHeader data={filtered} />

        {/* <SayHello /> */}
      </div>
    </div>
  );
}

export default ProjectTemplate;
