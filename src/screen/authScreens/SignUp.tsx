import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { CountryPicker } from "react-native-country-codes-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  setConfirmPassword,
  setContactNo,
  setCountryCode,
  setEmail,
  setFullName,
  setIsHideConfirmPassword,
  setIsHidePassword,
  setIsLoading,
  setIsOpenCountryPicker,
  setPassword,
} from "../../Redux/reducer/SignUpReducer";
import { SignUpAPI } from "../../Redux/services/SignUpService";
import EmailIcon from "../../assets/image/svg/emailIcon.svg";
import LockIcon from "../../assets/image/svg/lockIcon.svg";
import PersonIcon from "../../assets/image/svg/person.svg";
import VisibilityIcon from "../../assets/image/svg/visibilityIcon.svg";
import VisibilityOffIcon from "../../assets/image/svg/visibility_off_Icon.svg";
import CommanButton from "../../component/CommanButton";
import CommanLoader from "../../component/CommanLoader";
import SnackBarCommon from "../../component/SnackBarCommon";
import TextCommonExtraBold from "../../component/TextCommonExtraBold";
import TextCommonMedium from "../../component/TextCommonMedium";
import TextCommonSemiBold from "../../component/TextCommonSemiBold";
import TextInputView from "../../component/TextInputView";
import { validateFormCheck } from "../../utils/constant";
import Color from "../../utils/theme/Color";

const SignUp = (props: any) => {
  const dispatch = useDispatch();
  const signUpState = useSelector((state: any) => state?.signUp);

  const onSignUpClick = () => {
    if (signUpState.fullName == "") {
      SnackBarCommon.displayMessage({
        message: "Enter Full name",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (signUpState.email === "") {
      SnackBarCommon.displayMessage({
        message: "Enter email",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (validateFormCheck(signUpState.email) === false) {
      SnackBarCommon.displayMessage({
        message: "Enter valid email",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (signUpState.contactNo === "") {
      SnackBarCommon.displayMessage({
        message: "Enter contact number",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (signUpState.password === "") {
      SnackBarCommon.displayMessage({
        message: "Enter password",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else if (signUpState.password != signUpState.confirmPassword) {
      SnackBarCommon.displayMessage({
        message: "Please enter correct password",
        bgColor: Color.errBgColor,
        icon: "circle",
      });
    } else {
      let data: any = JSON.stringify({
        full_name: signUpState.fullName,
        email: signUpState.email.toLowerCase(),
        mobile: signUpState?.countryCode + signUpState.contactNo,
        password: signUpState.password,
        confirm_password: signUpState.confirmPassword,
      });
      onSignUpAPICall(data);
    }
  };

  const onSignUpAPICall = (data: any) => {
    dispatch(setIsLoading(true));
    dispatch(SignUpAPI(data));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
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
                <PersonIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Full Name"
              value={signUpState.fullName}
              onChangeText={(text) => dispatch(setFullName(text))}
            />
            <TextInputView
              child1={
                <EmailIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Email"
              value={signUpState.email}
              onChangeText={(text) => dispatch(setEmail(text))}
            />

            <View style={{ flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                onPress={() => dispatch(setIsOpenCountryPicker(true))}
                style={styles.countryCodeBtn}
              >
                <TextCommonMedium
                  text={signUpState?.countryCode}
                  textViewStyle={{ color: "#000", fontSize: 14 }}
                />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <TextInputView
                  placeholder="9526XXXXXX"
                  value={signUpState.contactNo}
                  onChangeText={(text) => dispatch(setContactNo(text))}
                  keyboardType={"numeric"}
                />
              </View>
            </View>

            <TextInputView
              child1={
                <LockIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Password"
              value={signUpState.password}
              onChangeText={(text) => dispatch(setPassword(text))}
              secureTextEntry={signUpState.isHidePassword}
              child2={
                <TouchableOpacity
                  onPress={() =>
                    dispatch(setIsHidePassword(!signUpState.isHidePassword))
                  }
                >
                  {signUpState.isHidePassword ? (
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

            <TextInputView
              child1={
                <LockIcon height={20} width={20} fill={Color.colorDarkGrey} />
              }
              placeholder="Enter Confirm Password"
              value={signUpState.confirmPassword}
              onChangeText={(text) => dispatch(setConfirmPassword(text))}
              secureTextEntry={signUpState.isHideConfirmPassword}
              child2={
                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      setIsHideConfirmPassword(
                        !signUpState.isHideConfirmPassword
                      )
                    )
                  }
                >
                  {signUpState.isHideConfirmPassword ? (
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
          <CommanButton text="Sign Up" onPress={() => onSignUpClick()} />
          <View style={styles.SignInTextView}>
            <TextCommonSemiBold
              text={"Already have an account?"}
              textViewStyle={styles.semiBoldBlackText15}
            />
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <TextCommonSemiBold
                text={" Sign In"}
                textViewStyle={styles.semiBoldGreenText15}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <CountryPicker
        show={signUpState?.isOpenCountryPicker}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          dispatch(setCountryCode(item.dial_code));
          dispatch(setIsOpenCountryPicker(false));
        }}
        searchMessage={"Please Select a Country"}
        style={{
          modal: {
            height: 600,
          },
        }}
        onBackdropPress={() => dispatch(setIsOpenCountryPicker(false))}
      />
      <CommanLoader visible={signUpState.isLoading} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  countryCodeBtn: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: Color.color_grey,
    borderWidth: 0.5,
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 70,
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
    marginTop: 30,
    marginBottom: 20,
    alignSelf: "center",
  },
  AllTextInputView: {
    flexDirection: "column",
    gap: 30,
    marginBottom: 40,
    marginTop: 20,
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
});
