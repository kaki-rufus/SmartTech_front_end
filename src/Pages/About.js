import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div className='about-container'>
      <div className='about'>
      
      {about.map((abt, index) => (
          <div className='ind-abt' key={index}>
            {/* <span></span> */}
            <img src={abt.image} alt="" className='abt-image'/>
            <h3>{abt.name}</h3>
            {/* <p>{abt.description}</p> */}
          </div>
      ))}
    
  </div>
    </div>

  )
}

export default About