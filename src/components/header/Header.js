import React from "react";
import "./style.css";
import logo1 from "../../images/logos/cocktail-logo.png";
import Navbar from "./Navbar";

const header = () => {
  return (
    <div className="header">
      <div className="logo1">
        <img className="logo1" src={logo1} alt="logo react" />
      </div>
      <div>
        <h1>Cocktail Party</h1>
      </div>
      <div className="nav-header">
        <Navbar />
      </div>
    </div>
  );
};

export default header;
