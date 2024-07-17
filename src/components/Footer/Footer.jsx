import React from 'react'
import './footer.css'
import logo2 from '../../assets/logo2.png'
const Footer = () => {
  return (
    <section className='f-wrapper'>
        <div className="paddings innerwidth flexCenter f-container">
            <div className="flexColStart f-left">
                         <img src={logo2} alt="" width={120}/>
                         <span className='secondaryText'>
                            Our Vision is to makw all people<br/>
                            the best place to life from them
                         </span>
            </div>
            <div className="flexCollStart f-right">
                <span className='primaryText'>Information</span><br/>
                <span className='secondaryText'>145 New Yourk, Fl 4571, USA</span>
                <div className="flexCenter f-menu">
                       <span>Peoperty</span>
                       <span>Services</span>
                       <span>Products</span>
                       <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
