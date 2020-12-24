import React from 'react'; 

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) =>(

    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" >Burger Builder</NavigationItem> 
        <NavigationItem link="/CheckOut" >Checkout</NavigationItem> 
        <NavigationItem link="/MyPage" >My page</NavigationItem> 
    </ul>
    );

export default navigationItems;