import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../starwars-component/index';
import Row from '../row/row';

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    //устанавливаем текущий выбранный элемент в selectedItem
    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };
    //затем selectedItem используется для отображения PersonDetails
    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />} />
        );
    }

}