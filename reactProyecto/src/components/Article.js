import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import Moment from 'react-moment';
import 'moment/locale/es';
import ImageDefault from '../assets/images/default.jpg';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount() {
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;

        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: 'success'
                });
            }).catch(err => {
                this.setState({
                    article: {},
                    status: false
                });
            });
    }

    deleteArticle = (id) => {

        swal({
            title: "¿Estas seguro de eliminar el articulo?",
            text: "Borraras permanentemente este articulo!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.url + 'article/' + id)
                        .then(res => {

                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            });


                            swal(
                                'Articulo borrado',
                                'El articulo ha sido borrado correctamente',
                                'success'
                            )

                        });
                } else {
                    swal("Tranquilo, no se ha borrado nada!");
                }
            });
    }

    render() {

        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        }

        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">

                    {article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {article.image !== null ? (
                                    <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                ) : (
                                        <img src={ImageDefault} alt={article.title} />
                                    )

                                }
                            </div>

                            <h1 className="subheader">{this.state.article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            } className="btn btn-danger">Eliminar</button>
                            <Link to={'/blog/editar/'+article._id} className="btn btn-warning">Editar</Link>


                            <div className="clearfix"></div>
                        </article>
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no exíste</h2>
                            <p>Intentalo de nuevo mas tarde.</p>
                        </div>

                    }

                    {!this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando</h2>
                            <img src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif" />
                        </div>

                    }


                </section>
                <Sidebar />

            </div>
        );
    }

}

export default Article;