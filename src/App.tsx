import { useState } from 'react';
import Menu from './pages/menu/Menu'
import dataMenu from '/data.json'
import Aside from './pages/common/Aside';
import "./assets/styles/index.scss"
import { Navigate } from 'react-router-dom';
import Router from './router/Router'

function App() {
  const menuArr = dataMenu.menus;
  return (
    <>
    <div className="container">
      <Aside />
      <div className="content">
        <p className='content-title'>Menu</p>
        {menuArr.map(( menuArr, index )=>(
          <Menu menu={menuArr} key={index} />
        ))}
      </div>
    </div>
    <Router />
    </>
  );
}

export default App;
