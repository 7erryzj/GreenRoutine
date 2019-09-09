import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground 
} from 'react-native';
import HeaderComponent from './HeaderComponent';

import { Button, ThemeProvider } from 'react-native-elements';


const theme = {
    Button: {
      raised: true,
    },
  };

export default class HomeScreen extends Component {
    render() {
        return (
    <ThemeProvider theme={theme}>
        <ImageBackground 
        source={require('../icons/bg.jpg')}
        style={{
            flex: 1,
            flexDirection: 'column',
        }}>      
            <HeaderComponent {...this.props} />      
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Home Screen
                </Text>
                <TouchableHighlight style={{ 
                    borderRadius:200,
                    margin: 20, 
                    width: 200, 
                    height: 45,
                    backgroundColor: 'darkviolet',
                    padding: 10,
                    alignItems: 'center',
                    }}
                    onPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate("Map");                                             
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Navigate to Map</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    </ThemeProvider>);
    }
}