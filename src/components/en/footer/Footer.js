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
              <p className="footer-p" >Sections</p>    
              <NavLink to="/en/introduction" className="footer-a">Introduction</NavLink>
              <NavLink to="/en/codex" className="footer-a">The Maya Codex of Mexico</NavLink>
              <NavLink to="/en/studies" className="footer-a">Studies</NavLink>
              <NavLink to="/en/downloads" className="footer-a">Download</NavLink>
              <NavLink to="/en/credits" className="footer-a">Credits</NavLink>
              </nav>
              
          </div>
        
      </footer>
      <hr className="line-large" />
      <div className="legal">
      <img src={logo}alt="logo"/>
      <p>© 2021 - Mexican Ministry of Foreign Affairs</p>
      </div>
    </div>
  );
};
