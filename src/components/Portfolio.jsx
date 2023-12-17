import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion";








const items = [
    {
        id: 1,
        title: "React Project",
        img: "https://images.pexels.com/photos/18959488/pexels-photo-18959488/free-photo-of-close-up-of-woman-shoes-and-white-dress-on-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus omnis fuga architecto nulla ipsa magni. Voluptatum distinctio temporibus rem minus. Molestias fugiat ex, officia dolorem reprehenderit laborum voluptatem eligendi!"
    },
    {
        id: 2,
        title: "React Project",
        img: "https://images.pexels.com/photos/18156061/pexels-photo-18156061/free-photo-of-wedding-couple-walking-on-a-square-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus omnis fuga architecto nulla ipsa magni. Voluptatum distinctio temporibus rem minus. Molestias fugiat ex, officia dolorem reprehenderit laborum voluptatem eligendi!"
    },
    {
        id: 3,
        title: "React Project",
        img: "https://images.pexels.com/photos/14686115/pexels-photo-14686115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ducimus omnis fuga architecto nulla ipsa magni. Voluptatum distinctio temporibus rem minus. Molestias fugiat ex, officia dolorem reprehenderit laborum voluptatem eligendi!"
    },
    
]
const Single = ({item}) =>{
    return <section className="fullVh">{item.title}</section>
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
