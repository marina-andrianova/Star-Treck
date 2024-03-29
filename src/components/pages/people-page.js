import React from 'react';
import {PersonDetails, PersonList} from '../starwars-component/index';
import Row from '../row/row';
import {withRouter} from 'react-router-dom';

const PeoplePage = ({history, match}) => {
    const {id} = match.params;

    return (
        <Row
            left={<PersonList onItemSelected={(id)=>history.push(id)}/>}
            right={<PersonDetails itemId={id}/>}/>
    );
};

export default withRouter(PeoplePage);