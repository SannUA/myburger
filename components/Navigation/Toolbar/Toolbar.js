import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './ToolbarMenuButton.css';


const toolbar = (props) => (
    <header className = "Toolbar">
    <div onClick = {props.showingSideDrawer} className="DrawerToggle">
    <div></div>
    <div></div>
    <div></div>
    </div>
    
    <Logo />
    <nav className = "Desktoponly">
    <NavigationItems />
    </nav>
    </header>
)

export default toolbar;