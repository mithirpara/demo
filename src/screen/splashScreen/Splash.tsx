import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TextCommonExtraBold from "../../component/TextCommonExtraBold";
import Color from "../../utils/theme/Color";

const Splash = (props: any) => {
  useEffect(() => {
    onGetData();
  }, []);

  const onGetData = async () => {
    const token = await AsyncStorage.getItem("token");

    setTimeout(() => {
      if (token != "" && token != null) {
        //props.navigation.replace("HomeNavigation");
      } else {
        props.navigation.replace("AuthNavigation");
        // props.navigation.replace("HomeNavigation");
      }
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.content}>
      <TextCommonExtraBold
        text={"Envoyer"}
        textViewStyle={{ color: Color.colorGreen, fontSize: 30 }}
        onClickText={() => null}
        numberOfLines={1}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
  },
});
