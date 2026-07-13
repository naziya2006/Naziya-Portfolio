import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-container">

        <a href="#home" className="logo">
          Naziya<span>.</span>
        </a>

        <nav className={menu ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={() => setMenu(false)}>Home</a>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#education" onClick={() => setMenu(false)}>Education</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenu(false)}>Experience</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </header>
  );
}