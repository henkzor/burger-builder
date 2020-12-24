import React from 'react';

import Burger from '../../Burger/Burger';

import classes from './CheckOutSummary.module.css';

import Button from '../../UI/Button/Button'

const checkOutSummary = (props) => {
    return (
        <div className={classes.CheckOutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width:'100%', margin:'auto '}}>
                <Burger ingredients={props.ingredients}>
                </Burger>
            </div>
            <Button 
                btnType='Danger'
                clicked={props.CheckOutCancelled}>CANCEL</Button>
            <Button 
                btnType='Success' 
                clicked={props.CheckOutContinue}>CONTINUE</Button>
        </div>

    );
}

export default checkOutSummary;