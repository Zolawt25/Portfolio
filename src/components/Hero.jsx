import { motion } from "framer-motion";
import hero from "../assets/zzz.png"




const variants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition:{
            staggerChildren: 0.5,
            duration: 1,
            delay: 0.5
        }
    }
}

const Hero = () => {
  return (
    <div className="px-5per sm:px-10per flex flex-col md:flex-row items-center z-10 relative overflow-hidden h-full max-w-[1400px] w-screen max-h-[800px]">
      <motion.div className="flex-1 h-1/2 pt-24 md:pt-12 z-50"
      variants={variants}
      initial="hidden"
      animate="visible"
      >
        <motion.p className="text-purple-800 text-center md:text-left text-lg md:text-3xl tracking-widest font-bold">Zelalem Tesfa</motion.p>
        <motion.p className=" text-4xl text-center md:text-left md:text-6xl lg:text-7xl font-bold mt-2 md:mt-6 leading-tight">Full Stack Web <br/>Developer</motion.p>
        <motion.div className="mt-8 text-center md:text-left">
            <a href="#Portfolio"className="border-2 border-gray-400 px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm rounded-xl mr-3">See the Latest Works</a>
            <a href="#Contact" className="bg-white text-main px-2 sm:px-3 py-2 sm:py-4 text-xs sm:text-sm rounded-xl ">Contact Me</a>
        </motion.div>
      </motion.div>
      <motion.div className=" absolute bottom-3 sm:bottom-7 md:-bottom-9 text-9xl md:text-huge bg-transparent whitespace-nowrap text-hero cursor-default"
       initial={{x: "89vw"}}
       animate={{x: "-220vw"}}
       transition={{delay: 1.3, duration: 50, repeat: Infinity, repeatType: "mirror"}}
      >Full Stack Web Developer</motion.div>
      <img src={hero} alt="Zelalem's picture" className=" w-[300px] sm:w-[200px] absolute bottom-0 md:right-[0px] lg:right-[100px] md:h-auto md:w-[420px]"/>
    </div>
  )
}

export default Hero
