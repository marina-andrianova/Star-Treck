import React from 'react';
import { StarshipList, StarshipDetails} from '../starwars-component/index';
import {withRouter} from 'react-router-dom';
import Row from "../row/row";
//просто отображат список космических кораблей и при клике выводит корабль на который нажали
//теперь при нажатии переходим на страничку одного конкретного элемента
//Id хранится как часть адреса страницы
const StarshipsPage = ({history, match}) => {
    const {id} = match.params;
    return (
        <Row
            left={<StarshipList onItemSelected={(id)=>history.push(id)}/>}
            right={<StarshipDetails itemId={id}/>}/>
    );
};



export default withRouter(StarshipsPage);