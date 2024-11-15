import React from 'react';
import './NewPlayer.css';

// Importar las imágenes de NewPlayer
import larpImage1 from '/NewPlayers/NewPlayer-1.jpg';
import larpImage2 from '/NewPlayers/NewPlayer-2.jpg';
import larpImage3 from '/NewPlayers/NewPlayer-3.jpg';
import larpImage4 from '/NewPlayers/NewPlayer-4.jpg';

// Importar las imágenes de Events
import eventImage1 from '/NewPlayers/NewPlayer-1.jpg';
import eventImage2 from '/NewPlayers/NewPlayer-2.jpg';
import eventImage3 from '/NewPlayers/NewPlayer-3.jpg';
import eventImage4 from '/NewPlayers/NewPlayer-4.jpg';

import Footer from '../Main/Footer/Footer';

export default function NewPlayer() {
    return (
        <div className="NewPlayer-Main-container">
            <div className="NewPlayer-sections">
                <div className="NewPlayer-section">
                    <div className="NewPlayer-menu-image" style={{ backgroundImage: `url(${larpImage1})` }}></div>
                    <div className="NewPlayer-menu-title">¿Qué es el Rol?</div>
                    <div className="NewPlayer-menu-text">
                        <p>
                            El Rol, ya sea realizado en mesa, en vivo(LARP) o en alguna plataforma online, consiste en ponerte en la piel de un personaje con una historia situada en un universo en concreto, ya sea caracterizandote o no, es una actividad que te transporta a otra historia que está por vivir. En tus manos quedan las decisiones que forjan tu camino. <a  href="/newplayer/larp">Aquí puedes encontrar más información sobre qué es Rol/LARP y cómo funciona.</a>
                        </p>
                    </div>
                </div>

                <div className="NewPlayer-section">
                    <div className="NewPlayer-menu-image" style={{ backgroundImage: `url(${larpImage2})` }}></div>
                    <div className="NewPlayer-menu-title">PNJs / Los creadores de trama</div>
                    <div className="NewPlayer-menu-text">
                        <p>
                            Los PNJs (Personajes no Jugadores) son aquellos personajes predefinidos por el organizador, tienen su historia y función ya creada, ideal para alguien que quiera empezar de 0 sin preocupaciones o también para los veteranos que quieran aportar trasfondo o simplemente probar algo diferente. Pueden experimentar un juego tan intenso y emocionante como los propios jugadores, ya que a través de ellos se hace posible el juego para los demás ya sea desde el tabernero que da información o un guardia que te guía. <a href="/newplayer/npcs">Obtén más informacion sobre los PNJs</a>
                        </p>
                    </div>
                </div>

                <div className="NewPlayer-section">
                    <div className="NewPlayer-menu-image" style={{ backgroundImage: `url(${larpImage3})` }}></div>
                    <div className="NewPlayer-menu-title">Reglas y Guías</div>
                    <div className="NewPlayer-menu-text">
                        <p>Como todo juego, existen unas reglas según las cuales se juega. Estas reglas garantizan que el juego sea justo para todos. Se deben seguir algunas reglas para garantizar la seguridad, mientras que otras pueden enriquecer su experiencia de juego de roles. <a href="/NewPlayers/Rules/rules.pdf" download={"/NewPlayers/Rules/rules.pdf"}>Aquí puedes encontrar el conjunto de reglas que guían los eventos.</a></p>
                    </div>
                </div>

                <div className="NewPlayer-section">
                    <div className="NewPlayer-menu-image" style={{ backgroundImage: `url(${larpImage4})` }}></div>
                    <div className="NewPlayer-menu-title">Diccionario de Términos para el Rol</div>
                    <div className="NewPlayer-menu-text">
                        <p>
                            Para asegurarnos de que comprendes palabras y frases específicas que pueden usarse durante una partida, te proporcionamos un diccionario, donde puedes encontrar explicaciones de los términos más utilizados dentro y fuera del juego. <a href="/newplayer/dictionary" >Puedes encontrar el diccionario LARP aquí.</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="Events-sections">
                <div className='Events-sections-title'>Eventos Principales</div>
                <hr className="separator" />
                <div className="Events-section">
                    <div className="Events-menu-image" style={{ backgroundImage: `url(${eventImage1})` }}></div>
                    <div className="Events-menu-title">Evento 1</div>
                    <div className="Events-menu-text">
                        <p>Descripción del evento 1...</p>
                        <p className='primary'>01-01-2024</p>
                        <p className='primary'>Sanlúcar,Sevilla</p>
                        <p><a>Únete</a> / <a>Ver Álbum</a></p>
                    </div>
                </div>
                <div className="Events-section">
                    <div className="Events-menu-image" style={{ backgroundImage: `url(${eventImage2})` }}></div>
                    <div className="Events-menu-title">Evento 2</div>
                    <div className="Events-menu-text">
                        <p>Descripción del evento 2...</p>
                        <p className='primary'>01-01-2024</p>
                        <p className='primary'>Sanlúcar,Sevilla</p>
                        <p><a>Únete</a> / <a>Ver Álbum</a></p>
                    </div>
                </div>
                <div className="Events-section">
                    <div className="Events-menu-image" style={{ backgroundImage: `url(${eventImage3})` }}></div>
                    <div className="Events-menu-title">Evento 3</div>
                    <div className="Events-menu-text">
                        <p>Descripción del evento 3...</p>
                        <p className='primary'>01-01-2024</p>
                        <p className='primary'>Sanlúcar,Sevilla</p>
                        <p><a>Únete</a> / <a>Ver Álbum</a></p>
                    </div>
                </div>
                <div className="Events-section">
                    <div className="Events-menu-image" style={{ backgroundImage: `url(${eventImage4})` }}></div>
                    <div className="Events-menu-title">Evento 4</div>
                    <div className="Events-menu-text">
                        <p>Descripción del evento 4...</p>
                        <p className='primary'>01-01-2024</p>
                        <p className='primary'>Sanlúcar,Sevilla</p>
                        <p><a>Únete</a> / <a>Ver Álbum</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
 
               