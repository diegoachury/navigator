import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class MyScene extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Vista Home</Text>
      <TouchableHighlight onPress={this._renderDash.bind(this)}>
        <View style={styles.button}>
        <Text>siguiente</Text>
        </View>
      </TouchableHighlight>
      </View>
    );
  }

  _renderDash() {
    this.props.navigator.push({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })
  }


}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f50',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC033',
    borderRadius: 3,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
