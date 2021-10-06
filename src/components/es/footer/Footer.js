import React from "react";
import { NavLink} from "react-router-dom";
import "./footer.css";
import logos from "../../../images/logos-footer.png";
import logo from "../../../images/logo.png";
export const Footer = () => {
  return (
    <div id="container-footer">
      <hr className="line-large" />
      <footer>
          <div className="logos">
          <img src={logos} alt="logos" />
          </div>
          <div className="site-map">
              <nav id="nav-footer">
              <p className="footer-p" >Secciones</p>    
              <NavLink to="/es/presentacion" className="footer-a">Presentación</NavLink>
              <NavLink to="/es/codice" className="footer-a">Códice Maya de México</NavLink>
              <NavLink to="/es/estudios" className="footer-a">Estudios</NavLink>
              <NavLink to="/es/descargas" className="footer-a">Descargas</NavLink>
              <NavLink to="/es/creditos" className="footer-a">Créditos</NavLink>
              </nav>
              
          </div>
        
      </footer>
      <hr className="line-large" />
      <div className="legal">
      <img src={logo}alt="logo"/>
      <p>© 2021 – Secretaría de Relaciones Exteriores</p>
      </div>
    </div>
  );
};
