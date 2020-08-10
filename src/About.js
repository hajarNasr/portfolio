import React from 'react';
import CloseBtn from './CloseBtn';
import { FaEnvelopeIcon } from './FaIcons';
import './css/about.css';

const About = ()=>{
    const photo = require('./images/myface.jpg');
    return(
       <section className="about-wrapper" 
                id="about">
            <div className="about-wrapper-inner-wrapper">   
            <div className="about-wrapper_inner">
                <div className="img-sec"> 
                     <img src={photo} alt="my face"/> 
                </div>
                <div className="bio">
                    <div>Hajar Nasr</div>
                    <p> Hello! I am Hajar from Egypt and 
                        unlike many people, I like routine. 
                        It keeps me sane. 
                        And learning to code for me is the kind of routine that never gets dull or makes me bored. 
                        Thank you for being here.</p>
                </div>
                <div className="email"><FaEnvelopeIcon/> hajar-nasr@hotmail.com</div>
                
                <CloseBtn
               className = "close-btn about-close-btn"
               section = "about"
           />
           </div>
           </div> 
          
       </section>
    );
}

export default About;