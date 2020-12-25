import React, {Component} from 'react';

import classes from './ContactData.module.css'

import Button from '../../../Components/UI/Button/Button'

class ContactData extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        } 
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        console.log(this.props.totalPrice);

        //axios request
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact information</h4>

                <form>
                    <input className={classes.Input} type="text" name="name" placeholder= "Name" ></input>
                    <input className={classes.Input} type="email" name="email" placeholder= "E-mail" ></input>
                    <input className={classes.Input} type="text" name="street" placeholder= "Street" ></input>
                    <input className={classes.Input} type="text" name="postalCode" placeholder= "Postal code" ></input>

                    <Button btnType="Danger">CANCEL</Button>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                    
                </form>


            </div>

        )
    }

}

export default ContactData;