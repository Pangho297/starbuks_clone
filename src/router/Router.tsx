
import React from 'react';
import { Routes, Route } from 'react-router-dom'


// 페이지
import Detail from '../pages/menu/Detail';
import Main from '../pages/main/Main';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;