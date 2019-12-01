import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
// import {PlanetList} from '../starwars-component/index';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages/index';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';

export default class App extends Component {

    render() {


        return (
            <Router>
                <div className="stardb-app">
                    <Header/>
                    <RandomPlanet/>
                    <Route path="/"
                           render={() => <h2>Welcome to my project StarDB</h2>}
                           exact/>
                    <Route path="/people/:id?" component={PeoplePage}/>
                    <Route path="/planets/:id?" component={PlanetsPage}/>
                    <Route path="/starships/:id?" component={StarshipsPage}/>

                </div>
            </Router>

        );
    }
}
