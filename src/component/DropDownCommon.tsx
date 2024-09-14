import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
import Color from "../utils/theme/Color";
import { FONTS_Family, FONTS_SIZE } from "../utils/theme/Font";
import TextCommonBold from "./TextCommonBold";

function DropDownCommon(props: any) {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <View
      style={
        { width: "100%" }
        // isFrom != undefined && isFrom === 'Filter' ? {width: '48%'} : '100%'
      }
    >
      {props.title != "" && props.title != undefined ? (
        <TextCommonBold
          text={props.title}
          textViewStyle={{
            fontSize: FONTS_SIZE.txt_15,
            color: Color.white_txt,
            marginTop: 20,
            marginStart: 10,
            //  textAlign: 'center',
          }}
          onClickText={() => null}
          numberOfLines={0}
        />
      ) : null}

      {props.isMultiSelected === true ? (
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={props.data}
          maxHeight={props.maxHeight ?? 280}
          labelField="label"
          valueField="value"
          placeholder={props.placeHolderTxt}
          value={props.value}
          onChange={props.onValueChange}
          itemContainerStyle={{
            backgroundColor: Color.colorWhite,
          }}
          itemTextStyle={styles.itemTextStyle}
          selectedStyle={styles.selectedStyle}
          showsVerticalScrollIndicator={false}
          renderRightIcon={() => {
            return (
              <Image
                style={{
                  height: 20,
                  width: 20,
                  tintColor: Color.colorBlack,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={require("../assets/image/png/down-arrow_lang.png")}
                resizeMode={"contain"}
              />
            );
          }}
        />
      ) : (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={props.data}
          maxHeight={props.maxHeight ?? 400}
          labelField="label"
          valueField="value"
          placeholder={props.placeHolderTxt}
          value={props.value}
          search={props.search}
          searchPlaceholder={props.searchPlaceholder ?? "Search..."}
          onChange={props.onValueChange}
          itemContainerStyle={{
            backgroundColor: Color.colorWhite,
            // height: 42,
            // justifyContent: 'center',
          }}
          itemTextStyle={styles.itemTextStyle}
          showsVerticalScrollIndicator={false}
          renderRightIcon={() => {
            return (
              <Image
                style={{
                  height: 18,
                  width: 18,
                  tintColor: Color.colorBlack,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={require("../assets/image/png/down-arrow_lang.png")}
                resizeMode={"contain"}
              />
            );
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    // marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    borderColor: Color.color_grey,
    height: 50,
    borderWidth: 1,
  },
  placeholderStyle: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS_Family.FontMedium,
    color: Color.color_grey,
  },
  selectedTextStyle: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS_Family.FontMedium,
    color: Color.colorBlack,
    alignItems: "center",
    alignSelf: "center",
  },
  itemTextStyle: {
    fontSize: FONTS_SIZE.txt_14,
    fontFamily: FONTS_Family.FontMedium,
    color: Color.colorBlack,
  },
  selectedStyle: {
    borderRadius: 15,
  },
});

export default DropDownCommon;
