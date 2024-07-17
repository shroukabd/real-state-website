import React from 'react'
import logo1 from '../../assets/logo1.png';
import './navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
const Navbar = () => {
  return (
    
    <section className='h-wrapper'>
      <div className="h-container">
        <img src={logo1 } alt="logo" width={100} />

        <div className="h-menu">
          <a href=""> Residenced</a>
          <a href="">Our Value</a>
          <a href="">Get Started</a>
          <a href="">Contact Us</a>
          <button className='button'>Contact</button>
        </div>
      </div>

      <div className="menu-icon">
        < BiMenuAltRight size={30}/>
      </div>
      
    </section>
   
  )
}

export default Navbar
