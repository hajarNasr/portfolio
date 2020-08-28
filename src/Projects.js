import React from 'react';
import Project from './Project';
import './css/projects.css';

const Projects =()=>{
    return(
        <div className="projects-wrapper" id="projects">
           <Project
               title = "iRecommend-App"
               demoLink="https://irecommend-app.herokuapp.com/"
               desc = "A web application where users can recommend anything they like to other people."
               proID = "1"
               bulitWith=""
               image = "irecommend.JPG"
               github = "https://github.com/hajarNasr/irecommend-app"
               frontEnd = {["HTML5 & CSS3","MDL", "JavaScript", "React & Redux"]}  
               backEnd = {["Pyhton","Django Rest Farmework", "Dajngo Rest Auth"]}         
           />
           <Project
               title = "Voila"
               demoLink="https://voilaa.herokuapp.com/"
               desc = "A simple blog project where I can write posts and allow people comment on them."
               proID = "2"
               image = "voila.JPG"
               github = "https://github.com/hajarNasr/Voila"
               frontEnd = {["HTML5 & CSS3","MDL", "Bootstrap"]}  
               backEnd = {["Pyhton","Django Farmework"]}          
           />
             <Project
               title = "Sunlit"
               demoLink="https://sunlit.netlify.app/"
               desc = "A simple  project I'd built to practice manipulating the DOM using JavaScript."
               proID = "4"
               image = "sunlit.png"
               github = "https://github.com/hajarNasr/Sunlit"
               frontEnd = {["HTML5", "CSS3","JavaScript"]}  
               backEnd = {["It has no backend"]}          
           />
            <Project
               title = "theMagazine"
               demoLink="https://themagazine.netlify.app/"
               desc = "A simple magazine project I'd built just to practice the CSS grid."
               proID = "3"
               image = "theMagazine.JPG"
               github = "https://github.com/hajarNasr/themagazine"
               frontEnd = {["HTML5", "CSS3","A little of JavaScript"]}  
               backEnd = {["It has no backend"]}          
           />
        </div>
    )
}

export default Projects;