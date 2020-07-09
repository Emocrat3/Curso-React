import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

// Importar componentes 
import MiComponente from './components/MiComponente';


function holaMundo(nombre, edad){
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al curso de react de Arthuro Gomez
        </p>
        {holaMundo(nombre, 20)}
        
      </header>
      <section className="componentes">

      <MiComponente />

      </section>
    </div>
  );
}

export default App;
