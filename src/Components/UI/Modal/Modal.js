import React, {Component} from 'react'; 

import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop'

import Aux from '../../../HOC/Auxiliary/Auxiliary'

class Modal extends Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showOrderSummary !== this.props.showOrderSummary;
    }
        
    componentWillUpdate(){
        console.log('[Modal] Will Update');
    }

    render(){
        return(
            <Aux>
            <Backdrop 
                show={this.props.showOrderSummary}
                clicked={this.props.closeModal} />
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.showOrderSummary ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.showOrderSummary ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
        </Aux>
        );
    }
}

export default Modal;