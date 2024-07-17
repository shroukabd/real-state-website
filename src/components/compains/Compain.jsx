import React from 'react'
import './compain.css'
import img1 from '../../assets/equinix.png'
import img3 from '../../assets/prologis.png'
import img2 from '../../assets/realty.png'
import img4 from '../../assets/tower.png';

const Compain = () => {
  return (
    <section>
        <div className="c-wrwpper">
            <div className="c-container">
                <img src={img1} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
      
    </section>
  )
}

export default Compain
