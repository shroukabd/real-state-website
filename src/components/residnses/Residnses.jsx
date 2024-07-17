import React from 'react'
import './residnses.css';
// import 'swiper/css';
import data from '../utils/slider.json'
// import { Swiper, SwiperSlide , useSwiper} from 'swiper/react';
// import { sliderSettings } from '../utils/Comon';
// import Slider from "react-slick";
import img1 from '../../assets/r1.png'
import img2 from '../../assets/r2.png'
import img3 from '../../assets/r3.png'


const Residnses = () => {
  
    // var settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };
 
  return (
          <section className='r-wrapper'>
               <div className="r-head">
              <span className='orangeText'>Best Choises</span><br/>
              <span className='primaryText'>popular residenices</span>
            </div>
          <div className=" r-container">
         
          
             
               {data.map(card =>{
                return(
                    <div className="r-cards flexCenter"  kay={card.id}> 
                         <div className="r-card" >
                          <img src={img1} alt="" />
                     
                    
                      <span className='orangeText'>${card.price}</span>
                      <span className='primaryText'>{card.name}</span>
                      <span className='secondaryText'>{card.detail}</span>
                      
                    </div>
                    </div>
               )
               } ) }
          
       
          
            
              
           
          </div>
     </section>
  )

 
}

export default Residnses
const SliderButtons = ()=>{
  const swiper = useSwiper();
  return(
      <div className="r-button">
              <button>&lt;</button>
              <button>&gt;</button>
      </div>
  )
}