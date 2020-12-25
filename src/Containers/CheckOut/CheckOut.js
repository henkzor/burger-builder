import React, { Component } from 'react';
import Aux from '../../HOC/Auxiliary/Auxiliary'
import {Route} from 'react-router-dom';

import CheckOutSummary from '../../Components/Order/CheckOutSummary/CheckOutSummary';
import ContactData from './ContactData/ContactData';

class CheckOut extends Component {

    state={
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let totalPrice = 0;
        

        for (let param of query.entries()){
        
            if (param[0] === 'price'){
                totalPrice = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }

        this.setState({ingredients: ingredients, totalPrice: totalPrice})
    }


    checkOutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkOutContinueHandler = () => {
        this.props.history.replace('/CheckOut/contact-data');
        
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
                    <Route path={this.props.match.path + '/contact-data'} 
                        render={() => (<ContactData ingredients={this.state.ingredients}
                            totalPrice={this.state.totalPrice} />)}
                        />
            </Aux>
            
            
        );
    }
}

export default CheckOut;