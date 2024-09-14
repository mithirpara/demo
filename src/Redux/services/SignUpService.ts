import { setIsLoading } from "../reducer/SignUpReducer";
import * as NavigationService from "react-navigation-helpers";
import SnackBarCommon from "../../component/SnackBarCommon";
import Color from "../../utils/theme/Color";
import { onSigmUpAPICall } from "../../utils/useAPiCall";

export const SignUpAPI = (data: any) => async (dispatch: any) => {
  try {
    const response: any = await onSigmUpAPICall(data);
    if (response?.status === true) {
      dispatch(setIsLoading(false));
      SnackBarCommon.displayMessage({
        message: response?.message,
        bgColor: Color.errBgColor,
        icon: "success",
      });
      NavigationService.navigate("Login");
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
