import { useResponsiveDimensions } from "@/hooks/useResponsiveDimensions";
import React, { useState } from "react";
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
      flex: 1,
      fontSize: dimensions.width * 0.04,
      color: "#333",
    },
    placeholder: {
      flexDirection: "row",
      alignItems: "center",
      position: "absolute",
      left: dimensions.width * 0.03,
    },
    placeholderText: {
      fontSize: dimensions.width * 0.04,
      color: "#999",
    },
    eyeIcon: {
      padding: dimensions.width * 0.02,
    },
  });

  const PlaceholderComponent: React.FC = () => (
    <View style={styles.placeholder}>
      <AppImage source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.placeholderText}>{placeholder}</Text>
    </View>
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={[styles.container, containerStyle]}>
        <RNTextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
          placeholder={placeholder}
          placeholderTextColor="transparent"
          {...props}
        />
        {!value && <PlaceholderComponent />}
        {isPassword && (
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIcon}>
            <Icon
              name={showPassword ? "visibility" : "visibility-off"}
              size={dimensions.width * 0.04}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResponsiveTextInput;
