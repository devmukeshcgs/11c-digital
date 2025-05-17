import { motion } from "framer-motion";
import ServiceHeader from "../components/Services/ServiceHeader";
import ServiceApproach from "../components/Services/ServiceApproach";
import SayHello from "../components/SayHello";
import ServiceProcess from "../components/Services/ServiceProcess";
import ServiceCaseStudies from "../components/Services/ServiceCaseStudies";

function Websites() {
  return (
    <motion.div className="">
      <ServiceHeader />

      <ServiceApproach />

      <ServiceProcess />

      <ServiceCaseStudies />
      
      <SayHello />
    </motion.div>
  );
}

export default Websites;
