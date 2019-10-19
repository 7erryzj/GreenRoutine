import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,StyleSheet, Dimensions} from 'react-native';
import HeaderComponent from './HeaderComponent';
//import Geojson from 'react-native-geojson';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Dropdown } from 'react-native-material-dropdown';
import Animation from 'lottie-react-native';
import anim from '../icons/7561-planet2.json';
import BottomUpPanel from '../components/PopupDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';

console.disableYellowBox = true;
const {height} = Dimensions.get('window'); 
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
      loading : false, //for animation
      ddl : [{
        value: 'Toh',
      }, {
        value: 'Tampines Street 32',
      }, {
        value: 'Tampines Street 41',
      }],
      dbData : [], //for filter
      geoData : [], //for filter
      latitude: null, //for user location
      longitude: null, //for user location
      error:null, //for user location
      checked: false, //for checkbox
    };
  }

  componentWillMount(){
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
    this.fetch();
    this.animation.play();
    this.getCurrentPosition();
  }

  async fetch(){ 
    await fetch('http://192.168.0.102:3000/site')
    .then(response => response.json())
    .then(sites => this.setState({
        dbData : sites,
        geoData : sites
    }))
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
    //clunky solution
    this.setState({
      geoData : this.state.dbData
    })

    //var arr1 = this.state.geoData.filter(d => d.StreetName == condition);
    var arr1 =this.state.geoData.filter(function(item){
      return item.StreetName.includes(condition);
    });
    this.setState({
      geoData : arr1
    })
  }

  renderBottomUpPanelContent=()=>{
    return(
        <View style={{backgroundColor:'white', flex:1}}>

            <View style={{padding:20}}>
                <Dropdown
                    label='Filter by Location'
                    data={this.state.ddl}
                    dropdownPosition={1}
                    onChangeText={this.onChangeText}
                />
                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                />
                <CheckBox
                    center
                    title='Click Here'
                    checked={this.state.checked}
                    onPress={() => this.setState({checked: !this.state.checked})}
                />
            </View>
            
      </View>
    );
  }
  renderBottomUpPanelIcon=()=>{
    return(
    <Ionicons name="md-arrow-dropup" style={{color:"white"}} size={30}/>
    );
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
              style={styles.mapStyle}
              initialRegion={INITIAL_REGION}
              showsUserLocation={true}
            >
              {this.state.geoData.map((location)=>{
                  const longitude = location.XCoordinate;
                  const latitude = location.YCoordinate;
                  const desc = location.Description;
                  const id = location.SiteId;
                  return (
                      <Marker
                      key={id}
                      coordinate={{longitude,latitude}}
                      title="this is title placeholder"
                      pinColor={'green'}
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
                  pinColor={'red'}
              />}

            </MapView>
            <BottomUpPanel
              content={this.renderBottomUpPanelContent}
              icon={this.renderBottomUpPanelIcon}
              topEnd={height-height*0.8}
              startHeight={80}
              headerText={"Filters!"}
              headerTextStyle={{color:"white", 
                                fontSize: 15}}
              bottomUpSlideBtn={{display: 'flex',
                                alignSelf: 'flex-start',
                                backgroundColor: 'black',
                                alignItems: 'center',
                                borderTopWidth: 5}}>
              </BottomUpPanel>
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
  },
  mapStyle:{
    height:500,
    width:500,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})