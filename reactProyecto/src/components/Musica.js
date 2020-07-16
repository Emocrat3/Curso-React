import React, {Component} from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Musica extends Component{

    render(){
        return(
            <div id="blog">
            <Slider
                title="Música"
                size="slider-small"
            />

            <div className="center">
                <div id="content">
                <h2 className="subheader">Música usada durante el desarrollo de mi web.</h2>
                    
                <iframe width="400" height="200"  src="https://www.youtube.com/embed/lTRiuFIWV54"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe><br></br>
                
                <iframe width="400" height="200" src="https://www.youtube.com/embed/wAPCSnAhhC8"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe><br></br>

                <iframe width="400" height="200" src="https://www.youtube.com/embed/AdxhXQFMYV8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div>
                <Sidebar blog="false"/>
            </div>
            </div>
            )
        }
        
    }

export default Musica;