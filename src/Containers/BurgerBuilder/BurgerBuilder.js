import React, { Component } from 'react';

import Burger from '../../Components/Burger/Burger'

import Aux from '../../HOC/Auxiliary'

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <div>Burger</div>
                <Burger />
                <div>Build Controls</div>
            </Aux>

        );
    }

}

export default BurgerBuilder;