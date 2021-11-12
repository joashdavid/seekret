import './FloatingMenu.css';
import SideMenu, { menuItems } from "./components/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function App() {
  const [inactive, setInactive] = useState(false);
  const [open, setIsOpen] = useState(true);



  return (
    <div className="App">
      <Router>
        
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />
       
          {menuItems.map((menu, index) => (
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} exact={menu.exact} path={subMenu.to}>
                    </Route>
                  ))
                : null}
            </>
          ))}
      </Router>
    </div>
  );
}

export default App;