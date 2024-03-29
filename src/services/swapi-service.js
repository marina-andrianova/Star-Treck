export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    getResource = async (url) => {
        //await-ждем пока резултат этого промиса(fetch) не будет доступен.КАк только стает доступен,запишем в res
        const res = await fetch(`${this._apiBase}${url}`);

        //этот код отлавливает ошибки и выводит на экран,если они есть
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };


    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results
            .map(this._transformPerson)

    };

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    };

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results
            .map(this._transformPlanet)
    };

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results
            .map(this._transformStarship)
    };

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };


    getPersonImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    };

    getStarshipImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    };

    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    };

    _extractId = (item) => {
        //используем регулярное выражение т.к. в нашем апи нет id(но есть url)
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    };

    //функция данных для улучшения кода в компоненте(чтобы не копировать и использовать одинаковый код)
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain

        };
    };


    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    };

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            height: person.height,
            mass: person.mass,
        }
    }
}