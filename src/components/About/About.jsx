import "./About.css";
import Counter from "./Counter";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";


export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Heading */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
         <span>  About Me</span>
          <h2>Who I Am</h2>
        </motion.div>

        <div className="about-content">

          {/* Left Side */}
          <motion.div
            className="about-code"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
    
    >
    <div className="real-laptop">

  <div className="laptop-camera"></div>

  <div className="real-screen">

    <div className="screen-header">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div className="code-content">

      <span className="keyword">const</span>{" "}
      <span className="classname">Developer</span> = {"{"}

      <br /><br />

      &nbsp;&nbsp;
      name:
      <span className="string">
        "Naziya"
      </span>,

      <br />

      &nbsp;&nbsp;
      role:
      <span className="string">
        "Full Stack Developer"
      </span>,

      <br />

      &nbsp;&nbsp;
      skills:
      [
      <span className="string">
        "React"
      </span>,
      <span className="string">
        "Python"
      </span>,
      <span className="string">
        "Django"
      </span>
      ]

      <br /><br />

      <span className="function">
        build()
      </span>
      {" {"}

      <br />

      &nbsp;&nbsp;
      <span className="keyword">
        return
      </span>

      <span className="string">
        "Creative Web Apps 🚀"
      </span>;

      <br />

      {"}"}

      <br />

      {"}"}

    </div>

  </div>


  <div className="laptop-keyboard">

    <div className="keyboard-lines"></div>

    <div className="touchpad"></div>

  </div>

</div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Hi, I'm Naziya Nadaf 👋</h3>

            <p>
              I am a passionate <strong>Full Stack Developer</strong> and
              BCA graduate with a strong interest in building modern,
              responsive, and user-friendly web applications.
            </p>

            <p>
              I enjoy working with React, JavaScript, Django, Python,
              and MySQL to transform ideas into real-world digital
              experiences while continuously learning new technologies.
            </p>

            <div className="about-points">
              <div><FaLaptopCode /> Full Stack Development</div>
              <div><FaCode /> Clean & Responsive UI</div>
              <div><FaGraduationCap /> BCA Graduate</div>
              <div><MdOutlineRocketLaunch /> Continuous Learning</div>
            </div>

<a
  href="/Naziya.pdf"
  download="Naziya.pdf"
  className="primary-btn"
>
  Download Resume
</a>

          </motion.div>

        </div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="stat-card">

  <h3>
    <Counter 
      value={8.48}
      decimals={2}
    />
  </h3>

  <p>CGPA</p>

</div>



<div className="stat-card">

  <h3>
    <Counter 
      value={6}
      suffix="+"
    />
  </h3>

  <p>Projects</p>

</div>



<div className="stat-card">

  <h3>
    <Counter 
      value={10}
      suffix="+"
    />
  </h3>

  <p>Technologies</p>

</div>
<div className="stat-card">

  <h3>
    <Counter 
      value={2026}
      startValue={2001}
    />
  </h3>

  <p>BCA Graduate</p>

</div>
        </motion.div>

      </div>
    </section>
  );
}