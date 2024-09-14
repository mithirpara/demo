import React from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import RightIcon from "../assets/image/svg/rightNewIcon.svg";
import Color from "../utils/theme/Color";
import ImageView from "./ImageView";
import TextCommonBold from "./TextCommonBold";
import TextCommonSemiBold from "./TextCommonSemiBold";
import TextCommonregular from "./TextCommonregular";

function CustomSidebarMenu(props: any) {
  return (
    <View style={styles.container_main}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => props.navigation.navigate("SwitchProfile")}
        style={styles.profileView}
      >
        <View style={styles.profileImg}>
          <ImageView
            style={styles.profileLogo}
            source={require("../assets/image/png/man.png")}
            resizeMode={"cover"}
          />
        </View>

        <View style={styles.info}>
          <TextCommonSemiBold
            text={"Guest"}
            textViewStyle={styles.boldText}
            numberOfLines={1}
          />
          <TextCommonregular
            text={"Switch Profile"}
            textViewStyle={styles.regularText}
            numberOfLines={1}
          />
        </View>
        <RightIcon fill={Color.white_txt} height={18} width={18} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        // onPress={() => props.navigation.navigate('EditProfilePage')}>
        style={styles.btnSubscribe}
      >
        <LinearGradient
          colors={[Color.start_color, Color.center_color, Color.end_color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.btn_gradiant}
        >
          <TextCommonBold
            text={"Subscribe"}
            textViewStyle={styles.boldText}
            numberOfLines={1}
          />
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.menu_item_parent}></View>
    </View>
  );
}

export default CustomSidebarMenu;

const styles = StyleSheet.create({
  container_main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#181d25",
  },
  btn_gradiant: {
    height: 40,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },
  menu_item_parent: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingBottom: 20,
    backgroundColor: "#1f252e",
    borderRadius: 20,
  },
  menuItemText: {
    fontSize: 15,
    color: Color.colorWhite,
    marginStart: 15,
    paddingVertical: 6,
  },
  profileView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 15,
  },
  btnSubscribe: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 15,
  },
  profileImg: {
    borderWidth: 0.6,
    borderColor: Color.start_color,
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: '#fff',
  },
  profileLogo: {
    height: 68,
    width: 68,
    borderRadius: 68 / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    marginLeft: 10,
    marginRight: 15,
    flex: 1,
  },
  boldText: {
    color: Color.white_txt,
    fontSize: 16,
    fontWeight: "500",
  },
  regularText: {
    color: Color.white_txt,
    fontSize: 14,
    fontWeight: "500",
  },
});
