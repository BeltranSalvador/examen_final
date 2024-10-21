import React, { useState } from 'react';

function Calculadora() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

    // Funciones operaciones básicas
  function manejarSuma() {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  }

  function manejarResta() {
    const resta = parseFloat(num1) - parseFloat(num2);
    setResultado(resta);
  }

  function manejarMultiplicacion() {
    const multiplicacion = parseFloat(num1) * parseFloat(num2);
    setResultado(multiplicacion);
  }

  function manejarDivision() {
    if (parseFloat(num2) === 0) {
      setResultado("No se puede dividir por 0");
    } else {
      const division = parseFloat(num1) / parseFloat(num2);
      setResultado(division);
    }
  }

    // Función reinicio de los valores
  function manejarReinicio() {
    setNum1('');
    setNum2('');
    setResultado(null);
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title text-center">Calculadora</h3>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <button className="btn btn-primary me-2" onClick={manejarSuma}>
            Sumar <br></br>
          </button>
          <button className="btn btn-secondary me-2" onClick={manejarResta}>
            Restar <br></br>
          </button>
          <button className="btn btn-success me-2" onClick={manejarMultiplicacion}>
            Multiplicar
          </button>
          <button className="btn btn-danger me-2" onClick={manejarDivision}>
            Dividir
          </button>
          <button className="btn btn-warning" onClick={manejarReinicio}>
            Reiniciar
          </button>
        </div>

        {resultado !== null && (
          <div className="alert alert-info mt-3">
            <strong>Resultado: </strong> {resultado}
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculadora;
