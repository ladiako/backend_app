import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menuitem = (props) => {

  const { name, subMenus, to, iconClassName } = props;
  const [expand, setExpand] = useState(false);

  return (
    <>
    <li onClick={props.onClick}>
      <NavLink exact to={to} onClick={() => setExpand(!expand)} className="item-menu">
        <div className="menu-icon">
          <i className={iconClassName}></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {
        subMenus && subMenus.length > 0 ? (
          <ul className={`sub-menu ${expand ? "active" : ""}`}>
                        {subMenus.map((menu, index) =>
         (<li key={index}><NavLink to={menu.to}>{menu.name}</NavLink></li>))}</ul>):null}
         
    </li>
    
    </>
    
  );
};

export default Menuitem;
