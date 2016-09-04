import React, { Component } from 'react';
import {
  Text,
  View,
  AppRegistry,
} from 'react-native';

import Style from './Style';

import InputButton from './InputButton';

// Define the input buttons that will be displayed in the calculator.
const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

class ReactCalculator extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
    }
  }

  render() {
    return (
      <View style={ Style.rootContainer }>
        <View style={ Style.displayContainer }>
          <Text style={ Style.displayText }>
            { this.state.inputValue }
          </Text>
        </View>
        <View style={ Style.inputContainer }>
          { this._renderInputButtons() }
        </View>
      </View>
    );
  }

  /**
     * For each row in `inputButtons`, create a row View and add create an InputButton for each input in the row.
  */

  _renderInputButtons() {
    let views = [];

    for (var r = 0; r < inputButtons.length; r++) {
      let row = inputButtons[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton 
            value={ input }
            key={ `${r}-${i}` }
            highlight={ this.state.selectedSymbol === input }
            onPress={ this._onInputButtonPressed.bind(this, input) }
          />
        );
      }
      
      views.push(<View style={ Style.inputRow } key={ `row-${r}` }>{ inputRow }</View>)
    }

    return views;
  }

  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input);
      case 'string':
        return this._handleStringInput(input);
    }
  }

  _handleNumberInput(number) {
    const currentInputToString = this.state.inputValue.toString();
    let inputValue;

    console.log(number, this.state, "ETF")
    if (currentInputToString === 'Infinity') {
      this._resetInputState.bind(this);
      this.setState({ inputValue: number });
      return;
    }
    
    if (currentInputToString.charAt(currentInputToString.length - 1) === '.') {
      inputValue = this.state.inputValue + number;
    } else {
      inputValue = (this.state.inputValue * 10) + number;
    }

    this.setState({ inputValue: inputValue });
  }

  _handleStringInput(string) {
    switch(string) {
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: string,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
        });
        break;
      case '.':
        const currentInputToString = this.state.inputValue.toString();
        if (currentInputToString.charAt(currentInputToString.length - 1) !== '.') {
          this.setState({ inputValue: this.state.inputValue + '.' });
        }
      case '=':
        let { selectedSymbol, inputValue, previousInputValue } = this.state;
        
        if (!selectedSymbol) return;

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + selectedSymbol + inputValue),
          selectedSymbol: null,
        });
        break;
    }
  }

  _resetInputState() {
    this.setState({
      previousInputValue: 0,
      inputValue: 0,
      selectedSymbol: null,
    });
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
