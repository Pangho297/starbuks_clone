import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import './style.scss';

const Menu = (data:String) => {
  return (
    <div>
      <div className='category'>
        <p className='category-name'>{data.menu.name}</p>
          <div className='menuList'>
            {
              data.menu.children.map((items, index)=>(
                <Product item={items} key={index} />
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default Menu;

