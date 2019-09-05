import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>

          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => {
                const { navigation } = this.props;
                navigation.openDrawer();
            }}
            name="md-menu"
            size={30}
          />
            
        </View>);
    }
}