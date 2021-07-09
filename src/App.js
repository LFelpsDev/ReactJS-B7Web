import React from 'react';
// import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import {Home} from './pages/Home'
import {Sobre} from './pages/Sobre'
import {Login} from './pages/Login'
// import {Categoria} from './pages/Categoria';

const isLogged = false;

const PrivateRoute = ({ children, ...rest})  => {
  return (
    <Route {...rest}>
      {isLogged ? children : <Redirect to="/login" />}
    </Route>
  );
}


function App() {
 

  
  return (
   <BrowserRouter>
    <header>
      <h1>Meu Site Legal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
         
        </ul>
      </nav>
    </header>
    <hr />

    <Switch>

     <Route exact path="/">
      <Home />
     </Route>

     
     <Route path="/login">
      <Login />
     </Route>

     <PrivateRoute path="/sobre">
      <Sobre />
     </PrivateRoute>

     <Route path="/quem-somos">
      <Redirect to="/sobre"/>
     </Route>

     <Route path="*">
       <h1>PAGINA NÃO ENCONTRADO FAMOSO 404</h1>
     </Route>

    </Switch>

    <footer>
      Todos os Direitos Reservados
    </footer>
   </BrowserRouter>
  );
}

export default App;
