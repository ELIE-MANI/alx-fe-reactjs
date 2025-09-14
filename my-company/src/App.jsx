import React from 'react'
import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import Home from './components/Home.jsx' 
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services.jsx'
import NavBar from './components/Navbar.jsx'


function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      </BrowserRouter>



    </>
  )
}

export default App
