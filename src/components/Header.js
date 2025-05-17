import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimate, stagger, motion } from "framer-motion";
import LOGO_PNG from "../svg/logo.png";
import LOGO_SVG from "../svg/logo.svg";
import BURGER_SVG from "../svg/burger.svg";
import { MenuToggle } from "./Header/MenuToggle";
import { Menu } from "./Header/Menu";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  //WINDOW SIZE
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // console.log("windowSize", windowSize.current[0]);

  const handleShowNavbar = () => {
    // setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (windowSize.current[0] <= 810) {
      setHeaderOver(!headerOver);
    }
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [headerOver, setHeaderOver] = useState(false);

  const showLogoNameVariant = {
    showName: {
      opacity: 1,
      transition: {
        y: "-50%",
        delay: 0.15,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    hideName: {
      opacity: 0,
      y: "10%",
      transition: {
        delay: 0.35,
        duration: 0.5,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };

  //////////////////////////////////////////////////////////////////////////////////////
  return (
    <motion.header
      className="header-wrapper"
      onHoverStart={() => setHeaderOver(!headerOver)}
      onHoverEnd={() => setHeaderOver(!headerOver)}>
      <div className="container">
        <motion.nav
          initial="closed"
          animate={mobileNavOpen ? "opened" : "closed"}>
          <motion.div className="logo-container" variants={hideNavItemsVariant}>
            {/* <motion.h1 variants={hideNavItemsVariant}> */}
            <Link to="/">
              <motion.span
                className="logo"
                animate={headerOver ? "showName" : "hideName"}>
                {/* <img src={LOGO_SVG} alt="" /> */}
                <span
                  className="logo-name"
                  variants={showLogoNameVariant}>&nbsp;
                  11C<span>Digitals</span>
                </span>
              </motion.span>
            </Link>
            {/* </motion.h1> */}
          </motion.div>
          <div className="menu-container">
            <motion.button
              className="transperant"
              variants={hideNavItemsVariant}
              onClick={() => setMobileNavOpen(true)}>
              <img src={BURGER_SVG} alt="" height="12" />
            </motion.button>
          </div>
          <motion.div variants={mobileMenuVariant} className="mobile-menu">
            <motion.button
              className="transperant"
              variants={fadeInVariant}
              onClick={() => setMobileNavOpen(false)}>
              Close
            </motion.button>
            {/*<motion.ul variants={ulVariant}>
               {MOBILE_NAV_ITEMS.map(navItem => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div variants={liVariant}>{navItem.navTitle}</motion.div>
              </motion.li>
            ))} 
          </motion.ul>*/}
            <Menu
              toggle={() => {
                setMobileNavOpen(!mobileNavOpen);
              }}
              ulVariant={ulVariant}
              liVariant={liVariant}
            />
            <motion.div variants={fadeInVariant} className="contact">
              <a href="tel:+919821672735">+91 98216 72735</a>
              <a href="mailto:11cdigitals@gmail.com">
                11cdigitals@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;
