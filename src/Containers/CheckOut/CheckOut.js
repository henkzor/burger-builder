import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary/Auxiliary'

import CheckOutSummary from '../../Components/Order/CheckOutSummary/CheckOutSummary'

class CheckOut extends Component {

    state={
        ingredients:{
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        
        for (let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }

        this.setState({ingredients: ingredients})
    }


    checkOutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkOutContinueHandler = () => {
        this.props.history.replace('/CheckOut/payment-data');
        
    }

    render (){

        return (

            
            <Aux>
                <h1>Check Out</h1>
                <CheckOutSummary 
                    ingredients={this.state.ingredients}
                    CheckOutCancelled={this.checkOutCancelledHandler}
                    CheckOutContinue={this.checkOutContinueHandler}
                    />
            </Aux>
            
            
        );
    }
}

export default CheckOut;