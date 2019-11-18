import React, {Component} from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemDetails from '../item-details/item-details';
import Row from '../row/row';
import './app.css';
import SwapiService from "../../services/swapi-service";
// import ListPage from "../page list/page-list";


export default class App extends Component {

    swapiService = new SwapiService();


    render() {

        const {getPerson, getStarship,
            getPersonImage, getStarshipImage} = this.swapiService;
        const personDetails = (<ItemDetails itemId={11}
                                            getData={getPerson}
                                            getImageUrl={getPersonImage}/>);
        const starshipDetails = (<ItemDetails itemId={9}
                                              getData={getStarship}
                                              getImageUrl={getStarshipImage}/>);
        return (
            <div>
                <Header/>
                <RandomPlanet/>
                {/*<ListPage/>*/}
                <Row left={starshipDetails} right={personDetails}/>

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList onItemSelected={this.onPersonSelected}*/}
                {/*                  getData={this.swapiService.getAllPlanets}*/}
                {/*                  renderItem={(item) => item.name}/>*/}
                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className="row mb2">*/}
                {/*    <div className="col-md-6">*/}
                {/*        <ItemList onItemSelected={this.onPersonSelected}*/}
                {/*                  getData={this.swapiService.getAllStarships}*/}
                {/*                  renderItem={(item) => item.name}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    };
};
