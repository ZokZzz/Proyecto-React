
import React from 'react';
import './Mounstro.css';

function Monstruo({ nombre, imagen, titulo }) {
  return (
    <div className="monstruo-card">
      <img src={imagen} alt={nombre} className="monstruo-img" />
      <h2>{nombre}</h2>
      <h3 className="titulo">{titulo}</h3> 
    </div>
  );
}

export default Monstruo;
