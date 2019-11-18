import React, {Component} from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Loading from "../logo-loading/logo-loading";

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

//вызывается сразу после обновления компонента(принимает предыдущее props state)
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

//используется каждый раз при обновлении персонаа
    //если personId не принимает id то не будем делать обновление
    updateItem() {
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId) {
            return;
        }
//если же нет то обновим состояние
        getData(itemId).then((item) => {
            this.setState({
                item,
                image: getImageUrl(item)
            });
        });
    }

    render() {

        const {item, image} = this.state;
        if (!item) {
            return <span>Select a person from a list</span>;
        }

        const {id, name, gender, birthYear, eyeColor} = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>

                </div>

            </div>
        );

    }
}