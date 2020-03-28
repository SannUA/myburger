import React from 'react';

import './Logo.css';
import BurgerLogo from '../../assets/images/burger-logo.png.png';

const logo = () => (
    <div className = "Logo">
        <img src = {BurgerLogo} alt = "MyBurger" className = "Logopng"/>
    </div>
);

export default logo;