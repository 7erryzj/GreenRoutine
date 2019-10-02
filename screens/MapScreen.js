import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,StyleSheet, ActivityIndicator} from 'react-native';
import HeaderComponent from './HeaderComponent';
//import Geojson from 'react-native-geojson';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
//import DropdownList from '../components/DropdownList';
import { Dropdown } from 'react-native-material-dropdown';
import Animation from 'lottie-react-native';
import anim from '../icons/7561-planet2.json';

const c4tdata = require('./cash-for-trash-geojson.json');
const INITIAL_REGION = {
  latitude: 1.290270,
  longitude: 103.851959,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

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
      geoData : c4tdata.features,
      latitude: null,
      longitude: null,
      error:null,
    };
  }

  componentWillMount(){
    console.disableYellowBox = true;
    this.setState({
      loading: true
    })
    /*
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 6000);
    */
  }

  componentDidMount() {
    this.animation.play();
    this.getCurrentPosition();
  }

  getCurrentPosition=()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        _mapView.animateToCoordinate(
          {
            latitude: this.state.latitude,
            longitude: this.state.longitude
          },
          1000
        )
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 7000);
  }

  onChangeText=(value, index, data)=>{
    this.mapRendering(value);
  }

  mapRendering=(condition)=>{
    var arr1 = c4tdata.features.filter(d => d.properties.Name === condition);
    
    this.setState({
      geoData : arr1
    })
  }

    render() {
        return(
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
        <HeaderComponent {...this.props} />
            <MapView
            ref={mapView => {
              _mapView = mapView
            }}
            style={{
                height:500,
                width:500,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
            initialRegion={INITIAL_REGION}
            showsUserLocation={true}
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

          {!!this.state.latitude && !!this.state.longitude && 
            <MapView.Marker
              coordinate={{
                "latitude":this.state.latitude,
                "longitude":this.state.longitude
              }}
              title={"Your Location"}
              pinColor={'#474744'}
          />}
          </MapView>

          <Dropdown
            label='Location Filter'
            data={this.state.ddl}
            dropdownPosition={1}
            onChangeText={this.onChangeText}
          />
          {this.state.loading &&
          <View style={styles.loading}>         
          <Animation
            ref={animation => {
              this.animation = animation;
            }}
            loop={true}
            source={anim}
          />
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
      opacity: 0.8,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center'
  }
})