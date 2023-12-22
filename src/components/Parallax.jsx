import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";







const Parallax = ({type}) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "300%"])
  return (
    <div ref={ref} className="h-full w-full flex items-center justify-center relative text-5xl text-center md:text-big overflow-hidden">
      <motion.p style={{y: yText}}>
        {type === "Services" ? "What I Do?" : "My Projects"}
      </motion.p>
      <motion.div className={`${type === "Services" ?'bg-[url("/planets.png")]' : 'bg-[url("/sun.png")]'} h-full w-full absolute bg-bottom bg-contain bg-no-repeat md:bg-cover z-10`}
       style={{y: yBg}}
      ></motion.div>
      <motion.div className="bg-[url('/mountains.png')] h-full w-full absolute bg-bottom bg-contain bg-no-repeat lg:bg-cover z-10"></motion.div>
      <motion.div className="bg-[url('/stars.png')] h-full w-full absolute bg-bottom bg-cover z-0" 
       style={{x: yBg}}
      ></motion.div>
    </div>
  )
}

export default Parallax
