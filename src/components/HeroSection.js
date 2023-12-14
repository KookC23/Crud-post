import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/rrr.mp4' autoPlay loop muted />
      <h1>LA AVENTURA TE ESPERA</h1>
      <p>Que esperas para unirte a nosotros?</p>
      <div className='hero-btns'>
        <Button
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
         CONTACTANOS
        </Button>
        <Button
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          VER MAS 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;