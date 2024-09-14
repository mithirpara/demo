import React from "react";
import { TouchableOpacity } from "react-native";
import CheckIcon from "../assets/image/svg/check_icon.svg";
import UnCheckIcon from "../assets/image/svg/uncheck_icon.svg";
import Color from "../utils/theme/Color";

const CheckBox = (props: any) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.9}
      onPress={props.onPress}
      style={{ padding: 2 }}
    >
      {props.isCheckbox ? (
        <CheckIcon
          width={25}
          height={25}
          fill={props.CheckIconColor ?? Color.colorDarkGrey}
        />
      ) : (
        <UnCheckIcon width={25} height={25} fill={Color.colorDarkGrey} />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
