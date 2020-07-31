import React, {useState} from 'react';
import ProjectFront from './ProjectFront';
import ProjectBack from './ProjectBack';
import "./css/project.css";

const Project = (props)=>{
    const flipCard = ()=>{
        document.getElementById(props.proID).classList.toggle("flip");
        setDirec(direc ==="left"?"right":"left");
    }
    const [direc, setDirec] = useState("right");
    return(
        <div className="project-wrapper" id={props.proID}>
            <div className="flip-card">
                <ProjectFront {...props}/>
                <ProjectBack {...props}/> 
            </div>
            <Arrows
                onClick = {flipCard}
                direc = {direc}
            />
        </div>
    );
}

const Arrows = ({onClick, direc})=>(
    <button
        onClick={onClick}>
        {direc==="right" && <span className="more">Used tech</span>} 
        <div className={`arrow-${direc} pro-arrow`}></div>
        <div className={`arrow-${direc} pro-arrow`}></div>
        <div className={`arrow-${direc} pro-arrow`}></div>
    
    </button>
);
export default Project;