import React, { Component } from 'react';
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    ScrollView
} from 'react-native';
import HeaderComponent from './HeaderComponent';
import Panel from '../components/CustomPanel'
import Message from '../models/Message'
import Constants from '../Constants'
import { Button } from "react-native-paper";

import { ThemeProvider } from 'react-native-elements';
console.disableYellowBox = true;

const theme = {
    Button: {
      raised: true,
    },
  };


export default class MailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        };

    }
      
     componentDidMount() {
         this.fetch()
    }

    async sendDB(){
        const data = {
            title : this.state.title
        }
        await fetch(Constants.IP_ADDRESS+'/deleteMessage', {
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

    async fetch(){ 
        await fetch(Constants.IP_ADDRESS+'/message/'+global.UID)
        .then(response => response.json())
        .then(message => this.setState({
            data : message
        }))
      }
    
    render() {

        //let asd = Message.getUserInbox(1);
        //console.log(asd);
        //console.log(Message.getUserInbox(1));
        return (
        <ScrollView style={styles.container}>
            <HeaderComponent {...this.props} />

            {this.state.data.map((message)=>{
                const id = message.id;
                const title = message.title;
                const content = message.content;
                const reply = message.reply;
                const sid = message.sid;
                return(
                    <Panel title={title}>
                        <Text style={{paddingBottom: 10}}>{content}</Text>
                        <View style={styles.lineBreak}></View>
                        <Text style={{paddingTop: 10,fontWeight: 'bold', color: Constants.beige}}>
                            Reply : {reply}
                        </Text>
                        
                    </Panel>
                )

            })}
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex            : 1,
        backgroundColor : '#f4f7f9',
      },
      lineBreak:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }
});