import React, { Component } from 'react';
import {Text, View, Image, TouchableHighlight,SafeAreaView, ScrollView,TextInput} from 'react-native';
import {Provider as PaperProvider } from "react-native-paper";
import Themes from "../Themes";

import LocationInfo from '../components/locationInfo';
import Modal from "react-native-modal";
import { Button, ThemeProvider } from 'react-native-elements';
import Constants from '../Constants';
import { Col, Row, Grid } from "react-native-easy-grid";
var k =0;
export default class DetailScreen extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data : [],
          isModalVisible: false,
          paper:'',
          plastic:'',
          alum:'',
          totalPaper:0,
          totalPlastic:0,
          totalAlum:0
        };
    }
    componentDidMount() {
      this.fetch();
    }

    async fetch(){ 
      const { navigation } = this.props;
      const sid = navigation.getParam('SITE_ID');

      await fetch(Constants.IP_ADDRESS+'/recyclables/'+sid)
      .then(response => response.json())
      .then(recyclables => this.setState({
          data : recyclables
      }))
    }

    toggleModal = () => {
      this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    renderPaper() {
      return (
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
              <View style={{ flex: 1, alignSelf: 'stretch' }} />
          </View>
      );
    }
    
    render() {
        const { navigation } = this.props;
        const sid = navigation.getParam('SITE_ID');
        const streetName = navigation.getParam('STREET_NAME');
        const desc = navigation.getParam('DESC');
        return (
          <PaperProvider theme={Themes.CardTheme}>
            <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isVisible: false })}>
              <View style={{ height:300,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Text>Calculator</Text>
                <View style={{ flex: 1,alignItems:'center'}}>
                <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
                        <Text>Name</Text>
                        <Text>Rates</Text>
                        <Text>Amount (kg)</Text>
                        <Text>Returns</Text>
                </View>
                {this.state.data.map((item)=>{

                  if(item.Name == 'Paper'){
                    return(
                      <View style={{flexDirection:'row', alignItems:'center', alignContent:'stretch',padding:10}} key={k++}>
                        <Text key={k++}>{item.Name}</Text>
                        <Text key={k++}>{item.Rate}</Text>
                        <TextInput
                          style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={text => this.setState({
                            paper : text,
                            totalPaper: (text*item.Rate).toFixed(2)
                          })}
                          value={this.state.paper}
                          keyboardType={'number-pad'}
                        />
                        <Text key={k++}>{this.state.totalPaper} </Text>
                      </View>
                    )
                  }
                  
                  if(item.Name == 'Plastic'){
                    return(
                      <View style={{flexDirection:'row', alignItems:'center',padding:10}} key={k++}>
                        <Text key={k++}>{item.Name}</Text>
                        <Text key={k++}>{item.Rate}</Text>
                        <TextInput
                          style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={text => this.setState({
                            plastic : text,
                            totalPlastic: (text*item.Rate).toFixed(2)
                          })}
                          value={this.state.plastic}
                          keyboardType={'number-pad'}
                        />
                        <Text key={k++}>{this.state.totalPlastic} </Text>
                      </View>
                    )
                  }

                  if(item.Name == 'Aluminium'){
                    return(
                      <View style={{flexDirection:'row', alignItems:'center', alignContent:'stretch',padding:10}} key={k++}>
                        <Text key={k++}>{item.Name}</Text>
                        <Text key={k++}>{item.Rate}</Text>
                        <TextInput
                          style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
                          onChangeText={text => this.setState({
                            alum : text,
                            totalAlum: (text*item.Rate).toFixed(2)
                          })}
                          value={this.state.alum}
                          keyboardType={'number-pad'}
                        />
                        <Text key={k++}>{this.state.totalAlum} </Text>
                      </View>
                    )
                  }

                  })}
                </View>
                
                <Button title="Close" onPress={this.toggleModal} />
              </View>
            </Modal>
            <LocationInfo
                header={"Company Name"}
                description={""}
                locationName={streetName}
                firstPara={desc}
                secondPara={"second para"}
                thirdPara={"third para"}
                backfunc={()=>this.props.navigation.navigate('Message', {
                    SITE_ID: sid,
                  })}
                estimatefunc={()=>this.toggleModal()}
                >
            </LocationInfo>
          </PaperProvider>
        );
    }
}