import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';
import './random-planet.css';
import Loading from "../logo-loading/logo-loading";
import Error from "../error/error";

export default class RandomPlanet extends Component {
    //подгружаем данные с сервера
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    //компонент сам себя обнoвляет,когда данные с сервера придут
    componentDidMount() { //вместо конструктора!!!(про жизненный цикл компонентов)
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    //вызывается перед тем как компонент будет удален. Проводим очистку ресурса setInterval
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false //когда загрузилась планета, значок загрузки должен уйти
        });
    };

    //отлавливаем ошибки(если такой планеты нет в api)
    onError = (err) => {
        this.setState({
            error: true,
            loading: false//если произошла ошибка,то наш спинер тоже не показывается
        })
    };

    //функция для работы с сервером
    updatePlanet = () => {
        //выбираем id случайным образом тк у нас компонент RandomPlanet
        const id = Math.floor(Math.random() * 20) + 2;
        this.swapiService.getPlanet(id)
        //копируем значение из той планет что получили по id в state
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const {planet, loading, error} = this.state;

        const errorMessage = error ? <Error/> : null;
        const disk = loading ? <Loading/> : null;
        const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron">
                {errorMessage}
                {disk}
                {content}
            </div>
        );
    }
}

//работаем над темБчтоб значок загрузки отображался в самой компоненте
const PlanetView = ({planet}) => {

    const {id, population, rotationPeriod, diameter, name} = planet;

    return (
        //Fragment нужен только для того чтобы сгрупировать элементы,вместо div
        //P.S. render может вернуть только один элемент (div)
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};