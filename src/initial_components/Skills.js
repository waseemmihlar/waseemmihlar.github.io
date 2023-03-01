import React from "react";
import "./SkillsStyle.css";
import { FaStar, FaRegStar, FaChevronRight } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skill-container">
      <h1 className="skill-heading">Knowledge & Skills</h1>
      <div className="knowledge-container">
        <div className="grid-container">
          <div className="mern-skill">
            <h4>MERN Stack</h4>
            <div style={{ border: "3px solid white", width: "80%" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "1rem",
                gap: "4px",
              }}
            >
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaRegStar color="white" size={"20px"} />
            </div>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Web Application Developing</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Java Script</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>React JS</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Node JS</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Mongo DB</p>
          </div>
        </div>
        <div className="grid-container">
          <div className="java-skill">
            <h4>Java</h4>
            <div style={{ border: "3px solid white", width: "80%" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "1rem",
                gap: "4px",
              }}
            >
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaRegStar color="white" size={"20px"} />
            </div>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Java Web Application</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Java Standalone Application</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Java Mobile Application</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Spring Boot</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>MY SQL</p>
          </div>
        </div>

        <div className="grid-container">
          <div className="reactnative-skill">
            <h4>React Native</h4>
            <div style={{ border: "3px solid white", width: "80%" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                paddingTop: "1rem",
                gap: "4px",
              }}
            >
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaStar color="white" size={"20px"} />
              <FaRegStar color="white" size={"20px"} />
              <FaRegStar color="white" size={"20px"} />
            </div>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Cross-Platform...</p>
          </div>
          <div className="mern-skillitem">
            <FaChevronRight color="rgb(18, 196, 151)" size={"20px"} />
            <p>Still Learning...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
