import "./Footer.css";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      {/* Galaxy Background */}

      <div className="footer-bg">

        <span className="footer-glow glow-one"></span>
        <span className="footer-glow glow-two"></span>

        <span className="footer-star star-1"></span>
        <span className="footer-star star-2"></span>
        <span className="footer-star star-3"></span>
        <span className="footer-star star-4"></span>

      </div>

      <div className="footer-container">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Naziya <span>Nadaf</span>
        </motion.h2>

        <motion.p
          className="footer-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          Full Stack Developer • UI/UX Designer
        </motion.p>

        {/* Social Icons */}

        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .4 }}
          viewport={{ once: true }}
        >

          <a
            href="https://github.com/naziya2006"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/naziya-nadaf-942437328"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:naziyanadaf2006@gmail.com"
          >
            <FaEnvelope />
          </a>

        </motion.div>

        {/* Divider */}

        <div className="footer-line"></div>

        <motion.p
          className="copyright"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .6 }}
          viewport={{ once: true }}
        >
          © 2026 Naziya Nadaf. All Rights Reserved.
        </motion.p>

      </div>

      {/* Scroll To Top */}

      <button
        className="scroll-top"
        onClick={scrollTop}
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}