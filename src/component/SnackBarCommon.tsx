import { showMessage } from "react-native-flash-message";
import Color from "../utils/theme/Color";

class SnackBarCommon {
  displayMessage = (payload: {
    message: string;
    icon: string;
    bgColor: string;
  }) => {
    setTimeout(() => {
      showMessage({
        message: payload.message,
        icon: payload.icon,
        backgroundColor: payload.bgColor,
        color: Color.colorBlack,
      });
    }, 200);
  };
}

export default new SnackBarCommon();
