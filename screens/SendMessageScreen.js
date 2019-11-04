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
import CustomInput from '../components/inputBox';
import Font from "../Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';


import { ThemeProvider } from 'react-native-elements';
console.disableYellowBox = true;



export default class SendMessageScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            content:'',
            uid : global.UID,
            sid : ''
        };
    }
     componentDidMount() {
        const { navigation } = this.props;
        this.setState({
            sid : navigation.getParam('SITE_ID')
        })
    }

    validate = () =>{
        //if statement here
        this.sendDB();
        this.props.navigation.pop();

    }

    async sendDB(){
        const data = {
            title : this.state.title,
            content: this.state.content,
            uid: this.state.uid,
            sid : this.state.sid
        }
        await fetch(Constants.IP_ADDRESS+'/newMessage', {
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
        return (
        <View style={{ alignItems: "center", paddingTop: 125}}>
            <Text>
                Send Question
            </Text>
            <View style={{ paddingVertical: 10 }}>
                <TextInput
                    theme={Themes.InputBoxTheme}
                    style={{width:300, height:100, padding:10}}
                    label='Title'
                    value={this.state.title}
                    onChangeText={text => this.setState({ title:text })}
                />
            </View>
            <View style={{ paddingVertical: 10 }}>
                <TextInput
                    theme={Themes.InputBoxTheme}
                    style={{width:300, height:200, padding:10}}
                    label='Content'
                    multiline={true}
                    value={this.state.content}
                    onChangeText={text => this.setState({ content:text })}
                />
            </View>
            <View>
                <CustomButton
                    icon="send"
                    mode="contained"
                    text="Submit"
                    fontSize={Font.FONT_SIZE_SMALL}
                    method={()=>this.validate()}
                />
            </View>
        </View>
        );
    }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: 'red',
    alignContent: "center"
  }
  });