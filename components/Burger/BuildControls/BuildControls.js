import React from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: "Капустка", type: "salad"},
    {label: "Бекончик", type: "bacon"},
    {label: "Сырок", type: "cheese"},
    {label: "Мяско", type: "meat"}
]

const buildControls = (props) => (
    <div className = "BuildControls">
        <p>Это чудо кулинарии стоит <strong>{props.costs.toFixed(2)}</strong> грн</p>
        {controls.map(engr => (<BuildControl key = {engr.label} 
                                             ingridientMark = {engr.label} 
                                             adding = {() => props.addingIngridients(engr.type)}
                                             removing = {() => props.removingIngridients(engr.type)}
                                             disabling = {props.disabling[engr.type]}/>))}
        <button className = "OrderButton" 
                disabled = {!props.orderButtonDisable}
                onClick = {props.showingOrder} >ПОДТВЕРДИТЬ ЗАКАЗ</button>
    </div>
)

export default buildControls;