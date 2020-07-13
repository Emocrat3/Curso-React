import React, { Component } from 'react';
import axios from 'axios';
class Articles extends Component {

    state = {
        articles: [],
        status: null
    }
    componentWillMount() {
        this.getArticles();
    }

    getArticles = () => {
        axios.get("https://arthuro-gomez-react.netlify.app/api/articles")
        .then(res =>{
            const data = res.data;//to save your data response
            console.log("----SETTING DATA-----")
            console.log(data)//to see your data response
            this.setState({articles}) //to set your data response
    
            console.log("++++++ALL DATA WAS SETTING++++++")
        }).catch(err=>{
            console.log(err)
        })
    }

    render() {
        console.log(this.state.articles)
        if (this.state.articles.length >= 1) {

            var listArticles = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template">
                        <div className="image-wrap">
                            <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                        </div>

                <h2>{article.title}</h2>
                        <span className="date">
                            {article.date}
                    </span>
                        <a href="#">Leer más</a>

                        <div className="clearfix"></div>
                    </article>
                );
            });
            return (
                <div id="articles">
                    {listArticles}
                </div>
            );
        } else if (this.state.articles.length === 0 && this.state.status === 'success') {
            return (
                <div id="articles">
                    <h2 className="subheader">No hay articulos para mostrar</h2>
                    <p>Todavia no hay contenido en esta sección</p>
                </div>
            );
        } else {
            return (
                <div id="articles">
                    <h2 className="subheader">Cargando</h2>
                    <img src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif"/>
                </div>
            );
        }
    }
}

export default Articles;