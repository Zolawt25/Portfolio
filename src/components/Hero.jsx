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
    <div className="px-10per flex items-center z-10 relative overflow-hidden">
      <motion.div className="flex-1"
      variants={variants}
      initial="hidden"
      animate="visible"
      >
        <motion.p className="text-purple-800 text-3xl tracking-widest font-bold">Zelalem Tesfa</motion.p>
        <motion.p className="text-7xl font-bold mt-6 leading-tight">Full Stack Web Developer</motion.p>
        <motion.div className="mt-8">
            <a href="#Portfolio"className="border-2 border-gray-400 px-3 py-4 text-sm rounded-xl mr-3">See the Latest Works</a>
            <a href="#Contact" className="bg-white text-main px-3 py-4 text-sm rounded-xl">Contact Me</a>
        </motion.div>
      </motion.div>
      <motion.div className=" absolute -bottom-16 text-huge bg-transparent whitespace-nowrap text-hero cursor-default"
       initial={{x: "89vw"}}
       animate={{x: "-220vw"}}
       transition={{delay: 1.3, duration: 50, repeat: Infinity, repeatType: "mirror"}}
      >Full Stack Web Developer</motion.div>
      <div className="flex-1 flex">
        <div className="h-full w-big">
            <img src="/hero.png" alt="Zelalem's picture"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
