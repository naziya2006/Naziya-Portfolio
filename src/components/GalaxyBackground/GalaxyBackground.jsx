import "./GalaxyBackground.css";

export default function GalaxyBackground() {
  return (
    <div className="background">

      {/* Base */}
      <div className="bg-gradient"></div>

      {/* Liquid Shapes */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>
      <div className="blob blob4"></div>
      <div className="blob blob5"></div>

      {/* Soft Light */}
      <div className="ambient ambient1"></div>
      <div className="ambient ambient2"></div>

      {/* Grain */}
      <div className="grain"></div>

      {/* Vignette */}
      <div className="vignette"></div>

    </div>
  );
}