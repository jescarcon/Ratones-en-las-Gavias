import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa los estilos del carrusel
import { Carousel } from 'react-responsive-carousel';
import './HomePage.css';
import Footer from '../Footer/Footer';

export default function HomePage() {
  const images = [
    '/Main/Gallery/img-1.jpg',
    '/Main/Gallery/img-2.jpg',
    '/Main/Gallery/img-3.jpg',
    '/Main/Gallery/img-4.jpg',
    '/Main/Gallery/img-5.jpg',
    '/Main/Gallery/img-6.jpg',
    '/Main/Gallery/img-7.jpg',
  ];
  const icons = [
    { src: '/Main/Icons/icon-1.png', text: 'Comunidad' },
    { src: '/Main/Icons/icon-2.png', text: 'Historias Épicas' },
    { src: '/Main/Icons/icon-3.png', text: 'Encuentros' },
    { src: '/Main/Icons/icon-4.png', text: 'Múltiples Sistemas' },
  ];
  const img_group = [
    { src: '/Main/Group/img-group-1.jpg' },
    { src: '/Main/Group/img-group-2.jpg' },
    { src: '/Main/Group/img-group-3.jpg' },
    { src: '/Main/Group/img-group-4.jpg' },
    { src: '/Main/Group/img-group-5.jpg' },
    { src: '/Main/Group/img-group-6.jpg' },
    { src: '/Main/Group/img-group-7.jpg' },
    { src: '/Main/Group/img-group-8.jpg' },
    { src: '/Main/Group/img-group-9.jpg' },
    { src: '/Main/Group/img-group-10.jpg' },
    { src: '/Main/Group/img-group-11.jpg' },
    { src: '/Main/Group/img-group-12.jpg' },
  ]

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };


  return (
    <div className="Main-container">
      <div className='Carousel'>
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={4000}
        >
          {images.map((src, index) => (
            <div key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="Home-Icons">
        {icons.map((icon, index) => (
          <div key={index} className="icon-item">
            <div><img src={icon.src} alt={`Icon ${index}`} /></div>
            <div><p>{icon.text}</p></div>

          </div>
        ))}
      </div>

      <hr className="separator" />

      <div className='Intro'>
        <p className='title'>Ratones en las Gavias</p>
        <p>Asociación para los Amantes del Rol en Sevilla - 11 Noviembre 2024  .</p>
        <p>Somos una asociación de rol en Sevilla dedicada a reunir a jugadores y narradores en torno a sistemas de juego variados, creando una comunidad inclusiva y apasionada. Fomentamos la creatividad y el trabajo en equipo en un ambiente acogedor y seguro para todos los niveles de experiencia. Únete a nosotros para explorar nuevas aventuras y compartir grandes momentos.</p>
        <p>Ofrecemos talleres, partidas abiertas y eventos especiales para que cada miembro pueda aprender, jugar y conectar con otros roleros. Ya seas veterano o principiante, siempre encontrarás un lugar en nuestra mesa y una historia por descubrir.Ofrecemos actividades regulares, partidas abiertas y eventos especiales para disfrutar de juegos de rol en todas sus formas. En nuestra asociación, siempre encontrarás un espacio para explorar nuevos sistemas, aprender, y conectar con otros jugadores en Sevilla.</p>
      </div>

      <div className='Systems'>
        <div className="System-img-group">
          <img src='/Main/Group/img-group-1.jpg' alt="img 1" />
          <img src='/Main/Group/img-group-2.jpg' alt="img 2" />
          <img src='/Main/Group/img-group-3.jpg' alt="img 3" />
          <img src='/Main/Group/img-group-4.jpg' alt="img 4" />
          <img src='/Main/Group/img-group-5.jpg' alt="img 5" />
          <img src='/Main/Group/img-group-6.jpg' alt="img 6" />
          <img src='/Main/Group/img-group-7.jpg' alt="img 7" />
          <img src='/Main/Group/img-group-8.jpg' alt="img 8" />
          <img src='/Main/Group/img-group-9.jpg' alt="img 9" />
          <img src='/Main/Group/img-group-10.jpg' alt="img 10" />
          <img src='/Main/Group/img-group-11.jpg' alt="img 11" />
          <img src='/Main/Group/img-group-12.jpg' alt="img 12" />
        </div>

        <div className='Systems-text'>
          <div className='title'>Campaign Setting</div>
          <div className='subtitle'>ConQuest of Mythodea 2025: Fields of Bones</div>
          <p>Mitraspera, the continent you have been colonizing for 20 years now, has been dying since the Cataclysm. But there is hope! A mysterious Third Sister is said to have a solution – but she is outside the fog that impenetrably surrounds Mitraspera. But together you have fought battles, uncovered secrets and passed tests, and thus found a gateway that allows you to cross over into a world still unknown to you.</p>
          <p>At the ConQuest of Mythodea: Fields of Bones, you can finally enter the new continent of Sarkan! In its northernmost region, in the barren, harsh Bone Reach, you hope to find the first clues to the Third Sister – and fear that the Undead King Garvan, who has already traveled ahead, will send his sinister allies against you!</p>
          <p>But this new continent holds far more than just wasteland. New factions and realms, ancient magic, unknown creatures and long-forgotten stories are waiting to be discovered by you. Gain the trust of the Sarkans, forge new alliances, immerse yourself in new cultures, traditions and secrets and write your own legends in the expanding world of Mythodea!</p>
        </div>
      </div>

      <div className='Extra-Info'>
        <div className='Extra-Info-text'>
          <div className='title'>Campaign</div>
          <div className='subtitle'>ConQuest of Mythodea 2025: Fields of Bones</div>
          <p>Mitraspera, the continent you have been colonizing for 20 years now, has been dying since the Cataclysm. But there is hope! A mysterious Third Sister is said to have a solution – but she is outside the fog that impenetrably surrounds Mitraspera. But together you have fought battles, uncovered secrets and passed tests, and thus found a gateway that allows you to cross over into a world still unknown to you.</p>
        </div>
        <div className='Extra-Info-text'>
          <div className='title'>Setting</div>
          <p>Mitraspera, the continent you have been colonizing for 20 years now, has been dying since the Cataclysm. But there is hope! A mysterious Third Sister is said to have a solution – but she is outside the fog that impenetrably surrounds Mitraspera. But together you have fought battles, uncovered secrets and passed tests, and thus found a gateway that allows you to cross over into a world still unknown to you.</p>
          <p>But this new continent holds far more than just wasteland. New factions and realms, ancient magic, unknown creatures and long-forgotten stories are waiting to be discovered by you. Gain the trust of the Sarkans, forge new alliances, immerse yourself in new cultures, traditions and secrets and write your own legends in the expanding world of Mythodea!</p>
        </div>
      </div>



      <div className="Contractible">
        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => toggleSection(1)}>
            <span>Event Information</span>
            <span className="toggle-icon">
              {openSection === 1 ? '-' : '+'}
            </span>
          </div>
          <div className={`collapsible-content ${openSection === 1 ? 'open' : ''}`}>
            <p className='title'>Date</p>
            <p>ConQuest 2025 is a 5-day self-catering tent-con held from 06.08. – 10.08.2025 and takes place around Brokeloh near Hannover.</p>
            <p>Early arrival is possible from 03.08.2025 12:00 noon.</p>
            <p>The regular arrival will be on 06.08.2025. We recommend you to arrive on time, because from the beginning of the game on no cars will be allowed on the grounds and thus you won’t be able to unload near your tent site. The start of the game is after the speech in the camps (Wednesday, approx. 18:30 hrs).</p>
          
          </div>
        </div>

        <hr className="contractible-separator" />

        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => toggleSection(2)}>
            <span>Minors</span>
            <span className="toggle-icon">
              {openSection === 2 ? '-' : '+'}
            </span>
          </div>
          <div className={`collapsible-content ${openSection === 2 ? 'open' : ''}`}>
            <p className='title'>Date</p>
            <p>ConQuest 2025 is a 5-day self-catering tent-con held from 06.08. – 10.08.2025 and takes place around Brokeloh near Hannover.</p>
            <p>Early arrival is possible from 03.08.2025 12:00 noon.</p>
            <p>The regular arrival will be on 06.08.2025. We recommend you to arrive on time, because from the beginning of the game on no cars will be allowed on the grounds and thus you won’t be able to unload near your tent site. The start of the game is after the speech in the camps (Wednesday, approx. 18:30 hrs).</p>
          </div>
        </div>

        <hr className="contractible-separator" />

        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => toggleSection(3)}>
            <span>Rulebook</span>
            <span className="toggle-icon">
              {openSection === 3 ? '-' : '+'}
            </span>
          </div>
          <div className={`collapsible-content ${openSection === 3 ? 'open' : ''}`}>
          Download Rulebook:
          <a href='https://www.holahola.com'>   www.holahola.com</a>
          </div>
        </div>

        <hr className="contractible-separator" />

        <div className="collapsible-section">
          <div className="collapsible-header" onClick={() => toggleSection(4)}>
            <span>Animals</span>
            <span className="toggle-icon">
              {openSection === 4 ? '-' : '+'}
            </span>
          </div>
          <div className={`collapsible-content ${openSection === 4 ? 'open' : ''}`}>
            Content for Title 4
          </div>
        </div>
        <hr className="contractible-separator" />
      </div>

      {/* ...other sections... */}
      <Footer />

    </div>

  );
}

