import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RNModal from "react-native-modal";

type ModalProps = {
  isVisible: boolean;
  children: React.ReactNode;
  animationInTiming?: number;
  animationOutTiming?: number;
  backdropTransitionInTiming?: number;
  backdropTransitionOutTiming?: number;
};

export const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Container: typeof ModalContainer;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({
  isVisible = false,
  children,
  animationInTiming = 300,
  animationOutTiming = 300,
  backdropTransitionInTiming = 300,
  backdropTransitionOutTiming = 300,
  ...props
}) => {
  return (
    <RNModal
    isVisible={isVisible}
    animationIn="fadeIn"
    animationOut="fadeOut"
    animationInTiming={animationInTiming}
    animationOutTiming={animationOutTiming}
    backdropTransitionInTiming={backdropTransitionInTiming}
    backdropTransitionOutTiming={backdropTransitionOutTiming}
    backdropOpacity={0.2}
    {...props}
    >
      {children}
    </RNModal>
  );
};

const ModalContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader: React.FC<{ title: string }> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <View style={styles.footer}>{children}</View>
);
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ffffff",
      borderStyle: "solid",
      marginHorizontal:40
    },
    header: {
      alignItems: "center",
      justifyContent: "center",
      marginTop:10
    },
    text: {
      textAlign: "center",
      fontSize: 20,
      color:'#6d6d6d',
      fontWeight:'bold',
      fontFamily:'helvetica',
    },
    body: {
      justifyContent: "center",
      paddingHorizontal: 25,
      minHeight: 50,
    },
    footer: {
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      flexDirection: "row",
     paddingHorizontal:60,
    },
  });
  

  Modal.Header = ModalHeader;
  Modal.Container = ModalContainer;
  Modal.Body = ModalBody;
  Modal.Footer = ModalFooter;