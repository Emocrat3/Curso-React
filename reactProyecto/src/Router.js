import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Importar componentes 

import Header from './components/Header';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Home from './components/Home';
import Error from './components/Error';
import Blog from './components/Blog';
import Formulario from './components/Formulario';


class Router extends Component {

    render() {
        return (

            <BrowserRouter>

                <Header />

               

               


                    {/* Configurar rutas y paginas */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/formulario" component={Formulario}/>
                        <Route exact path="/peliculas" component={Peliculas}/>


                        <Route exact path="/segunda-ruta" component={MiComponente} />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return (
                                <div id="content">
                                    <h1 className="subheader">Página de pruebas</h1>
                                    <h2>
                                        {nombre && !apellidos &&
                                            <React.Fragment>{nombre}</React.Fragment>
                                        }

                                        {nombre && apellidos &&
                                            <React.Fragment>{nombre} {apellidos}</React.Fragment>

                                        }

                                    </h2>
                                </div>
                            );
                        }
                        } />



                        <Route component={Error} />
                    </Switch>

                    

                <div className="clearfix"></div>

                <Footer />

            </BrowserRouter >

        );
    }
}

export default Router;