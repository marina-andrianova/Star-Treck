import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Loading from "../logo-loading/logo-loading";

export default class PersonDetails extends Component {
    swapiService = new SwapiService();

    state = {
        person: {},
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

//вызывается сразу после обновления компонента(принимает предыдущее props state)
    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

//используется каждый раз при обновлении персонаа
    //если personId не принимает id то не будем делать обновление
    updatePerson() {
        const {personId} = this.props;
        if (!personId) {
            return;
        }
//если же нет то обновим состояние
        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                    loading: false
                });
            });
    }

    render() {

        const {person, loading} = this.state;
        if (!person) {
            return <span>Select a person from a list</span>;
        }
        const diskk = loading ? <Loading/> : null;
        const contentt = !(loading) ? <PersonView person={person}/> : null;

        return (
            <div className="person-details card">
                {diskk}
                {contentt}
            </div>
        );
    }
}

        const PersonView = ({person}) => {
            const {id, name, gender, birthYear, eyeColor} = person;

            return (
                <React.Fragment>
                    <img className="person-image"
                         src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                         alt="character"/>

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

                </React.Fragment>
            )

        }

