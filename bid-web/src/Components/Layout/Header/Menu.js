import React from 'react'
// import { Link } from 'react-router-dom'

const Menu = ({ PageUrl, MenuName, className }) => {
  return (
    <div
      to={PageUrl}
      className={className}      
    >
      <span>
        {MenuName}
      </span>
    </div>
  )
}

export default Menu