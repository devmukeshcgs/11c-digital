import { Menu } from "./Header/Menu";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container22">
        {/* <div className="bg-animation">
          <div className="anim-cir"></div>
          <div className="anim-cir2"></div>
        </div> */}
        <div className="top">
          <div className="footer-navigation">
            <Menu />
          </div>
          <div className="subscribe">
            <h6>
              Get industry insights and creative inspiration straight to your
              inbox.
            </h6>
            <form action="">
              <input type="email" placeholder="johndoe@xyz.com" />
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
        <div className="logo">11C Digitals</div>
        <div className="bottom">
          <small className="addr">Mumbai, INDIA.</small>
          <div className="social">
            <ul>
              <li>FB</li>
              <li>X</li>
              <li>INSTA</li>
            </ul>
          </div>
          <small className="copy-w">Copyright © 11C Digitals</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
