import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends Component {

    render() {
        return (

            <aside id="sidebar">
                {this.props.blog == "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn btn-success">Crear artículo</a>
                    </div>
                }


                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el artículo que buscas</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" class="btn" />
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