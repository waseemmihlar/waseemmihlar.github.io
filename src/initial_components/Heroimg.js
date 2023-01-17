import React from "react";
import { Link } from "react-router-dom";
import Introimg from "../accets/Intro.jpg";
import "../index.css";
import "./HeroimgStyle.css";

function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt={"Intro-Image"} />
      </div>
      <div className="content">
        <p>HI I'M WASEEM</p>
        <h1>FULL STACK DEVELOPER</h1>
        <div>
          <Link to={"/project"}>
            <button className="btn">Project</button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn btn-light">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Heroimg;
