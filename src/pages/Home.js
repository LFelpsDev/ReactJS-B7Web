import React from 'react';
import { useHistory } from 'react-router-dom';

export  function Home(){

  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => {
      history.replace('/sobre')
    },2000)
  }

  return (
    <div>
      <h1>TESTANDO HOME</h1>

      <button onClick={handleButton}>Trocar Para Sobre</button>
    </div>
  )
}