import React, { useEffect, useState } from 'react';
import axios from 'axios';
import About from './About';
import Contact from './Contact'
import Shop from './Shop'
import Members from './Members';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const Home = () => {
  const [image, setImage] = useState('');

  const location = useLocation('');

  useEffect(() => {
    const fetchBgImage = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/home/');
        const data = response.data;
        setImage(data[0].bg_image); // Assuming the response is an array with a single object
      } catch (error) {
        console.error('Error fetching background image:', error);
      }
    };

    fetchBgImage();
  }, []);

  const backgroundStyle = {
    backgroundImage: `url('${image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    opacity: '0.7',
    height: '100vh',
  };

  return (
    <>
      <div style={backgroundStyle} className='home'>
         <motion.h1 className='name-comp' 
         initial={{ x:-300, scale: 0.5 }} 
         animate={{ x: 0, scale: 1 }} 
         transition = {{duration: 1.5}}
         >SmartTech
         <motion.h1 className='name-comp-2'
                     initial={{ x:300, scale: 0.5 }} 
                     animate={{ x: 0, scale: 1 }} 
                     transition = {{duration: 3}}
         >Tech enthusiasts. <br /> Hunger for success</motion.h1>

         </motion.h1>
         {/* <h1>Tech enthusiasts. <br /> Being considerate is our key strength</h1> */}
      </div>
      <AnimatePresence mode='wait' >
      <div location={location} key = {location.pathname}>

      {/* <AnimatePresence mode='wait' >
          <Routes location={location} key = {location.pathname}>
              <Route exact path='/' element = {<Home />}/>
              <Route exact path='/about' element = {<About />}/>
              <Route exact path='/members' element = {<Members />}/>
              <Route exact path='/shop' element = {<Shop />}/>
              <Route exact path='/contact' element = {<Contact />}/>
            </Routes>
        </AnimatePresence> */}


          <About />
          

          <Shop />


          <Members />


          <Contact />
      </div>
      </AnimatePresence>
    </>
  );
};

export default Home;

