import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { Button } from "../Button/Button";
import { Colors, FontSize } from "@/constants/Colors";
import { Modal } from "../Modal/Modal";
import { lightTheme } from "@/styles/theme";

interface ErrorLoginProps {
  isModalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

const ErrorLogin: React.FC<ErrorLoginProps> = ({
  isModalVisible,
  setModalVisible,
  title,
}) => {
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Modal isVisible={isModalVisible}>
      <Modal.Container>
        <Modal.Header title="Thông báo" />
        <Modal.Body>
          <Text style={{ textAlign: "center", color: "#6d6d6d", fontSize: 18 }}>
            {title}
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              backgroundColor: lightTheme.colorTextLogin,
              // borderColor: Colors.colorApp.color13,
              borderWidth: 1.5,
              borderRadius: 5,
              marginVertical: 5,
            }}
          >
            <Text
              style={{
                fontSize: FontSize.textBigLetters,
                fontWeight: "bold",
                paddingVertical: 10,
                paddingHorizontal: 50,
                color: lightTheme.colors.white,
              }}
            >
              Đóng
            </Text>
          </TouchableOpacity>
        </Modal.Footer>
      </Modal.Container>
    </Modal>
  );
};

export default ErrorLogin;
