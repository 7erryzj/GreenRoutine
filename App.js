import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import DetailScreen from './screens/DetailScreen';

var {height, width} = Dimensions.get('window');
const backgroundColor = '#0067a7';


const mapStack = createStackNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  Detail: {
    screen: DetailScreen,
  },
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () =>  
        <Image
          source={require('./icons/home-icon.png')}
          style={{ width: 26, height: 26, tintColor: backgroundColor }}
        />
      }
    },
    Map: {
      screen: mapStack,
      navigationOptions: {
        drawerLabel: 'Map',
        drawerIcon: () =>  
        <Image
          source={require('./icons/info-icon.png')}
          style={{ width: 26, height: 26, tintColor: backgroundColor }}
        />
      }
    },
  },
  {
    hideStatusBar: false,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    contentOptions: {
      activeTintColor: 'green',
      activeBackgroundColor: '#D3D3D3',
    },
  }
);

export default createAppContainer(DrawerNavigator);
