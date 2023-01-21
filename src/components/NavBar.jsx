import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <div className="container-all">
        <h1>Nuestros Productos son 100% Artesanles</h1>{" "}
      </div>
      <div className="nav-container">
      
        <header>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dvg9bxeas/image/upload/v1669666949/REACT%20-%20Limonero/logo_ljpgru.png"
            alt="limonero-logo"
            className="navbar-logo"
          />
        </Link>
          
        </header>

        
        <ul className="nav__link nav__link--menu">
          <li className="nav__items">
            <Link to={"/"}> Home</Link>
          </li>
          <li className="nav__items">
            <Link to={"/productos"}> Catalogo Completo</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/juguete"}>Juguetes</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/cesteria"}>Cestería</Link>
          </li>
          <li className="nav__items">
            <Link to={"/category/decoracion"}> Decoracion</Link>
          </li>
        </ul>
        <CartWidget  />
     
      </div>
    </>
  );
};

export default NavBar;