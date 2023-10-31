import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import './style.scss';

const Menu = (menuData) => {
  const dataMenu = menuData.menu;
  const [dataMenus, setDataMenus] = useState(dataMenu);
  return (
    <div>
      <div className='category'>
        <p className='category-name'>{menuData.menu.name}</p>
          <div className='menuList'>
            {
              dataMenus.children.map((items, index)=>(
                <Product children={items} key={index} />
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default Menu;

