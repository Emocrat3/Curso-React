import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator';
import swal from 'sweetalert';
import ImageDefault from '../assets/images/default.jpg';


// Recoger el ID del articulo a editar de la URL 

// Crear un metodo para sacar el objeto del api 

// Rellenar el formulario con esos datos

// Actualizar el objeto haciendo una peticion al backend

class EditArticle extends Component {
    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();
    articleId = null;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount() {
        this.articleId = this.props.match.params.id;
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.'
            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });
        this.validator.showMessages();
        this.forceUpdate();
    }

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar el state con el formulario
        this.changeState();

        if (this.validator.allValid()) {
            // Hacer una peticion por post para guardar el articulo

            axios.put(this.url + 'article/'+ this.articleId, this.state.article)
                .then(res => {

                    if (res.data.article) {
                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        });

                        swal(
                            'Articulo modificado',
                            'El articulo ha sido modificado correctamente',
                            'success'
                        )

                        //Subir la imagen
                        if (this.state.selectedFile !== null) {

                            // Sacar el id del articulo guardado
                            var articleId = this.state.article._id;

                            // Crear form data y añadir fichero 
                            const formData = new FormData();

                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            );

                            // Peticion AJAX
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {
                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        });
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        });


                                        swal(
                                            'ERROR',
                                            'Fallo al modificar el articulo, intentalo de nuevo.',
                                            'error'
                                        )
                                    }
                                });

                        } else {
                            this.setState({
                                status: 'success'
                            });
                        }

                    } else {

                        this.setState({
                            status: 'failed'
                        });
                    }
                });
        } else {
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    render() {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />

        }

        var article = this.state.article;
        return (
            <div className="center">
                <section id="content">

                    <h1 className="subheader">Editar articulo</h1>

                    {this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>

                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState} />

                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>

                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>

                            <div className="form-group">
                                <label htmlFor="file0">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} />

                                <div className="image-wrap">
                                    {article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} className="thumb"/>
                                    ) : (
                                            <img src={ImageDefault} alt={article.title} className="thumb"/>
                                        )

                                    }
                                </div>
                            </div>

                            <div className="clearfix"></div>
                            <input type="submit" value="Guardar" className="btn btn-success" />

                        </form>

                    }

                    {!this.state.article.title &&
                        <img src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif" />
                    }

                </section>

                <Sidebar />
            </div>
        );
    }
}

export default EditArticle;