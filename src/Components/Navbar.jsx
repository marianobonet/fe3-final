import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <nav className={`nav-bar ${theme}`}>
      <img className="navbar-icon" src="/dentist-svgrepo-com.svg" alt="" />
      <button class="nav-icons-button">Menu</button>
      <div className="nav-icons">
        <Link classname={theme} to="/">
          Home
        </Link>
        <Link classname={theme} to="contact">
          Contacto
        </Link>
        <Link classname={theme} to="favs">
          Destacados
        </Link>
        <button className="button" onClick={toggleTheme}>
          Cambiar Tema
        </button>
        <button className="button" onClick={goBack}>
          Atras
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
