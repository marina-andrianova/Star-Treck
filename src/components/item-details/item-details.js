import React, {Component} from 'react';

import './item-details.css';



//item- сам элемент
//field-поле,которое достаем из объекта
//label-как будет выглядить сам ui элемент
const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
};
export {
    Record
};

export default class ItemDetails extends Component {

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

        const {name} = item;


        //отрисовываем всех чайлдов этого объекта(personDetails и starshipDetails)
        //В React есть Api для работы с детьмиБ находится он в React.Children
        return (
            <div className="item-details card">
                <img className="item-image"
                     src={image}
                     alt="item"/>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })//синтаксис кода выше-заменили child на копию и добавили еще и {item}
                        }
                    </ul>

                </div>

            </div>
        );

    }
}