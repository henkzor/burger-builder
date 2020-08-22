import React from 'react'; 

import classes from './Logo.module.css'

import burgerLogo from '../../Assets/Images/burgerLogo.png'

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="MyBurger logo"/>
    </div>
);

export default logo;