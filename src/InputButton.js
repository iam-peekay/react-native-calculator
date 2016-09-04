import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
  render() {
    const { onPress, value, highlight } = this.props;

    return (
      <TouchableHighlight 
        style={ [Style.inputButton, highlight ? Style.inputButtonHighlighted : null] }
        underlayColor="#193441"
        onPress={ onPress }
      >
        <Text style={ Style.inputButtonText }>{ value }</Text>
      </TouchableHighlight>
    );
  }
}
