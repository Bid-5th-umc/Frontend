import React from 'react'
import { useState } from 'react';
import HoverCard from './HoverCard';

const CategoryCom = ({ CategoryName }) => {

  const [isHovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`category ${isHovered ? 'hovered' : ''}`}
    >
      <span>
        {CategoryName}
      </span>
      <img src='/image/MoreIcon.png' alt='more' className='categoryImg'></img>
      {isHovered && <HoverCard/>}
    </div>
  )
}

export default CategoryCom