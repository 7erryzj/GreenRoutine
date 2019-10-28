import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,SafeAreaView, ScrollView} from 'react-native';

import LocationInfo from '../components/locationInfo';
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
        const sid = navigation.getParam('SITE_ID');
        const streetName = navigation.getParam('STREET_NAME');
        const desc = navigation.getParam('DESC');

        return (
            <LocationInfo
                header={"Company Name"}
                description={""}
                picture={"https://picsum.photos/700"}
                locationName={streetName}
                firstPara={desc}
                secondPara={"second para"}
                thirdPara={"third para"}
                backfunc={()=>this.props.navigation.navigate('Message', {
                    SITE_ID: sid,
                  })}
                estimatefunc={()=>alert('asd')}
                >
            </LocationInfo>
        );
    }
}