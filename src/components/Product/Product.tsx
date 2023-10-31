import React, { useState } from 'react';
import './style.scss';

const Product = (items) => {
  const detail = items.children.products;
  const [details, setDtails] = useState(detail);
  console.log(detail);
  return (
    <>
      <div className="product">
        <div className='product-img'>
          <img src="" alt="" />
        </div>
        <p className="product-name">{items.children.name}</p>
      </div>
    </>
  );
};

export default Product;

