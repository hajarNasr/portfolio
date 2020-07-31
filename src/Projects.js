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
        </div>
    )
}

export default Projects;