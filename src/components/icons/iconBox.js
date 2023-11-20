import React from 'react';
import './icons.css';


export default function IconBox({ icon, number, iconColor }) {
  const IconComponent = icon; 

  return (
    <div className='icon-container'>
      <span>
        <IconComponent color={iconColor} />
        {number}
      </span>
    </div>
  );
}
