import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx';

const sideDrawer = (props) => {
    let hideOrShowSideDrop = ["SideDrawer Close"]
    if (props.show) {
        hideOrShowSideDrop = ["SideDrawer Open"]
    }
    return (
        <Aux>   
            <Backdrop show ={props.show} hideBackdrop ={props.hideBackdrop}/>
            <div className = {hideOrShowSideDrop}>
                <div style = {{height: "11%"}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div> 
        </Aux>
    )
};

export default sideDrawer;