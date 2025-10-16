import React from 'react';
import './QuienesSomos.css';
import sasaImage from '../assets/sasa.jpg';
import matiImage from '../assets/mati.jpg';

function QuienesSomos() {
  return (
    <div className="creditosScreen">
      <h1 className="text">CREDITOS</h1>
      <p className="description">
        Pagina hecha por estas dos criaturas:
      </p>
      <div className="imageContainer">
        <img src={sasaImage} alt="Sasa" className="creditsImage" />
        <img src={matiImage} alt="Mati" className="creditsImage" />
      </div>
    </div>
  )
}

export default QuienesSomos