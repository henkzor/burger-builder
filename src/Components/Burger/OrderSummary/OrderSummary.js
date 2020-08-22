import React, {Component} from 'react'; 

import Button from '../../UI/Button/Button'

import Aux from '../../../HOC/Auxiliary/Auxiliary'

class OrderSummary extends Component {
    componentWillUpdate(){
        console.log('[OrderSummary] Will Updated');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(ingredientKey => {
                return (
                    <li key={ingredientKey}>
                        <span style={{textTransform: 'capitalize'}}>{ingredientKey}</span>: {this.props.ingredients[ingredientKey]}
                    </li> );
            })
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicous burger with the following ingrdients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Price: <strong>{this.props.totalPrice.toFixed(2)}$</strong></p>
                <p>Continue to CheckOut?</p>
    
                <Button btnType='Success' clicked={this.props.purchaseContinue}>CONTINUE</Button>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
            </Aux>
        )
    }
}


export default OrderSummary;