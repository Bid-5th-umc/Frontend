import React from 'react'
import PriceCom from './PriceCom';

const Price = () => {

  const price = [
    {topClassname: 'nowPrice', labelClass: 'nowLabel', priceClass: 'price1', priceLabel: '현재 가격', price: '₩100,000'},
    {topClassname: 'immediatePrice', labelClass: 'immediatePriceLabel', priceClass: 'price2', priceLabel: '즉시 결제 가격', price: '₩100,000'}
  ];


  return (
    <div className='priceTop'>
      <PriceCom 
          topClassName={price[0].topClassname}
          labelClass={price[0].labelClass}
          priceClass={price[0].priceClass}
          priceLabel={price[0].priceLabel}
          price={price[0].price} 
      />
      <PriceCom 
        topClassName={price[1].topClassname}
        labelClass={price[1].labelClass}
        priceClass={price[1].priceClass}
        priceLabel={price[1].priceLabel}
        price={price[1].price} 
      />
    </div>
  )
}

export default Price