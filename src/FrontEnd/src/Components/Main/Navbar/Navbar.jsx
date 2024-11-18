import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar el archivo CSS
import logo from '/Main/logo.png'; // Asegúrate de colocar la ruta correcta a tu imagen

const Navbar = () => {
  const location = useLocation();  // Para obtener la URL actual y marcar la sección activa

  // Función para verificar si la URL contiene el path
  const isActive = (path) => {
    return location.pathname.includes(path) ? 'active' : ''; // Verifica si la URL contiene el path
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className={`navbar-item ${isActive('/games')}`}>
          <Link to="/games">Mis Partidas</Link>
          <div className="submenu">
            <Link to="/game1" className="submenu-item">Juego 1</Link>
            <Link to="/game2" className="submenu-item">Juego 2</Link>
            <Link to="/game3" className="submenu-item">Juego 3</Link>
          </div>
        </div>
        <div className={`navbar-item ${isActive('/newplayer')}`}>
          <Link to="/newplayer">Nuevos Jugadores</Link>
          <div className="submenu">
            <Link to="/newplayer/larp" className="submenu-item">¿Qué es el Rol?</Link>
            <Link to="/newplayer/npcs" className="submenu-item">PNJs, Creadores de Trama</Link>
            <a href="/NewPlayers/Rules/rules.pdf" download={"/NewPlayers/Rules/rules.pdf"} className="submenu-item">Reglas y Guías</a>
            <Link to="/newplayer/dictionary" className="submenu-item">Diccionario de Términos</Link>
          </div>
        </div>
        <div className={`navbar-item ${isActive('/events')}`}>
          <Link to="/events">Eventos</Link>
          <div className="submenu">
            <Link to="/event1" className="submenu-item">Evento 1</Link>
            <Link to="/event2" className="submenu-item">Evento 2</Link>
          </div>
        </div>
        <div className={`navbar-item ${isActive('/universe')}`}>
          <Link to="/universe">Universo</Link>
          <div className="submenu">
            <Link to="/universe/1" className="submenu-item">Mundo 1</Link>
            <Link to="/universe/2" className="submenu-item">Mundo 2</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
