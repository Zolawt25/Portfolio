import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";








const Navbar = () => {
  return (
    <div className=" h-20 w-full absolute top-0 z-20">
      <Sidebar/>
      <div className="flex items-center justify-end m-auto px-10per h-full md:justify-between">
        <motion.span className="font-bold hidden md:block"
         initial={{opacity: 0, scale: 0.5}}
         animate={{scale: 1, opacity: 1}}
         transition={{duration: 0.7}}
        >Portfolio</motion.span>
        <div className="flex gap-6">
            <a href="https://github.com/Zolawt25" target="_blank"><FaGithub className="scale-150 cursor-pointer"/></a>
            <a href="https://linkedin.com/in/zelalem-tesfa-2b8032203" target="_blank"><FaLinkedin className="scale-150 cursor-pointer"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
