import React from 'react';
import './aside.scss'

const Aside = () => {
  return (
    <div className='aside'>
      <div className="menu">
        <p className="menu-title">Drinks</p>
        <ul>
          <li>Oleato</li>
          <li>Hot Coffees</li>
          <li>Hot Teas</li>
          <li>Hot Drinks</li>
          <li>Frappuccino® Blended Beverages</li>
          <li>Cold Coffees</li>
          <li>Iced Teas</li>
          <li>Cold Drinks</li>
        </ul>
      </div>
      <div className="menu">
        <p className="menu-title">Food</p>
        <ul>
          <li>Hot Breakfast</li>
          <li>Oatmeal & Yogurt</li>
          <li>Bakery</li>
          <li>Lunch</li>
          <li>Snacks & Sweets</li>
        </ul>
      </div>
      <div className="menu">
        <p className="menu-title">At Home Coffee</p>
        <ul>
          <li>Whole Bean</li>
          <li>VIA® Instant</li>
        </ul>
      </div>
      <div className="menu">
        <p className="menu-title">Merchandise</p>
        <ul>
          <li>Cold Cups</li>
          <li>Tumblers</li>
          <li>Mugs</li>
          <li>Other</li>
        </ul>
      </div>
    </div>
  );
};

export default Aside;