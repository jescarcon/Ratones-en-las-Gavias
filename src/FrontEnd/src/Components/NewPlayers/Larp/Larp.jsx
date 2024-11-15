import React from 'react';
import './Larp.css';
import Footer from '../../Main/Footer/Footer';

import larpImage1 from '/Main/Gallery/img-1.jpg';
import larpImage2 from '/Main/Gallery/img-2.jpg';
import larpImage3 from '/Main/Gallery/img-3.jpg';
import larpImage4 from '/Main/Gallery/img-4.jpg';

export default function Larp() {
    return (
        <div className="Larp-Main-container">
            <div className='Larp-Intro'>
                <div className='Larp-title'>¿Qué es el Rol?</div>
                <hr className="separator" />
                <div className='Larp-text'>
                    <p>
                        ¿Qué es el LARP?
                        Live Action Role Play, o LARP, es un juego de rol interactivo que se caracteriza por la improvisación, la actuación y el ingenio. El juego se desarrolla cuando ustedes, los jugadores, toman decisiones y sus esfuerzos tienen éxito o fracasan. Un poco como ser el personaje principal de tu propia película o libro. Sumérgete en un escenario y vive una historia como uno de sus personajes. ¡Esto no es nada difícil y en realidad es increíblemente divertido!
                    </p>
                </div>
                <div className="Larp-image" style={{ backgroundImage: `url(${larpImage2})` }}></div>
            </div>
            <div className='Larp-pair'>
                <div className='Larp-first-one'>
                    <div className='Larp-title'>¿Qué debo hacer para experimentar LARP?</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            Para experimentar LARP, no tienes que hacer mucho excepto involucrarte en la aventura y la experiencia misma. Es posible que esto no funcione exactamente como desea al principio, pero eso no es un problema. Es como sentarse juntos en una mesa y jugar un juego de mesa. Aceptan seguir juntos las reglas del mundo, hasta cierto punto creer que lo que se representa a su alrededor es la realidad y que básicamente quieren ser parte de esta ficción. LARP también es un poco como andar en bicicleta: usted debe vender. Por supuesto, usted decide qué tan rápido o lento vende. También debes intentar distraerte lo menos posible para tener la mejor experiencia posible y no perderte demasiado del juego. Eso significa que el teléfono móvil, el trabajo o los temas de conversación de la vida real deben dejarse lo más “lejos” posible durante la duración del juego. Una vez superado esto, ¡emprendemos la emocionante y fantástica aventura que damos forma juntos!
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage1})` }}></div>
                </div>
                <div className='Larp-second-one'>
                    <div className='Larp-title'>Géneros</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            El LARP se puede jugar en muchos géneros diferentes, desde eventos históricos hasta escenarios apocalípticos, pasando por mundos cyberpunk y de ciencia ficción. Los acontecimientos de Mythodea tienen lugar en un entorno de fantasía medieval. Esto significa que te encontrarás con caballeros, escuderos y nobles, así como con orcos, elfos y magos. El género suele determinar también lo que es posible en el universo. Por ejemplo, puedes usar magia en un escenario de fantasía, lo que no es el caso en un LARP histórico.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage3})` }}></div>
                </div>
            </div>
            <div className='Larp-pair'>
                <div className='Larp-first-one'>
                    <div className='Larp-title'>Personaje</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            A diferencia de los juegos de rol de mesa o los videojuegos, los propios LARPers asumen el papel de un personaje, al igual que lo hacen los actores. Entonces representas a un personaje en la vida real, lo que significa que actúas, reaccionas a los eventos e interactúas con otros jugadores. Cada personaje LARP tiene ciertas características y una historia de fondo, que puedes inventar tú mismo. Esto influye en cómo un personaje trata con su entorno y con otros jugadores.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage4})` }}></div>
                </div>
                <div className='Larp-second-one'>
                    <div className='Larp-title'>Atuendos</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            In LARP, every character wears a costume that fits to the genre and represents the background of the character. For example, a mage often wears long robes with ornaments, while a knight wears an armor and a tabard. For you, this means that when creating the costume, you should keep in mind the corresponding character and their story that you intend to play out. You can also start with the costume and then design the character’s story. Perhaps it’s best to remember that it’s your costume that is the first thing people notice about your character. What kind of impression do they get? Is this what you wanted to achieve?
                        </p>
                        <p>
                            Keep in mind that objects or materials that do not fit into the setting should not be used or should at least be covered up. For example, a plastic raincoat would be disturbing in a medieval setting.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage1})` }}></div>
                </div>
            </div>
            <div className='Larp-pair'>
                <div className='Larp-first-one'>
                    <div className='Larp-title'>Trama</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            Cada historia tiene una trama. En LARP hay un punto de partida a partir del cual comienza la historia y luego se desarrolla. Las acciones que realizan los jugadores y no jugadores y las decisiones que toman tienen un impacto en el curso del juego. El marco para esto está capturado en la trama del evento. Hay pautas sobre lo que puede suceder y lo que sucederá, pero cómo se desarrolla la historia depende esencialmente de los jugadores y no jugadores/creadores de juego y sus esfuerzos.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage3})` }}></div>
                </div>
                <div className='Larp-second-one'>
                    <div className='Larp-title'>Combates</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            No en todos los LARP, pero en algunos LARP hay peleas. Aunque en realidad fingen pelear entre sí. Especialmente en los reinos medieval y de fantasía, los jugadores suelen librar batallas épicas. Las armas que se utilizan están diseñadas de tal manera que no lastiman a nadie incluso cuando entran en contacto. Las armas LARP no tienen hoja afilada, no son duras y están hechas de espuma, látex o goma. Sin embargo, debes tener cuidado al manipular las armas, ya que pueden provocar hematomas o golpear zonas frágiles. Por lo tanto, siempre debes ser considerado con tu contraparte. En el juego luchan unos contra otros, fuera del juego juegan juntos.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage2})` }}></div>
                </div>
            </div>
            <div className='Larp-pair'>
                <div className='Larp-first-one'>
                    <div className='Larp-title'>¿Que es un jugador?</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            Un jugador es una persona que viste un disfraz y encarna un personaje ficticio. Este personaje, su historia y el disfraz los elige el propio jugador. La persona actúa en vivo como parte de la trama del evento y tiene un cierto grado de libertad de acción y puede influir en parte en el resultado de la historia más amplia o de líneas argumentales individuales. Como jugador, declaras tu intención de participar en el juego, involucrarte tanto como sea posible y asegurarte de que tú y los demás jugadores paséis un buen rato. Debido a que LARP es más o menos como un deporte, usted acepta las reglas del juego y, como jugador, se asegura de que usted y otros puedan jugar sin obstáculos. Tendrás (dependiendo del tipo de evento) tu propio alojamiento y, a menudo, también te proporcionarás tu propia comida. Usted se asegura de que su propio equipo sea seguro para todos los participantes que lo rodean y es responsable de mantenerlo así. LARP es como un deporte de equipo o como andar en bicicleta en una pista común: solo podemos hacerlo divertido si trabajamos juntos. Se muestran consideración el uno por el otro y se ayudan mutuamente a experimentar el juego. Además se intenta perturbar lo menos posible la inmersión de los demás participantes. Esto es independiente de si juegan “unos contra otros” dentro de la historia. Fuera de la historia, todos los jugadores ayudan juntos para permitir y crear la mejor experiencia posible para todos.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage4})` }}></div>
                </div>
                <div className='Larp-second-one'>
                    <div className='Larp-title'>¿Qué es una inmersión?</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            Cuando hablamos de inmersión, nos referimos a la inmersión de una realidad ficticia. Ese es el objetivo de un evento LARP, simular un mundo que sea lo más creíble, colorido y emocionante posible, para que tanto los jugadores como sus personajes puedan tener la mejor experiencia LARP posible. La inmersión es algo que se origina en la mente de los participantes y, por tanto, es un estado frágil. Quizás similar a dormir. Cuanto más a menudo lo “despierten”, peor calificará la “experiencia de dormir”. Por eso es importante ser consciente de esto. Seguramente hay buenas razones (como el peligro) para despertar a las personas dormidas, pero conviene reducirlo al mínimo. La inmersión es algo en lo que debes participar activamente y todos deben compartir. Los organizadores siempre intentarán evitar perturbaciones durante la inmersión tanto como sea posible. Cuando esto no sea posible, necesitarás un poco más de fantasía o la capacidad de imaginar o pasar desapercibido (en caso de perturbar los inodoros dixi u otra logística necesaria). Pero una cosa está clara, si todos conseguimos “soñar”, sumergirnos, lo pasaremos bien.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage1})` }}></div>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className='Larp-title'>¿Qué debo hacer para experimentar LARP?</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            ¡Para todos! ¡Todos (sin importar tu apariencia, tu edad o lo que hagas en tu vida real) son bienvenidos a LARP!
                        </p>
                        <p>
                            ¿Quién no ha pensado mientras leía un libro: “¡Me gustaría vivir eso!” ¿O “¡Lo habría hecho de otra manera!”? Esta es la idea básica de todos los juegos de rol en vivo. LARP es para todos y cada uno de los que quisieran ser el personaje de una historia y preguntarse: “¿Y si fuera un héroe luchando por la justicia? ¿O un villano siniestro? ¿Cómo elegiría si no estuviera simplemente leyendo una aventura, sino experimentándola?
                        </p>
                        <p>
                            Pero eso es sólo el comienzo de la afición. Porque hay mucho más por descubrir además del héroe que quizás quieras ser. Todo el juego está inmerso en un mundo de personajes fascinantes y deslumbrantes. Ofrece innumerables posibilidades para celebraciones exuberantes en tabernas medievales o en grandes torneos. Cualquiera puede competir en esgrima, tiro con arco o cantar serenatas y dejar atrás todas las preocupaciones de la vida cotidiana durante un fin de semana. En LARP puedes probar quién o qué te gustaría ser. Únete, participa y ayuda a darle vida a este mundo fantástico.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage2})` }}></div>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className='Larp-title'>¿Cómo se crea este mundo?</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            Nuestro equipo crea un pedazo de mundo de fantasía con escenarios elaborados de edificios, efectos, máscaras y muchos otros extras. El resultado es una simulación completamente interactiva de un mundo ficticio en el que podrás sumergirte por completo. Sin embargo, a diferencia de los mercados medievales, los eventos no tienen lugar para entretener a un público pasivo y que paga. En cambio, todos los participantes participan activamente en el juego y son al mismo tiempo espectadores. Dos cosas están en primer plano: ¡diversión y creatividad!
                        </p>

                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage3})` }}></div>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className='Larp-title'>Historia</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            En la mayoría de los LARP suele haber una “trama”. Se trata de una historia de fondo y un marco, que fue inventado por los organizadores para darle al juego un escenario o un marco de referencia en el que moverse, una razón común para que todos los personajes interactúen entre sí.
                        </p>
                        <p>
                            Querer o no dejarte cautivar y dejar llevar por esta trama e involucrarte o no, ya es cosa tuya. De este modo, cada participante puede decidir por sí mismo si quiere convertirse en un personaje principal o prefiere observar todo desde el fondo. El compromiso de cada individuo determina cuánto se vive y, sobre todo, qué tan directo se puede sentir.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage2})` }}></div>
                </div>
            </div>
            <div className=''>
                <div className=''>
                    <div className='Larp-title'>Objetivo del juego</div>
                    <hr className="separator" />
                    <div className='Larp-text'>
                        <p>
                            No hay ningún objetivo en LARP como lo hay, por ejemplo, en un juego de mesa. Todos los que participan en un juego tienen sus propios objetivos. Ya sea que busques un duelo honorable en la batalla, una persona que te inicie en las artes de la magia, resuelva acertijos o simplemente quieras sentarte en la taberna con una jarra de vino de miel (hidromiel), el único objetivo que todos tienen en común. Es una interacción armoniosa en un hermoso ambiente. Por eso no se puede decir que hay ganadores o perdedores en los juegos de rol en vivo. ¡El LARP es el objetivo! Y tal vez también para sumergirse lo más profundamente posible en el mundo fantástico.
                        </p>
                    </div>
                    <div className="Larp-image" style={{ backgroundImage: `url(${larpImage3})` }}></div>
                </div>
            </div>
            <Footer />
        </div >
    );
}


