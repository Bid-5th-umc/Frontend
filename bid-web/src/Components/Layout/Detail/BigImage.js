import React from 'react'

const BigImage = ({BigImageUrl, BigimageName}) => {
  return (
    <div className='bigImages'>   
        <img className='bigimage' src={BigImageUrl} alt={BigimageName}></img>
    </div>
  )
}

export default BigImage
