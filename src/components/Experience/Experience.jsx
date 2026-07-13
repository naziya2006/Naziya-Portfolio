import "./Experience.css";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaCode,
  FaBriefcase,
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const experience = [
  {
    icon: <FaLaptopCode />,
    role: "Python Full Stack Developer Intern",
    company: "Edufyi Tech Solutions",
    duration: "Apr 2026 - Jul 2026",
    color: "var(--primary)",

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "Python", icon: <FaPython /> },
      { name: "REST API", icon: <TbApi /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],

    points: [
      "Developed responsive full-stack web applications using React and Python.",
      "Built reusable React components and integrated REST APIs.",
      "Worked with MySQL databases and backend development.",
      "Collaborated using Git & GitHub with clean coding practices.",
    ],
  },

  {
    icon: <FaCode />,
    role: "Full Stack Developer Intern",
    company: "Saiket Systems",
    duration: "Jan 2025 • 1 Month",
    color: "#00D9FF",

    tech: [
      { name: "React", icon: <FaReact /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],

    points: [
      "Developed responsive websites.",
      "Worked on frontend and backend tasks.",
      "Improved UI and fixed application bugs.",
    ],
  },

  {
    icon: <FaBriefcase />,
    role: "Web Developer Intern",
    company: "CodSoft",
    duration: "Dec 2024 • 1 Month",
    color: "#FF9B3D",

    tech: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],

    points: [
      "Built responsive landing pages.",
      "Converted UI designs into websites.",
      "Improved responsiveness and user experience.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span>PROFESSIONAL JOURNEY</span>

          <h2>Experience</h2>

          <p>
            Turning ideas into real-world applications through internships,
            modern technologies and continuous learning.
          </p>
        </motion.div>

        <div className="timeline">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              style={{ "--clr": item.color }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >

              {index !== experience.length - 1 && (
                <div className="timeline-line"></div>
              )}

              <div className="company-circle">

                <span className="orbit-ring"></span>

                <span className="orbit-dot"></span>

                <div className="company-icon">
                  {item.icon}
                </div>

              </div>

              <div className="experience-card">

                <div className="experience-top">

                  <div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                  </div>

                  <span>{item.duration}</span>

                </div>

                <div className="tech-stack">

                  {item.tech.map((tech, i) => (

                    <motion.div
                      key={i}
                      className="tech-pill"
                      whileHover={{
                        y: -5,
                        scale: 1.05,
                      }}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </motion.div>

                  ))}

                </div>

                <ul>

                  {item.points.map((point, i) => (

                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <FaBriefcase className="bullet-icon" />
                      <span>{point}</span>
                    </motion.li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}