import React, { useState, useEffect } from 'react';
import '../UberEatsCounter/UberEatsCounter.css';

export default function UberEatsCounter() {

  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

  useEffect(() => {
    document.getElementById("moeda").innerHTML = 2.00 * value
  },[value])  

  function down() {

  if (value <= 1) {
    setButtonStyle("counter-button-minus-desactive")
  }
  if (value > 0) {
    setValue(value - 1)
  }
}
  function up() {
    setValue(value + 1)
    setButtonStyle("counter-button-minus-active")
  }
  return (
    <div className="counter-wrapper" >
      <button className={buttonStyle} onClick={down}> - </button>

      <p>{value}</p>

      <button className="counter-button-minus-active" onClick={up}> + </button>
      <button id="moeda">R$20,00</button>
    </div>
  )
}

/*React Hooks, utilizando o useStates para aplicar uma inteligência ao Contador, aplicando os estilos e contador;
React Hooks useEffect, utilizado para aplicar efeitos ao nosso contador aplicado o useStates;
*/
