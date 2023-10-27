import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import './style.scss';

const Menu = (menuData) => {
  console.log(menuData);
  return (
    // {menus.map((menus, index) => (
    //   <div className="" key={index}>
    //     <p>{menus.name}</p>
    //     <Menu />
    //   </div>
    // ))}
    <div>
      {menuData.map((menuData, index) => (
        <div className='category' key={index}>
          <p className='category-name'>{menuData.name}</p>
           <div className='menuList'>
           {Array.from({ length: 7 }).map((_, index) => (
             <Product key={index} />
           ))}
           </div>
        </div>
      ))}
     
      
    </div>
  );
};

export default Menu;

