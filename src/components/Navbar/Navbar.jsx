import React from "react";
import { NavLink } from "react-router-dom";
// STYLE
import "./_NavBar.css";
import Logo from "../../assets/logo.png";
// COMPONENTS
import CartWidget from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <div className="container_navbar">
      <nav className="nav">
        <div className="brand-nav">
          <NavLink className="nav_link" to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </NavLink>
          <NavLink className="nav_link" to="/cart">
            <CartWidget />
          </NavLink>
        </div>
        <div className="categories-nav">
          <NavLink className="nav_link" to="/categoria/inalambricos">
            Audífonos
          </NavLink>

          <NavLink className="nav_link" to="/categoria/concable">
            Computadoras y Laptos
          </NavLink>

          <NavLink className="nav_link" to="/categoria/celulares">
            Celulares
          </NavLink>

          <NavLink className="nav_link" to="/categoria/parlantes">
           Parlantes
          </NavLink>

          <NavLink className="nav_link" to="/categoria/accesorios">
            Accesorios
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
