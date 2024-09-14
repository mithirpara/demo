import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import { FONTS_Family } from "../utils/theme/Font";

interface textCommonregularProps {
  onClickText: () => void;
  textViewStyle: TextStyle;
  text: any;
  numberOfLines: number;
}

const TextCommonregular = (props: textCommonregularProps) => {
  return (
    <>
      <Text
        onPress={props.onClickText}
        allowFontScaling={false}
        style={[props.textViewStyle, { fontFamily: FONTS_Family.FontRegular }]}
        numberOfLines={props.numberOfLines}
      >
        {props.text}
      </Text>
    </>
  );
};

export default TextCommonregular;

const styles = StyleSheet.create({
  container: {},
});
