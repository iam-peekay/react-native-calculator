import React, { Component } from 'react';
import {
    Text,
    TouchableHighlight
} from 'react-native';

import Style from './Style';

export default class InputButton extends Component {
  render() {
    const { onPress, value } = this.props;

    return (
      <TouchableHighlight 
        style={ Style.inputButton }
        underlayColor="#193441"
        onPress={ onPress }
      >
        <Text style={ Style.inputButtonText }>{ value }</Text>
      </TouchableHighlight>
    );
  }
}
