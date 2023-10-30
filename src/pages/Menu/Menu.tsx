import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import './style.scss';

const Menu = (menuData) => {
  
  console.log(menuData);
  const childrens = menuData.menu.children;
  const [children, setChildren] = useState(childrens);

  return (
    <div>
      <div className='category'>
        <p className='category-name'>{menuData.menu.name}</p>
          <div className='menuList'>
            {
              children.map((children, index)=>(
                <Product children={children} key={index} />
              ))
            }
          </div>
      </div>
    </div>
  );
};

export default Menu;

