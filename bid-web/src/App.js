import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ShopMainPage from './Pages/ShopMainPage';
import BidPage from './Pages/BidPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sell" element={<ShopMainPage />} />
      <Route path="/bid" element={<BidPage />} />
    </Routes>
  );
}

export default App;