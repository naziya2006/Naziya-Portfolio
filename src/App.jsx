import "./App.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import GalaxyBackground from "./components/GalaxyBackground/GalaxyBackground";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

    {!loading && (
  <>
    <GalaxyBackground />

    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
     
      <Education />
       <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  </>
)}
    </>
  );
}

export default App;