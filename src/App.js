
import React, { useState } from 'react'; // Solo importamos React una vez
import Calculadora from './componentes/Calculadora';
import Contador from './componentes/Contador'; // Importar el contador
import Camara from './componentes/Camara';


function App() {


  return (
    <div className="container text-center">
      <hr/>
      <div className="row">
        <div className="col">
          <Calculadora />
        </div>
        <div className="col">
        <Contador />
        </div>
        <div className="col">
        <Camara />
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default App;
