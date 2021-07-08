import React, {useState} from "react";
import styled from 'styled-components';



function App() {

 const [contador, setContador] = useState(0)

  const incremet = () => {
    setContador(contador + 1)
  }

  return (
    <>
    <div>{contador} VEZES</div>
    <button onClick={incremet}>Clique AQUI</button>
    </>
  )
}

export default App;
