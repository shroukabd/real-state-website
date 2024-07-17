import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Residnses from './components/residnses/Residnses'
import Value from './components/value/Value'
import Contact from './components/Contact/Contact'
import GetStarted from './components/Getstarted/GetStarted'
import Footer from './components/Footer/Footer'
import Compain from './components/compains/Compain'


const App = () => {
  return (
    <div className='App'>
     <Navbar/>
      <Hero/>
      <Compain/>
      <Residnses/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
      </div>
   
  )
}

export default App
