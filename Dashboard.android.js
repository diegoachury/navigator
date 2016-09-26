import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
 } from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ marginTop: 100 }}>Vista Dashboard</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#33FF91',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
