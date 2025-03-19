import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Skills from './Components/Skills'
import Proj from './Components/Proj'
import About from './Components/About'
import Contact from './Components/Contact'
import 'font-awesome/css/font-awesome.min.css';


function App() {

  return (
    
    <div>

    <Navbar/>
    
      <Routes>
        
        <Route path="/" element={<Home/>} />

        <Route path="Skills" element={<Skills/>} />

        <Route path="Proj" element={<Proj/>} />

        <Route path="About" element={<About/>} />

        <Route path="Contact" element={<Contact/>} />

        </Routes>

    </div>
  )
}

export default App