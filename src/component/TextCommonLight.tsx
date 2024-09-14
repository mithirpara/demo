import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import { FONTS_Family } from "../utils/theme/Font";

interface componentNameProps {
  onClickText: () => void;
  textViewStyle: TextStyle;
  text: any;
  numberOfLines: number;
}

const TextCommonLight = (props: componentNameProps) => {
  return (
    <>
      <Text
        onPress={props.onClickText}
        allowFontScaling={false}
        style={[props.textViewStyle, { fontFamily: FONTS_Family.FontLight }]}
        numberOfLines={props.numberOfLines}
      >
        {props.text}
      </Text>
    </>
  );
};

export default TextCommonLight;

const styles = StyleSheet.create({
  container: {},
});
