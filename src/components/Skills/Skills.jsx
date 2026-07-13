import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiMongodb,
  SiSqlite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Frontend",
    color: "var(--primary)",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
    ],
  },

  {
    title: "Backend",
    color: "#00D9FF",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <FaReact />, name: "REST API" },
    ],
  },

{
  title: "Database",
  color: "#FF63B7",
  items: [
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },
  ],
},

  {
    title: "UI / UX",
    color: "#FF9B3D",
    items: [
      { icon: <FaFigma />, name: "Figma" },
      { icon: <FaFigma />, name: "Wireframing" },
      { icon: <FaFigma />, name: "Prototype" },
      { icon: <FaFigma />, name: "UI Design" },
      { icon: <FaFigma />, name: "UX Design" },
    ],
  },

  {
    title: "Tools",
    color: "#3DE06D",
    items: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiNetlify />, name: "Netlify" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span>TECHNICAL SKILLS</span>

          <h2>
            Technologies & Tools
          </h2>

          <p>
            Technologies I use to build modern full stack applications.
          </p>

        </motion.div>

        {skills.map((skill, index) => (

          <motion.div
            className="skill-row"
            key={index}
            style={{ "--line": skill.color }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * .15 }}
            viewport={{ once: true }}
          >

            <div className="skill-left">

             <div
  className="skill-main-icon"
  style={{ color: skill.color }}
>
  {skill.items[0].icon}
</div>

              <h3>{skill.title}</h3>

            </div>

<div className="skill-right">

  <div className="skill-track">

    {skill.items.map((item, i) => (

      <div className="skill-node" key={i}>

        <div className="skill-box">

          <span className="icon">
            {item.icon}
          </span>

          <span>{item.name}</span>

        </div>

        <div className="node-dot"></div>

      </div>

    ))}

    <div className="track-line"></div>

  </div>


            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}