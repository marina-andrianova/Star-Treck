import React from 'react';
import { PlanetDetails, PlanetList} from '../starwars-component/index';
import {withRouter} from 'react-router-dom';
import Row from "../row/row";


const PlanetPage = ({history, match}) => {
    const {id} = match.params;
    return (
        <Row
            left={<PlanetList onItemSelected={(id)=>history.push(id)}/>}
            right={<PlanetDetails itemId={id}/>}/>
    );
};



export default withRouter(PlanetPage);