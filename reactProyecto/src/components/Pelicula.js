import React, { Component } from 'react';


class Pelicula extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.pelicula, this.props.indice );
    }

    render() {
        const { titulo, image, link } = this.props.pelicula;

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>

                <h2>{titulo}</h2>

                <a href={link} target="_blank">Ver en netflix</a>

                <button onClick={this.marcar}>
                    Marcar como favorita
                </button>

                <div className="clearfix"></div>
            </article>
        );
    }
}

export default Pelicula;