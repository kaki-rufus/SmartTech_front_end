import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation('');

  return (
    <div className="App">
      <NavBar />
      <div className='pages'>
        <AnimatePresence mode='wait' >
          <Routes location={location} key = {location.pathname}>
              <Route exact path='/' element = {<Home />}/>
              <Route exact path='/about' element = {<About />}/>
              <Route exact path='/members' element = {<Members />}/>
              <Route exact path='/shop' element = {<Shop />}/>
              <Route exact path='/contact' element = {<Contact />}/>
            </Routes>
        </AnimatePresence>
      </div>

    </div>
  );
}

export default App;
