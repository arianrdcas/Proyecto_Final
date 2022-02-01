import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Home from './Vistas/Home';
import About from './Vistas/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/About" exact>
            <About />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default (App);


