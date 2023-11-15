
import React from 'react';
import { Routes, Route } from 'react-router-dom'

// 레이아웃
import App from '../App'; 

// 페이지
import Detail from '../pages/menu/Detail';

function Router() {
  console.log('dlwogns')
  return (
    <Routes>
      <Route path="/" element={<Detail />}>
        <Route path="/detail" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;