import "./ScrollProgress.css";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    updateScroll();

    return () =>
      window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="scroll-progress-wrapper">
      <div
        className="scroll-progress-bar"
        style={{ width: `${scroll}%` }}
      >
        <div className="progress-star"></div>
      </div>
    </div>
  );
}