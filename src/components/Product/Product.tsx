import React, { useState } from 'react';
import './style.scss';

const Product = (children) => {
  
  const itemProduct = children.produts;
  return (
    <>
      <div className="product">
        <div className='product-img'>
          <img src={children.children.product.name} alt="" />
        </div>
        <p className="product-name">{children.children.name}</p>
      </div>
    </>
  );
};

export default Product;

