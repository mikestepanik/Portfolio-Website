import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NeonCursor from './components/NeonCursor';
// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
// import { useEffect, useState } from 'react';


function App() {

  return (
   <>
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> 
        <Route path= "about" element={<About />} /> 
        <Route path= "contact" element={<Contact />} />    
      </Route> 
    </Routes>
   </>
  );
}

export default App;
