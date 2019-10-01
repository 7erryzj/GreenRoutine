import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,StyleSheet, ActivityIndicator} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Geojson from 'react-native-geojson';
import MapView, { Marker, Callout } from 'react-native-maps';
//import DropdownList from '../components/DropdownList';
import { Dropdown } from 'react-native-material-dropdown';

const c4tdata = require('./cash-for-trash-geojson.json');

/*
var data = geoData.features.map(function(item){
    const [x, y, z] = item.geometry.coordinates;
    //console.log(y)
});
*/



export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      ddl : [{
        value: 'kml_1',
      }, {
        value: 'kml_2',
      }, {
        value: 'kml_3',
      }],
      geoData : c4tdata.features
    };
  }

  componentWillMount(){
    console.disableYellowBox = true;
    console.log('First this called');

    this.setState({
      loading: true,
    })

    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 6000);
  }

  componentDidMount() {
    //placeholder
  }

  onChangeText = (value, index, data) => {
    this.mapRendering(value);
  };

  mapRendering = (condition) =>{

    var arr1 = c4tdata.features.filter(d => d.properties.Name === condition);
    
    this.setState({
      geoData : arr1
    })
    
    
  };

    render() {
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
              {this.state.geoData.map((location)=>{
                  const [longitude, latitude] = location.geometry.coordinates;
                  const desc = location.properties.Description;
                  const name = location.properties.Name;
                  return (
                      <Marker
                      key={name}
                      coordinate={{longitude,latitude}}
                      title="this is title placeholder"
                      onCalloutPress={() => {
                        //const { navigate } = this.props.navigation;
                        //navigate("Detail");
                        this.props.navigation.navigate('Detail', {
                            itemId: 8886,
                            otherParam: desc,
                          });                                           
                    }}
                      >
                      </Marker>
                  )
              })}
          </MapView>

          <Dropdown
            label='Location Filter'
            data={this.state.ddl}
            dropdownPosition={1}
            onChangeText={this.onChangeText}
          />

          {this.state.loading &&
          <View style={styles.loading}>
              <ActivityIndicator/>
          </View>}
        </View>
        );
    }
}

const styles = StyleSheet.create({
  loading: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      opacity: 0.5,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
  }
})