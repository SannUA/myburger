import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';
const navigationItems = (props) => (
    <ul className = "NavigationItems">
    <NavigationItem link = "/" active>Burger Builder</NavigationItem>
    <NavigationItem link = "/">Chekout</NavigationItem>
    </ul>
);

export default navigationItems;