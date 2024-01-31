import React from 'react'

const FinishDetailCom = ({finishDetailTitle, finishDetailText}) => {
  return (
    <div className='finishOrderInfo-container'>
      <div className='finishOrderLeft'>{finishDetailTitle}</div>
      <div className='finishOrderRight'>{finishDetailText}</div>
    </div>
  )
}

export default FinishDetailCom