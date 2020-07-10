import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes 
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';

function holaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Arthuro Gomez";

  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Bienvenido al curso de react de Arthuro Gomez
        </p>
          {holaMundo(nombre, 20)}
          <section className="componentes">

            <MiComponente />
            <Peliculas />
          </section>
        </section>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
