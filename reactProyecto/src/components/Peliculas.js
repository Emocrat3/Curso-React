import React, { Component } from 'react';
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Peliculas extends Component {

    state = {};

    cambiarTitulo = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "My Neighbor Totoro";
        peliculas[1].titulo = "Howl's moving castle";
        peliculas[2].titulo = "Princess Mononoke";

        this.setState({
            peliculas: peliculas
        });
    }

    cambiarTituloEspanol = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Mi vecino Totoro";
        peliculas[1].titulo = "El castillo ambulante";
        peliculas[2].titulo = "La princesa Mononoke";

        this.setState({
            peliculas: peliculas
        });
    }

    cambiarTituloJapon = () => {
        var { peliculas } = this.state;
        peliculas[0].titulo = "Tonari no Totoro";
        peliculas[1].titulo = "Howl no Ugoku Shiro";
        peliculas[2].titulo = "Mononoke Hime";

        this.setState({
            peliculas: peliculas
        });
    }

    favorita = (pelicula, indice) => {
        this.setState({
            favorita: pelicula
        });
    }

    componentWillMount() {
        this.setState({
            peliculas: [
                { titulo: 'Mi vecino Totoro', image: 'https://i.ytimg.com/vi/qMZFau7LZUA/maxresdefault.jpg', link: 'https://www.netflix.com/cl/title/60032294' },
                { titulo: 'El castillo ambulante', image: 'https://i.ytimg.com/vi/kjV5-_Z_Uys/maxresdefault.jpg', link: 'https://www.netflix.com/cl/title/70028883'},
                { titulo: 'La princesa Mononoke', image: 'https://elbauldelasopiniones.files.wordpress.com/2014/03/princesse_mononoke_front1.jpg', link: 'https://www.netflix.com/cl/title/28630857' }
            ],
            nombre: 'Arthuro Gomez',
            favorita: {}
        });
    }

    render() {
        var pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        };

        return (
            <React.Fragment>
                <Slider
                    title="Peliculas"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content" className="peliculas">

                        <h2 className="subheader">Listado de peliculas</h2>
                        <p>Seleccion de las peliculas favoritas de {this.state.nombre} por el Studio GHIBLI</p>

                        <p>
                            <button onClick={this.cambiarTitulo} style={{ marginRight: '10px' }}>¡En inglés!</button>
                            <button onClick={this.cambiarTituloJapon} style={{ marginRight: '10px' }}>¡En japones!</button>
                            <button onClick={this.cambiarTituloEspanol} style={{ marginRight: '10px' }}>¡Devolver a español!</button>
                        </p>

                        {
                            this.state.favorita.titulo ? (
                                <p className="favorita" style={pStyle}>
                                    <strong>La pelicula favorita es: </strong>
                                    <span>{this.state.favorita.titulo}</span>
                                </p>
                            ) : (
                                    <p>NO HA SELECCIONADO PELICULA FAVORITA</p>
                                )
                        }

                        <div id="articles" className="peliculas">
                            {
                                this.state.peliculas.map((pelicula, i) => {
                                    return (

                                        <Pelicula
                                            key={i}
                                            pelicula={pelicula}
                                            indice={i}
                                            marcarFavorita={this.favorita}
                                        />

                                    )

                                })
                            }

                        </div>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Peliculas;