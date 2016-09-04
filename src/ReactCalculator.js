import React, { Component } from 'react';
import {
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
  render() {
    return (
      <View style={ Style.rootContainer }>
        <View style={ Style.displayContainer }></View>
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
          <InputButton value={ input } key={ `${r}-${i}` } />
        );
      }
      
      views.push(<View style={ Style.inputRow } key={ `row-${r}` }>{ inputRow }</View>)
    }

    return views;
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
