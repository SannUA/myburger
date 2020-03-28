import React from 'react';

import Aux from '../../../hoc/Auxx';
import './OrderSummary.css';

const orderSummary = (props) => {
    
    const ingridients = Object.keys(props.ingridients).map(ingKey => {return <li key = {ingKey} style = {{textAlign: "left"}}>{ingKey}: {props.ingridients[ingKey]}</li>});
    
    return( 
        <Aux>
            <h4>Ваш Заказ:</h4>
            <p>Вы заказали бургер со следующими ингридиентами:</p>
            <ul>
            {ingridients} 
            </ul>
            <p><strong>Общая стоимость: {props.totalPrice} грн.</strong></p>
            <p>Все верно?</p>    
            <button onClick = {props.notThatOrder} 
                    className = "No">Не совсем</button>
            <button onClick = {props.allIsOk} 
                    className = "Yes">Да, все ок!</button>                                                 
        </Aux>
                                                          )
}

export default orderSummary;