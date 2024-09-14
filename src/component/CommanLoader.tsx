import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import Color from "../utils/theme/Color";

const CommanLoader = (props: any) => {
  return (
    <Modal
      transparent={true}
      //   onRequestClose={props.onRequestClose}
      visible={props.visible}
      animated={true}
      animationType="none"
    >
      <View style={styles.container}>
        <View
          style={{
            padding: 15,
            borderRadius: 8,
            backgroundColor: Color.colorWhite,
          }}
        >
          <ActivityIndicator color={Color.colorGreen} size={"small"} />
        </View>
      </View>
    </Modal>
  );
};

export default CommanLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000020",
  },
});
