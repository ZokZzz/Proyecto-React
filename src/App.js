
/*app.js*/


import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import Monstruo from './components/Mounstro';
import LoadingDoom from './components/loadingDoom';
import { FaGithub } from 'react-icons/fa';
import DoomGame from './components/DoomGameplay';

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [seleccion, setSeleccion] = useState(null);
  const [datoRaro, setDatoRaro] = useState('');
  const [nombre, setNombre] = useState('');
  const [nick, setNick] = useState('');
  const [comentario, setComentario] = useState('');

  const datosRaros = [
    "El sonido del arma de plasma es en realidad un archivo de motor modificado.",
    "Algunos niveles pueden completarse sin disparar ni una sola vez.",
    "El sprite de los cadaveres de los enemigos puede apuntar en ocho direcciones diferentes.",
    "DOOM fue uno de los primeros juegos en permitir mods creados por la comunidad.",
    "En DOOM original, los enemigos tambien pueden pelear entre ellos si se danan por accidente.",
    "El archivo ejecutable de DOOM tenia el nombre en clave ‘DOOM1.WAD’.",
    "El motor grafico usaba ‘binary space partitioning’, una tecnica avanzada para la epoca.",
    "En ciertas versiones, se puede ver la cara del protagonista pixelada tras la pantalla de victoria."
  ];

  const volver = () => {
    setSeleccion(null);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (seleccion === 'Datos') {
      const randomIndex = Math.floor(Math.random() * datosRaros.length);
      setDatoRaro(datosRaros[randomIndex]);
    }
  }, [seleccion]);

  if (loading) return <LoadingDoom />;

  return (
    <div className="App">
      <audio ref={audioRef} autoPlay loop>
        <source src="/soundtrack.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      <button className="audio-toggle" onClick={toggleAudio}>
        {isPlaying ? '🔊' : '🔇'}
      </button>

      <h1>DOOMZone 1993</h1>
      <p>Proyecto React</p>

      {!seleccion && (
        <div className="monstruos-container">
          <div onClick={() => setSeleccion('historia')}>
            <Monstruo nombre="Cacodemon" imagen="/img/Cacodemon.png" titulo="Historia" />
          </div>
          <div onClick={() => setSeleccion('gameplay')}>
            <Monstruo nombre="DoomGuy" imagen="/img/DoomGuy.png" titulo="Jugar" />
          </div>
          <div onClick={() => setSeleccion('Datos')}>
            <Monstruo nombre="Soul" imagen="/img/Soul.png" titulo="Datos Curiosos" />
          </div>
        </div>
      )}

      {seleccion === 'historia' && (
        <div className="contenido-seleccionado">
          <h2>Historia de DOOM (1993)</h2>
          <p>
            Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, mas tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final. Es un ejemplo temprano de graficos "3D" en videojuegos y tiene enemigos y objetos como imagenes 2D en formato de sprites, una tecnica a veces denominada graficos 2.5D.
          </p>
          <button onClick={volver} className="btn-volver">Volver</button>
        </div>
      )}

      {seleccion === 'gameplay' && (
        <div className="contenido-gameplay">
          <h2>Gameplay Clasico</h2>
             <DoomGame />
          <button onClick={volver} className="btn-volver">Volver</button>
        </div>
      )}

      {seleccion === 'Datos' && (
        <div className="contenido-seleccionado">
          <h2>Datos Curiosos</h2>
          <p>{datoRaro}</p>
          <button onClick={volver} className="btn-volver">Volver</button>
        </div>
      )}

      <footer className="doom-footer">
        <p>
          Powered by heavy metal y lineas de codigo. Autor:
          <a
            href="https://github.com/ZokZzz"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <FaGithub style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            ZokZzz
          </a>
          {' '}| DOOM™ © id Software
        </p>
      </footer>
    </div>
  );
}

export default App;
