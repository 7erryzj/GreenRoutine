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
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import DetailScreen from './screens/DetailScreen';
import MailScreen from './screens/MailScreen';
import LoginScreen from './screens/LoginScreen';
import SendMessageScreen from './screens/SendMessageScreen';
import RegisterScreen from './screens/RegisterScreen'


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
  Message:{
    screen: SendMessageScreen
  }
});

const DrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: () =>  
        <Ionicons name="md-home"  size={26}/>
      }
    },
    Map: {
      screen: mapStack,
      navigationOptions: {
        drawerLabel: 'Map',
        drawerIcon: () =>  
        <Ionicons name="md-locate"  size={26}/>
      }
    },
    Mail: {
      screen: MailScreen,
      navigationOptions: {
        drawerLabel: 'Inbox',
        drawerIcon: () =>  
        <Ionicons name="md-mail" size={26}/>
      }
    }
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

const stackNavigationLogin = createStackNavigator({
  Login: {
      screen: LoginScreen,
    },
  Register:{
    screen : RegisterScreen
  },
    DrawerNavigator
},
  { 
    headerMode: 'none'
  }
)

export default createAppContainer(stackNavigationLogin);
