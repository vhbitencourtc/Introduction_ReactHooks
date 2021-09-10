function Counter(){
  let quant = 10;

  function UpContador (){
    quant = quant + 1;
    document.getElementById("counter-box").innerHTML = quant;
    console.log(quant)
  }
  return (
    <>
    <h1 id="counter-box">Contador: {quant}</h1>
    <button onClick={UpContador}>+Up</button>
    </>
  )
};

export default Counter;

/*Lógica do Contador Padrão do ReactJS;
*/