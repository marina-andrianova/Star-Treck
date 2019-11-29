import React, { Component } from "react";
import Loading from "../logo-loading/logo-loading";


const withData = (View, getData ) => {
    return class extends Component {

        state = {
            data: null,
        };

        //отображаем список
        componentDidMount() {
//1) возвращает промис(для организации асинхронного кода)
            getData()
            //2)получаем данные из вне (из getData)
                .then((data) => {
//3)устанавливает данные в качестве своего State
                    this.setState({
//4)отрисовывает данные
                        data
                    })
                })
        }


        render() {

            const {data} = this.state;

            if (!data) {
                return <Loading/>
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export default withData;
