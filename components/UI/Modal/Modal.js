import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Auxx';
import Backdrop from '../Backdrop/Backdrop';


const modal = (props) => (
    <Aux> <Backdrop show = {props.show} hideBackdrop = {props.hideBackdrop}/>
    <div className = "Modal"
         style = {{transform: props.show ? 'translateY(0)' : 'translateY(-1000vh)'}}
         opacity = {{transform: props.show ? '1' : '0'}}>
        {props.children}
    </div></Aux>
);

export default modal;