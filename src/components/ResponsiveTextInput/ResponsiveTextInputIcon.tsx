import {useResponsiveDimensions} from "@/hooks/useResponsiveDimensions";
import React, {useState} from "react";
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
import {FontSize, hResponsive, wResponsive} from "@/constants/Colors";
import {convertNumber} from "@utils/tabUtils";

interface ResponsiveDimensions {
    width: number;
    height: number;
}

interface ResponsiveTextInputProps extends TextInputProps {
    placeholder?: string;
    icon?: string;
    containerStyle?: ViewStyle;
    username?: string;
    name?: string;
}

const ResponsiveTextInput: React.FC<ResponsiveTextInputProps> = ({
                                                                     placeholder,
                                                                     icon,
                                                                     username,
                                                                     name,
                                                                     secureTextEntry,
                                                                     containerStyle,
                                                                     ...props
                                                                 }) => {
    const dimensions: ResponsiveDimensions = useResponsiveDimensions();
    const [showPassword, setShowPassword] = useState(false);

    const styles = StyleSheet.create({
        container: {
            borderWidth: 1,
            borderColor: "#e1c21f",
            borderRadius: dimensions.width * 0.02,
            paddingHorizontal: dimensions.width * 0.03,
            marginVertical: dimensions.height * 0.01,
            paddingVertical: dimensions.width * 0.03,
            flexDirection: 'row',
            justifyContent: 'space-between'
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
        iconInput: {
            width: wResponsive(35),
            height: hResponsive(38),
            borderWidth: 2,
            borderColor: '#ddb428',
            borderRadius: 50
        }
    });

    const PlaceholderComponent: React.FC = () => (
        <View style={styles.placeholder}>
            {!!icon && <AppImage source={icon} style={styles.icon} resizeMode="contain"/>}
            <Text style={styles.placeholderText}>{placeholder}</Text>
        </View>
    );

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
        }}>
            <View style={[styles.container, containerStyle]}>
                <View>
                    <Text style={{fontSize: FontSize.textLowercase, fontWeight: 700}}>{name}</Text>
                    <Text>{convertNumber(username || "")}</Text>
                </View>
                <View>
                    <AppImage source="iconAppInput" style={styles.iconInput}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ResponsiveTextInput;
