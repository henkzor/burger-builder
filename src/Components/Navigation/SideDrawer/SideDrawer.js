import React from 'react'; 

import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import Aux from '../../../HOC/Auxiliary/Auxiliary'

const sideDrawer = (props) =>{

    let attachedClasses = [classes.SideDrawer, classes.Closed];
    if (props.display) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show clicked={props.closed} show={props.display}/> 
            <div 
                className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;