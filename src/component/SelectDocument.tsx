import React, { useCallback, useState } from "react";
import {
  Modal,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DocumentPicker from "react-native-document-picker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { activeOpacity } from "../utils/constant";
import Color from "../utils/theme/Color";
import { FONTS_Family, FONTS_SIZE } from "../utils/theme/Font";
import CommanButton from "./CommanButton";
import TextCommonBold from "./TextCommonBold";
import TextCommonSemiBold from "./TextCommonSemiBold";

interface SelectUserImageProps {
  confirmImage: (data: any) => void;
}

const SelectDocument = (props: SelectUserImageProps) => {
  const [isCameraDialogVisible, setIsCameraDialogVisible] = useState(false);
  const [fileResponse, setFileResponse] = useState([]);
  const [pdfName, setPdfName] = useState([]);
  const [pdfURI, setPdfURI] = useState([]);
  const [pdfType, setPdfType] = useState([]);

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

  const handleDocumentSelection = useCallback(async () => {
    try {
      const data = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log("reeeeeeeeeee--------", data);
      setIsCameraDialogVisible(false);
      props.confirmImage(data);
      //   setFileResponse(data);
      //   setPdfName(response[0].name);
      //   setPdfURI(response[0].uri);
      //   setPdfType(response[0].type);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <View style={{ paddingBottom: 15 }}>
        <CommanButton
          text={"Select Document"}
          btnStyle={styles.imageBtnStyle}
          btnTextStyle={styles.imageBtnText}
          onPress={() => getImgPermission()}
        />
      </View>

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
                text={"Select Document"}
                textViewStyle={styles.modalTitle_selected}
              />

              <View style={styles.modalDivider} />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handleDocumentSelection()}
              >
                <TextCommonSemiBold
                  text={"Select Pdf File"}
                  textViewStyle={styles.modelCamera}
                />
              </TouchableOpacity>
              {/* <View style={styles.modalDivider} /> */}
              {/* <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => selectPhotoTapped()}
              >
                <TextCommonSemiBold
                  text={"Choose From Library"}
                  textViewStyle={styles.modelCamera}
                />
              </TouchableOpacity> */}
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

export default SelectDocument;

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
});
