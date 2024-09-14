import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import { FONTS_Family } from "../utils/theme/Font";

interface textCommonMediumProps {
  onClickText: () => void;
  textViewStyle: TextStyle;
  text: any;
  numberOfLines: number;
}

const TextCommonMedium = (props: textCommonMediumProps) => {
  return (
    <>
      <Text
        onPress={props.onClickText}
        allowFontScaling={false}
        style={[props.textViewStyle, { fontFamily: FONTS_Family.FontMedium }]}
        numberOfLines={props.numberOfLines}
      >
        {props.text}
      </Text>
    </>
  );
};

export default TextCommonMedium;

const styles = StyleSheet.create({
  container: {},
});
