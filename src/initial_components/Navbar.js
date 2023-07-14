import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import "../index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [barclick, setbarClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handlewinscroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", handlewinscroll);
  const handleclick = () => {
    setbarClick(!barclick);
  };

  return (
    <div className={scroll ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={barclick ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/waseem.pdf" className="cv" download="Waseem">
            Download CV
          </a>
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/project"}>Project</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleclick}>
        {barclick ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
