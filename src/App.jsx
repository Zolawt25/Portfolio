// import { useState } from 'react';
// import { motion } from "framer-motion";
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Services from './components/Services'
// import { motion, AnimatePresence } from "framer-motion";




function App() {

  return (
    <div className="text-white">
      <section className='fullVh' id="Homepage" style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
        <Navbar/>
        <Hero/>
      </section>
      <section className='fullVh' id="Services" style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
        <Parallax type="Services"/>
      </section>
      <section className='fullVh overflow-hidden' style={{background: "linear-gradient(180deg, #111132, #0c0c1d)"}}>
        <Services/>
      </section>
      <section className='fullVh' id="Portfolio" style={{background: "linear-gradient(180deg, #111132, #505064)"}}>
        <Parallax type="Portfolio"/>
      </section>
      <section className='fullVh bg-main'>portfolio1</section>
      <section className='fullVh bg-main'>portfolio3</section>
      <section className='fullVh bg-main' id="Contact">contact</section>
    </div>
  )
}

export default App
