import menu from "../menu.json";
import TopMenu from "./componets/TopMenu";
import "./assets/styles/style.css";
import Menu from "./componets/Menu";
import { Typography } from "@mui/material";


function App() {


  const menuList = menu.menus;



  return (
    <>
      <header>
        <TopMenu />
      </header>
      <section>
        <div className="over">
          <div className="fl"></div>
          <div className="fr">
           <Typography>{menuList[0].name}</Typography>

          </div>
        </div>

      </section>
      <footer></footer>
    </>
  );
}

export default App;
