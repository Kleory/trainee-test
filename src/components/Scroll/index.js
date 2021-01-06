import './style.css';
import arrow from "../../images/Double_Arrow.png";


function Scroll({text}) {

  return (
    <div className="scroll-root">
      <div className="scroll-text">{text}</div>
      <img className="scroll-doubleArrow" src={arrow} alt = "Double Arrow"/>
    </div>
  );
}

export default Scroll;