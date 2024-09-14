import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../utils/theme/Color";
import TextCommonSemiBold from "./TextCommonSemiBold";

const ListEmptyComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <TextCommonSemiBold
        text={props.ListEmptyText}
        textViewStyle={{
          color: Color.colorBlack,
          fontSize: 14,
          textAlign: "center",
        }}
      />
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
});
