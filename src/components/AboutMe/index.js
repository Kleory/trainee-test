import './style.css';
// import image from "../../images/Jason_Wood.jpg";
import Menu from '../Menu';
import Scroll from '../Scroll';

const SCROLL_TEXT = 'KEEP SCROLLING, THERE IS IS STILL MORE TO COME';

function AboutMe() {

  return (
    <div className="aboutMe-root">
      <Menu isMobileHide />
      <div className="aboutMe">
        <div className="aboutMe-img">
        </div>
        <div className="aboutMe-content">
          <div className="aboutMe-header">ABOUT ME</div>
          <div className="aboutMe-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div> 
            <div className="aboutMe-text subtext">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
          <div className="aboutMe-name">Jason Wood</div>
        </div>
      </div>
      <Scroll text = {SCROLL_TEXT} />
    </div>
  );
}

export default AboutMe;