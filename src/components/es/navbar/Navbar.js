import React, { useRef, Fragment, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";

import { Menu } from "../menu-overlay/Menu";
import "./Navbar.css";
import logo from "../../../images/logo.png";
import { FaBars } from "react-icons/fa";





export const Navbar = () => {
  

  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    setShowMenu((prev) => !prev);
  };
  

  let history =useHistory();
  let location = useLocation();
  function handlePath (path){
      history.push(path);
  }

  return (
    <Fragment>
      <div className="menu" id="navBar">
        <NavLink to="/">
          <img alt="logo" src={logo}></img>
        </NavLink>
        <div className="links">
          <NavLink to="/presentacion">Presentación</NavLink>
          <NavLink to="/codice">Códice Maya de México</NavLink>
          <li className="drop-down-container" onClick={()=>handlePath('estudios')}>
            Estudios
            <ul>
              <li>
                <NavLink to="/">Moreno Toscano</NavLink>
              </li>
              <li>
                <NavLink to="/">Brito Guadarrama</NavLink>
              </li>
              <li>
                <NavLink to="/">Velásquez</NavLink>
              </li>
              <li>
                <NavLink to="/">Vila Freyer</NavLink>
              </li>
              <li>
                <NavLink to="/">B. Carlson</NavLink>
              </li>
              <li>
                <NavLink to="/">Orozco</NavLink>
              </li>
            </ul>
          </li>
          <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
          <NavLink to="/descargas">Descarga</NavLink>
          <NavLink to="/creditos">Créditos</NavLink>
        </div>
        <select id="language">
          <option>ES</option>
          <option>EN</option>
        </select>
        <FaBars className="bars-icon" onClick={openMenu} />
        
      </div>

      <Menu showMenu={showMenu} setShowMenu={setShowMenu} className="absolute"/>
    
            
    </Fragment>
  )
};
