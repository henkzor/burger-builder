import React, {Component} from 'react';

import Aux from '../Auxiliary/Auxiliary';

import classes from  './Layout.module.css';

import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render () {
        return (
        <Aux>
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
            <SideDrawer 
                closed={this.sideDrawerClosedHandler} 
                display={this.state.showSideDrawer}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }

};

export default  layout;