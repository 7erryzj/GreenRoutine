import React, { Component } from 'react';
import {
    Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard,
} from 'react-native';
import Constants from '../Constants';
//import Form from '../components/Form'


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
            <View style={styles.container}>
                <Text>Signup</Text>
                <TextInput style={styles.inputBox}
                placeholder="Username"
                placeholderTextColor="#989898"
                onChangeText={text => this.setState({ UserName:text })}
                />

                <TextInput style={styles.inputBox}
                placeholder="Password"
                placeholderTextColor="#989898"
                secureTextEntry={true}
                onChangeText={text => this.setState({ UserPassword:text })}
                />

                <TouchableOpacity style={styles.button} onPress={this.signup}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>  

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox : {
        height: 40, 
        width:300, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius:25,
        backgroundColor:'rgba(255,255,255,0.3)',
        marginVertical: 3,
    },
  
    button : {
        width:150, 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius:25,
        backgroundColor:'rgba(255,255,255,0.3)',
        marginVertical: 5,
        paddingVertical: 10,
        backgroundColor:'#123456',
    },
  
    buttonText : {
        fontWeight:'500',
        textAlign:'center',
        justifyContent: 'center',
        color:'#FFFFFF'
    },
  });


