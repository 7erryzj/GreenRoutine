import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, ScrollView } from "react-native";
import propTypes from "prop-types";
import Styles from "../Styles";
import Themes from "../Themes";

const imageArray = [
  'https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=524&q=80',
  'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1462396240927-52058a6a84ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=354&q=80',
  'https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1554435493-93422e8220c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80',
  'https://images.unsplash.com/photo-1481253127861-534498168948?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80',
  'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1489367753387-4a80734cbc3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
  'https://images.unsplash.com/photo-1487603097198-fe76cd44579d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1486174975375-bd1c9e108596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1484242780561-6aff8688c36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1166&q=80',
  'https://images.unsplash.com/photo-1469002372271-3406b43e1f27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1547321627-2479fe834b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80'];

function shuffleArray() {
  let array = imageArray;
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array[0];
}


const LocationInfo = props => (
    <Card style={Styles.cardLayout} theme={Themes.CardTheme}>
      <Card.Cover source={{ uri: shuffleArray() }} />
      <Card.Content style={{borderWidth:2, padding:10, borderColor:'gray'}}>
        <Paragraph></Paragraph>
        <Title> <Ionicons name="md-pin"  size={20}/> {props.locationName}</Title>
        <Paragraph>{props.thirdPara}</Paragraph>
        <Paragraph>{props.firstPara}</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph><Ionicons name="md-leaf"  size={20}/> Available Recyclables:</Paragraph>
        <Paragraph>{props.secondPara}</Paragraph>
        <Paragraph><Ionicons name="md-call"  size={20}/>{props.phonePara}</Paragraph>
      </Card.Content>
      <View style={Styles.cardButton}>
        <Card.Actions style={{padding:10, margin:10}}>
          <View style={{  flexDirection:'row' }}>
          <View style={{paddingHorizontal: 10}}>
          <Button mode={"contained"} onPress={() => props.backfunc()}>Send Message</Button>
          </View>
          <View style={{paddingHorizontal: 10}}>
          <Button mode={"contained"} onPress={() => props.estimatefunc()}>Get An Estimate</Button>
          </View>
          </View>
        </Card.Actions>
      </View>
    </Card>
);

LocationInfo.propTypes = {
  //Perhaps some relevant photo
  //Name of location
  locationName: propTypes.string,
  //Opening Hours
  firstPara: propTypes.string,
  //Accepted Recyclables
  secondPara: propTypes.string,
  //Comments etc
  thirdPara: propTypes.string,
  phonePara: propTypes.string,
  //to go back to map
  backfunc: propTypes.func,
  //to redirect to estimate page
  estimatefunc: propTypes.func
};

export default LocationInfo;