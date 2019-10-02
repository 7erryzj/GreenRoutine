import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground 
} from 'react-native';
import HeaderComponent from './HeaderComponent';

import Animation from 'lottie-react-native';
import anim from '../icons/data.json';

import { Button, ThemeProvider } from 'react-native-elements';


const theme = {
    Button: {
      raised: true,
    },
  };



export default class HomeScreen extends Component {

    componentDidMount() {
        this.animation.play();
      }
      
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
                <Animation
                    ref={animation => {
                    this.animation = animation;
                    }}
                    loop={false}
                    source={anim}
                />
                
            </View>
        </ImageBackground>
    </ThemeProvider>);
    }
}