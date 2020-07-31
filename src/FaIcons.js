import React from 'react';
import * as fa from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fab from "@fortawesome/free-brands-svg-icons";
import './css/fa-icons.css';
//import {  faBootstrap, faFreeCodeCamp, faGit } from "@fortawesome/free-brands-svg-icons";

export const FaCloseIcon = () =>(
    getFontAwesomeIcon(fa.faTimes)
);

export const FaTwitterIcon = ()=>(
    getFontAwesomeIcon(fab.faTwitter, "fa-twitter-icon")
)

export const FaGithubIcon = ()=>(
    getFontAwesomeIcon(fab.faGithub, "fa-github-icon")
)


export const FaHTMLIcon = ()=>(
    getFontAwesomeIcon(fab.faHtml5, "fa-html ico")
)


export const FaFreeCodeCampIcon = ()=>(
    getFontAwesomeIcon(fab.faFreeCodeCamp, "fa-fcc ico")
)
const getFontAwesomeIcon = (faIcon, className)=>(
    <FontAwesomeIcon icon = {faIcon}
                     className= {className}
    />
);