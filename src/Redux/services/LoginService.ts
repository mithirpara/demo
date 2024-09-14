import { setIsLoading } from "../reducer/LoginReducer";
import { onLoginAPICall } from "../../utils/useAPiCall";
import * as NavigationService from "react-navigation-helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SnackBarCommon from "../../component/SnackBarCommon";
import Color from "../../utils/theme/Color";

export const LoginAPI = (data: any) => async (dispatch: any) => {
  try {
    const response: any = await onLoginAPICall(data);
    dispatch(setIsLoading(false));
    if (response?.status === true) {
      await AsyncStorage.setItem("token", response?.data?.token?.access);
      await AsyncStorage.setItem(
        "userLoginData",
        JSON.stringify(response?.data)
      );
      SnackBarCommon.displayMessage({
        message: response?.message,
        bgColor: Color.errBgColor,
        icon: "success",
      });
      NavigationService.replace("HomeNavigation");
    }
  } catch (error) {
    dispatch(setIsLoading(false));
    SnackBarCommon.displayMessage({
      message: String(error),
      bgColor: Color.errBgColor,
      icon: "circle",
    });
  }
};
