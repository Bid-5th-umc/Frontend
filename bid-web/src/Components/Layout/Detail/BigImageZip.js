import React from 'react'
import BigImage from './BigImage'

const BigImageZip = () => {
    /*db 연결 후 수정*/ 
    const bigImageData = [
        {image: 'image/like.png', name: "img1"}
    ];

  return (
    <div className='imgEx'>   
        <div className='imgTile'>Bigimage</div>
        <BigImage 
                BigImageUrl={bigImageData[0].image}
                BigimageName={bigImageData[0].name}
        />
    </div>
  )
}

export default BigImageZip