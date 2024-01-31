import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ShopMainPage from './Pages/ShopMainPage';
import SellPage from './Pages/SellPage';
import BidPage from './Pages/BidPage'
import JoinPage from './Pages/JoinPage';
import OrderPage from './Pages/OrderPage';
import Mypage from './Pages/MyPage';
import Productmanager from './Pages/ProductManager';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<ShopMainPage />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/bid" element={<BidPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/product-manage" element={<Productmanager />} />
      
    </Routes>
  );
}

export default App;