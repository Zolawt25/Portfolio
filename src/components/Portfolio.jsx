import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";






import doc from "../assets/doch.png"
import food from "../assets/all foods.png"
import touring from "../assets/touring.png"
import cara from "../assets/cara.png"



const items = [
    {
        id: 1,
        title: "Clothing E-Commerce",
        img: cara,
        desc: "This project is a full-stack clothing e-commerce web application built using React with Vite for the frontend and Django with Django Rest Framework (DRF) for the backend. The application includes features for user authentication, product management, shopping cart, checkout with Stripe integration, and filtering products using django-filter. YOU CAN CHECK THE WEBSITE USING THE LINK!",
        link: "https://cara-ochre.vercel.app",
        deployed: true
    },
    {
      id: 2,
      title: "Doctors Appointment",
      img: doc,
      desc: "Welcome to our doctors appointment website, where you can easily schedule and manage your medical appointments with just a few clicks. Our user-friendly platform allows you to search for available doctors, view their profiles, and book appointments at your convenience. The website is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), ensuring a modern and intuitive user experience. YOU CAN CHECK THE WEBSITE USING THE LINK!",
      link: "https://doctors-appointment-azure.vercel.app",
      deployed: true
  },
    {
        id: 3,
        title: "Food Menu",
        img: food,
        desc: "Savor the moment with our Food Menu Website—an exquisite collection of culinary delights awaits! Dive into a symphony of flavors, from tantalizing appetizers to mouthwatering mains and heavenly desserts. Explore our menu, where every dish is a masterpiece, and every click is a journey into gastronomic bliss. Bon appétit awaits you! This website is built using reactjs library ensuring a modern and intuitive user experience.",
        link: "https://github.com/Zolawt25/Food-Menu",
        deployed: false
    },
    {
        id: 4,
        title: "Touring",
        img: touring,
        desc: "Welcome to Touring, your ultimate guide to unforgettable travel experiences around the world.        Touring utilizes the MERN stack (MongoDB, Express.js, React.js, and Node.js) to provide users with a seamless online traveling experience. Users can create an account and securely log in to access additional features such as commenting and rating our tour.",
        link: "https://github.com/Zolawt25/Touring",
        deployed: false
    },
    
]
const Single = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({target: ref})
    const [isSmall, setisSmall] = useState(false)
    const [innerWidth, setInnerWidth] = useState(window.innerWidth)

    useEffect(()=>{
      const handleResize = () => {
        setInnerWidth(window.innerWidth)
      }
      window.addEventListener('resize', handleResize);
      if (window.innerWidth <= 767) {
        setisSmall(true)
      }else{
        setisSmall(false)
      }
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },[innerWidth])
    
    const num = isSmall ? 0 : -750
    const y = useTransform(scrollYProgress, [0, 1], [num, 750])
    return( 
      <section className="fullVh overflow-hidden bg-main z-50">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-normal w-full h-full px-10per gap-4 max-w-[1400px] max-h-[800px]">
          <motion.div className="flex md:flex-1  overflow-hidden md:w-1/2 md:rounded-xl pt-20 md:pt-0" ref={ref}>
            <img src={item.img} alt={item.title} className=" object-contain md:object-cover"/>
          </motion.div>
          <motion.div className="flex-1 text-center md:text-left z-20" 
           style={{y:y}}

           >
            <p className="text-3xl md:text-4xl lg:text-5xl mb-4">{item.title}</p>
            <p className="text-xs lg:text-sm mb-4 font-light">{item.desc}</p>
            <a href={item.link} target="_blank" className="px-11 py-2  bg-btnColor rounded-md text-main text-sm">{item.deployed ? "See Demo" : "See on Github"}</a>
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
      <div className="sticky pt-[85vh] top-0 left-0 text-center text-btnColor md:pt-12 z-20">
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
