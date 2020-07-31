import React from 'react';
import Projects from './Projects';
import { Link, animateScroll as scroll } from "react-scroll";
import { openSection } from './helpers';
import About from './About';
import Roads from './Roads';
import './css/index.css';

const App = ()=>{
  return(
    <main className="main">
      <About/> 
      <Roads/>  
      <div>
      <header>
            <p className="brand"
              onClick={()=>{scroll.scrollToTop()}}
            >
              One Mile
            </p>
            <Div outterDiv="Roads"
                  arrowClass="arrow-left"
                  arrow1 = "arrow-l-1"
                  arrow2 = "arrow-l-2"
                  arrow3 = "arrow-l-3"
                  onClick={()=> {openSection('roads')}}
                
            />
            <Div outterDiv="About"
                  arrowClass="arrow-right"
                  arrow1 = "arrow-r-1"
                  arrow2 = "arrow-r-2"
                  arrow3 = "arrow-r-3"
                  onClick={()=> {openSection('about')}}
            />
        </header>
          <div className="center-div">
            <h2 className="glow">
              Walked a mile. Only 999 miles more to go.
            </h2>
            <span>
                Hajar Nasr, <span>aspiring web developer.</span>
            </span>
            <Link to="projects" smooth={true} offset={-60}>
              <Div outterDiv="Projects" 
                  arrowClass="arrow-down"
                  arrow1 = "arrow1"
                  arrow2 = "arrow2"
                  arrow3 = "arrow3"
                 
                  />
            </Link>    
          </div>
        </div>
      <Projects/>
    </main>
  )
}

const Div = ({outterDiv, arrowClass, arrow1, arrow2, arrow3, onClick})=>(
  <div className={`${outterDiv}`} onClick={onClick}>
       <div>{outterDiv}</div>
       <div className={`arrow ${arrowClass} ${arrow1}`}></div>
       <div className={`arrow ${arrowClass} ${arrow2}`}></div>
       <div className={`arrow ${arrowClass} ${arrow3}`}></div>
  </div>
)
export default App;