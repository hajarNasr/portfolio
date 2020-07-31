import React from 'react';
import { closeSection } from './helpers';
import { FaCloseIcon } from './FaIcons';

const CloseBtn = ({className, section})=>(
    <button 
       className = {className}
       onClick={()=>{closeSection(section)}}
    >
      <FaCloseIcon/>
   </button>
);

export default CloseBtn;