import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ShopMainPage from './Pages/ShopMainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sell" element={<ShopMainPage />} />
    </Routes>
  );
}

export default App;