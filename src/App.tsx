import { useState } from 'react';
import Menu from './pages/Menu/Menu'

import dataMenu from '/menu.json'
function App() {
  const menus = dataMenu.menus;
  // console.log(menus);

  const [menuData, setMenuData] = useState(menus);
  
  return (
    <>
      <Menu menu={menuData} />
    </>
  );
}

export default App;
