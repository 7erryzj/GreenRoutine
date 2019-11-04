import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,StyleSheet, Dimensions} from 'react-native';
import HeaderComponent from './HeaderComponent';
//import Geojson from 'react-native-geojson';
import MapView, { Marker, Callout } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { Dropdown } from 'react-native-material-dropdown';
import Animation from 'lottie-react-native';
import anim from '../icons/2523-loading.json';
import BottomUpPanel from '../components/PopupDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CheckBox } from 'react-native-elements';
import Constants from '../Constants'
import Map from '../models/Map'

console.disableYellowBox = true;
const {height, width} = Dimensions.get('window');
const c4tdata = require('./cash-for-trash-geojson.json');
const INITIAL_REGION = {
  latitude: 1.290270,
  longitude: 103.851959,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
var k = 0;
export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false, //for animation
      ddl : [{
        value: 'Show All',
      },{
        value: 'Bedok',
      }, {
        value: 'Bishan',
      }, {
        value: 'Boon Keng',
      },{
        value: 'Bukit Batok',
      },{
        value: 'Bukit Purmei',
      },{
        value: 'Cantonment',
      },{
        value: 'Choa Chu Kang',
      },{
        value: 'Circuit Road',
      },{
        value: 'Clarence Lane',
      },{
        value: 'Crawford Lane',
      },{
        value: 'Dawson Road',
      },{
        value: 'Eunos Crescent',
      },{
        value: 'Everton Park',
      },{
        value: 'Hougang',
      },{
        value: 'Jurong East',
      },{
        value: 'Jurong West',
      },{
        value: 'Jalan',
      },{
        value: 'Tampines',
      },{
        value: 'Woodlands',
      }
    ],
      dbData : [], //for filter
      geoData : [], //for filter
      recData : [],
      latitude: null, //for user location
      longitude: null, //for user location
      error:null, //for user location
      aluminium: false,
      paper:false,
      plastic:false
    };
  }

  UNSAFE_componentWillMount(){
    this.setState({
      loading: true
    })
  }

  componentDidMount() {
    this.fetch();
    this.animation.play();
    this.getCurrentPosition();
  }

  async fetch(){ 
    await fetch(Constants.IP_ADDRESS+'/site')
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
    this.setState({
      geoData : this.state.dbData
    })

    if(condition!='Show All'){
      //var arr1 = this.state.geoData.filter(d => d.StreetName == condition);
        var arr1 =this.state.geoData.filter(function(item){
          return item.StreetName.includes(condition);
        });

        this.setState({
          geoData : arr1
        })
    }

    this.setState({
      recData : this.state.geoData
    })

  }

  toggleAluminium = () =>{

    this.setState((prevState) => {
      return {
          aluminium: !prevState.aluminium
      };
    }, () => {
      if(this.state.aluminium == true){
        var arr1 =this.state.geoData.filter(function(item){
          return item.Name.includes('Aluminium');
        });
        this.setState({
          geoData : arr1
        })
      }
      else{
        this.setState({
          geoData : this.state.recData
        })
      }
  });
    
    
  }

  togglePaper = () =>{

    this.setState((prevState) => {
      return {
          paper: !prevState.paper
      };
    }, () => {
      if(this.state.paper == true){
        var arr1 =this.state.geoData.filter(function(item){
          return item.Name.includes('Paper');
        });
        this.setState({
          geoData : arr1
        })
      }
      else{
        this.setState({
          geoData : this.state.recData
        })
      }
  });
    
    
  }
  togglePlastic = () =>{

    this.setState((prevState) => {
      return {
          plastic: !prevState.plastic
      };
    }, () => {
      if(this.state.plastic == true){
        var arr1 =this.state.geoData.filter(function(item){
          return item.Name.includes('Plastic');
        });
        this.setState({
          geoData : arr1
        })
      }
      else{
        this.setState({
          geoData : this.state.recData
        })
      }
  });
    
    
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
                    title='Aluminium'
                    checked={this.state.aluminium}
                    onPress={() => this.toggleAluminium()}
                />
                <CheckBox
                    center
                    title='Paper'
                    checked={this.state.paper}
                    onPress={() => this.togglePaper()}
                />
                <CheckBox
                    center
                    title='Plastic'
                    checked={this.state.plastic}
                    onPress={() => this.togglePlastic()}
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
                  const streetName = location.StreetName;
                  const sid = location.SiteId;
                  const postal_code = location.PostalCode;
                  const block_num = location.BlockNum;
                  const building_name = location.BuildingName;
                  
                  return (
                      <Marker
                      key={k++}
                      coordinate={{longitude,latitude}}
                      title={streetName}
                      pinColor={Constants.darkgreen}
                      onCalloutPress={() => {
                        this.props.navigation.navigate('Detail', {
                            SITE_ID: sid,
                            STREET_NAME: streetName,
                            DESC: desc,
                            POSTAL_CODE: postal_code,
                            BLOCK_NUM : block_num
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
              headerTextStyle={{color:"black", 
                                fontSize: 20}}
              bottomUpSlideBtn={{display: 'flex',
                                alignSelf: 'flex-start',
                                backgroundColor: Constants.darkgreen,
                                alignItems: 'center',
                                borderTopWidth: 0}}>
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
    height:height,
    width:width,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
})