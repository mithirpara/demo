import axios from 'axios';
import { API_INTERNET_CONNECTION_CAPTION_EN, BASE_URL} from '../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InternetPermission from '../component/InternetPermission';

const _REQUEST2SERVER = async (
  url: string,
  params: any,
  method: string,
  Content_Type = 'application/json',
) => {

  const token = await AsyncStorage.getItem("token");
  var config: any;
  if (token != undefined && token != null ) {
    let data_body = {
      data: params,
    };
    config = {
      method: method,
      url:  BASE_URL + url,

      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
        'Content-Type': Content_Type,
        // Authorization: Token,
      },
      ...(params != null && data_body),
    };
  } else {
    let data_body = {
      data: params,
    };
    config = {
      method: method,
      url:  BASE_URL + url,
      headers: {
        Accept: 'application/json',
        // Authorization: Token,
      },
      ...(params != null && data_body),
    };
  }
  var isInternetGranted = await InternetPermission.checkInternetPermissions();
  console.log('params => ', JSON.stringify(config));

  return await new Promise(function (resolve, reject) {
    if (isInternetGranted == true) {
      axios(config)
        .then((data) => {
          // console.log('data--->', data.data.data);

          if (data.data.data != null || data.data.data != "")
            resolve(data.data);
          else reject(data.data);
        })
        .catch((error) => {
          console.log("error 1 -> ", error.toString());
          reject(error);
          // error?.response?.data?.message != null &&
          // error?.response?.data?.message != undefined &&
          // error?.response?.data?.message != ""
          //   ? reject(error?.response?.data?.message)
          //   : reject(error);

          // if (error.response.status === 400) {
          //   SnackBarCommon.displayMessage({
          //     message: error?.response?.data?.message,
          //     bgColor: Color.errBgColor,
          //     icon: "circle",
          //   });
          // } else {
          //   SnackBarCommon.displayMessage({
          //     message: error?.response?.data?.message,
          //     bgColor: Color.errBgColor,
          //     icon: "circle",
          //   });
          // }
        });
    } else {
      reject(API_INTERNET_CONNECTION_CAPTION_EN);
    }
  });
};

// Login API
export const onLoginAPICall = (params: any) => {
  return _REQUEST2SERVER(`auth/signin/`, params, 'post', 'application/json');
};

    // Sign  up API
export const onSigmUpAPICall = (params: any) => {
return _REQUEST2SERVER(`auth/signup/`, params, "post", "application/json");
};

//Forgot Password API
// export const onForgotPasswordAPICall = (params: any) => {
//   return _REQUEST2SERVER(
//     `auth/send-reset-password-email/`,
//     params,
//     'post',
//     'application/json',
//   );
// };

//  News API


const APIWebCall = {
  onLoginAPICall,
  onSigmUpAPICall,
  //onForgotPasswordAPICall,
};

export default APIWebCall;
