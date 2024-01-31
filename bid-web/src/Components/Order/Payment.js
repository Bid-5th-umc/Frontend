import React from 'react'
import PaymentDetail from './PaymentDetail'

const Payment = () => {
  return (
    <div className='paymentInfoTop'>
      <div className='paymentInfotTop-Title'>
        최종 결제 정보
      </div>
      <div className='paymentTop'>
        <div className='payment-container'>
          <div className='paymentTitle-container'>
            <div className='finalPayTitle'>최종 결제 금액</div><div className='finalPay'>257,500 원</div>
          </div>
          <PaymentDetail />
          <div className='payBtn-container'>
            <button type='button' className='payBtn'>결제하기</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment