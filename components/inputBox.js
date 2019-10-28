import React from "react";
import { TextInput, Provider as PaperProvider } from "react-native-paper";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import Styles from "../Styles";
import Themes from "../Themes";
import PropTypes from "prop-types";
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
inputBox.PropTypes = {
  //to enable multiline. Generally not used unless long input
  multiline: PropTypes.bool,
  //true to turn on, false to turn off. Good to turn off for username field
  autoCorrect: PropTypes.bool,
  //changes input to ***
  secureTextEntry: PropTypes.bool,
  //The grayed out text in the box that disappears once user types
  placeholder: PropTypes.string,
  //Choose between "flat" and "outlined"
  //"flat" is a more simplistic look
  mode: PropTypes.string,
  //the "header" for the text box
  label: PropTypes.string,
  //the value can be returned
  value: PropTypes.string,
  //give a maximum length of input
  maxLength: PropTypes.number,
  //specify the height of box
  height: PropTypes.number,
  //specify width of box
  width: PropTypes.number,
  //specifies whether to auto capitalize start of sentence
  autoCapitalize: PropTypes.bool,
  //does the method
  method: PropTypes.func
};