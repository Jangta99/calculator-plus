import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    /* Checks to see if a square is a number or operator.
    Numbers and "." and "=" will be the standard color, 
    while operators will have a special color. */
    isOperator = val => {
        return !isNaN(val) || val === "." || val === "=";
    }

    /* Sets the normal color or operator color here. */
    render() {
        return (
            <div 
                className={`Button ${this.isOperator(this.props.children) ? "" : "operator"}`}
                onClick = {() => this.props.handleClick
                (this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}

export default Button;
