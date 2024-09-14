import NetInfo from "@react-native-community/netinfo";
import { API_INTERNET_CONNECTION_CAPTION_EN } from "../utils/constant";
import SnackBarCommon from "./SnackBarCommon";
import Color from "../utils/theme/Color";

export async function checkInternetPermissions() {
  const isInternetGranted = await NetInfo.fetch().then((state) => {
    return state.isConnected;
  });
  return isInternetGranted;
  //   if (isInternetGranted === true) {
  //     return isInternetGranted;
  //   } else {
  //     SnackBarCommon.displayMessage({
  //       message: API_INTERNET_CONNECTION_CAPTION_EN,
  //       bgColor: Color.errBgColor,
  //       icon: "circle",
  //     });
  //   }
}
export default { checkInternetPermissions };
