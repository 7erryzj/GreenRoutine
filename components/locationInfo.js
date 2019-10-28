import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Styles from "../Styles";
import Themes from "../Themes";

const LocationInfo = props => (
    <Card style={Styles.cardLayout} theme={Themes.CardTheme}>
      <Card.Title title={props.header} subtitle={props.description} />
      <Card.Cover source={{ uri: props.picture }} />
      <Card.Content>
        <Title>{props.locationName}</Title>
        <Paragraph>{props.firstPara}</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>{props.secondPara}</Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>{props.thirdPara}</Paragraph>
      </Card.Content>
      <View style={Styles.cardButton}>
        <Card.Actions>
          <Button mode={"contained"} onPress={() => props.backfunc()}>Send Message</Button>
          <Button mode={"contained"} onPress={() => props.estimatefunc()}>Get An Estimate</Button>
        </Card.Actions>
      </View>
    </Card>
);

LocationInfo.PropTypes = {
  //Company Name
  header: PropTypes.string,
  //Description of Company (TBD)
  description: PropTypes.string,
  //Perhaps some relevant photo
  picture: PropTypes.uri,
  //Name of location
  locationName: PropTypes.string,
  //Opening Hours
  firstPara: PropTypes.string,
  //Accepted Recyclables
  secondPara: PropTypes.string,
  //Comments etc
  thirdPara: PropTypes.string,
  //to go back to map
  backfunc: PropTypes.func,
  //to redirect to estimate page
  estimatefunc: PropTypes.func
};

export default LocationInfo;