import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import Themes from "../Themes";
import Constants from '../Constants';
import CustomButton from "../components/customButton";
import Font from "../Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../models/Message';
import Map from '../models/Map';
import Animation from 'lottie-react-native';
import anim from '../icons/data.json';

console.disableYellowBox = true;


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:'',
        };
    }
     componentDidMount() {
      this.animation.play();
    }
    login =() =>{
        this.props.navigation.navigate('DrawerNavigator');  
    }
    register =() =>{
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
          <ImageBackground 
          source={require('../icons/bg.jpg')} style={styles.container}>
          <View style={styles.loginContainer}>
            <Animation
                    ref={animation => {
                    this.animation = animation;
                    }}
                    loop={false}
                    source={anim}
                    style={styles.logo}
                />
          </View>
          <View style={styles.inner}>
          <TextInput
                theme={Themes.InputBoxTheme}
                style={{width:350, height:50}}
                label='Username'
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
              />
              <TextInput
                theme={Themes.InputBoxTheme}
                style={{width:350, height:50}}
                label='Password'
                value={this.state.text}
                secureTextEntry={true}
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
        </ImageBackground>
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
loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    borderColor:'black'
},
logo: {
    position: 'absolute',
}
  });