import "./LoadingScreen.css";
import { motion } from "framer-motion";

export default function LoadingScreen(){

  const name = "NAZIYA";

  return(

    <motion.div
      className="loading-screen"

      exit={{
        opacity:0,
        y:-50,
        filter:"blur(20px)"
      }}

      transition={{
        duration:0.9
      }}
    >


      <div className="mist mist1"></div>
      <div className="mist mist2"></div>


      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>


      <div className="loader-card">


        <motion.h1>

          {
            name.split("").map((letter,index)=>(

              <motion.span

              key={index}

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:index*0.15,
                duration:.6
              }}

              >
                {letter}
              </motion.span>

            ))
          }

        </motion.h1>


      <motion.p

initial={{
  opacity:0,
  y:20
}}

animate={{
  opacity:1,
  y:0
}}

transition={{
  delay:1,
  duration:.8
}}

>
FULL STACK DEVELOPER | SOFTWARE ENGINEER
</motion.p>



        <div className="loading-dots">

          <span></span>
          <span></span>
          <span></span>

        </div>


      </div>


    </motion.div>

  )
}