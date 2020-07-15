import React, { Component } from 'react';
import Articles from './Articles';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Search extends Component {


    render() {
        var searched = this.props.match.params.search;
        return (
            <div id="blog">
                <Slider
                    title={'Busqueda: '+ searched}
                    size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        {/*Listado de articulos que vienen del api rest de node*/}
                        <Articles 
                            search={searched}
                        />
                    </div>
                    <Sidebar
                        blog="true"
                    />
                </div>
            </div>
        );
    }
}

export default Search;