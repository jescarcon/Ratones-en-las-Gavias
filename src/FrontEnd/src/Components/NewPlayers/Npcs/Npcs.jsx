import React from 'react';
import './Npcs.css';
import Footer from '../../Main/Footer/Footer';

import NpcsImage1 from '/Main/Gallery/img-1.jpg';
import NpcsImage2 from '/Main/Gallery/img-2.jpg';
import NpcsImage3 from '/Main/Gallery/img-3.jpg';
import NpcsImage4 from '/Main/Gallery/img-4.jpg';

export default function Npcs() {
    return (
        <div className="Npcs-Main-container">
            <div className='Npcs-single'>
                <div className='Npcs-title'>Personajes no jugadores (PNJ) y creadores de juego</div>
                <hr className="separator" />
                <div className='Npcs-text'>
                    <p>
                        Los NPC (personajes no jugadores) pueden disfrutar de un juego tan intenso y emocionante como los jugadores (libres), aunque tienen un conjunto fijo de reglas para la apariencia, el comportamiento y la historia de sus roles. Ayudas al organizador a dar vida a la trama prevista, estableces el marco para los jugadores y proporcionas la atmósfera deseada al evento. Por eso, poco a poco comenzamos a llamarlos "creadores de juego", porque a través de su propio juego hacen posible el juego para otros.
                    </p>
                    <p>
                        Hay facciones de NPC que luchan intensivamente (Undead Flesh, Black Ice, Skargen) y facciones de NPC que incorporan un juego de rol intenso con menos elementos de lucha (Tribus, Gremios, Atteron, etc.).
                    </p>
                </div>
                <div className="Npcs-single">
                    <div
                        className="Npcs-image-container"
                        style={{ backgroundImage: `url(${NpcsImage1})` }}
                    ></div>
                </div>
            </div>

            <div className='Npcs-trio'>
                <div className='Npcs-first-one'>
                    <div className='Npcs-title'>Antecedentes y estilo</div>
                    <hr className="separator" />
                    <div className='Npcs-text'>
                        <p>
                            Los manuales de juego y guías de estilo completos cuentan la historia de las facciones de NPC/jugadores y explican cómo imaginamos la apariencia de un miembro del respectivo ejército o grupo. Siempre comenzamos con el mínimo requerido. En base a esto, se ofrecen sugerencias o ideas para expandir el concepto.
                        </p>
                    </div>
                </div>
                <div className='Npcs-second-one'>
                    <div className='Npcs-title'>Traje</div>
                    <hr className="separator" />
                    <div className='Npcs-text'>
                        <p>
                            En LARP, cada personaje lleva un traje que se adapta al entorno y representa el trasfondo del personaje. Por ejemplo, un mago suele llevar túnicas largas con adornos, mientras que un caballero lleva armadura y tabardo. Para ti, esto significa que al crear el traje o la túnica, debes tener en cuenta el personaje y la historia correspondientes. También puedes empezar con el traje y luego diseñar la historia del personaje. Tal vez sea mejor recordar que tu traje es lo primero que la gente ve de ti. ¿Qué tipo de primera impresión se llevan de ti los demás participantes? ¿Es esta la impresión que pretendías lograr?
                        </p>
                        <p>
                            Hay que tener en cuenta que no se deben utilizar ni tapar objetos o materiales que no encajen en el entorno. Por ejemplo, un impermeable de plástico resultaría molesto en un entorno medieval.
                        </p>
                    </div>
                </div>
                <div className='Npcs-third-one'>
                    <div className='Npcs-title'>Trama</div>
                    <hr className="separator" />
                    <div className='Npcs-text'>
                        <p>
                            Cada historia tiene su trama. En el LARP hay un punto de partida desde el que comienza la historia y luego se desarrolla. Las acciones que realizan los jugadores y las decisiones que toman tienen un impacto en el curso de la partida. Las consecuencias suelen quedar registradas en la trama del evento. Los PNJ son nuestros actores guía de esta historia. Hay pautas sobre lo que puede y va a suceder, pero cómo se desarrolla la historia depende básicamente de los jugadores y de sus esfuerzos.
                        </p>
                    </div>
                </div>
            </div>


            <div className='Npcs-single'>
                <div className='Npcs-title'>Ejércitos de NPC</div>
                <hr className="separator" />
                <div className='Npcs-text'>
                    <p>
                        Los PNJ de batalla son un elemento central de uno de los aspectos más impresionantes de ConQuest: ¡las enormes simulaciones de batalla con varios miles de participantes a la vez! Si eres uno de ellos, juegas por la historia, por la experiencia de los jugadores y por enriquecer todo el entorno con tu presencia y tu juego. Los PNJ de batalla son incansables, fantásticos "roles secundarios" que ayudan a convertir a los jugadores en héroes y les proporcionan una contraparte para su juego. ¡El escenario amenazante y aventurero no sería posible sin ellos!
                    </p>
                    <p>
                        Los jugadores patrullan, luchan en batallas y animan el campamento de TI de las facciones de NPC. Su juego es para los jugadores y participantes, no se aferran al centro de atención y, en cambio, preparan el escenario para el panorama general.
                    </p>
                    <p>
                        Cuando no estés de "servicio", puedes elegir tener un verdadero descanso de OT o continuar con el juego de roles de una manera más relajada. Por supuesto, a los participantes entusiastas se les permite asumir otros roles y profundizar aún más en la historia. Esto se puede especificar en un cuestionario con anticipación o decidir en el evento. Por supuesto, es importante tener suficiente descanso, para comer, beber y dormir para estar listo para nuevas batallas y tramas. Para que esto funcione, existe un plan de horarios.
                    </p>
                    <p>
                        El campamento de NPC de OT generalmente está fuera de la vista de los jugadores y, por lo tanto, no necesita estar camuflado. También está permitido tener utensilios de cocina o lugares para dormir que parezcan completamente "no ambientales". Si quieres contribuir al campamento de TI como NPC de batalla, contáctanos; ¡estaremos encantados de recibir a todos y cada uno de los que quieran hacerlo! Esto es todavía bastante nuevo, así que por favor contáctenos directamente (regie@mythodea.de).
                    </p>
                </div>
                <div className="Npcs-single">
                    <div
                        className="Npcs-image-container"
                        style={{ backgroundImage: `url(${NpcsImage4})` }}
                    ></div>
                </div>
            </div>


            <div className='Npcs-single'>
                <div className='Npcs-title'>Creadores de juego</div>
                <hr className="separator" />
                <div className='Npcs-text'>
                    <p>
                        Los creadores de juego son exactamente lo que sugiere su nombre: su trabajo es “hacer” o “impulsar” el juego. Son PNJ que actúan como personajes jugadores guiados, ya que dedican todo su juego al objetivo de la trama y el evento. Cómo lo hacen en detalle depende de ellos. Los creadores de juego transportan tramas, misiones y atmósfera. Son los roles secundarios para los jugadores, o a veces para las facciones enemigas, a quienes puedes odiar con fervor. Son la damisela en apuros o la gran hechicera de la que uno puede aprender. Eres un mentor o un sirviente, un caballero fracasado o una reina que toma la decisión correcta (o exactamente la incorrecta), dependiendo de lo que la experiencia más profunda, mejor, más dramática o más emocionante saque a relucir en los participantes. Fuera del juego, siempre conocen el objetivo del evento y ayudan a los jugadores a lo largo del camino. Si es posible, juegan de una manera que automáticamente atrae a los participantes y proporciona lo que necesitan para que otros jugadores encuentren su camino en el juego. También viven momentos emocionales profundos con los participantes dentro del juego, lo que hace que su tarea sea especialmente satisfactoria y emocionante. Tanto para el propio mediapunta como para todos los que lo rodean. Dirigen la acción de forma invisible y garantizan la máxima inmersión, es decir, el entorno en el que se desarrolla el juego de los participantes.
                    </p>
                </div>

            </div>


            <div className='Npcs-single'>
                <div className='Npcs-title'>Facciones de NPC</div>
                <hr className="separator" />
            </div>


            <div className='Npcs-trio'>
                <div className='Npcs-first-one'>
                    <div className='Npcs-title'>Los Skargen</div>
                    <div className='Npcs-text'>
                        <p>
                            Un jugador es una persona que viste un disfraz y encarna un personaje ficticio. Este personaje, su historia y el disfraz los elige el propio jugador. La persona actúa en vivo como parte de la trama del evento y tiene un cierto grado de libertad de acción y puede influir en parte en el resultado de la historia más amplia o de líneas argumentales individuales. Como jugador, declaras tu intención de participar en el juego, involucrarte tanto como sea posible y asegurarte de que tú y los demás jugadores paséis un buen rato. Debido a que Npcs es más o menos como un deporte, usted acepta las reglas del juego y, como jugador, se asegura de que usted y otros puedan jugar sin obstáculos. Tendrás (dependiendo del tipo de evento) tu propio alojamiento y, a menudo, también te proporcionarás tu propia comida. Usted se asegura de que su propio equipo sea seguro para todos los participantes que lo rodean y es responsable de mantenerlo así. Npcs es como un deporte de equipo o como andar en bicicleta en una pista común: solo podemos hacerlo divertido si trabajamos juntos. Se muestran consideración el uno por el otro y se ayudan mutuamente a experimentar el juego. Además se intenta perturbar lo menos posible la inmersión de los demás participantes. Esto es independiente de si juegan “unos contra otros” dentro de la historia. Fuera de la historia, todos los jugadores ayudan juntos para permitir y crear la mejor experiencia posible para todos.
                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage1})` }}
                        ></div>
                    </div>
                </div>
                <div className='Npcs-second-one'>
                    <div className='Npcs-title'>El hielo negro</div>
                    <div className='Npcs-text'>
                        <p>
                            El Hielo Negro (SE en alemán) es el ejército de PNJ más antiguo de ConQuest. Los SE suelen ir a la batalla vestidos de negro y azul y marchan fuertemente armados. ¡Experimentarán cambios interesantes a lo largo de la campaña!
                        </p>
                        <p>
                            Se puede encontrar información sobre el Hielo Negro en los grupos de Facebook (Essence of the Black Ice, Mythodea NSC) y por correo electrónico ( schwarzeseis@burgschneider.com ).
                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage2})` }}
                        ></div>
                    </div>
                </div>
                <div className='Npcs-third-one'>
                    <div className='Npcs-title'>La carne no muerta</div>
                    <div className='Npcs-text'>
                        <p>
                            The Undead Flesh (abreviatura en alemán UF) es un reino que se ha convertido en un reino de no muertos. Estilísticamente, UF está basado en Inglaterra en torno al siglo XII y XIII con una porción de fantasía fanática de no muertos. Imagina caballeros, soldados y campesinos no muertos vestidos de colores oscuros. El maquillaje es imprescindible, al igual que muchas capas de ropa rota y armaduras oxidadas.
                        </p>
                        <p>
                            Se puede encontrar información sobre Undead Flesh en los grupos de Facebook Lairdom (Silent Hill, Corpsedale, Barrenbay y Flowerfield, Mythodea NSC) y por correo electrónico ( untotesfleisch@burgschneider.com ).
                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage3})` }}
                        ></div>
                    </div>
                </div>
            </div>


            <div className='Npcs-pair'>
                <div className='Npcs-first-one'>
                    <div className='Npcs-title'>La peste y el ejército de la duda</div>
                    <div className='Npcs-text'>
                        <p>
                            La Pestilencia y el Ejército de la Duda (a veces llamado Ratio) son dos grupos de batalla de PNJ muy pequeños. La Pestilencia son los infectados, que caminan por el campo de batalla e inspiran miedo entre los jugadores con sus fluidos armados. El Ejército de la Duda son guerreros orientales. Juntos, estos dos pequeños grupos cuentan una historia nueva, trágica y emocionante. ¡Sé parte de ella desde el principio!
                        </p>
                        <p>
                            Puede encontrar información sobre este nuevo y emocionante y trágico capítulo de NPC en Facebook (Family of Doubt), NPC Ning (después de comprar un boleto puede registrarse allí, escríbanos a info@skald.com ) y por correo electrónico ( pest-adz@mythodea.de ).
                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage3})` }}
                        ></div>
                    </div>
                </div>
                <div className='Npcs-second-one'>
                    <div className='Npcs-title'>El Freischärler</div>
                    <div className='Npcs-text'>
                        <p>
                            Los Freischärler, que son como un grupo de partisanos, lucharon durante años en las tierras de los no muertos contra las tropas de Terra Ankor. Las eternas penurias de la vida tras las líneas enemigas los han convertido en una tropa ruda y resistente, que está constantemente a la caza de las cabezas de sus enemigos. Los Freischärler son el lugar adecuado para eliminar a los villanos de forma selectiva y también para llevar a cabo extraños y oscuros secretos. Ya sean nobles o jornaleros, cualquiera puede cobrar recompensas siempre que se respeten las reglas de los Freischärler. Los Freischärler serán uno de los nuevos vínculos entre el juego de la ciudad y el campo de batalla en los próximos años.                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage2})` }}
                        ></div>
                    </div>
                </div>
            </div>


            <div className='Npcs-pair'>
                <div className='Npcs-first-one'>
                    <div className='Npcs-title'>Atterón</div>
                    <div className='Npcs-text'>
                        <p>
                            Atteron es una facción de creadores de juego que acompaña a los jugadores en su traslado al continente sur. El reino de Atteron está gobernado por la reina Jocelyn y está basado en la Inglaterra histórica (alrededor del 800-1400 d. C.). Fuera de su tierra natal, los Atteronianos suelen estar liderados por uno de los seis hijos de la reina, con caballeros (tanto hombres como mujeres) y altos señores y damas de los seis condados de Atteron a su lado. A ellos se les une un séquito de sirvientes, cocineros, doncellas, eruditos, escuderos y soldados.
                        </p>
                    </div>
                    <div className="Npcs-single">
                        <div
                            className="Npcs-image-container"
                            style={{ backgroundImage: `url(${NpcsImage3})` }}
                        ></div>
                    </div>
                </div>
                <div className='Npcs-second-one'>
                    <div className='Npcs-title'>Compañía Carmesí</div>
                    <div className='Npcs-text'>
                        <p>
                            La Crimson Company es una poderosa organización comercial en el juego, comparable a la East India Trading Company. Al igual que el Banner of Knights, la Compañía es un campamento temático independiente. El idioma coloquial en el campamento es el inglés y el objetivo es proporcionar a los participantes internacionales una introducción lo más sencilla y profunda posible al mundo y la trama de Mythodea. El campamento de la Compañía ofrece oportunidades de juego especiales para diferentes clases de personajes dentro de una estructura abierta. Puedes encontrar a la Crimson Company en el distrito del puerto. Por el momento, no puedes acampar allí como jugador, pero en el futuro la Crimson Company, al igual que el “Bund der Ritter”, se convertirá en un campamento independiente.
                        </p>
                    </div>

                </div>
            </div>
            <Footer />
        </div >
    );
}


