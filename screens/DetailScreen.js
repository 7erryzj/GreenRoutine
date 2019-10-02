import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,SafeAreaView, ScrollView} from 'react-native';

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
        const itemId = navigation.getParam('itemId');
        const otherParam = navigation.getParam('otherParam');
        return (
    
        <ThemeProvider theme={theme}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            source={require('../icons/home-icon.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'black' }}>
                            details etcectect
                        </Text>
                            
                        <Text>itemId: {itemId}</Text>
                        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

                    </View>
                </ScrollView> 
            </SafeAreaView>
        </ThemeProvider>);
    }
}