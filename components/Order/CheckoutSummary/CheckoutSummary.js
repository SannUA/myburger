import React from 'react';

import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';

const chekoutSummary = (props) => {
    return (
        <div className = "CheckoutSummary">
            <h1>У Вас хороший вкус!</h1>
            <Burger ingridients = {props.ingridients}/>
            <button className = "No">Отмена</button>
            <button className = "Yes">Продолжить</button>
        </div>
    )
}

export default chekoutSummary