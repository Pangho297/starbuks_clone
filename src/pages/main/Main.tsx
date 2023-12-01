import React from 'react';
import Aside from '../common/Aside';
import Menu from '../menu/Menu'
import dataMenu from '../../../data.json'
import "../../assets/styles/index.scss"
import { Navigate } from 'react-router-dom';

const Main = () => {
  const data = dataMenu.menus;
  return (
    <div>
      <div className="container">
        <Aside />
        <div className="content">
          <p className='content-title'>Menu</p>
          {data.map(( data, index )=>(
            <Menu menu={data} key={index} />
          ))}
        </div>
      </div>  
    </div>
  );
};

export default Main;