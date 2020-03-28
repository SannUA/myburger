import React from 'react';
import './Burger.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients).map(igKey => {
return [...Array(props.ingridients[igKey])].map((_, i) => {return <BurgerIngridient key = {igKey + i} type = {igKey}/> });        
    }).reduce((arr, el) => {
    return arr.concat(el)
}, []);
        if (transformedIngridients.length === 0) {
            transformedIngridients = <p>Добавь ингридиентов!</p>
        }
    return (
    <div className="Burger">
        <BurgerIngridient type = "bread-top" />
        {transformedIngridients}
        <BurgerIngridient type = "bread-bottom" />
        
        </div>
    );
}

export default Burger;