import React, { Component } from 'react';

import {
    Text, View, Image, TouchableHighlight
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Geojson from 'react-native-geojson';

import MapView, { Marker, Callout } from 'react-native-maps';

const geoData = require('./cash-for-trash-geojson.json');

var data = geoData.features.map(function(item){
    const [x, y, z] = item.geometry.coordinates;
    console.log(y)
});



export default class MapScreen extends Component {
    render() {
        /*
        return (<View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <HeaderComponent {...this.props} />
            <View style={{
                flex: 1,
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Info Screen
                </Text>                
                <TouchableHighlight style={{ 
                                            margin: 20, 
                                            width: 200, 
                                            height: 45,
                                            backgroundColor: 'darkviolet',
                                            padding: 10,
                                            alignItems: 'center',
                                         }}
                    onPress={() => {
                        this.props.navigation.goBack();                        
                    }}>
                    <Text style={{color: 'white', fontSize: 18}}>Back to Home</Text>
                </TouchableHighlight>
            </View>
        </View>)*/
        return(
        <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
        <HeaderComponent {...this.props} />
            <MapView
            style={{
                height:500,
                width:500,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}

            initialRegion={{
              latitude: 1.290270,
              longitude: 103.851959,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}


          >
              {geoData.features.map((location)=>{
                  const [longitude, latitude] = location.geometry.coordinates;
                  const desc = location.properties.description;
                  const name = location.properties.Name;
                  return (
                      <Marker
                      key={name}
                      coordinate={{longitude,latitude}}
                      title="this is title placeholder"
                      onCalloutPress={() => {
                        const { navigate } = this.props.navigation;
                        navigate("Detail");                                             
                    }}
                      >
                      </Marker>
                  )
              })}
          </MapView>
        </View>
          );
    }

    //<Geojson geojson={geoData} />
}