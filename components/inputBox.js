import React from "react";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Styles from "../Styles";
import Themes from "../Themes";
import propTypes from "prop-types";
import Constants from "../Constants";
import { Keyboard } from "react-native";

export default class inputBox extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
        <TextInput
          theme={Themes.InputBoxTheme}
          style={[
            Styles.inputBox,
            [(Styles.inputBox.width = this.props.width)],
            [(Styles.inputBox.height = this.props.height)]
          ]}
          clearButtonMode={"while-editing"}
          underlineColor={Constants.darkgreen}
          selectionColor={Constants.darkgreen}
          returnKeyType={"done"}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={() => this.props.method()}
        />
    );
  }
}
inputBox.propTypes = {
  //to enable multiline. Generally not used unless long input
  multiline: propTypes.bool,
  //true to turn on, false to turn off. Good to turn off for username field
  autoCorrect: propTypes.bool,
  //changes input to ***
  secureTextEntry: propTypes.bool,
  //The grayed out text in the box that disappears once user types
  placeholder: propTypes.string,
  //Choose between "flat" and "outlined"
  //"flat" is a more simplistic look
  mode: propTypes.string,
  //the "header" for the text box
  label: propTypes.string,
  //the value can be returned
  value: propTypes.string,
  //give a maximum length of input
  maxLength: propTypes.number,
  //specify the height of box
  height: propTypes.number,
  //specify width of box
  width: propTypes.number,
  //specifies whether to auto capitalize start of sentence
  autoCapitalize: propTypes.bool,
  //does the method
  method: propTypes.func
};