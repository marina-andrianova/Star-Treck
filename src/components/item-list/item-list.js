import React from 'react';

import './item-list.css';



const ItemList = (props) => {

    const {data, onItemSelected, children: renderLabel} = props; //делаем связь с безымянной функцией,где сейчас хронится state
    const items = data.map((item) => {
        // вместо const label = this.props.renderItem(item); чтобы улучшить код в app
        //children-обращение к тому что мы передали в теле элемента(в ItemList в app)
        const {id} = item;
        const label = renderLabel(item);


        return (
            <li className="list-group-item"
                key={id}
                onClick={() => onItemSelected(id)}>
                {label}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );

};
export default ItemList;