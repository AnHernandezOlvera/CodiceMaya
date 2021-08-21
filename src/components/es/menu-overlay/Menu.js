import React, { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { AiOutlineClose } from "react-icons/ai";
import { Mailto } from "../../ui/Mailto";
import logo from "../../../images/logo.png";
import "./menu.css";

export const Menu = ({ showMenu, setShowMenu }) => {
    showMenu
    ? (document.body.style.overflow = "hidden") &&
    (document.getElementById('navBar').style.display='none')
    : (document.body.style.overflow = "unset");

  const menuRef = useRef();

  const closeMenu = e => {
    document.getElementById('navBar').style.display='flex';
}

  
  const animationMenu = useSpring({
    config: {
      duration: 250,
    },
    opacity: showMenu ? 1 : 0,
    transform: showMenu ? `translateY(0%)` : `translateY(-100%)`,
  });
  

  return showMenu ? (
    <div className="overlay">
    <animated.div style={animationMenu} className="menu-animated"ref={menuRef}>
      
          
        <nav id="menu-overlay">
            <div className="header-menu">
        
          <NavLink to="/">
            <img alt="logo" src={logo}></img>
          </NavLink>
          <AiOutlineClose id="close-menu" onClick= { (e) => {
                setShowMenu((prev) => !prev);
                closeMenu();
          }}
              />
            </div>
          
          <section className="options">
            <NavLink to="/presentacion">Presentación</NavLink>
            <NavLink to="/codice">Códice Maya de México</NavLink>
            <li className="drop-down-container">
              Estudios
              <ul>
                <li>
                  <Link to="/">Moreno Toscano</Link>
                </li>
                <li>
                  <Link to="/">Brito Guadarrama</Link>
                </li>
                <li>
                  <Link to="/">Velásquez</Link>
                </li>
                <li>
                  <Link to="/">Vila Freyer</Link>
                </li>
                <li>
                  <Link to="/">B. Carlson</Link>
                </li>
                <li>
                  <Link to="/">Orozco</Link>
                </li>
              </ul>
            </li>
            <NavLink to="/proyecto-editorial">Proyecto Editorial</NavLink>
            <NavLink to="/descargas">Descarga</NavLink>
            <NavLink to="/creditos">Créditos</NavLink>
          </section>
          <section id="contact">
            <p>CONTACTO</p>
            <Mailto
              label="coordinacion@icosaedro.mx"
              mailto="mailto:coordinacion@icosaedro.mx"
            />
            <p>
              <Link to="http://icosaedro.mx/">icosaedro.mx</Link>
            </p>
          </section>
        </nav>

      </animated.div>
      </div>
    
  ) : null;
};
