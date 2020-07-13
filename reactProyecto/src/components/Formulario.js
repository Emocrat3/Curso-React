import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Formulario extends Component {

    nombreRef = React.createRef();
    apellidosRef = React.createRef();
    bioRef = React.createRef();
    hombreRef = React.createRef();
    mujerRef = React.createRef();
    otroRef = React.createRef();

    state = {
        user: {}
    };

    recibirFormulario = (e) => {
        e.preventDefault();
        var genero = 'hombre';

        if (this.hombreRef.current.checked) {
            genero = this.hombreRef.current.value;
        } else if (this.mujerRef.current.checked) {
            genero = this.mujerRef.current.value;
        } else {
            genero = this.otroRef.current.value;
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            bio: this.bioRef.current.value,
            genero: genero
        };

        this.setState({
            user: user
        });

    }

    render() {
        if (this.state.user.nombre) {
            var user = this.state.user;
        }

        return (
            <div id="formulario">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        <h1 className="subheader">Formulario</h1>
                        {/*Mostrar datos del formulario*/}
                        {
                            this.state.user.nombre &&
                            <div id="user-data">
                                <h4>Estos datos se guardaran en la base de datos</h4>
                                <p>Nombre: <strong>{user.nombre}</strong></p>
                                <p>Apellidos: <strong>{user.apellidos}</strong></p>
                                <p>Biografia: <strong>{user.bio}</strong></p>
                                <p>Genero: <strong>{user.genero}</strong></p>

                            </div>
                        }
                        {/*Crear un formulario*/}

                        <form className="mid-form" onSubmit={this.recibirFormulario} onChange={this.recibirFormulario}>
                            <div class="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input type="text" name="apellidos" ref={this.apellidosRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.hombreRef} /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.mujerRef} /> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.otroRef} /> Otro
                        </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Enviar" class="btn btn-success" />

                        </form>

                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>
        );
    }
}

export default Formulario;