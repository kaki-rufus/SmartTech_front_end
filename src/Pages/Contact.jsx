import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='form'>
        <form action="" method="post">
          <div className='message-content'>
          <label htmlFor="email">Enter email address: </label>
          <input id='email' type='email' placeholder='smarttech@gmail.com'/>

          <label htmlFor="phone">Enter phone number: </label>
          <input id='phone' type='text' placeholder='+254743989....'/>

          <label htmlFor="message">Send us Message: </label>
          <textarea name="" id="message" cols="30" rows="5" placeholder='send us a message' />
          </div>
          <button className='btn btn-success' type="submit">SEND</button>
        </form>
      </div>

      <div className='info'>

      </div>
    </div>
  )
}

export default Contact
