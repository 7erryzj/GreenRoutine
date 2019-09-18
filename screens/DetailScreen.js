import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

import { Button, ThemeProvider } from 'react-native-elements';

const theme = {
    Button: {
      raised: true,
    },
  };

const backgroundColor = '#0067a7';
export default class DetailScreen extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');
        return (
    <ThemeProvider theme={theme}>    
   
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image
                    source={require('../icons/home-icon.png')}
                    style={{ width: 200, height: 200 }}
                />
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
                    details etcectect
                </Text>
                <Text>itemId: {itemId}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>

            </View>
    </ThemeProvider>);
    }
}