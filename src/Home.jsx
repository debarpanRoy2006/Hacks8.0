import React from "react";
import { useEffect } from "react";
import { gsap } from 'gsap'
import { SteppedEase } from "gsap";
import './landing.css';
import sponsors from './assets/sponsors.json';
import runPikachu from './assets/images/run-pikachu.gif';
import bikingGirl from './assets/images/bikingGirl.gif';
import logo from './assets/images/logo.png';
import cloudMov from "./assets/images/cloudMov.png";
import clouds1 from "./assets/images/clouds1.png";
import grass from "./assets/images/grass.png";
<<<<<<< HEAD

=======
import pokeball from "./assets/images/pokeball.png";
import ratAnimated from "./assets/images/ratAnimated.png";
import birdAnimated from "./assets/images/birbAnimated.png";
import pokeballs from "./assets/images/pokeballs.png";
>>>>>>> ac911609c7d41e8cc837a7a08f9d6ac7c6b590a5
gsap.registerPlugin(SteppedEase);

const Home = () => {
  useEffect(() => {
    gsap.to('.background-layer.ground', {
      backgroundPosition: '-2048px 0',
      ease: 'none',
      duration: 20,
      repeat: -1
    });
    gsap.to(".background-layer.clouds-bg", {
      backgroundPosition: "-2048px 0",
      ease: "none",
      duration: 40,
      repeat: -1,
    });

  }, []);
  return (
    <>
<<<<<<< HEAD
      <div className="blueBg">
=======
    <img src={logo} className="logo" />
    
      <div className="blueBg">
        
>>>>>>> ac911609c7d41e8cc837a7a08f9d6ac7c6b590a5
        <div
          className="background-layer clouds-bg"
          style={{ backgroundImage: `url(${cloudMov})` }}
        ></div>
<<<<<<< HEAD
        <div
=======
        
        <div          
>>>>>>> ac911609c7d41e8cc837a7a08f9d6ac7c6b590a5
          className="background-layer ground"
          style={{ backgroundImage: `url(${grass})` }}
        >
        </div>
        <div className="comingContainer">
          <img src={clouds1} className="clouds1" />
          <h1 className="coming-soon-text" style={{ fontFamily: 'PokemonFont, Arial, sans-serif' }}>COMING SOON</h1>
          <img src={clouds1} className="clouds1" />
        </div>
        <div className="center-content">
<<<<<<< HEAD

        <img src={logo} className="logo" />
=======
        <img  id ="poke" src={pokeball} className="pokeball"/>
        <img src={ratAnimated} className="ratAnimated"/>
        <img src={birdAnimated} className="birdAnimated"/>
        <img src={pokeballs} className="pokeballs"/>
        
>>>>>>> ac911609c7d41e8cc837a7a08f9d6ac7c6b590a5
          <div className="character-container">
            <img
              className="character-pikachu"
              src={runPikachu}
              alt="Pikachu"
            />
            <img
              className="character-bike"
              src={bikingGirl}
              alt="Character on bike"
            />
          </div>
        </div>

      </div>

        <img src={grass} className="staticGrass"/>


      <div className="grad-1"></div>
      <div className="grad-2"></div>
      <div className="grad-3"></div>
      <div className="grad-4"></div>
      <div className="grad-5"></div>
<<<<<<< HEAD
      <div class="Footercontent">Past Sponsors</div>

  <div className="footer">
        <section className="sponsor-section">
          
=======

  <div className="footer">
        <section className="sponsor-section">
         
>>>>>>> ac911609c7d41e8cc837a7a08f9d6ac7c6b590a5
          <div className="carousel">
            <div className="carousel-track">
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <a key={index} href={sponsor.uri} target="_blank" rel="noopener noreferrer">
                  <img src={sponsor.img} alt={sponsor.name} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;