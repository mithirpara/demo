import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

import { FONTS_Family } from "../utils/theme/Font";

interface componentNameProps {
  onClickText: () => void;
  textViewStyle: TextStyle;
  text: any;
  numberOfLines: number;
}

const TextCommonExtraBold = (props: componentNameProps) => {
  return (
    <>
      <Text
        onPress={props.onClickText}
        allowFontScaling={false}
        style={[
          props.textViewStyle,
          { fontFamily: FONTS_Family.FontExtraBold },
        ]}
        numberOfLines={props.numberOfLines}
      >
        {props.text}
      </Text>
    </>
  );
};

export default TextCommonExtraBold;

const styles = StyleSheet.create({
  container: {},
});
