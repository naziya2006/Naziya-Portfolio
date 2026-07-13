import "./Hero.css";
import profile from "../../assets/Naziya.jpeg";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

import { SiPython, SiDjango, SiMysql } from "react-icons/si";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background Blur */}
      <div className="hero-blur blur1"></div>
      <div className="hero-blur blur2"></div>

      {/* Same Width as Navbar */}
      <div className="hero-container">
        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">👋 Welcome To My Portfolio</span>

          <h4>Hello I'm</h4>

          <h1>
            Naziya <span>Nadaf</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Developer",
                "UI / UX Designer",
                "Python Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={45}
              delaySpeed={1800}
            />
          </h2>

          <p>
            Passionate about creating modern, responsive and user-friendly web
            applications using React, JavaScript, Django and Python. I enjoy
            transforming ideas into beautiful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </motion.div>

     <motion.div
  className="hero-image"
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>

<div className="icon-space">


<div className="image-circle">

<img src={profile} alt="Naziya Nadaf"/>

</div>


<FaReact className="tech-icon react"/>
<FaHtml5 className="tech-icon html"/>
<FaCss3Alt className="tech-icon css"/>
<FaJs className="tech-icon js"/>
<SiPython className="tech-icon python"/>
<SiDjango className="tech-icon django"/>
<SiMysql className="tech-icon mysql"/>
<FaGitAlt className="tech-icon git"/>


</div>


</motion.div>
      </div>
    </section>
  );
}
