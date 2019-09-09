import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground 
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
        return (
    <ThemeProvider theme={theme}>    
   
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
                    details etcectect
                </Text>

            </View>
    </ThemeProvider>);
    }
}