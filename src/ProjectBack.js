import React from 'react';
import { FaGithubIcon } from './FaIcons';
import './css/project-back.css';

const ProjectBack =({github, frontEnd, backEnd, proID})=>{
    backEnd = backEnd.map(obj=>(
      <li key={`${proID}-${obj}`}>
          {obj}
      </li>
    ));
    frontEnd = frontEnd.map(obj=>(
      <li key={`${proID}-${obj}`}>
          {obj}
      </li>
    ));
    return(
        <div className="p-back">
          <div className="tech-title">FrontEnd</div>
          <ul>
            {frontEnd}
          </ul>
          <hr/>
        <div className="tech-title">BackEnd</div>
        <ul>
          {backEnd}
        </ul>
        
        <div>
        <a href={`${github}`} target="blank">
            <FaGithubIcon/>
        </a>
        </div>
        </div>
    )
}

export default ProjectBack;