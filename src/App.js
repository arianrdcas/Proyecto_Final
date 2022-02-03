import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Componentes/Navbar';
import Footer from './Componentes/Footer';
import Home from './Vistas/Home';
import About from './Vistas/About';
import Blog_single from './Vistas/About';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
        
        <Switch>
          <Route path="/About" exact>
            <About />
          </Route>
          <Route path="/Blog_single" exact>
            <Blog_single />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default (App);


