import React from "react";
import { Link } from "react-router-dom";
import logoFull from "../images/LPlogoFull.png";

function Splash() {
  // const title = document.querySelector('.shadow')

  // title.onmousemove = function(e) {
  //   let x = e.pageX - window.innerWidth/2;
  //   let y = e.pageY - window.innerHeight/2;
  
  //   let rad = Math.atan2(y, x).toFixed(2); 
  //   let length = Math.round(Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))/40); 
  
  //   let x_shadow = Math.round(length * Math.cos(rad));
  //   let y_shadow = Math.round(length * Math.sin(rad));
  
  //   title.style.setProperty('--x-shadow', - x_shadow + 'px')
  //   title.style.setProperty('--y-shadow', - y_shadow + 'px')
  // }

  return (
    <div className="container">
      <img src={logoFull} id="logo-full" className="logo-full" alt="" />

      <h2 className="enter">
      <Link id="enter" to="/portfolio">ENTER</Link>
      </h2>

      <h1 className="shadow">LP</h1>
    </div>
  );
}

export default Splash;
