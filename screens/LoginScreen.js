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
import Toast, {DURATION} from 'react-native-easy-toast'

console.disableYellowBox = true;


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          UserName:'',
          UserPassword:'',
          usernameIsValid: true,
          passwordIsValid: true,
          error:null
        };
    }
     componentDidMount() {
      this.animation.play();
    }
    login =() =>{
      //this.fetch();
      this.refs.toast.show('Login Success!', 300, () => {
        this.props.navigation.navigate('DrawerNavigator');  
      });
        
    }
    register =() =>{
        this.props.navigation.navigate('Register');  
    }

    checkEmptyFields = (username, password) => {
      this.setState({usernameIsValid: username.length > 0 , passwordIsValid: password.length > 0});
      if (username.length == 0){
        this.refs.toast.show('Username field is empty!', 300);
        return false;
      }

      if (password.length == 0){
        this.refs.toast.show('Password field is empty!', 300);
        return false;
      }

      if (username.length > 0 && password.length > 0){
        return true;
      }
      return false;
    }

    async fetch(){ 
      if(!this.checkEmptyFields(this.state.UserName, this.state.UserPassword)) {
          return;
      }

      await fetch(Constants.IP_ADDRESS+'/user/' + this.state.UserName + '/' + this.state.UserPassword)
      .then(response => response.json())
      .then((responseJson) => {
           if(responseJson.length == 0)
              alert('Login Fail')
           else
              alert('Login Success')
              
          }).catch((error) => {
              console.error(error);
          });
    }

    
    render() {
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
                value={this.state.UserName}
                onChangeText={text => this.setState({ UserName:text })}
              />
              <TextInput
                theme={Themes.InputBoxTheme}
                style={{width:350, height:50}}
                label='Password'
                value={this.state.UserPassword}
                secureTextEntry={true}
                onChangeText={text => this.setState({ UserPassword:text })}
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
          <Toast ref="toast"/>
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