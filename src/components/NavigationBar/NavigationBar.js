import React  from "react";
import "./NavigationBar.css";

const NavigationBar =(props) =>(
  
      <nav className="navbar navbar-default sticky">
         <ul>
          <li className="itemLeft"></li>
          <li className="itemCenter">Clicky Game!</li>
          <li className="itemRight">Score: {props.score}</li>
        </ul>
      </nav>
    );
  


export default NavigationBar;