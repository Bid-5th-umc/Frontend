import React, { useState } from 'react'
import DetailInput from './DetailInput'

import '../Sell/Sell.css'
import DropDownStat from './DropDownStat';

const DetailGrid = () => {

  const [ view, setView ] = useState(false);

  return (
    <div className='detailGrid-container'> {/* flex-wrap 또는 grid */}
      <div className='detail-container'>
        <div className='detail-text'>경매기간</div>
        <DetailInput>
          <span className='detail-period'>일 (최대 7일)</span>
        </DetailInput>
      </div>
      <div className='detail-container'>
        <div className='detail-text'>시작금액</div>
        <DetailInput>
          <span className='detail-price'>₩</span>
        </DetailInput>
      </div>
      <div className='detail-container'>
        <div className='detail-text'>즉시 결제</div>
        <DetailInput>
          <span className='detail-price'>₩</span>
        </DetailInput>
      </div>
      <div className='detail-container'>
        <div className='detail-text'>상품 상태</div>
        <ul className={`stat-dropdown ${view ? 'active' : ''}`} onClick={() => {setView(!view)}}>
          <div>{""}</div>
          <img src='/image/MoreIcon.png' alt='dropdown' className='stat-dropdown-img'></img>
	          {view && <DropDownStat />} 
        </ul>
      </div>
    </div>
  )
}

export default DetailGrid