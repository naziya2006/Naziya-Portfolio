import "./FloatingIcons.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiDjango } from "react-icons/si";

export default function FloatingIcons() {
  return (
    <div className="floating-icons">
      <FaReact className="icon react" />
      <FaHtml5 className="icon html" />
      <FaCss3Alt className="icon css" />
      <FaJsSquare className="icon js" />
      <FaPython className="icon python" />
      <SiDjango className="icon django" />
      <FaGitAlt className="icon git" />
    </div>
  );
}