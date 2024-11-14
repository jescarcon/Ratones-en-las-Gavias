import React, { useState } from 'react';
import './NewPlayer.css';

// Importar las imágenes
import larpImage1 from '/NewPlayers/NewPlayer-1.jpg';
import larpImage2 from '/NewPlayers/NewPlayer-2.jpg';
import larpImage3 from '/NewPlayers/NewPlayer-3.jpg';
import larpImage4 from '/NewPlayers/NewPlayer-4.jpg';
import Footer from '../Main/Footer/Footer';

export default function NewPlayer() {
  return (
    <div className="NewPlayer-Main-container">
        <div className='NewPlayer-section'>
            <div className='NewPlayer-menu-image' style={{ backgroundImage: `url(${larpImage1})` }}></div>
            <div className='NewPlayer-menu-title'> What is LARP?</div>
            <div className='NewPlayer-menu-text'>
                <p>
                Live Action Role Play, or LARP, is an interactive role-playing game characterized by improvisation, acting and ingenuity. The game unfolds when you, the player, make decisions and your efforts either succeed or fail. Immerse yourself in a setting and experience a story as one of its characters. <a>Here you can find more information about what LARP is and how it works.</a>
                </p>
            </div>
        </div>
        <div className='NewPlayer-section'>
            <div className='NewPlayer-menu-image' style={{ backgroundImage: `url(${larpImage2})` }}></div>
            <div className='NewPlayer-menu-title'>NPCs / Play-Makers</div>
            <div className='NewPlayer-menu-text'>
                <p>
                NPCs (non-player characters) can experience just as intense and exciting game play as (free) players. Though they have a fixed set of rules for the appearance, behavior and history of their roles. You help the organizer to bring the intended plot to life, set the framework for the players and provide the desired atmosphere at the event. That is why we are gradually starting to call them “play-makers”. Because through their own play they make the game possible for others. <a>For more information about the NPCs of Mythodea click here.</a>
                </p>
            </div>
        </div>
        <div className='NewPlayer-section'>
            <div className='NewPlayer-menu-image' style={{ backgroundImage: `url(${larpImage3})` }}></div>
            <div className='NewPlayer-menu-title'>Rules and Guidelines</div>
            <div className='NewPlayer-menu-text'>
                <p>Like every game, LARP has rules by which it is played. These rules ensure that the game is fair for everyone. Some rules have to be followed to ensure safety, while others may enrich your roleplay experience. <a>Here you can find the guiding set of rules for Mythodea events as well as the guidelines we use to design our games.</a>
                </p>
            </div>
        </div>
        <div className='NewPlayer-section'>
            <div className='NewPlayer-menu-image' style={{ backgroundImage: `url(${larpImage4})` }}></div>
            <div className='NewPlayer-menu-title'>LARP Dictionary</div>
            <div className='NewPlayer-menu-text'>
                <p>
                IT has to do with computers and LPs are for music, right? Not in the world of LARP. To make sure that you understand LARP-specific words and phrases and thus can follow every conversation at a con, we provide you with a LARP dictionary, where you can find explanations of the most frequently used terms in- and out-of-game. <a>You can find the LARP dictionary here.</a>
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
