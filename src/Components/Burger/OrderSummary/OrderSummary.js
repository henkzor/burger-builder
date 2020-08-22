import React from 'react'; 

import Button from '../../UI/Button/Button'

import Aux from '../../../HOC/Auxiliary'

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return (
            <li key={ingredientKey}>
                <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {props.ingredients[ingredientKey]}
            </li> );
    });


    return(
       <Aux>
           <h3>Your Order</h3>
           <p>A delicous burger with the following ingrdients:</p>
           <ul>
                {ingredientSummary}
           </ul>
           <p>Continue to CheckOut?</p>

           <Button btnType='Success' clicked={props.purchaseContinue}>CONTINUE</Button>
           <Button btnType='Danger' clicked={props.purchaseCancel}>CANCEL</Button>
       </Aux>
    )
};

export default orderSummary;