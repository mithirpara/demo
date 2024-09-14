import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import CardView from "react-native-cardview";
import BackIcon from "../assets/image/svg/left.svg";
import SearchIcon from "../assets/image/svg/searchIcon.svg";
import Color from "../utils/theme/Color";
import TextInputView from "./TextInputView";

interface SearchBoxProps {
  onChangeText: (text: any) => void;
  onPressBack: (text: any) => void;
  value: any;
  cornerRadius: number;
  isShowBackButton: boolean;
  cardViewStyle: ViewStyle;
}

const SearchBox = (props: SearchBoxProps) => {
  const SearchIconTag = () => {
    return (
      <View style={styles.searchIconBox}>
        <SearchIcon fill={Color.colorDarkGrey} height={25} width={25} />
      </View>
    );
  };

  const BackIconTag = () => {
    return (
      <TouchableOpacity
        style={styles.searchIconBox}
        onPress={props.onPressBack}
      >
        <BackIcon fill={Color.colorDarkGrey} height={16} width={16} />
      </TouchableOpacity>
    );
  };
  return (
    <CardView
      cardElevation={2}
      cardMaxElevation={2}
      cornerRadius={props.cornerRadius ?? 8}
      style={props?.cardViewStyle}
    >
      <TextInputView
        containerStyle={styles.container}
        child1={props.isShowBackButton ? <BackIconTag /> : <SearchIconTag />}
        placeholder="Search..."
        placeholderTextColor={Color.color_grey}
        onChangeText={(text) => props.onChangeText(text)}
        value={props.value}
      />
    </CardView>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchIconBox: {
    backgroundColor: "#fff",
    height: 34,
    width: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    padding: 4,
    borderRadius: 22,
    gap: 8,
    backgroundColor: Color.colorWhite,
  },
});
