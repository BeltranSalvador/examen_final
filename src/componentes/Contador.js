import React, { useState, useRef } from 'react';

function Contador() {
  const [count, setCount] = useState(0);
// Creamos una referencia para el elemento <audio>
  const audioRef = useRef(null); 

  // Función que incrementa con el sonido
  function handleClick() {
    setCount(count + 1);
    if (audioRef.current) {
      audioRef.current.play(); // Reproduce el sonido
    }
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={handleClick}>Incrementar</button>
      {/* Reproductor de audio con referencia */}
      <audio ref={audioRef} src="/sonido/Boton.mp3" preload="auto" /> 
    </div>
  );
}

export default Contador;
