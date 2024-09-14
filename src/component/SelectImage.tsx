import React, { useState } from "react";
import {
  Image,
  Modal,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { activeOpacity } from "../utils/constant";
import Color from "../utils/theme/Color";
import { FONTS_Family, FONTS_SIZE } from "../utils/theme/Font";
import CommanButton from "./CommanButton";
import TextCommonBold from "./TextCommonBold";
import TextCommonSemiBold from "./TextCommonSemiBold";

interface SelectImageProps {
  confirmImage: (data: any) => void;
  isSelectProfilePic: boolean;
  userImage: string;
}

const SelectImage = (props: SelectImageProps) => {
  const [isCameraDialogVisible, setIsCameraDialogVisible] = useState(false);

  const hasCameraPermission = async () => {
    if (Platform.OS === "ios") {
      toggleModal();
    }

    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]).then((result) => {
        if (
          result["android.permission.CAMERA"] &&
          result["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted"
        ) {
        }
      });
      return true;
    }
    return false;
  };

  const toggleModal = () => {
    setIsCameraDialogVisible(!isCameraDialogVisible);
  };

  const getImgPermission = async () => {
    const hasLocationPermission = await hasCameraPermission();
    if (!hasLocationPermission) {
      return;
    } else {
      toggleModal();
    }
  };

  const selectPhotoTapped = () => {
    var options = {
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.5,
      mediaType: "photo",
    };

    ImagePicker.openPicker(options)
      .then((data: any) => {
        toggleModal();
        props.confirmImage(data);
      })
      .catch((err) => {
        // alert(err);
      });
  };

  const cameraClick = () => {
    var options = {
      width: 500,
      height: 500,
      cropping: true,
      includeBase64: true,
      compressImageQuality: 0.5,
      mediaType: "photo",
    };

    ImagePicker.openCamera(options)
      .then((data: any) => {
        toggleModal();
        props.confirmImage(data);
      })
      .catch((err) => {
        // alert(err);
        console.log(err);
      });
  };

  return (
    <>
      {props.isSelectProfilePic ? (
        <View style={styles.profileView}>
          <Image
            source={
              props.userImage != "" && props.userImage != undefined
                ? { uri: props.userImage }
                : require("../assets/image/png/user_pro.png")
            }
            style={styles.userImage}
            resizeMode={"cover"}
          />

          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={() => {
              getImgPermission();
            }}
            style={styles.cameraIcon}
          >
            <Image
              source={require("../assets/image/png/camera.png")}
              style={{ width: 18, height: 18, tintColor: Color.colorWhite }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ paddingBottom: 15 }}>
          <CommanButton
            text={"Select Image"}
            btnStyle={styles.imageBtnStyle}
            btnTextStyle={styles.imageBtnText}
            onPress={() => getImgPermission()}
          />
        </View>
      )}

      <Modal
        visible={isCameraDialogVisible}
        animationType="slide"
        transparent={true}
        animated={true}
      >
        <TouchableOpacity
          activeOpacity={activeOpacity}
          style={styles.modalView}
          onPress={() => toggleModal()}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalBgView}>
              <TextCommonBold
                text={"Select Image"}
                textViewStyle={styles.modalTitle_selected}
              />

              <View style={styles.modalDivider} />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => cameraClick()}
              >
                <TextCommonSemiBold
                  text={"Take Photo"}
                  textViewStyle={styles.modelCamera}
                />
              </TouchableOpacity>
              <View style={styles.modalDivider} />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => selectPhotoTapped()}
              >
                <TextCommonSemiBold
                  text={"Choose From Library"}
                  textViewStyle={styles.modelCamera}
                />
              </TouchableOpacity>
              {/* <View style={styles.modalDivider} /> */}
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => toggleModal()}
                style={styles.cancleBtn}
              >
                <TextCommonBold
                  text={"Cancel"}
                  textViewStyle={styles.modalCancel}
                />
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

export default SelectImage;

const styles = StyleSheet.create({
  imageBtnText: {
    color: Color.colorGreen,
    fontSize: 18,
    textAlign: "center",
  },
  imageBtnStyle: {
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorGreen,
    borderWidth: 0.8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  cancleBtn: {
    alignSelf: "center",
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorRed,
    borderWidth: 0.8,
    marginBottom: 5,
  },

  modalCancel: {
    padding: wp(3),
    fontSize: FONTS_SIZE.txt_16,
    color: Color.colorRed,
    textAlign: "center",
  },
  modalView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000060",
  },

  modalBgView: {
    backgroundColor: Color.colorWhite,
    width: "85%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
  },

  modalTitle_selected: {
    color: Color.colorBlack,
    fontSize: FONTS_SIZE.txt_17,
    textAlign: "center",
    padding: wp(4),
  },
  modalTitle: {
    fontFamily: FONTS_Family.FontRegular,
    color: Color.colorBlack,
    fontSize: FONTS_SIZE.txt_14,
    textAlign: "center",
    padding: wp(6),
  },

  modelCamera: {
    color: Color.colorBlack,
    fontSize: FONTS_SIZE.txt_16,
    textAlign: "center",
    backgroundColor: Color.white_txt,
    padding: wp(5),
  },

  modalDivider: {
    borderBottomWidth: 0.8,
    borderColor: Color.color_grey,
  },

  userImage: {
    width: 117,
    height: 117,
    borderRadius: 117 / 2,
  },
  profileView: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    alignSelf: "center",
    borderColor: Color.colorPrimary,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 120 / 2,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 2,
    right: 2,
    height: 28,
    width: 28,
    borderRadius: 28 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorGreen,
  },
});
