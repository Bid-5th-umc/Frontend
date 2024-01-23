import React from 'react'
import Buy from './Buy';

const BuyBar = () => {
  const buydata = [
    { text: "입찰하기", className: "bidding" },
    { text: "즉시 구매", className: "buyNow" }
  ];

  return (
    <div className='buyBar'>
      <Buy
        btnName={buydata[0].text}
        className={buydata[0].className}
      />
      <Buy
        btnName={buydata[1].text}
        className={buydata[1].className}
      />
    </div>
  )
}

export default BuyBar