import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

class ReactCalculator extends Component {
  render() {
    return (
      <Text> Hello, World! </Text>
    )
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
