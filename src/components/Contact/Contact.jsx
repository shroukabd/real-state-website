import React from 'react'
import './contact.css'
import contactimg from '../../assets/contact.jpg'
import {MdCall} from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
const Contact = () => {
  return (
    <section className='c-wrapper'>
         <div className="paddings innerWidth flexCenter c-container">
                  <div className="flexColStart  c-left">
                   <span className='orangeText'>Our Contacts</span><br/>
                   <span className='primaryText'>Esay To Contact Us</span><br/>
                   <span className='secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </span><br/>
                    <span className='secondaryText'>Illo quaerat ipsam explicabo a laudantium, accusamus amet harum</span>
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                     <div className="flexStart">
                                        <div className="flexCollStart icon">
                                            <MdCall size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span className='primaryText'>call</span>
                                          <span className='secondaryText'>021 123 145 </span>
                                        </div>
                                     </div>
                                     <div className="flexCenter button">
                                      Call Our Now
                                     </div>
                            </div>

                            <div className="flexColCenter mode">
                                     <div className="flexStart">
                                        <div className="flexCollStart icon">
                                            <BsFillChatDotsFill size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span className='primaryText'>Chat</span>
                                          <span className='secondaryText'>021 123 145 </span>
                                        </div>
                                     </div>
                                     <div className="flexCenter button">
                                      Chat Our Now
                                     </div>
                            </div>
                            </div>

                            <div className="flexStart row">
                            <div className="flexColCenter mode">
                                     <div className="flexStart">
                                        <div className="flexCollStart icon">
                                            <BsFillChatDotsFill size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span className='primaryText'>Vedio Call</span>
                                          <span className='secondaryText'> </span>
                                        </div>
                                     </div>
                                     <div className="flexCenter button">
                                     Vedio Call
                                     </div>
                            </div>

                            <div className="flexColCenter mode">
                                     <div className="flexStart">
                                        <div className="flexCollStart icon">
                                            <HiChatBubbleBottomCenter size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                          <span className='primaryText'>Message</span>
                                          <span className='secondaryText'>021 123 </span>
                                        </div>
                                     </div>
                                     <div className="flexCenter button">
                                      Message Now
                                     </div>
                            </div>
                          
                        </div>
                    </div>
                  </div>
                  <div className="c-right">
                    <div className="img-container">
                        <img src={contactimg} alt="" />
                    </div>
                  </div>
         </div>
    </section>
  )
}

export default Contact
