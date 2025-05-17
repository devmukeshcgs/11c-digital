import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

 
export default function PageTransition(OgComponent) {
  // const PageTransition = (childerns) => {
  return class extends React.Component {
    render() {
      return (
        <>
          <OgComponent />
          <motion.div
            className="slideIn"
            variants={{
              hidden: { scaleY: 0 },
              visible: { scaleY: 0 },
              exit: { scaleY: 1 },
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            initial="hidden"
            animate="visible">
            Transition
          </motion.div>
          <motion.div
            className="slideOut"
            variants={{
              hidden: { scaleY: 1 },
              visible: { scaleY: 0 },
              exit: { scaleY: 0 },
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            initial="hidden"
            animate="visible">
            Transition
          </motion.div>
        </>
      );
    }
  };
}
 

// const withWrapper = (WrappedComponent) => {
//   return class extends React.Component {
//     render() {
//       return (
//         <div style={{backgroundColor: 'lightgray', padding: 20}}>
//           <WrappedComponent {...this.props} />
//         </div>
//       );
//     }
//   }
//  };
// export default withWrapper;

//  const MyComponent = (props) => <p>{props.text}</p>;
//  const WrappedComponent = withWrapper(MyComponent);
