import React from 'react'
import './BidPrice.css'
import Price from './Price'
import { useState, useEffect } from 'react'
import Toast from "./Toast";

const PriceContainer = () => {

  const [bidPrice, setBidPrice] = useState('');
  const [ToastStatus, setToastStatus] = useState(false);
  const [ToastMsg, setToastMsg] = useState("");

  const handleInputBidPrice = e => {
    setBidPrice(e.target.value);
  }


  const bidCheck = () => {
    if (bidPrice > 0) {
      setToastStatus(true);
      setToastMsg("입찰성공! 최고 금액 입찰자입니다.");
    } else {
      setToastStatus(true);
      setToastMsg("더 높은 금액으로 재입찰하세요");
    }

  };

  useEffect(() => {
    if (ToastStatus) {
      setTimeout(() => setToastStatus(false), 2000);
    }
  }, [ToastStatus]);

  return (
    <div>
      <div className='price-container'>
        <Price />
        <div className='endTime'>
            <span>마감날짜</span>
        </div>
        <div className='bidPrice-container' style={{position: 'relative'}}>
            <form id='priceForm'>
                <label>입찰금액<input type="text" className="inputBid" value={bidPrice} onChange={handleInputBidPrice} style={{position: 'absolute', right: '0'}}/></label>
                <p className='bidHigh'>다음 입찰 금액은  입니다.</p>
                {ToastStatus && (
                  <>
                    <Toast msg={ToastMsg} />
                  </>
              )}
            </form>
        </div>
      </div>
      <div className='bidBtn'>
        <div className='buyBar'>
          <button type='submit' className='bidding' onClick={bidCheck}>
            입찰하기
          </button>
          <button type='submit' className='buyNow'>
            즉시 구매
          </button>
          <button className='favorite'>
            관심 상품
          </button>
          <button className='linkCopy'>
            링크 복사
          </button>
        </div>
      </div>
    </div>
  )
}

export default PriceContainer