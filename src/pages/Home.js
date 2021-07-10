import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

function Home(props){

  let history = useHistory();

  const handleButton = () => {
    setTimeout(() => {
      history.replace('/sobre')
    },2000)
  }

  const handleFelps = () => {
    props.setName('Felpzada')
  }

  const handleIncrement = () => {
    props.increment();
  }

  return (
    <div>
      <h1>TESTANDO HOME</h1>

      Nome: {props.name}<br/>
      CONTAGEM: {props.contador}<br/>

      <button onClick={handleFelps}>SetarNome</button>

      <br /><br />
      <button onClick={handleButton}>Trocar Para Sobre</button>
      <button onClick={handleIncrement}>+1</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.usuario.name,
    contador: state.usuario.contador
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (newName) => dispatch({
      type: 'SET_NAME',
      payload: { name:newName }
    }),
    increment: () => dispatch({
      type: 'INCREMENT_COUNT',
    })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)