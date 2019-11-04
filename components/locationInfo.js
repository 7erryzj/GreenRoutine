import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, ScrollView } from "react-native";
import propTypes from "prop-types";
import Styles from "../Styles";
import Themes from "../Themes";

const LocationInfo = props => (
    <Card style={Styles.cardLayout} theme={Themes.CardTheme}>
      <Card.Title title={props.header} subtitle={props.description} />
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Content>
        <Paragraph></Paragraph>
        <Title> <Ionicons name="md-pin"  size={24}/> {props.locationName}</Title>
        <Paragraph style={{borderWidth:1, padding:1}}>{props.firstPara}</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>{props.secondPara}</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>{props.thirdPara}</Paragraph>
      </Card.Content>
      <View style={Styles.cardButton}>
        <Card.Actions style={{padding:10}}>
          <Button mode={"contained"} onPress={() => props.backfunc()}>Send Message</Button>
          <Button mode={"contained"} onPress={() => props.estimatefunc()}>Get An Estimate</Button>
        </Card.Actions>
      </View>
    </Card>
);

LocationInfo.propTypes = {
  //Company Name
  header: propTypes.string,
  //Description of Company (TBD)
  description: propTypes.string,
  //Perhaps some relevant photo
  picture: propTypes.uri,
  //Name of location
  locationName: propTypes.string,
  //Opening Hours
  firstPara: propTypes.string,
  //Accepted Recyclables
  secondPara: propTypes.string,
  //Comments etc
  thirdPara: propTypes.string,
  //to go back to map
  backfunc: propTypes.func,
  //to redirect to estimate page
  estimatefunc: propTypes.func
};

export default LocationInfo;