import React, {Component} from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Loading from "../logo-loading/logo-loading";

export default class ItemList extends Component {

    swapiService = new SwapiService();

    state = {
        peopleList: null,
    };

    //отображаем список людей
    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

//позволяет сказать что я кликнула по одному из персонажей в списке item-list
    /*для каждого элемента массива создаем лист-item,у которого есть уникальный ключ(id)
    персонажа и при нажатии на строчку мы вызываем функцию */
    renderItems(arr) {
        return arr.map(({id, name}) => { //({id, name}) вместо (person)
            return (
                <li className="list-group-item"
                    key={id}
                    onClick = {() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }


    render() {
        const {peopleList} = this.state;
        if (!peopleList) {
            return <Loading/>
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
