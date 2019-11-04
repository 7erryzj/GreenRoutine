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
    
    render() {
        const { navigation } = this.props;
        const sid = navigation.getParam('SITE_ID');
        const streetName = navigation.getParam('STREET_NAME');
        const desc = navigation.getParam('DESC');
        const postal_code = navigation.getParam('POSTAL_CODE');
        const block_num = navigation.getParam('BLOCK_NUM');
        const contact_num = navigation.getParam('CONTACT_NUM');
        const avail = this.state.data.map(p => p.Name + '\n');
        return (
          <PaperProvider theme={Themes.CardTheme}>
            <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isVisible: false })}>
              <View style={{ height:500,flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                



                <View style={{ paddingVertical: 20 }}>
                  <Text style={{ fontSize: Constants.FONT_SIZE_MEDIUM }}>
                    Calculator
                  </Text>
                </View>


                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      paddingHorizontal: 20,
                      paddingVertical: 20
                    }}
                  >
                    <View style={{ paddingHorizontal: 50 }}>
                      <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
                        Name
                      </Text>
                    </View>
                    <View style={{ paddingHorizontal: 50 }}>
                      <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
                        Rates
                      </Text>
                    </View>

                    <View style={{ paddingHorizontal: 50 }}>
                      <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
                        Amount (kg)
                      </Text>
                    </View>

                    <View style={{ paddingHorizontal: 50 }}>
                      <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
                        Returns
                      </Text>
                    </View>
                  </View>
                  
                </View>


{this.state.data.map((item)=>{

  if(item.Name == 'Paper'){
    return(
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Name}
            </Text>
          </View>


          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Rate}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <TextInput
              style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setState({
                paper : text,
                totalPaper: (text*item.Rate).toFixed(2)
              })}
              value={this.state.paper}
              keyboardType={'number-pad'}
          />
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {this.state.totalPaper}
            </Text>
          </View>


        </View>
      </View>
    )
  }
  
  if(item.Name == 'Plastic'){
    return(
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Name}
            </Text>
          </View>


          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Rate}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <TextInput
              style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setState({
                plastic : text,
                totalPlastic: (text*item.Rate).toFixed(2)
              })}
              value={this.state.plastic}
              keyboardType={'number-pad'}
          />
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {this.state.totalPlastic}
            </Text>
          </View>


        </View>
      </View>
    )
  }

  if(item.Name == 'Aluminium'){
    return(
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingHorizontal: 20,
            paddingVertical: 20
          }}
        >
          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Name}
            </Text>
          </View>


          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {item.Rate}
            </Text>
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <TextInput
              style={{ width:50, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => this.setState({
                alum : text,
                totalAlum: (text*item.Rate).toFixed(2)
              })}
              value={this.state.alum}
              keyboardType={'number-pad'}
          />
          </View>

          <View style={{ paddingHorizontal: 50 }}>
            <Text style={{ fontSize: Constants.FONT_SIZE_SMALL }}>
              {this.state.totalAlum}
            </Text>
          </View>


        </View>
      </View>
    )
  }


  })}

                
<Button title="Close" onPress={this.toggleModal} />
              </View>
            </Modal>
            <LocationInfo
                locationName={streetName + block_num}
                firstPara={desc}
                secondPara={avail}
                thirdPara={"S"+postal_code +'\n'}
                phonePara={contact_num}
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