import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Members from './Pages/Members';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <div className='pages'>
      <Routes>
          <Route exact path='/' element = {<Home />}/>
          <Route exact path='/about' element = {<About />}/>
          <Route exact path='/members' element = {<Members />}/>
          <Route exact path='/shop' element = {<Shop />}/>
          <Route exact path='/contact' element = {<Contact />}/>
        </Routes>
      </div>
      </Router>

    </div>
  );
}

export default App;
