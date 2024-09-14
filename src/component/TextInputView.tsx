import React from "react";
import {
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Color from "../utils/theme/Color";
import { FONTS_Family, FONTS_SIZE } from "../utils/theme/Font";
import TextCommonSemiBold from "./TextCommonSemiBold";

interface TextInputProps {
  containerStyle: ViewStyle;
  style: TextStyle;
  placeholder: string;
  placeholderTextColor: String;
  onChangeText: (text: string) => void;
  value: string;
  secureTextEntry: boolean;
  keyboardType: any;
  editable: boolean;
  desheight: string;
  child1: any;
  child2: any;
  onPressIn: () => void;
  placeholderColopr: string;
  errText: any;
  textDisabled: boolean;
}

const TextInputView = (props: TextInputProps) => {
  return (
    <>
      <View style={props.containerStyle ?? styles.textView}>
        {props.child1 && <>{props.child1}</>}
        <TextInput
          style={
            props.style ?? [
              styles.textInput,
              {
                color: props.textDisabled
                  ? Color.colorDarkGrey
                  : Color.colorBlack,
              },
            ]
          }
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColopr ?? Color.color_grey}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType ?? "default"}
          returnKeyType={"done"}
          editable={props.editable ?? true}
          multiline={props.desheight === "des"}
          onPressIn={props.onPressIn}
        />
        {props.child2 && <>{props.child2}</>}
      </View>
      {props?.errText && (
        <TextCommonSemiBold
          text={props?.errText}
          textViewStyle={styles.errText}
        />
      )}
    </>
  );
};

export default TextInputView;

const styles = StyleSheet.create({
  errText: {
    color: Color.colorRed,
    fontSize: 12,
    paddingLeft: 2,
  },
  textView: {
    alignItems: "center",
    flexDirection: "row",
    // justifyContent: "space-between",
    // backgroundColor: '',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: Color.color_grey,
    borderWidth: 0.5,
    backgroundColor: Color.colorWhite,
    gap: 10,
  },
  textInput: {
    margin: 0,
    padding: 0,
    fontSize: FONTS_SIZE.txt_14,
    fontWeight: "400",
    flex: 1,
    fontFamily: FONTS_Family.FontMedium,
  },
});
