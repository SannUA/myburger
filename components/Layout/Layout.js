import React, { Component } from 'react';

import Aux from '../../hoc/Auxx';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showBackdrop: false
    }
showingSideDrawerHandler = () => {
    this.setState({showBackdrop: true})
}

hideBackdropHandler = () => {
    this.setState({showBackdrop: false})
}
    render() {
        return (
        <Aux>
            <Toolbar showingSideDrawer = {this.showingSideDrawerHandler}/>
            <SideDrawer show = {this.state.showBackdrop} hideBackdrop = {this.hideBackdropHandler}/>
            <main className = "content">{this.props.children}</main>
        </Aux>
    )
        
    }
} 

export default Layout