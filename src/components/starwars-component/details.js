import React from 'react';
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {getPerson, getPlanet, getStarship,
       getPersonImage,getPlanetImage,getStarshipImage} = swapiService;

const PersonDetails = ({itemId}) => {

    return( <ItemDetails itemId={itemId}
                         getData={getPerson}
                         getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="mass" label="Mass"/>
        <Record field="height" label="Height"/>
    </ItemDetails>);
};
const PlanetDetails = ({itemId}) => {

    return( <ItemDetails itemId={itemId}
                         getData={getPlanet}
                         getImageUrl={getPlanetImage}>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
        <Record field="climate" label="Climate" />
        <Record field="terrain" label="Terrain" />
    </ItemDetails>);
};
const StarshipDetails = ({itemId}) => {

    return( <ItemDetails itemId={itemId}
                         getData={getStarship}
                         getImageUrl={getStarshipImage}>
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
        <Record field="passengers" label="Passengers"/>
    </ItemDetails>);
};


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}