import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ShopMainPage from './Pages/ShopMainPage';
import BidPage from './Pages/BidPage'
import JoinPage from './Pages/JoinPage';
import OrderPage from './Pages/OrderPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shop" element={<ShopMainPage />} />
      <Route path="/bid" element={<BidPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}

export default App;