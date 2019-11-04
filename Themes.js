import * as React from "react";
import { DefaultTheme } from "react-native-paper";
import Constants from "./Constants";

export default Themes = {
  ButtonTheme: {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      primary: Constants.darkgreen,
      accent: "white",
      background: Constants.beige,
      surface: Constants.lightgreen,
      text: "black",
      disabled: "grey",
      placeholder: "rgba(50,50,50,0.5)"
    }
  },
  InputBoxTheme: {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      primary: Constants.darkgreen,
      accent: "white",
      background: "white",
      surface: Constants.lightgreen,
      text: "black",
      disabled: Constants.darkgreen,
      placeholder: "rgba(100,50,50,0.5)"
    }
  },
  CardTheme: {
    ...DefaultTheme,
    dark: false,
    roundness: 4,
    colors: {
      primary: Constants.darkgreen,
      accent: 'white',
      background: 'white',
      surface: 'white',
      text: 'black',
      disabled: Constants.darkgreen,
      placeholder: "rgba(100,50,50,0.5)"
    }
  }
};
