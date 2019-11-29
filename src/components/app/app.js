import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import {PlanetList} from '../starwars-component/index';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages/index';

import './app.css';

export default class App extends Component {

    render() {


        return (
            <div className="stardb-app">
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
                <PlanetsPage/>
                <StarshipsPage/>

            </div>


        );
    }
}
