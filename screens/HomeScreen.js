import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground ,Dimensions, FlatList
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Animation from 'lottie-react-native';
import anim from '../icons/data.json';

import { ThemeProvider } from 'react-native-elements';
console.disableYellowBox = true;

const theme = {
    Button: {
      raised: true,
    },
  };


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
        };
      }
      
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