import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";








const items = [
    {
        id: 1,
        title: "Doctors Appointment",
        img: "/public/doch.png",
        desc: "Welcome to our doctors appointment website, where you can easily schedule and manage your medical appointments with just a few clicks. Our user-friendly platform allows you to search for available doctors, view their profiles, and book appointments at your convenience. The website is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), ensuring a modern and intuitive user experience. YOU CAN CHECK THE WEBSITE USING THE LINK!",
        link: "https://doctors-appointment-azure.vercel.app"
    },
    {
        id: 2,
        title: "Food Menu",
        img: "/public/all foods.png",
        desc: "Savor the moment with our Food Menu Website—an exquisite collection of culinary delights awaits! Dive into a symphony of flavors, from tantalizing appetizers to mouthwatering mains and heavenly desserts. Explore our menu, where every dish is a masterpiece, and every click is a journey into gastronomic bliss. Bon appétit awaits you! This website is built using reactjs library ensuring a modern and intuitive user experience.",
        link: "https://github.com/Zolawt25/Food-Menu"
    },
    {
        id: 3,
        title: "Touring",
        img: "/public/touring.png",
        desc: "Welcome to Touring, your ultimate guide to unforgettable travel experiences around the world.        Touring utilizes the MERN stack (MongoDB, Express.js, React.js, and Node.js) to provide users with a seamless online traveling experience. Users can create an account and securely log in to access additional features such as commenting and rating our tour.",
        link: "https://github.com/Zolawt25/Touring"
    },
    
]
const Single = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref})

    const y = useTransform(scrollYProgress, [0, 1], [-750, 750])

    return( 
      <section className="fullVh overflow-hidden">
        <div className="flex items-center justify-normal w-full h-full px-10per gap-4">
          <motion.div className="flex flex-1 overflow-hidden w-1/2 rounded-xl" ref={ref}>
            <img src={item.img} alt={item.title} className=" object-cover"/>
          </motion.div>
          <motion.div className="flex-1" style={{y:y}}>
            <p className="text-5xl mb-4">{item.title}</p>
            <p className=" text-sm mb-4">{item.desc}</p>
            <a href={item.link} target="_blank" className="px-11 py-2 bg-btnColor rounded-md text-main text-sm">See Demo</a>
          </motion.div>
        </div>
      </section>
    )
}
const Portfolio = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })
  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 left-0 text-center text-btnColor pt-12">
        <p className=" text-4xl">Featured Works</p>
        <motion.div style={{scaleX: scaleX}} className="h-3 bg-white"></motion.div>
      </div>
      {
        items.map((item)=>{
          return  <Single item={item} key={item.id}/>
        })
      }
    </div>
  )
}

export default Portfolio
