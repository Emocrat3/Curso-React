import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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

    render() {
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

                            <Link to="/blog" className="btn btn-danger">Eliminar</Link>
                            <Link to="/blog" className="btn btn-warning">Editar</Link>


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