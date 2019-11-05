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
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import Constants from '../Constants';
import CustomButton from "../components/customButton";
import Font from "../Constants";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast, {DURATION} from 'react-native-easy-toast';
import HeaderComponent from './HeaderComponent';

console.disableYellowBox = true;


export default class FaqScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
     componentDidMount() {
      
    }
    render() {
        return (
        <ScrollView>
            <HeaderComponent {...this.props} />
            <View style={{paddingLeft:20, paddingBottom:30}}>
                <Text style={{color:Constants.darkgreen, fontSize: Constants.FONT_SIZE_MEDIUM}}>
                Who are you guys?
                </Text>
                <Text style={{paddingTop:10}}>A:</Text>
                <Text> 
                    We are a group of students working towards a greener society by making recycling more accessible and convenient through application.
                </Text>
            </View>
            <View style={{paddingLeft:20,paddingBottom:30}}>
                <Text style={{color:Constants.darkgreen, fontSize: Constants.FONT_SIZE_MEDIUM}}>
                    How do I check what are the acceptable recyclables?
                </Text>
                <Text style={{paddingTop:10}}>A:</Text>
                <Text> 
                    Cash-for-Trash is an incentive programme by Public Waste Collectors, where residents may bring their recyclables to the Cash-for-Trash stations and cash is given in exchange
                </Text>
            </View>
            <View style={{paddingLeft:20,paddingBottom:30}}>
                <Text style={{color:Constants.darkgreen, fontSize: Constants.FONT_SIZE_MEDIUM}}>
                How do I know what are the accepted recyclables?
                </Text>
                <Text style={{paddingTop:10}}>A:</Text>
                <Text>
                Every site location will have different recyclables accepted. Hence, to check for the accepted recyclables, you will be required to select a site location first and view the accepted recyclables.
                </Text>
            </View>
            <View style={{paddingLeft:20,paddingBottom:30}}>
                <Text style={{color:Constants.darkgreen, fontSize: Constants.FONT_SIZE_MEDIUM}}>
                What are the rates of the recyclables?
                </Text>
                <Text style={{paddingTop:10}}>A:</Text>
                <Text>
                Every site location will have different rates for different recyclables.Hence, to check for the rates, you will be required to select a site location first and view the rates.
                </Text>
            </View>
        </ScrollView>
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