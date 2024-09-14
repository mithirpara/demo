import { Dimensions } from "react-native";

// export const BASE_URL = "https://n1np9tk51owk.share.zrok.io/";
export const BASE_URL = "https://saubhagyam503.pythonanywhere.com/";
export const facebool_meta_base_url = "https://graph.facebook.com/v20.0/";
export const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const urlPattern = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
    "(\\#[-a-z\\d_]*)?$",
  "i" // fragment locator
);

export async function isImageChack(url: any) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return contentType && contentType.startsWith("image");
  } catch (error) {
    console.error("Error checking image URL:", error);
    return false;
  }
}

export async function isVideoChack(url: any) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("content-type");
    return contentType && contentType.startsWith("video");
  } catch (error) {
    console.error("Error checking Video URL:", error);
    return false;
  }
}

export async function isDocumentCheck(url: any) {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType: any = response.headers.get("content-type");
    const documentTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      // Add other document MIME types as needed
    ];

    return documentTypes.includes(contentType);
  } catch (error) {
    console.error("Error checking Document URL:", error);
    return false;
  }
}

export const DateDisplayFormote = "DD/MM/YYYY";
let { width, height } = Dimensions.get("window");

export const validateFormCheck = (text: any) => {
  if (regEmail.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const activeOpacity = 0.9;

// export const boxCount = 4;
// export const boxWidth = width / boxCount;
// export const API_version = "v20.0";

export function handleInfinityScroll(event: any, paddingBottom: any) {
  let mHeight = event.nativeEvent.layoutMeasurement.height;
  let cSize = event.nativeEvent.contentSize.height - paddingBottom;
  let Y = event.nativeEvent.contentOffset.y;
  if (Math.ceil(mHeight + Y) >= cSize) return true;
  return false;
}

export const API_INTERNET_CONNECTION_CAPTION_EN =
  "Sorry, No Internet connectivity detected. Please reconnect and try again";

export const StripePublishableKey =
  "pk_test_vsltnsvTfY0zaOzlwBNaV3Vg00LJzi7UtL";

export const Privacy_Policy_URL =
  "https://chatbot.saubhagyam.net/privacy-policy";
export const Terms_And_Conditions_URL =
  "https://chatbot.saubhagyam.net/terms-conditions";

const constant = {
  validateFormCheck,
  activeOpacity,
  BASE_URL,
  DateDisplayFormote,
  // boxCount,
  // boxWidth,
  // API_version,
  facebool_meta_base_url,
  handleInfinityScroll,
  urlPattern,
  isImageChack,
  isVideoChack,
  isDocumentCheck,
  API_INTERNET_CONNECTION_CAPTION_EN,
  StripePublishableKey,
  Privacy_Policy_URL,
  Terms_And_Conditions_URL,
};

export default constant;
