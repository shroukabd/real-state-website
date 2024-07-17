import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import './value.css';
import valueimg from '../../assets/value.png'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import data from '../utils/Accordion'
const Value = () => {
  return (
    <section className='v-wrapper'>
           <div className="paddings innerWidth flexCenter v-container">
                    <div className="v-left">
                      <div className="img-container">
                        <img src={valueimg} alt="" />
                      </div>
                    </div>
                    <div className="flexColStart v-right">
                      <span className='orangeText'>Our Value</span>
                      <span className='primaryText'>Value We Give To You</span>
                      <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                        <span className='secondaryText'> Itaque placeat perspiciatis eius architecto illu</span>


                        <Accordion className='accordion'>
                          {/* allowMultipleExpanded={false}
                          preExpanded={[0]} */}
                          
                          {
                           data.map((item, i)=> {
                            const [className , setClassName] =useState (null)
                            return(
                              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                     <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter AccordionItemButton'>
                        <div className="flexCenter icon">{item.icon} </div>
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowForwardIos size={20}/>
                        </div>
                      </AccordionItemButton>
                      <AccordionItemState>
                        {({expanded})=> expanded ? setClassName("expanded") : setClassName("collapsed")}
                      </AccordionItemState>
                     </AccordionItemHeading>
                     <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                     </AccordionItemPanel>
                              </AccordionItem>
                            )
                           })
                          }
                        </Accordion>
                    </div>
           </div>
    </section>
  )
}

export default Value
