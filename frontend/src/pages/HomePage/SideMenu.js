import React, { useState, useEffect } from "react";
import './SideMenu.css'
import logo from '../../imgs/icons/lgo.png'
import MenuItem from './MenuItem'


const menuItems =
  [
    {
      name: 'Dashboard', exact: true, to: '/', iconClassName: "bi bi-speedometer"
    },
    {
      name: 'Gestion des utilisateurs',
      exact: true,
      to: '/utilisateurs', iconClassName: "bi bi-people"
    },
    {
      name: 'Statistique transactions SS', to: '/transactionss', iconClassName: "bi bi-graph-up",
    },
    {
      name: 'Statistique transactions ACS', to: '/transactionacs', iconClassName: "bi bi-bar-chart",
    },
    {
      name: 'Affichage des transactions', to: '/affichagetransactions', iconClassName: "bi bi-clipboard-data",
      subMenus: [{ name: "completes", to: '/transactions/transactioncf' },
      { name: "incompletes", to: '/transactions/transactionif' },
      { name: "rejets", to: '/transactions/transactionrf' }]
    },
  ]

const Sidemenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {

    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach(el => { el.classList.remove("active") }
      )
    }
    props.onCollapse(inactive);
  }

    , [inactive]);

  return (

    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <img src={logo} alt="lgo" />
        </div>
        <div onClick={() => {
          setInactive(!inactive);
        }} className="toggle-button-btn">
          {inactive ? (<i class="bi bi-arrow-right-square-fill"></i>) : (<i class="bi bi-arrow-left-square-fill"></i>)}
        </div>
      </div>

      <div className="divider"></div>
      <div className="main-menu">
        <ul >
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              exact={MenuItem.exact}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }
              }
            />
          ))}
        </ul>
      </div>
      <div className="side-menu-footer">
        <div className="user-info">
          <h5>S2M</h5>
        </div>

      </div>
    </div>
  )
}

export default Sidemenu