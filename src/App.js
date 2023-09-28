import React from 'react'
import Navbar from './component/Navbar'
import Login3 from './pages/Login'
import Signup from './pages/Signup'
import Contact from './component/contact'
import About from './pages/About'
import LandingPage from './pages/landingPage'
import { BrowserRouter, Route,Routes } from 'react-router-dom';

const App = () => {
  return (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Login" element={<Login3/>} />
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
  </div>
  )
}

export default App