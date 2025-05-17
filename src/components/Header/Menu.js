import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "studio",
  },
  {
    id: 1,
    navTitle: "projects",
  },
  {
    id: 2,
    navTitle: "services",
  },
  {
    id: 3,
    navTitle: "about",
  },
  {
    id: 4,
    navTitle: "contact",
  },
  {
    id: 5,
    navTitle: "privacy-policy"
  },
];

export function Menu({ isOpen, toggle, ulVariant, liVariant }) {
  // console.log("setMobileNavOpen", toggle);
  return (
    <motion.ul variants={ulVariant}>
      {MOBILE_NAV_ITEMS.map((navItem) => (
        <motion.li onClick={toggle} whileTap={{ scale: 0.95 }} key={navItem.id}>
          <motion.div variants={liVariant}>
            <Link to={`${navItem.navTitle}`}>
              {navItem.navTitle}
            </Link>
          </motion.div>
        </motion.li>
      ))}
    </motion.ul>
  );

  // return (
  //   <nav className={`${isOpen ? "open" : ""}`}>
  //     <ul style={{}}>
  //       <li
  //         onClick={toggle}>
  //         <Link to="/projects">Work</Link>
  //       </li>
  //       <li
  //         onClick={toggle}>
  //         <Link to="/studio">Studio</Link>
  //       </li>
  //       <li
  //         onClick={toggle}>
  //         <Link to="/contact">Contact</Link>
  //       </li>
  //     </ul>
  //   </nav>
  // );
}
