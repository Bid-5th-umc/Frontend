import React from 'react'

const CategoryCom = ({ PageUrl, CategoryName }) => {
  return (
    <div
      to={PageUrl}
      className='category'     
    >
      <span>
        {CategoryName}
      </span>
      <img src='/image/MoreIcon.png' alt='more' className='categoryImg'></img>
    </div>
  )
}

export default CategoryCom