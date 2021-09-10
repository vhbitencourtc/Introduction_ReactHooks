import { useState } from 'react';

function SmartCounter() {
  const [quant, UpContador] = useState(1);

  return (
    <>
      <h1>Contador: {quant}</h1>
      <button onClick={() => UpContador(quant + 1)}>+Up</button>
    </>
  )
};

export default SmartCounter;

/*Lógica do Smart Contador Padrão do ReactJS Hooks;
*/