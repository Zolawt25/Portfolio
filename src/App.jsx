// import { useState } from 'react';
// import { motion } from "framer-motion";
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
// import { motion, AnimatePresence } from "framer-motion";




function App() {

  return (
    <div className="text-white">
      <section className='fullVh' id="Homepage">
        <Navbar/>
        <Hero/>
      </section>
      <section className='fullVh' id="Services">
        parallax
      </section>
      <section className='fullVh' >services</section>
      <section className='fullVh' id="Portfolio">
        parallax
      </section>
      <section className='fullVh'>portfolio1</section>
      <section className='fullVh'>portfolio3</section>
      <section className='fullVh' id="Contact">contact</section>
    </div>
  )
}

export default App
