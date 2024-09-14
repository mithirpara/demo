import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Color from "../utils/theme/Color";
import TextCommonBold from "./TextCommonBold";

const CommanButton = (props: any) => {
  return (
    <TouchableOpacity
      style={props.btnStyle ?? styles.btnStyle}
      onPress={props.onPress}
    >
      {props.child && props.child}
      <TextCommonBold
        text={props.text}
        textViewStyle={props.btnTextStyle ?? styles.btnTextStyle}
      />
    </TouchableOpacity>
  );
};

export default CommanButton;

const styles = StyleSheet.create({
  btnTextStyle: {
    color: Color.colorWhite,
    fontSize: 18,
    textAlign: "center",
  },
  btnStyle: {
    backgroundColor: Color.colorGreen,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    // flex: 1,
  },
});
