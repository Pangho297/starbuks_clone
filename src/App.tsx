import { useState } from 'react';
import Menu from './pages/Menu/Menu'
import dataMenu from '/menu.json'
import Aside from './pages/common/Aside';
import "./assets/styles/index.scss"


function App() {
  const menuArr = dataMenu.menus;
  const [menuData, setMenuData] = useState(menuArr);
  return (
    <>
    <div className="container">
      <Aside />
      <div className="content">
        <p className='content-title'>Menu</p>
        {menuData.map(( menuData, index )=>(
          <Menu menu={menuData} key={index} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
