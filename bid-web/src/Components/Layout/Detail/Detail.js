import React from 'react'
import './Detail.css'
import BuyBar from './BuyBar'
import BigImage from './BigImageZip';

const Detail = ({ children }) => {
  return (
    <div className='detail'>
      <div className='detailPage-containerTop'>
        <div className='detailPage-container'>
          <div className='item-container'>
            <div className='itmeImg-container'>
              <div className='itemImg'>

              </div>
            </div>
            <div className='itemInfo-container'>
              <div className='itemInfo'>
                <div className='title'>untitle</div>
                <div className='price-container' style={{height: '40.688rem'}}>
                  <div className='nowPrice' style={{height: '4.375rem', position: 'relative'}}>
                    <span style={{position: 'absolute', bottom: '0.5rem'}}>현재 가격</span>
                    <span className='price1' style={{position: 'absolute', bottom: '0.5rem', right: '0'}}>₩100,000</span>            
                  </div>
                  <div className='immediatePrice' style={{height: '4.375rem'}}>
                    <span>즉시 결제 가격</span>
                    <span className='price2' style={{float: 'right'}}>₩100,000</span>
                  </div>
                  <div className='endTime'>
                    <span>마감날짜</span>
                  </div>
                  <div className='bidPrice-container' style={{position: 'relative'}}>
                    <form id='priceForm'>
                      <label>입찰금액<input type="text" className="inputBid" style={{position: 'absolute', right: '0'}}/></label>
                      <p className='bidHigh'>다음 입찰 금액은  입니다.</p>
                    </form>
                  </div>
                  <div className='bidBtn'>
                    <BuyBar/>
                    <button className='favorite'>
                      관심 상품
                    </button>
                    <button className='linkCopy'>
                      링크 복사
                    </button>
                  </div>
                  <div className='detail-container'>
                    <div className='title'>Detail</div>
                    <div className='detailBox'>
                      <div className='detailBox1'>
                        <div>시작 가격</div><span>2</span><div>종료 일시</div><span>4</span>
                      </div>
                      <div className='detailBox2'>
                        2
                      </div>
                      <div className='detailBox3'>
                        3
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='detailEx'>
            <div className='txtEx-containerTop'>
              <div className='txtEx'>
                <div className='txtTitle'>
                  untitle
                </div>
                <div className='txtContent'>
                  내용
                </div>
              </div>
            </div>
            <div className='imgEx-containerTop'>
              <BigImage/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Detail