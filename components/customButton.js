import React from "react";
import { Button, Provider as PaperProvider } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Styles from "../Styles";
import Themes from "../Themes";

export default customButton = props => (
  <PaperProvider theme={Themes.ButtonTheme}>
    <View>
      <Button
        style={{
          padding: 0,
          paddingHorizontal: 0,
          paddingVertical: 0,
          width: props.width
        }}
        mode={props.mode}
        icon={props.icon}
        onPress={() => props.method()}
      >
        <Text
          style={[
            Styles.submitInterior,
            [(Styles.submitInterior.color = props.color)],
            [(Styles.submitInterior.fontSize = props.fontSize)]
          ]}
        >
          {props.text}
        </Text>
      </Button>
    </View>
  </PaperProvider>
);

customButton.PropTypes = {
  //three kinds of mode: 'text', 'outlined', 'contained'
  //'text' (default) is least customizable, with a purely text based button.
  //'outlined' is a text button, but with an outline
  //'contained' is the most customizable, with default dark green background and black text
  mode: PropTypes.string,
  //change color of text, default is white
  color: PropTypes.string,
  //if we wish to apply an icon
  icon: PropTypes.string,
  //The text within the button
  text: PropTypes.string,
  //Font size using FONT_SIZE_SMALL, FONT_SIZE_MEDIUM, FONT_SIZE_LARGE
  //default is FONT_SIZE_SMALL
  fontSize: PropTypes.string,
  //stlyesheet for the interior of button
  interiorStyle: PropTypes.StyleSheet,
  //padding for button
  padding: PropTypes.string,
  //paddingHorizontal for button
  paddingHorizontal: PropTypes.string,
  //paddingVertical for button
  paddingVertical: PropTypes.string,
  //width of button, maxWidth is set as '100%'
  width: PropTypes.StyleSheet,
  method: PropTypes.func
};

const tester = StyleSheet.create({
  Tester: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  }
});
