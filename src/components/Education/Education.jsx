import "./Education.css";
import { motion } from "framer-motion";

import Counter from "./Counter";

import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
} from "react-icons/fa";

import { MdSchool } from "react-icons/md";

const education = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Computer Applications",
    college: "Chhatrapati Shivaji Maharaj University",
    place: "Panvel",
    year: "2023 - 2026",
    cgpa: 8.48,
    sgpa: 9.2,
    color: "var(--primary)",
  },

  {
    icon: <FaBookOpen />,
    title: "Higher Secondary (HSC)",
    college: "D. G. Tatkare Junior College",
    place: "Kalamboli",
    year: "2021 - 2023",
    color: "#00D9FF",
  },

  {
    icon: <FaSchool />,
    title: "Secondary School (SSC)",
    college: "New English School",
    place: "Kalamboli",
    year: "2020 - 2021",
    color: "#FF9B3D",
  },
];

export default function Education() {
  return (
    <section className="education" id="education">

      <div className="education-container">

        <motion.div
          className="education-heading"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span>ACADEMIC JOURNEY</span>

         <h2 className="section-title">
  Education
</h2>

          <p>

            Building a strong foundation through education,
            creativity and continuous learning.

          </p>

        </motion.div>

        <div className="timeline">

          {education.map((item, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              style={{ "--clr": item.color }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .2,
                duration: .7,
              }}
              viewport={{ once: true }}
            >

              <div className="timeline-icon">

                {item.icon}

              </div>

              <div className="timeline-line"></div>

              <div className="education-card">

                <h3>{item.title}</h3>

                <h4>{item.college}</h4>

                <span className="edu-place">

                  {item.place}

                </span>

                <p>{item.year}</p>

                {item.cgpa && (

                  <div className="score-wrapper">

                    <div className="score-box">

                      <small>CGPA</small>

                      <h2>

                        <Counter
                          end={8.48}
                          decimals={2}
                        />

                      </h2>

                    </div>

                    <div className="score-box">

                      <small>SGPA</small>

                      <h2>

                        <Counter
                          end={9.2}
                          decimals={1}
                        />

                      </h2>

                    </div>

                  </div>

                )}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}