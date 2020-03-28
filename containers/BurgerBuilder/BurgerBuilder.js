import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/Auxx';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';

const PRICE_LIST = {
    salad: 15,
    bacon: 25,
    cheese: 20,
    meat: 50
}

class BurgerBuilder extends Component {
    
    
    state = {
            ingridients: null,
            totalPrice: 20,
            disableOrderButton: false,
            toShowOrder: false,
            loading: false
       
        
    }
componentDidMount = () => {
    axios.get('https://myburger-a8f7b.firebaseio.com/ingridients.json').then(response => {this.setState({ingridients: response.data})})
    
}

orderButtonDeactivator (totalIngridients) {
const sum = Object.keys(totalIngridients).map(elKey => {return totalIngridients[elKey];}).reduce((el1, el2) => {return el1 + el2;}, 0);
this.setState ({disableOrderButton: sum > 0})}

addingIngridientHandler = (type) => {
    const oldNum = this.state.ingridients[type];
    const updatedNum = oldNum +1;
    const updatedIngr = {...this.state.ingridients};
    updatedIngr[type] = updatedNum;
    const priceAddition = PRICE_LIST[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;
    this.setState ({ingridients: updatedIngr, totalPrice: updatedPrice});
    this.orderButtonDeactivator(updatedIngr);
    this.dveDvoichkiOdnaVosmerochkaHandler(updatedIngr);}

removeIngridientHandler = (type) => {
    const oldNum = this.state.ingridients[type];
    if (oldNum <= 0) {return};
    const updatedNum = oldNum - 1;
    const updatedIngr = {...this.state.ingridients} 
    updatedIngr[type] = updatedNum
    const priceDedaction = PRICE_LIST[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice - priceDedaction;
    this.setState ({ingridients: updatedIngr, totalPrice: updatedPrice});
    this.orderButtonDeactivator(updatedIngr);
    this.dveDvoichkiOdnaVosmerochkaHandler(updatedIngr);
}

dveDvoichkiOdnaVosmerochkaHandler  = (ingr) => {
    if (ingr.salad === 2 && ingr.bacon === 2 && ingr.cheese === 8 && ingr.meat === 0) {alert('SAS')}}


showOrNotOrderHandler = () => {
    this.setState({toShowOrder: true})
}
showOrNotBackdrop = () => {
    this.setState({toShowOrder: false})
}
orderAccept = () => {
    this.setState({loading: true})
   const order = {
        ingridients: this.state.ingridients,
        price: this.state.totalPrice,
        customer: {
            name: 'Alex',
            adress:{
                street: 'vul.Pushkina, dom.Kolotushkina',
                zipCode: '228',
                country: 'UA'
            }, email: 'azaz@gvrot.com'
        }, delivery: 'fastest',
        
    }
    axios.post('/orders.json', order).then(response => this.setState({loading: false, toShowOrder: false})).catch(error => this.setState({loading: false, toShowOrder: false}))
    //alert("Ваш заказ принят! Спасибо!")
}
    render() {
        const disableButton = {...this.state.ingridients};
        for (let key in disableButton) {
            disableButton[key] = disableButton[key] <= 0
        }
        
        let orderSummary =null
        let burger = <Spinner />
            if(this.state.ingridients) {
                burger = (
                <Aux><Burger ingridients = {this.state.ingridients}/>
                <BuildControls 
                addingIngridients = {this.addingIngridientHandler} 
                removingIngridients = {this.removeIngridientHandler}
                disabling = {disableButton}
                costs = {this.state.totalPrice}
                showingOrder = {this.showOrNotOrderHandler}
                orderButtonDisable = {this.state.disableOrderButton}/></Aux>
                ); 
                orderSummary = <OrderSummary 
                ingridients = {this.state.ingridients}
                notThatOrder = {this.showOrNotBackdrop}
                totalPrice = {this.state.totalPrice.toFixed(2)}
                allIsOk = {this.orderAccept}/>
            }
                if (this.state.loading) {
           orderSummary = <Spinner />
        }
        
        return (
        <Aux>
            
            <Modal show = {this.state.toShowOrder} hideBackdrop = {this.showOrNotBackdrop}> {orderSummary}
            </Modal>
            {burger }
            </Aux>
        )
    }
}

export default BurgerBuilder;