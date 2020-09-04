import React from 'react';
import CloseBtn from './CloseBtn';
import {FaHTMLIcon, FaFreeCodeCampIcon} from './FaIcons';
import ImgCarousel from './ImgCarousel'; 
import ReactTooltip from "react-tooltip";       
import './css/roads.css';

const Roads = ()=>{
    return(
        <section className="roads-wrapper" 
                id="roads">
            <div className="roads-wrapper-inner-wrapper">
            <div className="roads-wrapper_inner">
                <h5>Roads I've walked so far</h5>
                <div className="roads-icons">
                <CompWithToolTip
                      data = "HTML5"
                      id = "html5"
                  >
                    <FaHTMLIcon/>
                  </CompWithToolTip>

                  <CompWithToolTip
                      data = "CSS3"
                      id = "css3"
                  >
                    <img alt = "css3 logo" 
                         src="https://img.icons8.com/color/48/000000/css3.png"/>
                  </CompWithToolTip>
                  
                  <CompWithToolTip
                      data = "Bootstrap"
                      id = "bootstrap"
                  >
                   <img  alt = "bootstrap logo"
                        src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
                  </CompWithToolTip>
                  
                  <CompWithToolTip
                      data = "Responsive Design"
                      id = "RD"
                  >
                  <img alt="Responsive Design logo"
                       src="https://img.icons8.com/ultraviolet/40/000000/media-queries.png"/>
                  </CompWithToolTip>

                  <CompWithToolTip
                      data = "JavaScript"
                      id = "js"
                  >
                   <img alt = "javascript logo"
                        src="https://img.icons8.com/color/48/000000/javascript.png"/>
                  </CompWithToolTip>

                  <CompWithToolTip
                      data = "React"
                      id = "react"
                  >
                      <img alt = "react logo"
                          src="https://img.icons8.com/plasticine/50/000000/react.png"/>
                  </CompWithToolTip>

                  <CompWithToolTip
                      data = "Redux"
                      id = "redux"
                  >
                      <img alt="redux logo"
                          src="https://img.icons8.com/color/48/000000/redux.png"/>
                  </CompWithToolTip>
                  
                  <CompWithToolTip
                      data = "Git"
                      id = "git"
                  >
                  <img alt = "git logo"
                      src="https://img.icons8.com/color/48/000000/git.png"/>
                  </CompWithToolTip>

                  <CompWithToolTip
                      data = "Python"
                      id = "python"
                  >
                     <img alt = "python logo"
                        src="https://img.icons8.com/color/48/000000/python.png"/>
                  </CompWithToolTip>

                  <img alt = "django logo"
                       src="https://img.icons8.com/color/48/000000/django.png"/>

                  <img alt="Express logo"
                       style={{transform: "scale(0.7)"}}
                       src = "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
                  /> 
                  <CompWithToolTip
                      data="MongoDB/mongoose"
                      id ="mongoDB"
                  >
                  <img alt="mongoDB icon"
                      src="https://img.icons8.com/color/48/000000/mongodb.png"/>
                  </CompWithToolTip>    
                </div>
                
                </div> 
                
            <div className="cerificates">
                    <h5>FreeCodeCamp Cerificates <FaFreeCodeCampIcon/></h5>
                    <div className="caro-wrapper">
                      <ImgCarousel/>
                    </div>
                </div>
           
           <CloseBtn
                  className = "close-btn"
                  section = "roads"
                />
            </div> 
       </section>
    );
}

const CompWithToolTip = ({id, data, children})=>(
    <div>
        <div data-tip={data} data-for={id} data-place='top'>{children}</div>
        <ReactTooltip id={id}/>
    </div>
)
export default Roads;