import {useState} from 'react';
import './style.css';


function Menu({isMobileHide}) {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuClick = () => {
    (!isOpenMenu)?document.body.style.overflowY = 'hidden':document.body.style.overflowY = 'auto';
    setIsOpenMenu(!isOpenMenu);
    
  }
  return (
    <div className={`menu-root ${isMobileHide?'hide':''} ${isOpenMenu?'isActiveMenu':''}`}>

      <div className="menu-burger" onClick={handleMenuClick}>&infin; MENU</div>
      
      <nav className={`menu `}>
        <a className="menu-item">HOME</a>
        <a className="menu-item">ABOUT ME</a>
        <a className="menu-item">PORTFOLIO</a>
        <a className="menu-item">CONTACT</a>
      </nav>

      <div className="menu-background"> </div>
      
    </div>
  );
}

export default Menu;