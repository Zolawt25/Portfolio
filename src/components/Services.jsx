import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";







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
  const [isSmall, setisSmall] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const ref = useRef()
  const inView = useInView(ref, {margin: "-200px"})
  useEffect(()=>{
      if (window.innerWidth <= 416) {
        setisSmall(true)
      }else{
        setisSmall(false)
      }
},[innerWidth])

  return (
    <motion.div className="flex flex-col md:justify-between items-center h-full w-full overflow-y-scroll no-scrollbar lg:overflow-hidden max-w-[1400px] max-h-[800px]"
    //  variants={vatiants}
     initial="hidden"
     animate={isSmall ? "visible" : inView && "visible"}
     ref={ref}
    >
      <motion.div className="flex justify-center flex-col sm:flex-row sm:justify-end items-center gap-3 mt-20 sm:mt-10 md:mt-0 h-20 w-full" variants={vatiants}>
        <p  className=" text-center sm:text-end font-extralight text-gray-300">I focus on helping your company grow <br/> and move forward</p>
        <hr  className=" w-64 sm:w-24 md:w-36 lg:w-80"/>
      </motion.div>
      <motion.div className="flex items-center flex-col mt-7 mb-5 md:mb-0 md:mt-0" variants={vatiants}>
        <motion.div className="flex flex-col md:flex-row" variants={vatiants}>
            <div className="w-36 h-12 lg:w-56 lg:h-20 rounded-full flex overflow-hidden items-center ml-6">
                <img src="/people.webp" alt="" className=" lg:w-72 lg:h-28"/>
            </div>
            <div>
                <p className=" text-3xl md:text-5xl lg:text-7xl font-thin ml-3 md:ml-7"><b className="font-bold cursor-default hover:text-btnColor">Unique</b> Ideas</p>
            </div>
        </motion.div>
        
        <motion.div className="flex items-center flex-col md:flex-row md:mt-2 text-center" variants={vatiants}>
            <p className="text-3xl md:text-5xl lg:text-7xl font-thin md:ml-7"><b className="font-bold cursor-default hover:text-btnColor">For Your</b> Business.</p>
            <button className=" md:ml-7 py-3 md:py-5 px-5 scale-75 md:px-9 lg:text-xl text-main rounded-full cursor-default bg-btnColor">What I Do?</button>
        </motion.div>
      </motion.div>
      <motion.div className="flex px-10per flex-wrap lg:flex-nowrap" variants={vatiants}>
      <div className="flex flex-col justify-between gap-5 border border-gray-300 p-3 md:w-1/2 lg:w-auto">
            <p className="font-bold text-lg">React.js</p>
            <p className=" text-xs">Proficient in React.js, I craft dynamic and engaging user interfaces using its component-based structure. Skilled in state management and integrating with other libraries, I create efficient and modern web applications for optimal user experiences.</p>
            {/* <button className="bg-btnColor text-main">Go</button> */}

        </div>
        <div className="flex flex-col justify-between gap-5 border border-gray-300 p-3 md:w-1/2 lg:w-auto">
            <p className="font-bold text-lg">Back-end</p>
            <p className=" text-xs">Experienced in Express.js and Mongoose, I build robust backends and manage databases effortlessly. Using Express, I create scalable APIs and handle server-side operations efficiently. With Mongoose, I seamlessly interact with MongoDB databases, ensuring data integrity and smooth application functionality.</p>
            {/* <button className="bg-btnColor text-main">Go</button> */}

        </div>
        <div className="flex flex-col justify-between gap-5 border border-gray-300 p-3 md:w-1/2 lg:w-auto">
            <p className="font-bold text-lg">Front-end</p>
            <p className=" text-xs">Proficient in front-end development using React, I craft engaging and responsive user interfaces. Skilled in leveraging React's component-based architecture, I create dynamic web applications with a focus on user experience.  I specialize in building reusable components, managing state efficiently, and optimizing performance for modern, interactive web experiences.</p>
            {/* <button className="bg-btnColor text-main">Go</button> */}

        </div>
        <div className="flex flex-col justify-between gap-5 border border-gray-300 p-3 md:w-1/2 lg:w-auto">
            <p className="font-bold text-lg">Full-stack</p>
            <p className=" text-xs">Proficient in full-stack development, I create comprehensive solutions by seamlessly integrating front-end and back-end technologies. With expertise across multiple layers of development, I craft scalable, responsive, and efficient applications, ensuring a seamless user experience from end to end.</p>
            {/* <button className="bg-btnColor text-main">Go</button> */}

        </div>
      </motion.div>
    </motion.div>
  )
}

export default Services
