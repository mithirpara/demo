import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BackIcon from "../assets/image/svg/backIcon.svg";
import Color from "../utils/theme/Color";
import TextCommonExtraBold from "./TextCommonExtraBold";

const ToolBarBackButton = (props: any) => {
  return (
    <View style={styles.container}>
      {props.isHideBackButton == true ? null : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={props.onPressBackButton}
          style={{ position: "absolute", zIndex: 1 }}
        >
          <BackIcon fill={"#000000"} height={22} width={22} />
        </TouchableOpacity>
      )}

      <TextCommonExtraBold
        text={props.text}
        textViewStyle={styles.btnTextStyle}
      />
    </View>
  );
};

export default ToolBarBackButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  btnTextStyle: {
    color: Color.colorBlack,
    fontSize: 18,
    textAlign: "center",
  },
  // buttonStyle: { borderRadius: 20, height: 30, width: 30, marginTop: 20 },
});
