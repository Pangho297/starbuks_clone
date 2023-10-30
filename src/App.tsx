import { useState } from 'react';
import Menu from './pages/Menu/Menu'
import dataMenu from '/menu.json'

function App() {
  const menus = dataMenu.menus;

  const [menuData, setMenuData] = useState(menus);
  
  return (
    <>
    {menuData.map(( menuData, index )=>(
      <Menu menu={menuData} key={index} />
    ))}
    </>
  );
}

export default App;
