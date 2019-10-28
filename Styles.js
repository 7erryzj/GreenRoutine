import { StyleSheet } from "react-native";
import Constants from "./Constants";
export default styles = StyleSheet.create({
  //in use at the moment for text customization
  submitInterior: {
    color: "white",
    fontSize: Constants.FONT_SIZE_MEDIUM
  },
  inputBox: {
    width: 1,
    height: 1
  },
  cardButton: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center"
  },
  cardLayout: {
    flex: 1
  },
  dropDownList: {
    marginHorizontal: "25%"
  }
});
