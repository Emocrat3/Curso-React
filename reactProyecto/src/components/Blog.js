import React, { Component } from 'react';
import Articles from './Articles';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Blog extends Component {


    render() {

        return (
            <div id="blog">
                <Slider
                    title="blog"
                    size="slider-small"
                />
                
                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vienen del api rest de node*/}
                        <Articles />
                    </div>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Blog;