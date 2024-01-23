import React from 'react';
import './MainPage.css';
import Product from './Product';
import BlackText from './BlackText';
import GrayText from './GrayText';
import { ArrowButton } from './ArrowButton';
import BrandButton from './BrandButton';


const MainPages = () => {
  const handleButtonClick = (direction) => {

    console.log(`${direction} button clicked`);
  };

  return (
    <div>
      <div className="first-box">
        <div className="first-box-message">
          <span className="trendy-text">트렌디한 패션 거래, </span>
          <span className="bid">bid</span>
          <br />
          당신의 추억을 더 가치있게 판매하세요.
        </div>
        <br /><br />
        <button
          id="sell-button"
          type="button"
          className="sell-button"
        >
          SELL
        </button>
      </div>


      <BlackText text="Today’s bid" />
      <GrayText text="오늘의 비드" />


      <div className="Product-container">
        <ArrowButton direction="left" onClick={() => handleButtonClick('left')} />
        <Product />
        <Product />
        <Product />
        <Product />
        <ArrowButton direction="right" onClick={() => handleButtonClick('right')} />
      </div>



      <BlackText text="Deadline Item" />
      <GrayText text="마감 임박 상품" />



      <div className="Product-container">
        <ArrowButton direction="left" onClick={() => handleButtonClick('left')} />
        <Product />
        <Product />
        <Product />
        <Product />
        <ArrowButton direction="right" onClick={() => handleButtonClick('right')} />
      </div>



      <div className="second-box">
        <div className="second-box-contents">
          <div className="BrandItem">Brand Item</div>
          <img src="image/simple-line.png" className="simple-line" alt="line"></img>
          <div className="BrandButtonContainer">

            <BrandButton text="AdIdas" />
            <BrandButton text="Balenciaga" />
            <BrandButton text="Kapital" />
            <BrandButton text="Nike" />
            <BrandButton text="Stussy" />
            <BrandButton text="Supreme" />
            
          </div>
        </div>
      </div>



      <BlackText text="Best Item" />
      <GrayText text="많은 관심을 받은 상품" />



      <div className="Product-container">
        <ArrowButton direction="left" onClick={() => handleButtonClick('left')} />
        <Product />
        <Product />
        <Product />
        <Product />
        <ArrowButton direction="right" onClick={() => handleButtonClick('right')} />
      </div>



    </div>
  );
};

export default MainPages;
