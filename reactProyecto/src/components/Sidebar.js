import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Redirect, Link } from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        search:"",
        redirect: false
    }

    redirectToSearch = (e) => {
        e.preventDefault();

        this.setState({
            search: this.searchRef.current.value,
            redirect: true
        });
    }


    render() {

        if(this.state.redirect){
            return(
                <Redirect to={'/redirect'+this.state.search} />
            );
        }

        return (

            <aside id="sidebar">

                <div id="nav-blog" className="sidebar-item">
                    <h3>Personas que han visitado la web</h3>
                    <img src="https://counter3.stat.ovh/private/contadorvisitasgratis.php?c=yawhq6c5gsrpj91ghmuwmbgl9kskx4a6"  title="Contador de usuarios" alt="Contador de usuarios" />
                </div>

                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <Link to={'/blog/crear'} className="btn btn-success">Crear artículo</Link>
                    </div>
                }


                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>

                    <form onSubmit ={this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
                <div id="search" className="sidebar-item">
                    <h3> Contacto </h3>
                    <p>Si quieres saber mas de mí</p>
                    <a href="https://github.com/Emocrat3" target="_blank"> <FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/arthurogomez/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </aside>
        );
    }
}
export default Sidebar;