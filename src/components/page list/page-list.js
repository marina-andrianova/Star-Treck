import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';


//для сокраения кода в App
export default class ListPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {
        const Row = ({ left, right }) => {
            return (
                <div className="row mb2">
                    <div className="col-md-6">
                        {left}
                    </div>
                    <div className="col-md-6">
                        {right}
                    </div>
                </div>
            );
        };
//все что ниже выносим из return из компоненты APP, чтобы сократить код
// запись в теле функции(второй вариант передачи свойст )
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(item) => (`${item.name} (${item.birthYear})`)}
            </ItemList>
        );

        const personDetails = (<ItemDetails itemId={this.state.selectedPerson} />);

        return (
            <Row left={itemList} right={personDetails} />
        );
    }
}
