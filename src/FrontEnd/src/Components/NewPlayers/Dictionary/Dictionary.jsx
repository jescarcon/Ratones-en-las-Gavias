import React from 'react';
import './Dictionary.css';
import Footer from '../../Main/Footer/Footer';

export default function Dictionary() {
    return (
        <div className="Dictionary-Main-container">
            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es el Rol?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        ¿Qué es el LARP o Rolplay?
                        Live Action Role Play, o Rolplay, es un juego de rol interactivo que se caracteriza por la improvisación, la actuación y el ingenio. El juego se desarrolla cuando ustedes, los jugadores, toman decisiones y sus esfuerzos tienen éxito o fracasan. Un poco como ser el personaje principal de tu propia película o libro. Sumérgete en un escenario y vive una historia como uno de sus personajes. ¡Esto no es nada difícil y en realidad es increíblemente divertido!
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es el Dungeon Master?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        El Dungeon Master (DM) es el encargado de guiar a los jugadores durante el juego, proporcionando el escenario, los personajes no jugadores y controlando el desarrollo de la trama. Además, el DM crea las historias, los desafíos y las reglas que los jugadores deben seguir.
                        El Dungeon Master no solo cuenta la historia, sino que también debe estar preparado para improvisar, responder a las decisiones inesperadas de los jugadores y asegurarse de que todos disfruten de la experiencia.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es un Personaje Jugador?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Un Personaje Jugador (PJ) es el personaje que cada jugador asume en el juego. Cada PJ tiene sus propias características, historia y habilidades, que se utilizan para interactuar con el mundo que ha creado el Dungeon Master. Los jugadores toman decisiones en nombre de sus personajes, enfrentándose a situaciones y obstáculos a medida que avanza la trama.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es un Personaje No Jugador?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Los Personajes No Jugadores (PNJ) son personajes controlados por el Dungeon Master. Estos personajes pueden ser aliados, enemigos, o simplemente habitantes del mundo en el que se desarrolla el juego. Los PNJ pueden tener diálogos, ofrecer misiones o actuar como antagonistas, dependiendo del curso de la historia.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es un Dado?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Los dados son herramientas clave en los juegos de rol, ya que introducen un elemento de azar en las decisiones. Generalmente, se utilizan dados de diferentes formas, como el dado de 20 caras (d20), 6 caras (d6), o de otras formas dependiendo del sistema de juego. Las tiradas de dados determinan el éxito o el fracaso de las acciones emprendidas por los personajes durante el juego.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es la Ficha de Personaje?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        La Ficha de Personaje es un documento que registra todas las características y habilidades de un personaje, como su fuerza, destreza, habilidades especiales y equipo. A medida que el personaje progresa en la aventura, la ficha se actualiza para reflejar el crecimiento del PJ y sus logros.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es un Sistema de Juego?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Un Sistema de Juego es el conjunto de reglas y mecánicas que gobiernan cómo se lleva a cabo el juego. Existen diversos sistemas, como Dungeons & Dragons, Pathfinder, entre otros, que definen cómo interactúan los jugadores con el mundo, cómo se resuelven las acciones y cómo se maneja el desarrollo del personaje. Cada sistema tiene su propio conjunto de reglas para crear personajes, resolver conflictos y avanzar en la historia.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es una Aventura?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Una Aventura es una serie de eventos y desafíos que los jugadores enfrentan durante una sesión de juego. En una aventura, los jugadores exploran el mundo creado por el Dungeon Master, toman decisiones importantes, resuelven problemas y luchan contra enemigos. Las aventuras suelen tener una trama general que guía a los jugadores, pero las decisiones que tomen pueden alterar el curso de la historia.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es una Campaña?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        Una Campaña es una serie de aventuras conectadas entre sí, que forman una historia más grande y más compleja. Las campañas pueden durar varias sesiones, semanas o incluso meses, dependiendo de la trama y los eventos que ocurran en cada aventura. En una campaña, los personajes evolucionan, se desarrollan y se enfrentan a desafíos que les permiten crecer tanto individualmente como en grupo.
                    </p>
                </div>
            </div>

            <div className='Dictionary-Entry'>
                <div className='Dictionary-title'>¿Qué es el Meta-Juego?</div>
                <hr className="separator" />
                <div className='Dictionary-text'>
                    <p>
                        El Meta-Juego se refiere a las acciones o decisiones tomadas por un jugador que están basadas en el conocimiento fuera del personaje, es decir, información que su personaje no tendría. Esto puede incluir el conocimiento sobre la trama, los personajes o los eventos que el jugador ha aprendido fuera del juego. El Meta-Juego puede romper la inmersión del juego y es importante que los jugadores se esfuercen por tomar decisiones como sus personajes, no como ellos mismos.
                    </p>
                </div>
            </div>

            <Footer />
        </div >
    );
}
