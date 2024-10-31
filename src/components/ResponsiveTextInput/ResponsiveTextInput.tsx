import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import React, { useState, useRef } from "react";
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Text,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppImage from "../Images/ImgReq";

interface ResponsiveDimensions {
  width: number;
  height: number;
}

interface ResponsiveTextInputProps extends TextInputProps {
  placeholder: string;
  icon: string;
  containerStyle?: ViewStyle;
  isPassword?: boolean;
}

const ResponsiveTextInput: React.FC<ResponsiveTextInputProps> = ({
  placeholder,
  icon,
  value,
  onChangeText,
  secureTextEntry,
  containerStyle,
  isPassword = false,
  ...props
}) => {
  const dimensions: ResponsiveDimensions = useResponsiveDimensions();
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<RNTextInput>(null); // Thêm ref cho TextInput

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: dimensions.width * 0.02,
      paddingHorizontal: dimensions.width * 0.03,
      marginVertical: dimensions.height * 0.01,
      height: dimensions.height * 0.06,
    },
    icon: {
      marginRight: dimensions.width * 0.02,
      width: dimensions.width * 0.05,
    },
    input: {
      paddingLeft: 0,
      flex: 1,
      fontSize: dimensions.width * 0.04,
      color: "#333",
    },
    placeholderText: {
      fontSize: dimensions.width * 0.04,
      color: "#999",
      position: "absolute",
      left: dimensions.width * 0.095,
    },
    eyeIcon: {
      padding: dimensions.width * 0.02,
    },
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={[styles.container, containerStyle]}>
        <AppImage source={icon} style={styles.icon} resizeMode="contain" />
        <RNTextInput
          ref={inputRef} 
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          placeholder=""
          placeholderTextColor="transparent"
          selectionColor="#444848"
          {...props}
        />
        {!value && <Text style={styles.placeholderText}>{placeholder}</Text>}
        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={dimensions.width * 0.06}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResponsiveTextInput;
