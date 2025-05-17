import SayHello from "../components/SayHello";
import { motion } from "framer-motion";
import ProjectsCard from "../components/Projects/ProjectCard";
import PageTransition from "../components/pageTransition";
import { useEffect } from "react";

function Work() {
  return (
    <motion.div className="projects-section">
      <div className="container">
        <div className="projects-banner">
          <h3>Projects <span className="dot" >.</span></h3>
          <p>
            Each project is an opportunity to innovate. To view challenges
            through a new lens. To venture into uncharted territory for the
            first time.
          </p>
        </div>
        <ProjectsCard cardLength={4} /> 
      </div>
    </motion.div>
  );
}

// export default PageTransition(Work);
export default Work;
