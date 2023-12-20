import { motion } from "framer-motion";







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
    <div className="px-10per flex flex-col md:flex-row items-center z-10 relative overflow-hidden h-full">
      <motion.div className="flex-1 h-1/2 pt-24 md:pt-12"
      variants={variants}
      initial="hidden"
      animate="visible"
      >
        <motion.p className="text-purple-800 text-center md:text-left text-lg md:text-3xl tracking-widest font-bold">Zelalem Tesfa</motion.p>
        <motion.p className=" text-4xl text-center md:text-left md:text-6xl lg:text-7xl font-bold mt-2 md:mt-6 leading-tight">Full Stack Web Developer</motion.p>
        <motion.div className="mt-8 text-center md:text-left">
            <a href="#Portfolio"className="border-2 border-gray-400 px-3 py-4 text-sm rounded-xl mr-3">See the Latest Works</a>
            <a href="#Contact" className="bg-white text-main px-3 py-4 text-sm rounded-xl">Contact Me</a>
        </motion.div>
      </motion.div>
      <motion.div className=" absolute bottom-3 sm:bottom-7 md:-bottom-9 text-9xl md:text-huge bg-transparent whitespace-nowrap text-hero cursor-default"
       initial={{x: "89vw"}}
       animate={{x: "-220vw"}}
       transition={{delay: 1.3, duration: 50, repeat: Infinity, repeatType: "mirror"}}
      >Full Stack Web Developer</motion.div>
      <div className="flex-1 flex items-center justify-center">
        <div className="md:h-big flex mb-big sm:w-mid md:mb-32 h-1/2 md:w-mid">
            <img src="/public/Zelalem.png" alt="Zelalem's picture" className="w-big h-96 md:h-auto md:w-mid lg:w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
