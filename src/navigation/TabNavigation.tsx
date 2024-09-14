// import React from "react";
// import { View, Platform, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Color from "../utils/theme/Color";
// import Home from "../screen/bottomTabScreens/Home";
// import SettingIcon from "../assets/image/svg/settingIcon.svg";
// import HomeIcon from "../assets/image/svg/homeIcon.svg";
// import ContactIcon from "../assets/image/svg/contactIcon.svg";
// import BroadcastIcon from "../assets/image/svg/broadcastsIcon.svg";
// import TemplateIcon from "../assets/image/svg/templatesIcon.svg";
// import TextCommonExtraBold from "../component/TextCommonExtraBold";
// import Contacts from "../screen/bottomTabScreens/Contacts";
// import Broadcast from "../screen/bottomTabScreens/Broadcast";
// import Templates from "../screen/bottomTabScreens/Templates";
// import Profile from "../screen/settingsScreen/profileScreens/Profile";
// import Settings from "../screen/settingsScreen/Settings";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    // <Tab.Navigator
    //   initialRouteName="Home"
    //   tabBarOptions={{
    //     labelStyle: {
    //       position: "absolute",
    //       top: 0,
    //       bottom: 0,
    //       left: 0,
    //       right: 0,
    //       textAlignVertical: "center",
    //     },
    //   }}
    //   screenOptions={{
    //     tabBarActiveTintColor: Color.colorPrimary,
    //     tabBarInactiveTintColor: Color.background_grey,
    //     headerShown: false,
    //     tabBarItemStyle: {
    //       ...Platform.select({
    //         ios: {
    //           height: 60,
    //         },
    //         android: {
    //           height: 60,
    //         },
    //       }),
    //       justifyContent: "center",
    //       alignItems: "center",
    //     },
    //     tabBarStyle: {
    //       ...Platform.select({
    //         ios: {
    //           height: 60,
    //         },
    //         android: {
    //           height: 60,
    //         },
    //       }),
    //       // backgroundColor: Color.colorBlack,
    //       backgroundColor: Color.colorWhite,
    //       borderTopWidth: 0.6,
    //       borderColor: Color.color_grey,
    //     },
    //   }}
    // >
    //   <Tab.Screen
    //     name="Home"
    //     component={Home}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <HomeIcon
    //             fill={focused ? Color.colorGreen : Color.colorDarkGrey}
    //             height={25}
    //             width={25}
    //           />
    //           <TextCommonExtraBold
    //             text={"Home"}
    //             textViewStyle={{
    //               color: focused ? Color.colorGreen : Color.colorDarkGrey,
    //               fontSize: 11,
    //               fontWeight: "500",
    //             }}
    //           />
    //         </View>
    //       ),
    //     }}
    //   />

    //   <Tab.Screen
    //     name="Contacts"
    //     component={Contacts}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <ContactIcon
    //             fill={focused ? Color.colorGreen : Color.colorDarkGrey}
    //             height={25}
    //             width={25}
    //           />
    //           <TextCommonExtraBold
    //             text={"Contacts"}
    //             textViewStyle={{
    //               color: focused ? Color.colorGreen : Color.colorDarkGrey,
    //               fontSize: 11,
    //               fontWeight: "500",
    //             }}
    //           />
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Broadcast"
    //     component={Broadcast}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <BroadcastIcon
    //             fill={focused ? Color.colorGreen : Color.colorDarkGrey}
    //             height={25}
    //             width={25}
    //           />
    //           <TextCommonExtraBold
    //             text={"Broadcast"}
    //             textViewStyle={{
    //               color: focused ? Color.colorGreen : Color.colorDarkGrey,
    //               fontSize: 11,
    //               fontWeight: "500",
    //             }}
    //           />
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Templates"
    //     component={Templates}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <TemplateIcon
    //             fill={focused ? Color.colorGreen : Color.colorDarkGrey}
    //             height={25}
    //             width={25}
    //           />
    //           <TextCommonExtraBold
    //             text={"Templates"}
    //             textViewStyle={{
    //               color: focused ? Color.colorGreen : Color.colorDarkGrey,
    //               fontSize: 11,
    //               fontWeight: "500",
    //             }}
    //           />
    //         </View>
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Settings"
    //     component={Settings}
    //     options={{
    //       tabBarLabel: "",
    //       tabBarIcon: ({ color, size, focused }) => (
    //         <View style={{ justifyContent: "center", alignItems: "center" }}>
    //           <SettingIcon
    //             fill={focused ? Color.colorGreen : Color.colorDarkGrey}
    //             height={25}
    //             width={25}
    //           />
    //           <TextCommonExtraBold
    //             text={"Setting"}
    //             textViewStyle={{
    //               color: focused ? Color.colorGreen : Color.colorDarkGrey,
    //               fontSize: 11,
    //               fontWeight: "500",
    //             }}
    //           />
    //         </View>
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default TabNavigation;
