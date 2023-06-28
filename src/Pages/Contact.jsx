import React from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
// import { useEffect } from 'react'
import { useState } from 'react'

const Contact = () => {


 const [email, setEmail] = useState('')
 const [phone, setPhone] = useState('') 
 const [message, setMessage] = useState('') 


const handleSubmit = async () => {
  try {
    await axios.post('http://127.0.0.1:8000/api/contact/', {
      email,
      phone,
      message
    })

  } catch (error) {
    console.log(error)
  }
  setEmail('')
  setPhone('')
  setMessage('')
}


  return (
    <div className='contact'>
      <h2>CONTACT US</h2>
      <motion.div className='form'
      // initial = {{scaleY: 0}}
      // animate = {{scaleY: 1}}
      // exit = {{scaleY: 0}}
      // transition = {{duration: 1}}

      animate = {{
        scale: [2,1],
        rotation: [90,0]
      }}
      transition = {{
        duration: 1,
        ease: "easeInOut"
      }}

      >
        
          <div className='message-content'>
        
          <label htmlFor="email">Enter email address: </label>
          <input id='email' type='email' 
          name='email' 
          placeholder='smarttech@gmail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">Enter phone number: </label>
          <input id='phone' 
          type='text' 
          name='phone' 
          placeholder='+254743989....'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="message">Send us Message: </label>
          <textarea name="message"
           id="message" 
           cols="30" rows="5"  
           placeholder='send us a message' 
           value={message}
           onChange={(e) => setMessage(e.target.value)}
           />
          </div>

          <button className='btn btn-success' type="submit" onClick={handleSubmit}>SEND</button>
       
      </motion.div>

      <div className='info'>

      </div>
    </div>
  )
}

export default Contact;
