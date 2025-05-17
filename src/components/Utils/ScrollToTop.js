import { useEffect, useState } from "react";
// import { withRouter } from 'react-router-dom';
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const location = useLocation();
    const [count, setCount] = useState(0);

    useEffect(() => {
      // execute on location change
      setCount(count + 1);
      console.log("Location changed!", location.pathname);
      window.scrollTo(0, 0);
      // const unlisten = history.listen(() => {
      // });
      // return () => {
      //   unlisten();
      // };
    }, [location]);
    
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

function ScrollToTop({ Component }) {
  const location = useLocation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // execute on location change
    setCount(count + 1);
    console.log("Location changed!", location.pathname);
    window.scrollTo(0, 0);
    // const unlisten = history.listen(() => {
    // });
    // return () => {
    //   unlisten();
    // };
  }, [location]);
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
}

export default ScrollToTop;
