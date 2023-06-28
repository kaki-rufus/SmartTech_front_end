import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

const Members = () => {

  const [members, setMembers] = useState([])

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/Members/')
        setMembers(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchMembers();

  }, []);

  return (
    <div className='members-container'>

    <h2>TEAM</h2>

    <motion.div className='members'
        animate = {{
          scale: [1.5,1],
          rotation: [100,0]
        }}
        transition = {{
          duration: 1,
          ease: "circInOut"
        }}>
      {members.map((member, index) => (
        <div className='ind-member' key={index}>
          <img src={member.image} alt="" className='ind-img'/>

          <div className='details-mb'>
            <h4>{member.name}</h4>
            <p>{member.description}</p>
          </div>

        </div>
      ))}

      </motion.div>
    </div>

  )
}

export default Members