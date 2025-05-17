// const Path = (props) => (
import { motion } from "framer-motion";
//     <path
//       fill="transparent"
//       strokeWidth="3"
//       stroke="var(--background)"
//       strokeLinecap="round"
//       {...props}
//     />
//   );

export const MenuToggle = ({ toggle }) => (
  <>
    <div className="burger" onClick={toggle}>
      <motion.button>
        <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </div>
      </motion.button>
     </div>
    {/* <button onClick={toggle}>
      <svg width="23" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
          />
      </svg>
    </button> */}
  </>
);
