import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Color from "../utils/theme/Color";
import TextCommonregular from "./TextCommonregular";
import { activeOpacity } from "../utils/constant";

interface RadioButtonProps {
  isCheck: boolean;
  conditionText: any;
  contentStyle: ViewStyle;
  conditionTextStyle: TextStyle;
  radioBtnStyle: ViewStyle;
  activeOpacity: number;
  onPress: () => void;
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <View style={props.contentStyle ?? styles.content}>
      <TouchableOpacity
        style={props.radioBtnStyle ?? [styles.radioBtn]}
        activeOpacity={activeOpacity}
        onPress={props.onPress}
      >
        <View
          style={{
            backgroundColor: props.isCheck
              ? Color.colorGreen
              : Color.transparent,
            flex: 1,
            borderRadius: 50,
          }}
        ></View>
      </TouchableOpacity>
      <TextCommonregular
        text={props.conditionText}
        textViewStyle={props.conditionTextStyle ?? styles.conditionText}
      />
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  conditionText: {
    color: Color.colorBlack,
    fontSize: 15,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  radioBtn: {
    height: 24,
    width: 24,
    borderWidth: 1.5,
    borderColor: Color.colorGreen,
    borderRadius: 12,
    // backgroundColor: Color.colorGreen,
    padding: 3,
  },
});
