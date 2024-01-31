import React from 'react'
import FinishDetailCom from './FinishDetailCom';

const FinishDetail = () => {

  const finshData = [
    {finishDetailTitle: '주문번호', finishDetailText: '20240125155'}, 
    {finishDetailTitle: '배송메세지', finishDetailText: '경비실에 맡겨주세요'}
  ];

  return (
    <div className='finishOrderInfo'>
      <FinishDetailCom
       finishDetailTitle ={finshData[0].finishDetailTitle}
       finishDetailText={finshData[0].finishDetailText}
      />
      <div className='finishAddDetail-container'>
        <div className='finishAdd-container'>
          <div className='finishOrderLeft'>배송지</div> <div className='finishOrderRight'>김연재</div>
        </div>
        <div className='finishAddPlus-container'>
            <div className='addplus'>010-0000-0000</div>
            <div className='addplus' style={{color: 'CCCCCC'}}>도로명주소</div>
            <div className='addplus'>상세주소</div>
            <div className='addplus' style={{color: 'CCCCCC'}}>우편번호</div>
        </div>
      </div>
      <FinishDetailCom
       finishDetailTitle ={finshData[1].finishDetailTitle}
       finishDetailText={finshData[1].finishDetailText}
      />
    </div>
  )
}

export default FinishDetail