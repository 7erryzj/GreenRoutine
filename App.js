import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from './screens/HomeComponent';
import InfoComponent from './screens/InfoComponent';

var {height, width} = Dimensions.get('window');

const DrawerNavigator = createDrawerNavigator(
  {
    Home: HomeComponent,
    Info: InfoComponent,
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
