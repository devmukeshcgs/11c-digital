import HeroBanner from "../components/HeroBanner";
import Marquee from "../components/Marquee";
import Achivment from "../components/Achivment";
import Experties from "../components/Expertise";
import SayHello from "../components/SayHello";
import { motion } from "framer-motion";
import HorizontalScroll from "../components/HorizontalScroll";
import ProjectsCard from "../components/Projects/ProjectCard";
import TextReveal from "../components/TextReveal";
import { TrackGoogleAnalyticsEvent } from "../utils/google-analytics";

function Services() {
  TrackGoogleAnalyticsEvent(
    "game_over",
    "message shown",
    window.location.pathname + window.location.search,
    { id: 1234, username: "john" }
);
  return (
    <motion.div className="services-section">
      <div className="container">
        <div className="services-banner">
          <h3>Services<span className="dot" >.</span></h3>
          <p>
            Each project is an opportunity to innovate. To view challenges
            through a new lens. To venture into uncharted territory for the
            first time.
          </p>
        </div>

        {/* <Achivment /> */}
        <Experties />
        {/* <HorizontalScroll /> */}

        <div>
          {/* 
            <TextReveal delay={0.25}>
              <h6> Case Studies</h6>
            </TextReveal>
            <TextReveal delay={0.5}>
              <h3>Selected Works</h3>
            </TextReveal> 
          */}
        </div>

        <ProjectsCard cardLength={3} />

        <SayHello />
      </div>
    </motion.div>
  );
}

export default Services;
