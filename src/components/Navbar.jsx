import { motion } from "framer-motion";
import Sidebar from "./Sidebar";









const Navbar = () => {
  return (
    <div className=" h-20 w-full absolute top-0">
      <Sidebar/>
      <div className="flex items-center justify-end m-auto px-10per h-full md:justify-between">
        <motion.span className="font-bold hidden md:block"
         initial={{opacity: 0, scale: 0.5}}
         animate={{scale: 1, opacity: 1}}
         transition={{duration: 0.7}}
        >Portfolio</motion.span>
        <div className="flex gap-6">
            <a href="#"><img src="/facebook.png" alt="facebook.png" className=" h-5 w-5"/></a>
            <a href="#"><img src="/instagram.png" alt="instagram.png" className=" h-5 w-5"/></a>
            <a href="#"><img src="/youtube.png" alt="youtube.png" className=" h-5 w-5"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
