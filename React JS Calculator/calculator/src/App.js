import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       input: "",
       previousNumber: "",
       currentNumber: "",
       operator: "",
       isSecondNumber: false
    };
  }

  /* Adds a new number to the calculator. */
  addToInput = val => {

    //if (this.state.isSecondNumber === true){
      // this.setState({ input: "" });   
    //}
    
    this.setState({ input: this.state.input + val });
    
  };
  
  addDecimal = val => {
    // Only add decimal if there is no current decimal point present in the input area.
    // Only add one decimal.
    if (this.state.input.indexOf(".") === -1) {
       this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    // If this.state.input is not empty, then add zero.
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
    //this.setState({ isSecondNumber: false });
  }

  add = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: " " });
    this.setState({ operator: "plus" });

    /*
    if (this.state.isSecondNumber === false){
      this.setState({ isSecondNumber: true });
    }
    else{
      this.setState({ isSecondNumber: false });
    }
    */
  
  };

  subtract = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: " " });
    this.setState({ operator: "subtract" });

  };

  multiply = () => {
    // If the operator already has one.
    if (this.state.operator !== ""){
      this.evaluate();
    }
    else{
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: " " });
      this.setState({ operator: "multiply" });
    }

  };

  divide = () => {
    this.setState({ previousNumber: this.state.input });
    this.setState({ input: " " });
    this.setState({ operator: "divide" });
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;
    this.setState({ isSecondNumber: false });
    //this.setState({ currentNumber: this.state.input});

    switch (this.state.operator) {
        case "plus":
          this.setState({
            input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
            });
            break;  
        case "subtract":
          this.setState({
            input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
            });
            break;
        case "multiply":
           this.setState({
            input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
            });
            break;
        case "divide":
            this.setState({
            input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
            });
            break;
        default:
            break;
    }

    // Resets the operator
    this.setState({ operator: "" });

  }

  render() {
    return (
      <div className="App">
          <div className="calc-wrapper">
              <div className="row">
                  <Input>{this.state.input === "" ? "0" : this.state.input}</Input>
              </div>
              <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.divide}>/</Button>
              </div>
              <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.multiply}>*</Button>
              </div>
              <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.add}>+</Button>
              </div>
              <div className="row">
                  <Button handleClick={this.addDecimal}>.</Button>
                  <Button handleClick={this.addZeroToInput}>0</Button>
                  <Button handleClick={this.evaluate}>=</Button>
                  <Button handleClick={this.subtract}>-</Button>
              </div>
              <div className="row">
                  <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
