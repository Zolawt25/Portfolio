import { motion, useInView } from "framer-motion";
import { useRef } from "react";







const vatiants = {
    hidden:{
        x: "-100vh",
        y: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.2
        }
    }
}

const Services = () => {
  const ref = useRef()
  const inView = useInView(ref, {margin: "-200px"})

  return (
    <motion.div className="flex flex-col justify-between items-center h-full w-full overflow-hidden"
     variants={vatiants}
     initial="hidden"
     animate={inView && "visible"}
     ref={ref}
    >
      <motion.div className="flex justify-end items-center gap-3 h-20 w-full" variants={vatiants}>
        <p  className=" text-end font-extralight text-gray-300">I focus on helping your brand grow <br/> and move forward</p>
        <hr  className=" w-80"/>
      </motion.div>
      <motion.div className="flex items-center flex-col" variants={vatiants}>
        <motion.div className="flex" variants={vatiants}>
            <div className=" w-56 h-20 rounded-full flex overflow-hidden items-center">
                <img src="/people.webp" alt="" className=" w-96 h-28"/>
            </div>
            <div>
                <p className="text-7xl font-thin ml-7"><b className="font-bold cursor-default hover:text-btnColor">Unique</b> Ideas</p>
            </div>
        </motion.div>
        
        <motion.div className="flex items-center mt-2" variants={vatiants}>
            <p className="text-7xl font-thin ml-7"><b className="font-bold cursor-default hover:text-btnColor">For Your</b> Business.</p>
            <button className="ml-7 py-5 px-9 text-xl text-main rounded-full cursor-default bg-btnColor">What We Do?</button>
        </motion.div>
      </motion.div>
      <motion.div className="flex px-10per" variants={vatiants}>
      <div className="flex flex-col gap-5 border border-gray-300 p-3">
            <p className="font-bold text-lg">Branding</p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro, quisquam qui tempore aspernatur obcaecati unde commodi mollitia iure necessitatibus doloremque voluptatem? Ducimus veniam fugit ratione possimus sit.</p>
            <button className="bg-btnColor text-main">Go</button>

        </div>
        <div className="flex flex-col gap-5 border border-gray-300 p-3">
            <p className="font-bold text-lg">Branding</p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro, quisquam qui tempore aspernatur obcaecati unde commodi mollitia iure necessitatibus doloremque voluptatem? Ducimus veniam fugit ratione possimus sit.</p>
            <button className="bg-btnColor text-main">Go</button>

        </div>
        <div className="flex flex-col gap-5 border border-gray-300 p-3">
            <p className="font-bold text-lg">Branding</p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro, quisquam qui tempore aspernatur obcaecati unde commodi mollitia iure necessitatibus doloremque voluptatem? Ducimus veniam fugit ratione possimus sit.</p>
            <button className="bg-btnColor text-main">Go</button>

        </div>
        <div className="flex flex-col gap-5 border border-gray-300 p-3">
            <p className="font-bold text-lg">Branding</p>
            <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro, quisquam qui tempore aspernatur obcaecati unde commodi mollitia iure necessitatibus doloremque voluptatem? Ducimus veniam fugit ratione possimus sit.</p>
            <button className="bg-btnColor text-main">Go</button>

        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services
