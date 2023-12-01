import React, { useState } from 'react';
import './style.scss';

const Product = (data:String) => {
  console.log()
  return (
    <>
      <div className="product">
        <div className='product-img'>
          <img src={data.item.products[0]?.assets.masterImage.uri ?? ""} alt="" />
        </div>
        <p className="product-name">{data.item.name}</p>
      </div>
    </>
  );
};

export default Product;

