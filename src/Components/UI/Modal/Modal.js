import React from 'react'; 

import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop'

import Aux from '../../../HOC/Auxiliary'

const modal = (props) =>(
    <Aux>
        <Backdrop 
            show={props.showOrderSummary}
            clicked={props.closeModal} />
            <div 
                className={classes.Modal}
                style={{
                    transform: props.showOrderSummary ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.showOrderSummary ? '1': '0'
                }}>
                {props.children}
            </div>
    </Aux>
);

export default modal;