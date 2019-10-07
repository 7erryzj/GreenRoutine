import React, { Component } from 'react';
import {
    Text, View, Image, TouchableHighlight,ImageBackground ,Dimensions, FlatList
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import BottomDrawer from '../components/BottomDrawer'
import Animation from 'lottie-react-native';
import anim from '../icons/data.json';
import BottomUpPanel from '../components/TestDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Button, ThemeProvider, Divider } from 'react-native-elements';
console.disableYellowBox = true;

const theme = {
    Button: {
      raised: true,
    },
  };

const ddl = [{
    value: 'Toh',
  }, {
    value: 'Tampines Street 32',
  }, {
    value: 'Tampines Street 41',
  }]
  
  const {height} = Dimensions.get('window');
  const DATA= ["Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component","Some component"];  

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
      }
      
     componentDidMount() {
         
        this.animation.play();
    }

    renderBottomUpPanelContent=()=>{
        return(
            <View>
               <FlatList style={{ backgroundColor: 'black', opacity: 0.7, flex:1}}
                    data={DATA}
                    renderItem={({item}) =>
                                <Text style={{color:'white', padding:20}}>{item}</Text>
                               }
                />
          </View>
        );
    }
    renderBottomUpPanelIcon=()=>{
        return(
        <Ionicons name="md-menu" style={{color:"white"}} size={30}/>
        );
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
        <BottomUpPanel
                      content={this.renderBottomUpPanelContent}
                      icon={this.renderBottomUpPanelIcon}
                      topEnd={height-height*0.8}
                      startHeight={80}
                      headerText={"List of items"}
                      headerTextStyle={{color:"white", 
                                       fontSize: 15}}
                      bottomUpSlideBtn={{display: 'flex',
                                       alignSelf: 'flex-start',
                                       backgroundColor: 'black',
                                       alignItems: 'center',
                                       borderTopWidth: 5}}>
      </BottomUpPanel>

    </ThemeProvider>);
    }
}