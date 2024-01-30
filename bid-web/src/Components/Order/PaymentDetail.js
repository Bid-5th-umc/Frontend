import React from 'react'
import PayDetailCom from './PaymentDetailCom'

const PaymentDetail = () => {

  const payData = [
    {payDetailTitle: '상품 금액', payDetailText: '250,000 원'},
    {payDetailTitle: '보유 예치금', payDetailText: '300,000 원'}, 
    {payDetailTitle: '결제 후 보유 금액', payDetailText: '42,500 원'}
  ];

  return (
    <div className='paymentDetailTop'>
      <PayDetailCom
       payDetailTitle ={payData[0].payDetailTitle}
       payDetailText={payData[0].payDetailText}
      />
      <div className='paymetDetail-container'>
        <div className='payDetailLeft'>수수료<span style={{color: '#808080'}}> (0.3%)</span></div>
        <div className='payDetailRight'>'+ 7500 원'</div>
      </div>
      <PayDetailCom
       payDetailTitle ={payData[1].payDetailTitle}
       payDetailText={payData[1].payDetailText}
      />
      <PayDetailCom
       payDetailTitle ={payData[2].payDetailTitle}
       payDetailText={payData[2].payDetailText}
      />
    </div>
  )
}

export default PaymentDetail