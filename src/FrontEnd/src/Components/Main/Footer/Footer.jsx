import React from 'react';
import './Footer.css'; // Asegúrate de incluir el archivo CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Sobre Nosotros</h3>
          <p>
            Somos una comunidad apasionada por los juegos de rol, dedicada a fomentar la creatividad, la colaboración y el disfrute de los jugadores. Nuestra misión es proporcionar un espacio seguro y acogedor para todos los amantes del rol, donde puedan explorar nuevos mundos, contar historias y crear amistades duraderas.
          </p>
        </div>

        <div className="footer-column">
          <h3>Equipo Directivo</h3>
          <ul>
            <li>Juan Pérez - Fundador</li>
            <li>Ana Rodríguez - Coordinadora de Eventos</li>
            <li>Pedro Gómez - Responsable de Redes Sociales</li>
            <li>Lucía Fernández - Coordinadora de Talleres</li>
            <li>David Ruiz - Director Creativo</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
            <li><a href="https://discord.com">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

