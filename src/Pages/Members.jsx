import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
    <div className='members'>

      {/* <h1>kaki</h1> */}


      {members.map((member, index) => (
        <div className='ind-member' key={index}>
          <img src={member.image} alt="" className='ind-img'/>

          <div className='details-mb'>
            <h4>{member.name}</h4>
            <p>{member.description}</p>
          </div>

        </div>
      ))}

    </div>
  )
}

export default Members