import React, { useRef, useState } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";

/**
 * @author
 * @function MenuItem
 **/

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, closeIconClassName, path, onClick, to, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <Router forceRefresh>
      <div
        exact
        to={to}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i class={iconClassName}></i>
        </div>
        <span>{name}</span>
        <div className="close-menuItem-icon">
          <i class={closeIconClassName}></i>
        </div>
      </div>
      {subMenus && subMenus.length > 0 ? (
        <ul className={`sub-menu`}>
          {subMenus.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>
                <div className="sub-menu-icon">
                  <i class={menu.iconClassName}></i>
                </div>
                <div className="sub-menu-title">
                {menu.name}
                </div>
                </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
        
        </Router>

    </li>
  );
};

export default MenuItem;
