import React, { Component } from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Keyboard, ImageBackground
} from 'react-native';
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import Constants from '../Constants';
import CustomButton from "../components/customButton";
import Font from "../Constants";


export default class RegisterScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            UserName:'',
            UserPassword:'',
        }
    }
    
    signup=()=>{
        this.sendDB();
        //TOAST
        this.props.navigation.navigate('Login'); 
    }


    async sendDB(){ 
    
        const data = {
            username: this.state.UserName,
            password: this.state.UserPassword
        }
        await fetch(Constants.IP_ADDRESS+'/newUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
            }).then((response) => response.json())
                .then((responseJson) => {
                }).catch((error) => {
                        
                console.error(error);
                }); 
      }

    render() {
        return(
            <ImageBackground 
          source={require('../icons/bg.jpg')} style={styles.container}>
          <View style={styles.loginContainer}>
              <Text style={{fontSize:34, fontStyle:'bold'}}> Sign up</Text>
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
                text="Back"
                fontSize={Font.FONT_SIZE_SMALL}
                method={()=>this.props.navigation.navigate('Login')}
                width={150}
            />
            <CustomButton
                icon="send"
                mode="contained"
                text="Submit"
                fontSize={Font.FONT_SIZE_SMALL}
                method={()=>this.signup()}
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