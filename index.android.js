/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Home from './MyScene.android';
import Dashboard from './Dashboard.android';

// propiedades del navigator
var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index){
    return (
      <TouchableHighlight onPress={() => {
        if(index > 0){
          navigator.pop();
        }
      }}>
      <Text style={{ marginTop: 10 }}>Atras</Text>
      </TouchableHighlight>
    )
  },
  RightButton: function(route, navigator, index){
    return null;
  },
  Title: function(route, navigator, index){
    return(
      <Text style={{ marginTop: 10 }}>
        SSSS
      </Text>
    )
  }
};
//
class taptap extends Component {
  renderScene(route, navigator){
    switch (route.name) {
      case 'Home':
        return(
          <Home navigator={navigator} route={route}></Home>
        );
        case 'Dashboard':
          return(
            <Dashboard navigator={navigator} route={route}></Dashboard>
          );
    }
  }

  render() {
    return (
      <Navigator style= {{ backgroundColor: '#fff' }}
            initialRoute={{name: 'Home'}}
            renderScene={this.renderScene}
            configureScene={(route) => {
              if (route.sceneConfig) {
                return route.sceneConfig
              }
              return Navigator.SceneConfigs.FloatFromRight
            }}
          navigationBar ={
            <Navigator.NavigationBar
            routeMapper = {NavigationBarRouteMapper} />
          }
      />
    );
  }
}



AppRegistry.registerComponent('taptap', () => taptap);
