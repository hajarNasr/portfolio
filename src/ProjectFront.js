import React from 'react';
import './css/project-front.css';

const ProjectFront =({title, demoLink, desc, image})=>{
    const background = require(`./images/${image}`);
    return(
        <div className="p-front">
           <div style={{backgroundImage:`url(${background})`}}/>
            <div className="title">
                {title}
            </div>
            <div className="desc">
                {desc}
            </div>
            <div className="demo">
                <a href={demoLink} target="blank">Demo</a>
            </div>
        </div>
    )
}

export default ProjectFront;