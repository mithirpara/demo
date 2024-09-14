import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmail,
  setIsCheckbox,
  setIsHidePassword,
  setIsLoading,
  setPassword,
} from "../../Redux/reducer/LoginReducer";
import { LoginAPI } from "../../Redux/services/LoginService";
import EmailIcon from "../../assets/image/svg/emailIcon.svg";
import LockIcon from "../../assets/image/svg/lockIcon.svg";
import VisibilityIcon from "../../assets/image/svg/visibilityIcon.svg";
import VisibilityOffIcon from "../../assets/image/svg/visibility_off_Icon.svg";
import CheckBox from "../../component/CheckBox";
import CommanButton from "../../component/CommanButton";
import CommanLoader from "../../component/CommanLoader";
import SnackBarCommon from "../../component/SnackBarCommon";
import TextCommonExtraBold from "../../component/TextCommonExtraBold";
import TextCommonSemiBold from "../../component/TextCommonSemiBold";
import TextInputView from "../../component/TextInputView";
import { validateFormCheck } from "../../utils/constant";
import Color from "../../utils/theme/Color";


const Login = (props: any) => {
  const [value, setValue] = useState(50); 
  const dispatch = useDispatch();
  const loginState = useSelector((state: any) => state?.login);

  const onSignInClick = () => {
    if (loginState.email === "") {
      SnackBarCommon.displayMessage({
        message: "Enter email",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (validateFormCheck(loginState.email) === false) {
      SnackBarCommon.displayMessage({
        message: "Enter valid email",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (loginState.password === "") {
      SnackBarCommon.displayMessage({
        message: "Enter password",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (loginState.isCheckbox == false) {
      SnackBarCommon.displayMessage({
        message: "Please agree to Terms and Conditions",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else {
      let data: any = JSON.stringify({
        email: loginState.email.toLowerCase(),
        password: loginState.password,
      });
      onLoginApiCall(data);

      // props.navigation.navigate("HomeNavigation");
    }
  };

  const onLoginApiCall = (data: any) => {
    // dispatch(setIsLoading(true));
    // dispatch(LoginAPI(data));
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <TextCommonExtraBold
          text={"Envoyer"}
          textViewStyle={styles.screenTitle}
          onClickText={() => null}
          numberOfLines={1}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.AllTextInputView}>
            <TextInputView
              child1={
                <EmailIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Email"
              value={loginState.email}
              onChangeText={(text) => dispatch(setEmail(text))}
            />
    
            <TextInputView
              child1={
                <LockIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Password"
              value={loginState.password}
              onChangeText={(text) => dispatch(setPassword(text))}
              secureTextEntry={loginState.isHidePassword}
              child2={
                <TouchableOpacity
                  onPress={() =>
                    dispatch(setIsHidePassword(!loginState.isHidePassword))
                  }
                >
                  {loginState.isHidePassword ? (
                    <VisibilityIcon
                      height={20}
                      width={20}
                      fill={Color.colorDarkGrey}
                    />
                  ) : (
                    <VisibilityOffIcon
                      height={20}
                      width={20}
                      fill={Color.colorDarkGrey}
                    />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
          <View style={styles.CommonView}>
            <View style={styles.CheckboxView}>
              <CheckBox
                isCheckbox={loginState.isCheckbox}
                onPress={() => dispatch(setIsCheckbox(!loginState.isCheckbox))}
              />
              <TouchableOpacity
                onPress={() => props.navigation.navigate("TermsAndConditions")}
              >
                <TextCommonSemiBold
                  text={"Terms and Conditions"}
                  textViewStyle={{ color: Color.colorBlack, marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <TextCommonSemiBold
                text={"Forgot Password?"}
                textViewStyle={{ color: Color.colorBlack }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <CommanButton text="Sign In" onPress={() => onSignInClick()} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.SignInTextView}>
        <TextCommonSemiBold
          text={"New to Envoyer ?"}
          textViewStyle={styles.semiBoldBlackText15}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        >
          <TextCommonSemiBold
            text={" Sign Up"}
            textViewStyle={styles.semiBoldGreenText15}
          />
        </TouchableOpacity>
      </View>
      
      <CommanLoader visible={loginState.isLoading} />
     
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  FacebookBtn: {
    width: "85%",
    paddingVertical: 4,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: Color.blueColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  BorderLine: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: Color.color_grey,
  },
  SigninView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
    paddingHorizontal: 20,
  },
  CheckboxView: {
    flexDirection: "row",
    alignItems: "center",
  },
  CommonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  semiBoldGreenText15: {
    color: Color.colorGreen,
    fontSize: 15,
  },
  semiBoldBlackText15: {
    color: Color.colorBlack,
    fontSize: 15,
  },
  SignInTextView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  AllTextInputView: {
    flexDirection: "column",
    gap: 30,
    marginBottom: 10,
  },
  screenTitle: {
    color: Color.colorGreen,
    fontSize: 30,
    marginVertical: 30,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  slider: {
    width: 300,  // Slider width
    height: 40,  // Slider height
  },
  text: {
    fontSize: 18,
    marginBottom: 10,  // Adds some space between text and slider
  },
});
