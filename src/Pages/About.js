import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const About = () => {

  const [about, setAbout] = useState([])

// about get data
useEffect(() => {
  const fetchAbout = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/about/')
      console.log(response.data)
      setAbout(response.data)
    } catch (error) {
      console.log("Error in fetch is: ", error)
    }
  }

  fetchAbout();

}, [])

  return (
    <motion.div className='about-container' 
    >
      <h2>ABOUT US</h2>
      <motion.div className='about'

        initial = {{scaleY: 0}}
        animate = {{scaleY: 1}}
        exit = {{scaleY: 0}}
        transition = {{duration: 1}}


      // animate = {{
      //   scale: [2,1],
      //   rotation: [90,0]
      // }}
      // transition = {{
      //   duration: 1,
      //   ease: "easeInOut"
      // }}
      >
      
      {about.map((abt, index) => (
        <>
        
           <motion.div className='ind-abt' key={index}
           whileHover={{
            scale: 1.05,
            transition: {duration: 0.5}
           }}
           >
            {/* <span></span> */}
            <img src={abt.image} alt="" className='abt-image'/>
            <h3>{abt.name}</h3>
            {/* <p>{abt.description}</p> */}
          </motion.div>
        </>
      ))}
    
      </motion.div>
    </motion.div>

  )
}

export default About