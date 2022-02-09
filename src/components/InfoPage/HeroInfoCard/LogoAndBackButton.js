import React from "react";
import { Link } from "react-router-dom";
import "./LogoAndBackButton.css";

const LogoAndBackButton = () => {
  return (
    <div >
      <div >
       
        <h3>Marvel Heros</h3>
      </div>

      <Link to="/#/" >
       <button className="button">Back To HomePage</button>
      </Link>
    </div>
  );
};

export default LogoAndBackButton;