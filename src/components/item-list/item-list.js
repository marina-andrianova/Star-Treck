import React, {Component} from 'react';

import './item-list.css';
import Loading from "../logo-loading/logo-loading";

export default class ItemList extends Component {

//!!ТЕПЕРЬ этот список не берет данные с сервера, а просто отрисовывает список(людей, планет,кораблей)


    state = {
        itemList: null,
    };

    //отображаем список
    componentDidMount() {

        const {getData} = this.props;
//1) возвращает промис(для организации асинхронного кода)
        getData()
        //2)получаем данные из вне (из getData)
            .then((itemList) => {
//3)устанавливает данные в качестве своего State
                this.setState({
//4)отрисовывает данные
                    itemList
                })
            })
    }


    renderItems(arr) {
        return arr.map((item) => {
            // вместо const label = this.props.renderItem(item); чтобы улучшить код в app
            //children-обращение к тому что мы передали в теле элемента(в ItemList в app)
            const label = this.props.children(item);
            const {id} = item;

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }


    render() {
        const {itemList} = this.state;
        if (!itemList) {
            return <Loading/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
