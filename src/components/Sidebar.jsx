import { motion } from "framer-motion";
import { useState } from "react";







const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring", 
            stiffness: 20
        }
    },
    close: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.2, 
            type: "spring", 
            stiffness: 400, 
            damping: 40 
        }
    }
}


const Sidebar = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const links = ["Homepage", "Services", "Portfolio", "Contact"]
    return(
        <motion.div className=" bg-white flex flex-col items-center justify-center fixed top-0 text-black z-40"
         variants={variants} 
         animate={isOpen ? "open" : "close"}
        >
            <motion.div className=" fixed top-0 left-0 bottom-0 w-96 bg-white">
                <div className=" bg-transparent flex flex-col h-full w-full items-center justify-center gap-5 text-black">
                    {
                        links.map((item)=>{
                            return (<motion.a href={`#${item}`} key={item} className='block bg-transparent text-xl'
                                whileHover={{scale: 1.5}}
                                transition={{type: "spring", stiffness: 300}}
                            >{item}</motion.a>)
                        })
                    }
                </div>
            </motion.div>
            <button className="h-12 w-12 rounded-full bg-transparent border-none rotate-90 fixed top-6 left-5 text-xl ml-2 font-bold cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>|||</button>
        </motion.div>
    )
}

export default Sidebar