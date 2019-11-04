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
import Animation from 'lottie-react-native';
import anim from '../icons/mail_anim.json';

console.disableYellowBox = true;


export default class MailScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            loading: false,
        };

    }

    UNSAFE_componentWillMount(){
      this.setState({
        loading: true
      });
      
    }

     componentDidMount() {
      this.fetch()
      this.animation.play();

      setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
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

        return (
          <View style={styles.container}>
        <ScrollView >
            <HeaderComponent {...this.props} />

            {this.state.data.map((message)=>{
                const id = message.id;
                const title = message.title;
                const content = message.content;
                const reply = message.reply;
                const sid = message.sid;
                const street_name = message.StreetName;
                return(
                    <Panel key={id} title={title}>
                        <Text>To: {street_name} Recycling Centre</Text>
                        <View style={styles.lineBreak}></View>
                        <Text style={{paddingBottom: 10,paddingTop:10}}>{content}</Text>
                        <View style={styles.lineBreak}></View>

                        
                        <Text style={{paddingTop: 10,fontWeight: 'bold'}}>
                            Reply : {reply}
                        </Text>
                        
                    </Panel>
                )

            })}
        </ScrollView>
        {this.state.loading &&
          <View style={styles.loading}>         
            <Animation
              ref={animation => {
                this.animation = animation;
              }}
              loop={true}
              source={anim}
            />
          </View>}
        </View>
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
});