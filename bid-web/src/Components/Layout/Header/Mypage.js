import React from 'react'

const Mypage = ({ PageUrl, MypageImage, MypageName }) => {
  
  return (
    <div
      to={PageUrl}
      className='mypage'      
    >
      <img src={MypageImage} alt={MypageName}></img>
    </div>
  )
}

export default Mypage