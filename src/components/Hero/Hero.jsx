
import './hero.css';
import heroimg from '../../assets/hero-image.png';
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
    
       <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
              <div className="hero-tittle">
                <div className='orange-circle'/>
                <h1>Discover<br/> Most Sutable<br/> Property</h1>
                <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non quam nostrum</p>
              </div>
              <div className="search-bar">
                  <FaLocationDot className='search-icon'/>
                  <input type="text" />
                  <button className='button'>Search</button>
              </div>

          
               </div>
          <div className="hero right">
           <div className="img-container">
              <img src={heroimg} alt="" />
           </div>
         </div>
        </div>
      </div>
   </div>
    
  )
}

export default Hero
