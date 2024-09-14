import React from "react";
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Color from "../utils/theme/Color";
import TextCommonBold from "./TextCommonBold";
import TextCommonSemiBold from "./TextCommonSemiBold";

const CommanModel = (props: any) => {
  interface buttonViewProps {
    onRequestClose: () => void;
    onPressRightButton: () => void;
    onPressLeftButton: () => void;
    visible: boolean;
    rightButtonText: any;
    leftButtonText: any;
    modelTitle: any;
    description: any;
  }

  return (
    <Modal
      transparent={true}
      onRequestClose={props.onRequestClose}
      visible={props.visible}
      animated={true}
      animationType="slide"
    >
      <TouchableOpacity style={styles.container} onPress={props.onRequestClose}>
        <TouchableWithoutFeedback>
          <View style={styles.detailContant}>
            <TextCommonBold
              text={props.modelTitle}
              textViewStyle={styles.modalTitle}
            />
            <TextCommonSemiBold
              text={props.description}
              textViewStyle={styles.modalDes}
            />
            <View>
              <View style={styles.btnView}>
                <TouchableOpacity
                  style={styles.leftBtn}
                  onPress={props.onPressLeftButton}
                >
                  <TextCommonBold
                    text={props.leftButtonText}
                    textViewStyle={[styles.btnText]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Rightbtn}
                  onPress={props.onPressRightButton}
                >
                  <TextCommonBold
                    text={props.rightButtonText}
                    textViewStyle={styles.btnText}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default CommanModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000060",
  },
  detailContant: {
    backgroundColor: Color.colorWhite,
    width: "85%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    color: Color.colorBlack,
    fontSize: 22,
    textAlign: "center",
  },
  modalDes: {
    color: Color.colorBlack,
    fontSize: 18,
    textAlign: "center",
    marginVertical: 10,
  },
  btnText: {
    color: Color.colorWhite,
    fontSize: 16,
    textAlign: "center",
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
  },
  Rightbtn: {
    backgroundColor: Color.colorGreen,
    height: 40,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  leftBtn: {
    height: 40,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorRed,
    // borderWidth: 1,
    // borderColor: Color.colorGreen,
  },
});
