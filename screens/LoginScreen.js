import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView
} from 'react-native';
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import Themes from "../Themes";
import Constants from '../Constants';
import CustomButton from "../components/customButton";
import Font from "../Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../models/Message'
import Map from '../models/Map'


import { ThemeProvider } from 'react-native-elements';
console.disableYellowBox = true;

const theme = {
    Button: {
      raised: true,
    },
  };


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:'',
        };
    }
     componentDidMount() {

    }
    login =() =>{
      //this.test();
        this.props.navigation.navigate('DrawerNavigator');  
    }
    register =() =>{
      //this.test();
        this.props.navigation.navigate('Register');  
    }

    async test(){
      const data = {
        username: "sam",
        password:"333"
      }
      await fetch(Constants.IP_ADDRESS+'/newUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json()) 
      .then(serverResponse => console.log(serverResponse))
    }

    
    render() {
/*
      let asd = Promise.resolve(Map.getMap());
      asd.then(function(v) {
        console.log('inside',v)
      });
*/
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require('../icons/qwrety.png')} />
          </View>
          <View style={styles.inner}>
          <TextInput
                theme={Themes.InputBoxTheme}
                style={{width:200, height:50}}
                label='Username'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                theme={Themes.InputBoxTheme}
                style={{width:200, height:50}}
                label='Password'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
          </View>
          <View style={styles.outer}>
            <CustomButton
                icon="send"
                mode="contained"
                text="Login"
                fontSize={Font.FONT_SIZE_SMALL}
                method={()=>this.login()}
                width={150}
            />
            <CustomButton
                icon="create"
                mode="contained"
                text="Register"
                fontSize={Font.FONT_SIZE_SMALL}
                method={()=>this.register()}
                width={150}
            />
          </View>
        </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 15
    
  },
  inner:{
    flex: 0.5,
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  //test
  container: {
    flex: 1,
    backgroundColor: Constants.lightgreen,
},
container2:{
  flexWrap: 'wrap', 
  alignItems: 'flex-start',
  flexDirection:'row',
},
loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
},
logo: {
    position: 'absolute',
    width: 300,
    height: 100
}
  });