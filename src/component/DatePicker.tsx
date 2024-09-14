import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Color from "../utils/theme/Color";
import { FONTS_SIZE } from "../utils/theme/Font";
import TextCommonregular from "./TextCommonregular";

interface datePickerProps {
  value: any;
  open: boolean;
  onChange: (event: any, value: any) => void;
  cancelClick: () => void;
  confirmClick: () => void;
  maximumDate: any;
}
const DatePicker = (props: datePickerProps) => {
  return (
    <>
      {props.open && (
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flex: 1,
            width: "110%",
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: Color.colorLightGray,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
        >
          {Platform.OS === "ios" ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 10,
                marginTop: 5,
              }}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Color.colorBlack,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 3,
                  paddingBottom: 3,
                  borderRadius: 5,
                }}
              >
                <TextCommonregular
                  text={"Cancel"}
                  onClickText={props.cancelClick}
                  textViewStyle={styles.textStyle}
                />
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Color.colorBlack,
                  paddingLeft: 8,
                  paddingRight: 8,
                  paddingTop: 3,
                  paddingBottom: 3,
                  borderRadius: 5,
                }}
              >
                <TextCommonregular
                  text={"Confirm"}
                  onClickText={props.confirmClick}
                  textViewStyle={styles.textStyle}
                />
              </View>
            </View>
          ) : null}
          <DateTimePicker
            testID="dateTimePicker"
            value={props.value}
            mode={"date"}
            is24Hour={false}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={(event: any, value: any) => {
              props.onChange(event, value), props.cancelClick();
            }}
            maximumDate={props.maximumDate}
          />
        </View>
      )}
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  btnView: {
    backgroundColor: Color.colorBlack,
    paddingVertical: 13,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: Color.colorBlack,
    fontSize: FONTS_SIZE.txt_13,
    fontWeight: "500",
  },
});
