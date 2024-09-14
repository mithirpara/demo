import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { activeOpacity } from "../utils/constant";
import Color from "../utils/theme/Color";
import TextCommonBold from "./TextCommonBold";

interface GradientButtonProps {
  activeOpacity: number;
  onPress: () => void;
  btnText: any;
  textViewStyle: TextStyle;
  btnStyle: ViewStyle;
  gradientColor: any;
  child: any;
}

const GradientButton = (props: GradientButtonProps) => {
  return (
    <LinearGradient
      colors={props.gradientColor ?? [Color.start_color, Color.end_color]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ borderRadius: 60 }}
    >
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={props.onPress}
        style={props.btnStyle ?? styles.btnView}
      >
        {props.child && props.child}
        <TextCommonBold
          text={props.btnText}
          textViewStyle={props.textViewStyle ?? styles.textStyle}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  btnView: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textStyle: {
    color: Color.colorWhite,
    fontSize: 16,
  },
});
