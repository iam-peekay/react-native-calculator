import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  Text,
} from 'react-native';

class ReactCalculator extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: '#193441' }}></View>
        <View style={{ flex: 8, backgroundColor: '#3E606F' }}></View>
      </View>
    )
  }
}

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);
